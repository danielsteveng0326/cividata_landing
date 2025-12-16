<template>
  <section class="relative py-16 sm:py-24 bg-gradient-to-br from-red-900/10 via-gray-900 to-red-900/10">
    <div class="section-container relative z-10">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16">
        <div class="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-6 bg-red-500/20 border border-red-500/50">
          <span class="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
          <span class="text-sm text-red-300 font-semibold">🚨 PROBLEMAS CRÍTICOS</span>
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span class="text-red-400">¿Tu entidad está</span>
          <br />
          <span class="text-white">en riesgo de multas</span>
          <br />
          <span class="gradient-text">millonarias?</span>
        </h2>
        
        <p class="text-lg text-white/70 max-w-3xl mx-auto">
          La mayoría de entidades públicas colombianas enfrentan estos riesgos críticos sin saberlo
        </p>
      </div>

      <!-- Pain Points Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        <div 
          v-for="(pain, index) in painPoints" 
          :key="index"
          class="glass-card bg-gradient-to-br from-red-500/10 to-orange-500/5 border border-red-500/30 hover:border-red-400/50 transition-all duration-300"
        >
          <!-- Icon -->
          <div class="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mb-4">
            <component :is="pain.icon" class="w-8 h-8 text-red-400" />
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-white mb-3">{{ pain.title }}</h3>
          <p class="text-white/70 mb-4 leading-relaxed">{{ pain.description }}</p>
          
          <!-- Stats/Impact -->
          <div class="bg-red-500/20 rounded-lg p-3 border border-red-500/30">
            <div class="text-red-300 text-sm font-medium mb-1">💸 Costo promedio:</div>
            <div class="text-red-400 font-bold text-lg">{{ pain.cost }}</div>
          </div>
        </div>
      </div>

      <!-- Consequences Section -->
      <div class="glass-card bg-gradient-to-br from-red-500/20 to-orange-500/10 border border-red-500/40 max-w-5xl mx-auto">
        <div class="text-center mb-8">
          <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">
            🚨 Consecuencias de NO actuar ahora:
          </h3>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(consequence, index) in consequences" 
            :key="index"
            class="text-center"
          >
            <div class="text-4xl mb-3">{{ consequence.emoji }}</div>
            <div class="text-red-300 font-bold text-lg mb-2">{{ consequence.impact }}</div>
            <div class="text-white/70 text-sm">{{ consequence.description }}</div>
          </div>
        </div>

        <!-- Urgency CTA -->
        <div class="text-center mt-8 pt-8 border-t border-red-500/30">
          <p class="text-white/80 mb-4">
            <span class="text-red-400 font-bold">⏰ La Ley de Garantías inicia en {{ diasRestantes }} días.</span> 
            No dejes que tu entidad sea sancionada por incumplimiento.
          </p>
          <a 
            href="#contact" 
            class="inline-block btn-primary bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 text-lg"
          >
            🛡️ PROTEGE TU ENTIDAD AHORA
          </a>
        </div>
      </div>

      <!-- Transition to Solution -->
      <div class="text-center mt-16 sm:mt-20">
        <div class="max-w-3xl mx-auto">
          <h3 class="text-2xl sm:text-3xl font-bold text-white mb-6">
            <span class="text-green-400">✅ La buena noticia:</span>
            <br />
            Todos estos problemas tienen solución
          </h3>
          <p class="text-lg text-white/70 mb-8">
            CiviData automatiza tu cumplimiento, elimina riesgos y te garantiza transparencia total
          </p>
          <div class="flex items-center justify-center">
            <svg class="w-8 h-8 text-accent animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, h } from 'vue'

const diasRestantes = ref(0)

const calcularDiasRestantes = () => {
  const fechaLimite = new Date('2026-01-31T23:59:59-05:00')
  const ahora = new Date()
  const diferencia = fechaLimite.getTime() - ahora.getTime()
  diasRestantes.value = Math.max(0, Math.ceil(diferencia / (1000 * 60 * 60 * 24)))
}

onMounted(() => {
  calcularDiasRestantes()
})

// Icons
const AlertIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.134 16.5c-.77.833.192 2.5 1.732 2.5z' })
])

const ClockIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' })
])

const DocumentIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
])

const ExclamationIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
])

const EyeIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' })
])

const TrendingIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 17h8m0 0V9m0 8l-8-8-4 4-6-6' })
])

const painPoints = [
  {
    icon: AlertIcon,
    title: 'Multas por incumplimiento de transparencia',
    description: 'La Procuraduría puede multar hasta $2.000 millones por no publicar contratos correctamente en SECOP.',
    cost: '$500M - $2.000M'
  },
  {
    icon: ClockIcon,
    title: 'Tiempo perdido en análisis manual',
    description: 'Funcionarios gastan 40+ horas semanales analizando contratos manualmente, tiempo que se podría optimizar.',
    cost: '$200M - $800M anuales'
  },
  {
    icon: DocumentIcon,
    title: 'Errores en reportes a entes de control',
    description: 'Información incorrecta enviada a Contraloría, DNP y otros organismos genera observaciones y procesos.',
    cost: '$100M - $1.500M'
  },
  {
    icon: ExclamationIcon,
    title: 'Pérdida de recursos por mala planificación',
    description: 'PAA mal estructurados generan retrasos, sobrecostos y pérdida de oportunidades de contratación.',
    cost: '$300M - $5.000M'
  },
  {
    icon: EyeIcon,
    title: 'Falta de trazabilidad en procesos',
    description: 'Sin herramientas adecuadas es imposible rastrear el avance real de contratos y detectar irregularidades.',
    cost: '$150M - $800M'
  },
  {
    icon: TrendingIcon,
    title: 'Ineficiencia en seguimiento presupuestal',
    description: 'Control presupuestal deficiente lleva a sobregiros, subejecución y problemas con Ministerio de Hacienda.',
    cost: '$500M - $3.000M'
  }
]

const consequences = [
  {
    emoji: '⚖️',
    impact: 'Procesos disciplinarios',
    description: 'Investigaciones de Procuraduría por incumplimiento'
  },
  {
    emoji: '💸',
    impact: 'Pérdidas millonarias',
    description: 'Multas que pueden superar los $2.000M'
  },
  {
    emoji: '📰',
    impact: 'Daño reputacional',
    description: 'Medios reportan irregularidades en contratación'
  },
  {
    emoji: '🚫',
    impact: 'Bloqueo de recursos',
    description: 'Suspensión de transferencias nacionales'
  }
]
</script>

<style scoped>
.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>