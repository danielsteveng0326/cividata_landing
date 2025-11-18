<template>
  <div class="countdown-container">
    <div class="countdown-grid">
      <!-- Days -->
      <div class="countdown-card group">
        <div class="number-wrapper">
          <div class="number" :key="timeLeft.days">
            {{ String(timeLeft.days).padStart(2, '0') }}
          </div>
        </div>
        <div class="label">Días</div>
      </div>

      <!-- Hours -->
      <div class="countdown-card group">
        <div class="number-wrapper">
          <div class="number" :key="timeLeft.hours">
            {{ String(timeLeft.hours).padStart(2, '0') }}
          </div>
        </div>
        <div class="label">Horas</div>
      </div>

      <!-- Minutes -->
      <div class="countdown-card group">
        <div class="number-wrapper">
          <div class="number" :key="timeLeft.minutes">
            {{ String(timeLeft.minutes).padStart(2, '0') }}
          </div>
        </div>
        <div class="label">Minutos</div>
      </div>

      <!-- Seconds -->
      <div class="countdown-card group">
        <div class="number-wrapper">
          <div class="number animate-pulse-slow" :key="timeLeft.seconds">
            {{ String(timeLeft.seconds).padStart(2, '0') }}
          </div>
        </div>
        <div class="label">Segundos</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  targetDate: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['countdown-finished'])

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})

let interval = null

const calculateTimeLeft = () => {
  const target = new Date(props.targetDate).getTime()
  const now = new Date().getTime()
  const difference = target - now

  if (difference <= 0) {
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    if (interval) {
      clearInterval(interval)
    }
    emit('countdown-finished')
    return
  }

  timeLeft.value = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000)
  }
}

onMounted(() => {
  calculateTimeLeft()
  interval = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<style scoped>
.countdown-container {
  @apply w-full max-w-4xl mx-auto px-4;
}

.countdown-grid {
  @apply grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6;
}

.countdown-card {
  @apply relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-700/50 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:scale-105;
}

.countdown-card::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500;
}

.number-wrapper {
  @apply relative mb-2 sm:mb-3;
}

.number {
  @apply text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  animation: fadeIn 0.3s ease-in-out;
}

.label {
  @apply text-xs sm:text-sm md:text-base text-gray-400 uppercase tracking-wider font-medium;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .countdown-card {
    @apply p-3;
  }

  .number {
    @apply text-3xl;
  }

  .label {
    @apply text-xs;
  }
}
</style>
