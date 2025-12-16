<template>
  <div class="glass-card max-w-2xl mx-auto">
    <div class="text-center mb-8">
      <h3 class="text-2xl font-bold text-white mb-4">
        🚀 Solicita Demo Personalizada
      </h3>
      <p class="text-white/70">
        Te contactaremos en menos de 2 horas para mostrarte cómo CiviData puede transformar tu entidad
      </p>
    </div>

    <form @submit.prevent="submitForm" class="space-y-6">
      <!-- Email -->
      <div>
        <label class="block text-white/80 text-sm font-medium mb-2">
          Correo Institucional *
        </label>
        <input
          v-model="formData.email"
          type="email"
          required
          class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          placeholder="tu.nombre@entidad.gov.co"
          :class="{ 'border-red-500': errors.email }"
        />
        <p v-if="errors.email" class="text-red-400 text-sm mt-2">{{ errors.email }}</p>
      </div>

      <!-- Nombre y Cargo -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block text-white/80 text-sm font-medium mb-2">
            Nombre Completo *
          </label>
          <input
            v-model="formData.nombre"
            type="text"
            required
            class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            placeholder="Juan Pérez"
          />
        </div>
        <div>
          <label class="block text-white/80 text-sm font-medium mb-2">
            Cargo *
          </label>
          <select
            v-model="formData.cargo"
            required
            class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          >
            <option value="">Selecciona tu cargo</option>
            <option value="Alcalde">Alcalde</option>
            <option value="Secretario">Secretario</option>
            <option value="Director">Director</option>
            <option value="Jefe de Compras">Jefe de Compras</option>
            <option value="Contratación">Área de Contratación</option>
            <option value="Sistemas">Área de Sistemas</option>
            <option value="Control Interno">Control Interno</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>

      <!-- Entidad y Tipo -->
      <div class="grid md:grid-cols-2 gap-4">
        <div>
          <label class="block text-white/80 text-sm font-medium mb-2">
            Entidad *
          </label>
          <input
            v-model="formData.entidad"
            type="text"
            required
            class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
            placeholder="Alcaldía de Bogotá"
          />
        </div>
        <div>
          <label class="block text-white/80 text-sm font-medium mb-2">
            Tipo de Entidad *
          </label>
          <select
            v-model="formData.tipoEntidad"
            required
            class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          >
            <option value="">Selecciona tipo</option>
            <option value="Alcaldía">Alcaldía</option>
            <option value="Gobernación">Gobernación</option>
            <option value="Hospital">Hospital/E.S.E.</option>
            <option value="Universidad">Universidad Pública</option>
            <option value="Instituto">Instituto Descentralizado</option>
            <option value="Empresa">Empresa de Servicios Públicos</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
      </div>

      <!-- Teléfono -->
      <div>
        <label class="block text-white/80 text-sm font-medium mb-2">
          Teléfono de Contacto *
        </label>
        <input
          v-model="formData.telefono"
          type="tel"
          required
          class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
          placeholder="+57 300 123 4567"
        />
      </div>

      <!-- Interés Principal -->
      <div>
        <label class="block text-white/80 text-sm font-medium mb-2">
          Principal Interés *
        </label>
        <select
          v-model="formData.interes"
          required
          class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
        >
          <option value="">¿Qué te interesa más?</option>
          <option value="PAA_2026">PAA 2026 Automático</option>
          <option value="SECOP_Analysis">Análisis de SECOP</option>
          <option value="Transparency">Cumplimiento Transparencia</option>
          <option value="Risk_Audit">Auditoría de Riesgos</option>
          <option value="Full_Platform">Plataforma Completa</option>
          <option value="Training">Capacitación Equipo</option>
        </select>
      </div>

      <!-- Urgencia -->
      <div>
        <label class="block text-white/80 text-sm font-medium mb-2">
          Nivel de Urgencia *
        </label>
        <div class="grid grid-cols-3 gap-3">
          <label class="flex items-center space-x-2 cursor-pointer">
            <input
              v-model="formData.urgencia"
              type="radio"
              value="Baja"
              class="text-accent focus:ring-accent"
            />
            <span class="text-white/70 text-sm">📅 Puedo esperar</span>
          </label>
          <label class="flex items-center space-x-2 cursor-pointer">
            <input
              v-model="formData.urgencia"
              type="radio"
              value="Media"
              class="text-accent focus:ring-accent"
            />
            <span class="text-white/70 text-sm">⚡ Necesito pronto</span>
          </label>
          <label class="flex items-center space-x-2 cursor-pointer">
            <input
              v-model="formData.urgencia"
              type="radio"
              value="Alta"
              class="text-accent focus:ring-accent"
            />
            <span class="text-white/70 text-sm">🚨 Es crítico</span>
          </label>
        </div>
      </div>

      <!-- Comentarios adicionales -->
      <div>
        <label class="block text-white/80 text-sm font-medium mb-2">
          Comentarios Adicionales
        </label>
        <textarea
          v-model="formData.comentarios"
          rows="3"
          class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
          placeholder="Cuéntanos sobre tus retos específicos en contratación pública..."
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="isSubmitting"
        class="w-full btn-primary bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-bold px-8 py-4 text-lg transition-all duration-300"
        :class="{ 'opacity-50 cursor-not-allowed': isSubmitting }"
      >
        <span v-if="!isSubmitting" class="flex items-center justify-center">
          🚀 SOLICITAR DEMO PERSONALIZADA
        </span>
        <span v-else class="flex items-center justify-center">
          <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Enviando solicitud...
        </span>
      </button>

      <!-- Success/Error Messages -->
      <div v-if="successMessage" class="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center">
        <p class="text-green-300 font-semibold">{{ successMessage }}</p>
      </div>
      
      <div v-if="errorMessage" class="bg-red-500/20 border border-red-500/50 rounded-lg p-4 text-center">
        <p class="text-red-300 font-semibold">{{ errorMessage }}</p>
      </div>
    </form>

    <!-- Contact Info Footer -->
    <div class="mt-8 pt-6 border-t border-white/10 text-center">
      <p class="text-white/60 text-sm mb-4">O contáctanos directamente:</p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
        <a href="mailto:info@cividata.co" class="text-accent hover:text-accent/80 transition-colors">
          📧 info@cividata.co
        </a>
        <a href="https://wa.me/573002701230" target="_blank" class="text-green-400 hover:text-green-300 transition-colors">
          📱 WhatsApp: +57 300 270 1230
        </a>
        <span class="text-white/40">⚡ Respuesta en menos de 2 horas</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const formData = reactive({
  email: '',
  nombre: '',
  cargo: '',
  entidad: '',
  tipoEntidad: '',
  telefono: '',
  interes: '',
  urgencia: '',
  comentarios: ''
})

const errors = reactive({
  email: ''
})

const validateEmail = (email) => {
  const institutionalDomains = ['.gov.co', '.mil.co', '.edu.co']
  const emailLower = email.toLowerCase()

  const isValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!isValidFormat) {
    return 'Por favor ingresa un correo electrónico válido'
  }

  const hasInstitutionalDomain = institutionalDomains.some(domain =>
    emailLower.endsWith(domain)
  )

  if (!hasInstitutionalDomain) {
    return 'Por favor usa un correo institucional (.gov.co, .mil.co o .edu.co)'
  }

  return null
}

const submitForm = async () => {
  // Reset messages
  successMessage.value = ''
  errorMessage.value = ''
  errors.email = ''

  // Validate email
  const emailError = validateEmail(formData.email)
  if (emailError) {
    errors.email = emailError
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch('https://formspree.io/f/mnnekakp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        nombre: formData.nombre,
        cargo: formData.cargo,
        entidad: formData.entidad,
        tipoEntidad: formData.tipoEntidad,
        telefono: formData.telefono,
        interes: formData.interes,
        urgencia: formData.urgencia,
        comentarios: formData.comentarios,
        tipo: 'Demo_Solicitud',
        fecha: new Date().toISOString(),
        source: 'Contact Form Main',
        // Additional tracking data
        userAgent: navigator.userAgent,
        timestamp: Date.now()
      })
    })

    if (response.ok) {
      successMessage.value = '¡Solicitud enviada exitosamente! Te contactaremos en menos de 2 horas.'
      
      // Reset form
      Object.keys(formData).forEach(key => {
        formData[key] = ''
      })
      
      // Track en Google Analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'demo_request', {
          event_category: 'Contact',
          event_label: 'Demo Request',
          value: 1,
          custom_parameter_urgencia: formData.urgencia,
          custom_parameter_interes: formData.interes
        })
      }
    } else {
      throw new Error('Error en el servidor')
    }

  } catch (error) {
    console.error('Error enviando formulario:', error)
    errorMessage.value = 'Hubo un error enviando tu solicitud. Por favor intenta nuevamente o contáctanos por WhatsApp.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
input:focus, select:focus, textarea:focus {
  outline: none;
}

.animate-spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>