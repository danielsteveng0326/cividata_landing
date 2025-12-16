# 🔄 **CONFIGURACIÓN ZAPIER PARA AUTOMATIZACIÓN**

## **📧 FLUJO DE AUTOMATIZACIÓN RECOMENDADO:**

### **1. FORMSPREE → ZAPIER → MÚLTIPLES ACCIONES**

```
Nuevo email en Formspree
       ↓
   Trigger Zapier
       ↓
   ┌─ Enviar a Google Sheets (backup)
   ├─ Crear lead en HubSpot/Pipedrive  
   ├─ Enviar WhatsApp al equipo
   ├─ Enviar email de agradecimiento
   └─ Crear task en Asana/Notion
```

### **2. CONFIGURACIÓN PASO A PASO:**

#### **ZAPIER ZAP #1: LEAD CAPTURE**
```yaml
Trigger: Formspree - New Submission
Actions:
  1. Google Sheets - Create Row
     - Sheet: "CiviData_Leads_2024"
     - Data: All form fields + timestamp
  
  2. HubSpot - Create Contact
     - Email: {email}
     - FirstName: {nombre}
     - Company: {entidad}
     - JobTitle: {cargo}
     - Phone: {telefono}
     - LeadSource: "Website Form"
     - Custom: Urgencia = {urgencia}
     - Custom: Interes = {interes}
```

#### **ZAPIER ZAP #2: INSTANT NOTIFICATIONS**
```yaml
Trigger: Formspree - New Submission
Filters: Urgencia = "Alta"
Actions:
  1. WhatsApp Business - Send Message
     - To: "+573001234567" (tu número)
     - Message: "🚨 LEAD URGENTE: {nombre} de {entidad} - {urgencia}"
  
  2. Email - Send Outbound Email
     - To: "ventas@cividata.co"
     - Subject: "🔥 Lead Caliente: {entidad}"
     - Body: "Contactar ASAP a {nombre} - {telefono}"
```

#### **ZAPIER ZAP #3: AUTO-RESPONDER**
```yaml
Trigger: Formspree - New Submission
Actions:
  1. Email - Send Email
     - To: {email}
     - From: "info@cividata.co"
     - Subject: "✅ Solicitud recibida - Te contactamos en 2 horas"
     - Body: Template personalizado con próximos pasos
  
  2. Calendar - Create Event
     - Title: "Follow up: {nombre} - {entidad}"
     - Date: +2 hours from submission
     - Attendees: "ventas@cividata.co"
```

## **📊 GOOGLE SHEETS BACKUP STRUCTURE:**

### **Columnas recomendadas:**
```
A: Timestamp
B: Email  
C: Nombre
D: Cargo
E: Entidad
F: Tipo Entidad
G: Teléfono
H: Interés Principal
I: Urgencia
J: Comentarios
K: Source (PAA/Contact Form)
L: User Agent
M: Status (Nuevo/Contactado/Demo/Cerrado)
N: Assigned To
O: Follow Up Date
P: Notes
```

## **📱 WHATSAPP BUSINESS API SETUP:**

### **Mensaje template para leads:**
```
🚨 *NUEVO LEAD CIVIDATA*

👤 *Contacto:* {nombre}
🏛️ *Entidad:* {entidad}
📧 *Email:* {email}
📱 *Teléfono:* {telefono}
⚡ *Urgencia:* {urgencia}
🎯 *Interés:* {interes}

📝 *Comentarios:*
{comentarios}

⏰ *Recibido:* {timestamp}
🌐 *Source:* {source}

👉 *Acción:* Contactar en próximas 2 horas
```

## **📧 EMAIL AUTO-RESPONDER TEMPLATE:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Solicitud Recibida - CiviData</title>
</head>
<body>
  <h2>¡Hola {nombre}!</h2>
  
  <p>Hemos recibido tu solicitud de demo personalizada para <strong>{entidad}</strong>.</p>
  
  <div style="background: #f0f9ff; padding: 20px; border-radius: 10px;">
    <h3>📋 Resumen de tu solicitud:</h3>
    <ul>
      <li><strong>Cargo:</strong> {cargo}</li>
      <li><strong>Interés principal:</strong> {interes}</li>
      <li><strong>Urgencia:</strong> {urgencia}</li>
    </ul>
  </div>
  
  <h3>📞 Próximos pasos:</h3>
  <ol>
    <li>Te contactaremos por teléfono en las próximas <strong>2 horas</strong></li>
    <li>Programaremos una demo personalizada (30 min)</li>
    <li>Te mostraremos cómo CiviData puede resolver tus retos específicos</li>
  </ol>
  
  <div style="background: #fef2f2; padding: 15px; border-radius: 8px;">
    <p><strong>🚨 ¿Es urgente?</strong></p>
    <p>Contáctanos directamente por WhatsApp: <a href="https://wa.me/573002701230">+57 300 270 1230</a></p>
  </div>
  
  <p>Gracias por considerar CiviData para transformar tu gestión pública.</p>
  
  <p>Saludos,<br>
  <strong>Equipo CiviData</strong></p>
</body>
</html>
```

## **🎯 MÉTRICAS A TRACKEAR:**

### **Dashboard diario:**
- Total leads por día
- Leads por urgencia (Alta/Media/Baja)  
- Leads por tipo entidad
- Leads por interés principal
- Tiempo promedio de respuesta
- Conversion rate (Lead → Demo → Cliente)

### **Alertas automáticas:**
- Más de 10 leads/día = Alert éxito
- Menos de 2 leads/día = Alert problema
- Lead con urgencia "Alta" = Notificación inmediata
- Lead de Gobernación/Grande = Escalate to CEO
```