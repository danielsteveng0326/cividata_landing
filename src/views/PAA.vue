<template>
  <div class="paa-landing min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
    <!-- Background Effects -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 -left-4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-0 -right-4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Hero Section -->
      <section class="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div class="max-w-6xl mx-auto text-center">
          <!-- Badges -->
          <div class="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
            <span class="badge">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Lanzamiento Nacional 2026
            </span>
            <span class="badge">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Exclusivo Entidades Públicas
            </span>
            <span class="badge">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              100% Gratuito
            </span>
          </div>

          <!-- Main Headline -->
          <h1 class="headline mb-6 animate-fade-in-up" style="animation-delay: 0.2s;">
            Tu PAA 2026 en un clic.<br />
            <span class="gradient-text">Automático. Gratuito.</span><br />
            Imposible ignorarlo.
          </h1>

          <!-- Subtitle -->
          <p class="subtitle mb-12 animate-fade-in-up" style="animation-delay: 0.4s;">
            Prepárate para la herramienta que cambiará la forma en que las entidades públicas<br class="hidden sm:inline" />
            de Colombia gestionan su Plan Anual de Adquisiciones.
          </p>

          <!-- Countdown Section (shown before launch) -->
          <div v-if="!isLaunched" class="mb-12 animate-fade-in-up" style="animation-delay: 0.6s;">
            <div class="mb-8">
              <p class="text-lg sm:text-xl text-gray-300 mb-4">La revolución comienza en:</p>
              <CountdownTimer
                :targetDate="launchDate"
                @countdown-finished="handleLaunchFinished"
              />
            </div>
          </div>

          <!-- Launch Success Banner (shown after launch) -->
          <div v-else class="mb-12 animate-fade-in">
            <div class="success-banner">
              <div class="flex items-center justify-center mb-4">
                <svg class="w-16 h-16 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 class="text-3xl sm:text-4xl font-bold mb-2">¡Funcionalidad Activada!</h2>
              <p class="text-xl text-gray-300">Descarga tu PAA ahora mismo</p>
            </div>
          </div>

          <!-- CTA Section -->
          <div class="max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.8s;">
            <!-- Pre-launch: Waitlist Form -->
            <div v-if="!isLaunched" class="cta-card">
              <h3 class="text-2xl sm:text-3xl font-bold mb-3">
                Asegura tu acceso prioritario
              </h3>
              <p class="text-gray-300 mb-6">
                Déjanos el correo institucional de tu entidad y entra a la lista de espera exclusiva.
              </p>

              <form @submit.prevent="handleWaitlistSubmit" class="space-y-4">
                <div class="relative">
                  <input
                    v-model="email"
                    type="email"
                    placeholder="correo@entidad.gov.co"
                    class="input-field"
                    required
                  />
                  <div v-if="emailError" class="error-message">
                    {{ emailError }}
                  </div>
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="cta-button"
                >
                  <span v-if="!isSubmitting">Unirme a la lista de espera</span>
                  <span v-else class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Procesando...
                  </span>
                </button>
              </form>

              <!-- Success Message -->
              <div v-if="submitSuccess" class="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p class="text-green-400 font-medium">
                  ¡Excelente! Ya estás en la lista de espera. Te notificaremos cuando esté disponible.
                </p>
              </div>
            </div>

            <!-- Post-launch: Download Form -->
            <div v-else class="cta-card">
              <h3 class="text-2xl sm:text-3xl font-bold mb-3">
                Descarga tu PAA automáticamente
              </h3>
              <p class="text-gray-300 mb-6">
                Ingresa el NIT o nombre de tu entidad para descargar el Plan Anual de Adquisiciones.
              </p>

              <form @submit.prevent="handlePAADownload" class="space-y-4">
                <div>
                  <input
                    v-model="entityNIT"
                    type="text"
                    placeholder="NIT de la entidad (ej: 890123456-1)"
                    class="input-field"
                    required
                  />
                </div>

                <div>
                  <input
                    v-model="entityName"
                    type="text"
                    placeholder="Nombre de la entidad (opcional)"
                    class="input-field"
                  />
                </div>

                <button
                  type="submit"
                  :disabled="isDownloading"
                  class="cta-button"
                >
                  <span v-if="!isDownloading" class="flex items-center justify-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Descargar PAA de mi entidad
                  </span>
                  <span v-else class="flex items-center justify-center">
                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Descargando...
                  </span>
                </button>
              </form>

              <!-- Download Success Message -->
              <div v-if="downloadSuccess" class="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                <p class="text-green-400 font-medium">
                  ¡Descarga exitosa! Revisa tu carpeta de descargas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Features Highlight Section -->
      <section class="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-700/50">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Primer motor <span class="gradient-text">gratuito</span> de descargas<br class="hidden sm:inline" />
              automáticas del PAA en Colombia
            </h2>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Feature 1 -->
            <div class="feature-card group">
              <div class="feature-icon">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Descarga Instantánea</h3>
              <p class="text-gray-400">
                Obtén el PAA completo de cualquier entidad en segundos. Sin formularios complejos, sin esperas.
              </p>
            </div>

            <!-- Feature 2 -->
            <div class="feature-card group">
              <div class="feature-icon">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">100% Confiable</h3>
              <p class="text-gray-400">
                Datos oficiales actualizados directamente desde las fuentes gubernamentales certificadas.
              </p>
            </div>

            <!-- Feature 3 -->
            <div class="feature-card group">
              <div class="feature-icon">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3">Completamente Gratis</h3>
              <p class="text-gray-400">
                Sin costos ocultos, sin suscripciones. Compromiso con la transparencia y acceso público.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Trust Section -->
      <section class="py-20 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <div class="trust-card">
            <svg class="w-16 h-16 mx-auto mb-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <p class="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-gray-300">
              CiviData impulsa la <span class="text-white font-semibold">automatización</span> y la <span class="text-white font-semibold">transparencia</span><br class="hidden sm:inline" />
              en la gestión pública.
            </p>
            <p class="text-lg text-accent mt-6 font-medium">
              Más eficiencia. Menos trámites. Más impacto.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CountdownTimer from '../components/CountdownTimer.vue'

// Launch date: December 31, 2025 23:59:00 GMT-5 (Colombia time)
const launchDate = 'December 31, 2025 23:59:00 GMT-0500'

// State
const isLaunched = ref(false)
const email = ref('')
const emailError = ref('')
const isSubmitting = ref(false)
const submitSuccess = ref(false)
const entityNIT = ref('')
const entityName = ref('')
const isDownloading = ref(false)
const downloadSuccess = ref(false)

// Check if already launched on mount
onMounted(() => {
  const now = new Date().getTime()
  const target = new Date(launchDate).getTime()
  isLaunched.value = now >= target
})

// Validate institutional email
const validateInstitutionalEmail = (email) => {
  const institutionalDomains = ['.gov.co', '.mil.co']
  return institutionalDomains.some(domain => email.toLowerCase().endsWith(domain))
}

// Handle waitlist submission
const handleWaitlistSubmit = async () => {
  emailError.value = ''

  if (!validateInstitutionalEmail(email.value)) {
    emailError.value = 'Por favor, usa un correo institucional (.gov.co o .mil.co)'
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // TODO: Replace with actual API endpoint
    // await fetch('/api/paa/waitlist', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email: email.value })
    // })

    submitSuccess.value = true
    email.value = ''
  } catch (error) {
    emailError.value = 'Hubo un error. Por favor intenta de nuevo.'
  } finally {
    isSubmitting.value = false
  }
}

// Handle PAA download
const handlePAADownload = async () => {
  isDownloading.value = true
  downloadSuccess.value = false

  try {
    // Simulate API call and download
    await new Promise(resolve => setTimeout(resolve, 2000))

    // TODO: Replace with actual API endpoint
    // const response = await fetch('/api/paa/download', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     nit: entityNIT.value,
    //     name: entityName.value
    //   })
    // })
    // const blob = await response.blob()
    // const url = window.URL.createObjectURL(blob)
    // const a = document.createElement('a')
    // a.href = url
    // a.download = `PAA-${entityNIT.value}.pdf`
    // a.click()

    downloadSuccess.value = true
  } catch (error) {
    console.error('Error downloading PAA:', error)
  } finally {
    isDownloading.value = false
  }
}

// Handle countdown finished
const handleLaunchFinished = () => {
  isLaunched.value = true
}
</script>

<style scoped>
/* Animations */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

/* Badge */
.badge {
  @apply inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/20 to-blue-500/20 border border-accent/30 rounded-full text-sm font-medium text-accent backdrop-blur-sm;
}

/* Headlines */
.headline {
  @apply text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.gradient-text {
  @apply bg-gradient-to-r from-accent via-blue-400 to-purple-400 bg-clip-text text-transparent;
}

.subtitle {
  @apply text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto;
}

/* Success Banner */
.success-banner {
  @apply bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/50 rounded-2xl p-8 backdrop-blur-xl;
}

/* CTA Card */
.cta-card {
  @apply bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl;
}

/* Input Field */
.input-field {
  @apply w-full px-4 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300;
}

/* Error Message */
.error-message {
  @apply mt-2 text-sm text-red-400;
}

/* CTA Button */
.cta-button {
  @apply w-full px-8 py-4 bg-gradient-to-r from-accent to-blue-500 hover:from-accent/90 hover:to-blue-500/90 text-white font-bold rounded-xl shadow-lg hover:shadow-accent/50 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none;
}

/* Feature Card */
.feature-card {
  @apply bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20;
}

.feature-icon {
  @apply w-16 h-16 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-300;
}

/* Trust Card */
.trust-card {
  @apply bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-gray-700/30;
}

/* Responsive Typography */
@media (max-width: 640px) {
  .headline {
    @apply text-3xl leading-tight;
  }

  .subtitle {
    @apply text-base;
  }
}
</style>
