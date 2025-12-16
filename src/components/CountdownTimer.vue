<template>
  <div class="w-full max-w-5xl mx-auto px-4">
    <!-- Countdown Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
      <!-- Days -->
      <div class="countdown-card group">
        <div class="countdown-number-wrapper">
          <div
            class="countdown-number"
            :class="{ 'pulse-effect': timeLeft.days !== previousTime.days }"
            :key="timeLeft.days"
          >
            {{ formatNumber(timeLeft.days) }}
          </div>
        </div>
        <div class="countdown-label">Días</div>
        <div class="countdown-glow"></div>
      </div>

      <!-- Hours -->
      <div class="countdown-card group">
        <div class="countdown-number-wrapper">
          <div
            class="countdown-number"
            :class="{ 'pulse-effect': timeLeft.hours !== previousTime.hours }"
            :key="timeLeft.hours"
          >
            {{ formatNumber(timeLeft.hours) }}
          </div>
        </div>
        <div class="countdown-label">Horas</div>
        <div class="countdown-glow"></div>
      </div>

      <!-- Minutes -->
      <div class="countdown-card group">
        <div class="countdown-number-wrapper">
          <div
            class="countdown-number"
            :class="{ 'pulse-effect': timeLeft.minutes !== previousTime.minutes }"
            :key="timeLeft.minutes"
          >
            {{ formatNumber(timeLeft.minutes) }}
          </div>
        </div>
        <div class="countdown-label">Minutos</div>
        <div class="countdown-glow"></div>
      </div>

      <!-- Seconds -->
      <div class="countdown-card group">
        <div class="countdown-number-wrapper">
          <div
            class="countdown-number"
            :class="{ 'pulse-effect': timeLeft.seconds !== previousTime.seconds }"
            :key="timeLeft.seconds"
          >
            {{ formatNumber(timeLeft.seconds) }}
          </div>
        </div>
        <div class="countdown-label">Segundos</div>
        <div class="countdown-glow"></div>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="mt-8 relative">
      <div class="h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
        <div
          class="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-1000 ease-out relative"
          :style="{ width: `${progressPercentage}%` }"
        >
          <div class="absolute inset-0 bg-white/20 animate-shimmer"></div>
        </div>
      </div>
      <p class="text-center text-sm text-gray-400 mt-3">
        {{ progressPercentage.toFixed(1) }}% del camino recorrido
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'

const emit = defineEmits(['countdown-complete'])

// Target date: December 31, 2025 23:59:00 GMT-5 (Colombia Time)
const targetDate = new Date('2025-12-31T23:59:00-05:00')
const startDate = new Date('2025-01-01T00:00:00-05:00')

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const previousTime = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const progressPercentage = ref(0)
let intervalId = null

const calculateTimeLeft = () => {
  const now = new Date()
  const difference = targetDate - now

  if (difference <= 0) {
    clearInterval(intervalId)
    emit('countdown-complete')
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  }
}

const calculateProgress = () => {
  const now = new Date()
  const totalDuration = targetDate - startDate
  const elapsed = now - startDate
  return Math.min((elapsed / totalDuration) * 100, 100)
}

const formatNumber = (num) => {
  return String(num).padStart(2, '0')
}

const updateCountdown = () => {
  previousTime.value = { ...timeLeft.value }
  timeLeft.value = calculateTimeLeft()
  progressPercentage.value = calculateProgress()
}

watch(timeLeft, (newValue, oldValue) => {
  // Trigger animation on change
  if (newValue.seconds !== oldValue.seconds) {
    previousTime.value = oldValue
  }
}, { deep: true })

onMounted(() => {
  updateCountdown()
  intervalId = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.countdown-card {
  @apply relative bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-gray-700/50 overflow-hidden transition-all duration-500;
  @apply hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105;
}

.countdown-number-wrapper {
  @apply relative z-10 mb-2 sm:mb-3;
}

.countdown-number {
  @apply text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-purple-200 transition-all duration-300;
  font-family: 'Inter', 'Manrope', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  letter-spacing: -0.02em;
}

.countdown-label {
  @apply text-xs sm:text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider relative z-10;
}

.countdown-glow {
  @apply absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 transition-opacity duration-500 rounded-2xl sm:rounded-3xl;
}

.countdown-card:hover .countdown-glow {
  @apply opacity-20;
}

.pulse-effect {
  animation: pulseGlow 0.6s ease-out;
}

@keyframes pulseGlow {
  0% {
    transform: scale(1);
    filter: brightness(1);
  }
  50% {
    transform: scale(1.05);
    filter: brightness(1.3) drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
  }
  100% {
    transform: scale(1);
    filter: brightness(1);
  }
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .countdown-card {
    @apply p-3;
  }

  .countdown-number {
    @apply text-3xl;
  }

  .countdown-label {
    @apply text-xs;
  }
}
</style>
