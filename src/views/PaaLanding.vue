<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
    <!-- Animated Background -->
    <div class="fixed inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 pt-24 sm:pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <!-- Urgency Badges -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8 sm:mb-12">
        <div class="badge-pill bg-red-500/20 border-red-500/60 text-red-300 animate-pulse">
          <span class="w-2 h-2 bg-red-400 rounded-full animate-ping"></span>
          🚨 QUEDAN {{ diasRestantes }} DÍAS PARA LEY DE GARANTÍAS
        </div>
        <div class="badge-pill bg-orange-500/20 border-orange-500/60 text-orange-300">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          ⚡ PAA OBLIGATORIO ANTES 31 ENERO 2026
        </div>
      </div>

      <!-- Hero Section -->
      <div class="max-w-6xl mx-auto text-center mb-16 sm:mb-20">
        <!-- Main Title -->
        <h1 class="hero-title mb-6 sm:mb-8">
          <span class="block text-red-400 font-black">🚨 ¿Tu PAA 2026 está listo?</span>
          <span class="block text-white">Sin él, tu entidad arriesga multas de</span>
          <span class="block text-red-400 font-black">hasta $2.000 MILLONES</span>
          <span class="block bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-transparent bg-clip-text">
            🎁 Genéralo GRATIS con IA en 5 minutos
          </span>
        </h1>

        <!-- Subtitle -->
        <div class="max-w-4xl mx-auto mb-12 sm:mb-16">
          <p class="hero-subtitle mb-6">
            <span class="text-yellow-400 font-bold">⚡ URGENTE:</span> El <span class="text-red-400 font-bold">31 de enero de 2026</span> inicia la Ley de Garantías.
            <span class="text-white">Tu PAA DEBE estar publicado o enfrentas:</span>
          </p>
          <div class="grid sm:grid-cols-3 gap-4 text-sm">
            <div class="bg-red-500/20 rounded-lg p-3 border border-red-500/40">
              <div class="text-red-300 font-bold">💸 Multas millonarias</div>
              <div class="text-white/70">Hasta $2.000M por Procuraduría</div>
            </div>
            <div class="bg-orange-500/20 rounded-lg p-3 border border-orange-500/40">
              <div class="text-orange-300 font-bold">🚫 Bloqueo contratación</div>
              <div class="text-white/70">No podrás contratar directamente</div>
            </div>
            <div class="bg-red-500/20 rounded-lg p-3 border border-red-500/40">
              <div class="text-red-300 font-bold">📄 Procesos disciplinarios</div>
              <div class="text-white/70">Investigaciones por incumplimiento</div>
            </div>
          </div>
        </div>

        <!-- Countdown or Launch Message -->
        <div v-if="!isLaunched" class="mb-12 sm:mb-16">
          <div class="mb-8">
            <p class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
              Faltan
            </p>
            <p class="text-lg sm:text-xl text-gray-400">
              para el lanzamiento oficial
            </p>
          </div>
          <CountdownTimer @countdown-complete="handleCountdownComplete" />
        </div>

        <!-- Launch Activated Banner -->
        <transition
          enter-active-class="transition duration-500 ease-out"
          enter-from-class="opacity-0 scale-90"
          enter-to-class="opacity-100 scale-100"
        >
          <div v-if="isLaunched" class="launch-banner mb-12">
            <div class="flex items-center justify-center gap-3 mb-4">
              <svg class="w-8 h-8 text-green-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                Funcionalidad Activada
              </h2>
            </div>
            <p class="text-lg sm:text-xl text-gray-300">
              Descarga tu PAA ahora
            </p>
          </div>
        </transition>

        <!-- CTA Section -->
        <div v-if="!isLaunched" class="cta-section bg-gradient-to-br from-green-500/20 to-blue-500/10 border border-green-500/40">
          <div class="text-center mb-6">
            <div class="text-5xl mb-4">🎁</div>
            <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">
              🚀 GENERACIÓN GRATUITA DE PAA 2026 ACTIVADA
            </h3>
            <p class="text-base sm:text-lg text-green-300 mb-4 font-semibold">
              ✅ Listo para SECOP II • ✅ 100% Compatible • ✅ Cero errores
            </p>
            <p class="text-base text-white/70 mb-8 max-w-2xl mx-auto">
              Ingresa tu correo institucional y genera tu PAA con IA. 
              <span class="text-yellow-400 font-bold">Completamente gratis</span> como muestra de CiviData.
            </p>
          </div>

          <!-- Email Form -->
          <form @submit.prevent="handleSubmit" class="max-w-xl mx-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex-1">
                <input
                  v-model="email"
                  type="email"
                  placeholder="correo@entidad.gov.co"
                  class="email-input"
                  :class="{ 'border-red-500': emailError }"
                  required
                />
                <p v-if="emailError" class="text-red-400 text-sm mt-2 text-left">
                  {{ emailError }}
                </p>
                <p v-if="successMessage" class="text-green-400 text-sm mt-2 text-left">
                  {{ successMessage }}
                </p>
              </div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="cta-button"
              >
                <span v-if="!isSubmitting">Unirme a la lista de espera</span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              </button>
            </div>
          </form>
        </div>

        <!-- Download Section (After Launch) -->
        <div v-else class="cta-section bg-gradient-to-br from-green-500/20 to-blue-500/10 border border-green-500/40">
          <div class="text-center mb-6">
            <div class="text-5xl mb-4">🚀</div>
            <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">
              ✅ PAA 2026 - GENERACIÓN ACTIVADA
            </h3>
            <div class="bg-green-500/20 rounded-lg p-4 mb-6 border border-green-500/40">
              <p class="text-green-300 font-bold mb-2">⚡ Últimas {{ diasRestantes }} días antes de Ley de Garantías</p>
              <p class="text-white/80 text-sm">Genera tu PAA ahora y evita multas millonarias</p>
            </div>
            <p class="text-base sm:text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Ingresa el NIT o nombre de tu entidad. La IA generará tu PAA 2026 completo y listo para SECOP.
            </p>
          </div>

          <!-- Download Form -->
          <form @submit.prevent="handleDownload" class="max-w-xl mx-auto">
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex-1">
                <input
                  v-model="nitEntity"
                  type="text"
                  placeholder="NIT o nombre de la entidad"
                  class="email-input"
                  required
                />
              </div>
              <button
                type="submit"
                :disabled="isDownloading"
                class="cta-button bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500"
              >
                <span v-if="!isDownloading" class="flex items-center justify-center gap-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar PAA
                </span>
                <span v-else class="flex items-center justify-center">
                  <svg class="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Descargando...
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
        <div class="feature-card">
          <div class="feature-icon">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h4 class="text-xl font-bold text-white mb-2">Descarga Instantánea</h4>
          <p class="text-gray-400">
            Accede al PAA completo de tu entidad en segundos, y enfócate en lo que importa.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h4 class="text-xl font-bold text-white mb-2">100% Gratuito</h4>
          <p class="text-gray-400">
            Una muestra completa de cómo la IA, potencia la manera de contratar. 
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-icon">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h4 class="text-xl font-bold text-white mb-2">Compatibilidad completa</h4>
          <p class="text-gray-400">
            Nuestros PAA están listos para cargar al SECOP, sin errores.
          </p>
        </div>
      </div>

      <!-- Trust Section -->
      <div class="max-w-3xl mx-auto text-center trust-section">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
          <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">
          Primer motor gratuito de descargas automáticas del PAA en Colombia
        </h3>
        <p class="text-lg text-gray-300 leading-relaxed mb-6">
          CiviData impulsa la automatización y la transparencia en la gestión pública.
        </p>
        <p class="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
          Más eficiencia. Menos trámites. Más impacto.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CountdownTimer from '../components/CountdownTimer.vue'

const email = ref('')
const emailError = ref('')
const successMessage = ref('')
const isSubmitting = ref(false)
const isLaunched = ref(false)
const nitEntity = ref('')
const isDownloading = ref(false)
const diasRestantes = ref(0)

const calcularDiasRestantes = () => {
  const fechaLimite = new Date('2026-01-31T23:59:59-05:00')
  const ahora = new Date()
  const diferencia = fechaLimite.getTime() - ahora.getTime()
  diasRestantes.value = Math.max(0, Math.ceil(diferencia / (1000 * 60 * 60 * 24)))
}

// Check if already launched (for testing, you can manually set this)
onMounted(() => {
  const targetDate = new Date('2025-12-31T23:59:00-05:00')
  const now = new Date()
  isLaunched.value = now >= targetDate
  
  calcularDiasRestantes()
  // Actualizar cada hora
  setInterval(calcularDiasRestantes, 1000 * 60 * 60)
})

const validateEmail = (emailValue) => {
  const institutionalDomains = ['.gov.co', '.mil.co']
  const emailLower = emailValue.toLowerCase()

  const isValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)
  if (!isValidFormat) {
    return 'Por favor ingresa un correo electrónico válido'
  }

  const hasInstitutionalDomain = institutionalDomains.some(domain =>
    emailLower.endsWith(domain)
  )

  if (!hasInstitutionalDomain) {
    return 'Por favor usa un correo institucional (.gov.co o .mil.co)'
  }

  return null
}

const handleSubmit = async () => {
  emailError.value = ''
  successMessage.value = ''

  const error = validateEmail(email.value)
  if (error) {
    emailError.value = error
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call - Replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 1500))

    // TODO: Replace with actual API call
    // await fetch('/api/waitlist', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ email: email.value })
    // })

    successMessage.value = '¡Registro exitoso! Te notificaremos cuando esté disponible.'
    email.value = ''

    setTimeout(() => {
      successMessage.value = ''
    }, 5000)
  } catch (error) {
    emailError.value = 'Ocurrió un error. Por favor intenta nuevamente.'
  } finally {
    isSubmitting.value = false
  }
}

const handleDownload = async () => {
  if (!nitEntity.value.trim()) {
    return
  }

  isDownloading.value = true

  try {
    // Simulate download - Replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 2000))

    // TODO: Replace with actual API call
    // const response = await fetch(`/api/paa/download?nit=${nitEntity.value}`)
    // const blob = await response.blob()
    // const url = window.URL.createObjectURL(blob)
    // const a = document.createElement('a')
    // a.href = url
    // a.download = `PAA_${nitEntity.value}.xlsx`
    // a.click()

    alert(`Descargando PAA para: ${nitEntity.value}`)
    nitEntity.value = ''
  } catch (error) {
    alert('Error al descargar el PAA. Por favor intenta nuevamente.')
  } finally {
    isDownloading.value = false
  }
}

const handleCountdownComplete = () => {
  isLaunched.value = true
}
</script>

<style scoped>
/* Hero Styles */
.hero-title {
  @apply text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight;
  font-family: 'Inter', 'Manrope', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
}

.hero-subtitle {
  @apply text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed;
}

/* Badge Styles */
.badge-pill {
  @apply inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-sm sm:text-base font-medium text-blue-300 backdrop-blur-sm;
  @apply hover:border-blue-400/50 transition-all duration-300;
}

.badge-dot {
  @apply w-2 h-2 rounded-full bg-green-400 animate-pulse;
}

/* CTA Section */
.cta-section {
  @apply glass-effect rounded-3xl p-6 sm:p-10 border border-gray-700/50;
}

.email-input {
  @apply w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300;
  @apply text-base sm:text-lg;
}

.cta-button {
  @apply px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-base sm:text-lg;
  @apply hover:from-blue-500 hover:to-purple-500 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105;
  @apply disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100;
  @apply transition-all duration-300 whitespace-nowrap;
}

/* Launch Banner */
.launch-banner {
  @apply glass-effect rounded-3xl p-8 sm:p-12 border border-green-500/30 bg-gradient-to-br from-green-500/5 to-emerald-500/5;
}

/* Feature Card */
.feature-card {
  @apply glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500;
  @apply hover:shadow-xl hover:shadow-blue-500/10 hover:scale-105;
}

.feature-icon {
  @apply w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center text-blue-400 mb-4;
}

/* Trust Section */
.trust-section {
  @apply glass-effect rounded-3xl p-8 sm:p-12 border border-gray-700/50;
}

/* Glass Effect Utility */
.glass-effect {
  @apply bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl;
}

/* Animations */
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Responsive */
@media (max-width: 640px) {
  .hero-title {
    @apply text-3xl leading-tight;
  }

  .hero-subtitle {
    @apply text-base;
  }
}
</style>
