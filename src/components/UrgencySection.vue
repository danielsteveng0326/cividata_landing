<template>
  <section class="relative py-16 sm:py-24 bg-gradient-to-br from-red-900/20 via-orange-900/10 to-yellow-900/20 overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/5 to-orange-500/5 animate-pulse"></div>
    </div>

    <div class="section-container relative z-10">
      <!-- Countdown Header -->
      <div class="text-center mb-12 sm:mb-16">
        <div class="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-6 bg-red-500/30 border border-red-500/60 animate-pulse">
          <span class="w-3 h-3 bg-red-400 rounded-full animate-ping"></span>
          <span class="text-base text-red-200 font-bold">🚨 ALERTA CRÍTICA - LEY DE GARANTÍAS</span>
        </div>
        
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
          <span class="text-red-400">QUEDAN SOLO</span>
          <br />
          <span class="text-white countdown-number">{{ diasRestantes }}</span>
          <span class="text-red-300">DÍAS</span>
          <br />
          <span class="gradient-text">PARA ACTUAR</span>
        </h2>
        
        <p class="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
          Después del <span class="text-red-400 font-bold">31 de enero de 2026</span>, 
          las entidades públicas no podrán hacer contratación directa por la 
          <span class="text-yellow-400 font-bold">Ley de Garantías</span>
        </p>
      </div>

      <!-- Urgency Reasons -->
      <div class="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
        <div class="glass-card bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/50">
          <div class="text-center">
            <div class="w-16 h-16 bg-red-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">PAA Obligatorio</h3>
            <p class="text-white/70 text-sm leading-relaxed">
              Tu Plan Anual de Adquisiciones debe estar publicado antes del 31 de enero o enfrentas sanciones millonarias
            </p>
          </div>
        </div>

        <div class="glass-card bg-gradient-to-br from-orange-500/20 to-yellow-500/10 border border-orange-500/50">
          <div class="text-center">
            <div class="w-16 h-16 bg-orange-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 18M6 6l12 12" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Contratación Bloqueada</h3>
            <p class="text-white/70 text-sm leading-relaxed">
              La Ley de Garantías bloquea la contratación directa. Todo debe estar listo ANTES de esta fecha
            </p>
          </div>
        </div>

        <div class="glass-card bg-gradient-to-br from-yellow-500/20 to-red-500/10 border border-yellow-500/50">
          <div class="text-center">
            <div class="w-16 h-16 bg-yellow-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-3">Multas Millonarias</h3>
            <p class="text-white/70 text-sm leading-relaxed">
              Procuraduría puede multar hasta $2.000M por incumplimiento en transparencia y publicación
            </p>
          </div>
        </div>
      </div>

      <!-- Scarcity Section -->
      <div class="glass-card bg-gradient-to-br from-purple-500/20 to-blue-500/15 border border-purple-500/40 mb-16">
        <div class="text-center">
          <h3 class="text-2xl sm:text-3xl font-bold text-white mb-6">
            🔥 OFERTA LIMITADA: Solo para las primeras 50 entidades
          </h3>
          
          <!-- Scarcity Counter -->
          <div class="flex justify-center items-center space-x-8 mb-8">
            <div class="text-center">
              <div class="text-4xl sm:text-5xl font-black text-purple-400">{{ entidadesRestantes }}</div>
              <div class="text-white/70 text-sm">Cupos disponibles</div>
            </div>
            <div class="text-center">
              <div class="text-4xl sm:text-5xl font-black text-blue-400">{{ implementacionesEnero }}</div>
              <div class="text-white/70 text-sm">Implementaciones en enero</div>
            </div>
          </div>

          <div class="grid sm:grid-cols-3 gap-6 mb-8">
            <div class="bg-green-500/20 rounded-xl p-4 border border-green-500/40">
              <div class="text-green-400 font-bold text-lg">INCLUYE GRATIS:</div>
              <ul class="text-white/80 text-sm mt-2 space-y-1">
                <li>✅ PAA 2026 generado por IA</li>
                <li>✅ Implementación en 15 días</li>
                <li>✅ Capacitación del equipo</li>
              </ul>
            </div>

            <div class="bg-blue-500/20 rounded-xl p-4 border border-blue-500/40">
              <div class="text-blue-400 font-bold text-lg">GARANTÍAS:</div>
              <ul class="text-white/80 text-sm mt-2 space-y-1">
                <li>🛡️ 100% cumplimiento normativo</li>
                <li>🛡️ Soporte 24/7 en enero</li>
                <li>🛡️ Sin costo ocultos</li>
              </ul>
            </div>

            <div class="bg-purple-500/20 rounded-xl p-4 border border-purple-500/40">
              <div class="text-purple-400 font-bold text-lg">BONOS ADICIONALES:</div>
              <ul class="text-white/80 text-sm mt-2 space-y-1">
                <li>🎁 Auditoría gratuita de riesgos</li>
                <li>🎁 Plantillas de cumplimiento</li>
                <li>🎁 Acceso VIP a actualizaciones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Final CTA with Timer -->
      <div class="glass-card bg-gradient-to-br from-red-500/25 to-orange-500/15 border border-red-500/50 text-center">
        <div class="mb-6">
          <h3 class="text-3xl sm:text-4xl font-black text-white mb-4">
            ⏰ NO DEJES QUE TU ENTIDAD SEA SANCIONADA
          </h3>
          <p class="text-lg text-white/80 mb-6">
            Después del {{ fechaLimite }}, será demasiado tarde. 
            <span class="text-yellow-400 font-bold">Los cupos son limitados</span> y enero se llena rápido.
          </p>
        </div>

        <!-- Digital Clock -->
        <div class="flex justify-center items-center space-x-4 mb-8">
          <div class="bg-gray-900/80 rounded-lg p-4 text-center min-w-[80px]">
            <div class="text-2xl sm:text-3xl font-bold text-red-400">{{ timeLeft.days }}</div>
            <div class="text-xs text-white/60">DÍAS</div>
          </div>
          <div class="text-white/40">:</div>
          <div class="bg-gray-900/80 rounded-lg p-4 text-center min-w-[80px]">
            <div class="text-2xl sm:text-3xl font-bold text-orange-400">{{ timeLeft.hours }}</div>
            <div class="text-xs text-white/60">HORAS</div>
          </div>
          <div class="text-white/40">:</div>
          <div class="bg-gray-900/80 rounded-lg p-4 text-center min-w-[80px]">
            <div class="text-2xl sm:text-3xl font-bold text-yellow-400">{{ timeLeft.minutes }}</div>
            <div class="text-xs text-white/60">MIN</div>
          </div>
        </div>

        <!-- Final CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            class="btn-primary bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white font-black px-8 py-5 text-xl w-full sm:w-auto"
          >
            🚀 ASEGURAR MI CUPO AHORA
          </a>
          <a 
            href="/paa" 
            class="btn-outline border-green-500 text-green-400 hover:bg-green-500/10 font-bold px-6 py-4 w-full sm:w-auto"
          >
            🎁 GENERAR PAA GRATIS PRIMERO
          </a>
        </div>

        <p class="text-white/60 text-sm mt-6">
          ⚡ Respuesta en menos de 2 horas • 📞 Llamada de confirmación inmediata
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const diasRestantes = ref(0)
const entidadesRestantes = ref(23) // Simulated scarcity
const implementacionesEnero = ref(27) // Simulated demand
const fechaLimite = '31 de enero de 2026'

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0
})

let interval = null

const calcularTiempoRestante = () => {
  const fechaLimiteDate = new Date('2026-01-31T23:59:59-05:00')
  const ahora = new Date()
  const diferencia = fechaLimiteDate.getTime() - ahora.getTime()

  if (diferencia > 0) {
    const days = Math.floor(diferencia / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60))

    diasRestantes.value = days
    timeLeft.value = { days, hours, minutes }
  } else {
    diasRestantes.value = 0
    timeLeft.value = { days: 0, hours: 0, minutes: 0 }
  }
}

// Simular reducción de cupos disponibles
const simularEscasez = () => {
  // Reducir cupos lentamente para crear urgencia
  if (entidadesRestantes.value > 5) {
    const randomReduction = Math.random() < 0.1 // 10% chance cada minuto
    if (randomReduction) {
      entidadesRestantes.value--
      implementacionesEnero.value++
    }
  }
}

onMounted(() => {
  calcularTiempoRestante()
  
  // Actualizar cada minuto
  interval = setInterval(() => {
    calcularTiempoRestante()
    simularEscasez()
  }, 60000)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<style scoped>
.countdown-number {
  font-size: clamp(3rem, 8vw, 6rem);
  text-shadow: 0 0 20px rgba(248, 113, 113, 0.5);
}

.animate-ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}
</style>