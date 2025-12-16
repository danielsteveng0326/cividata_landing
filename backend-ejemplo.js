// Ejemplo de backend simple para capturar emails
// Puedes desplegarlo en Vercel, Netlify Functions, o Firebase

const express = require('express')
const cors = require('cors')
const { google } = require('googleapis')

const app = express()
app.use(cors())
app.use(express.json())

// Configurar Google Sheets como base de datos
const sheets = google.sheets('v4')
const SHEET_ID = 'TU_GOOGLE_SHEET_ID'
const auth = new google.auth.GoogleAuth({
  keyFile: 'credentials.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
})

// Endpoint para PAA waitlist
app.post('/api/paa-waitlist', async (req, res) => {
  try {
    const { email, tipo, fecha, urgencia, source } = req.body
    
    // Validar email institucional
    if (!email.endsWith('.gov.co') && !email.endsWith('.mil.co')) {
      return res.status(400).json({ 
        error: 'Solo correos institucionales (.gov.co o .mil.co)' 
      })
    }

    // Guardar en Google Sheets
    await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId: SHEET_ID,
      range: 'PAA_Emails!A:F',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[email, tipo, fecha, urgencia, source, new Date().toISOString()]]
      }
    })

    // Opcional: Enviar a Mailchimp también
    const mailchimpResponse = await fetch('https://us1.api.mailchimp.com/3.0/lists/LIST_ID/members', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer MAILCHIMP_API_KEY',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        tags: ['PAA_2026', 'Gobierno', urgencia],
        merge_fields: {
          FNAME: email.split('@')[0],
          LNAME: email.split('@')[1],
          URGENCIA: urgencia,
          SOURCE: source
        }
      })
    })

    res.json({ 
      success: true, 
      message: '¡Email registrado exitosamente!' 
    })

  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ 
      error: 'Error interno del servidor' 
    })
  }
})

// Endpoint para descargas de PAA
app.post('/api/paa-download', async (req, res) => {
  try {
    const { nit, entidad } = req.body
    
    // Aquí iría la lógica de IA para generar el PAA
    // Por ahora, simulamos
    
    // Registrar la descarga
    await sheets.spreadsheets.values.append({
      auth,
      spreadsheetId: SHEET_ID,
      range: 'PAA_Downloads!A:D',
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[nit, entidad, new Date().toISOString(), 'Descarga_PAA']]
      }
    })

    res.json({ 
      success: true,
      downloadUrl: 'https://ejemplo.com/paa-generado.xlsx',
      message: 'PAA generado exitosamente' 
    })

  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ 
      error: 'Error generando PAA' 
    })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`)
})