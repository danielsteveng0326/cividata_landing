<template>
  <section id="roi-calculator" class="relative py-16 sm:py-24 bg-gradient-to-br from-red-900/20 via-orange-900/10 to-yellow-900/20">
    <div class="section-container relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Header -->
        <div class="text-center mb-8 sm:mb-12">
          <!-- <div class="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-6">
            <span class="w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
            <span class="text-sm text-red-300 font-semibold">⚠️ CALCULADORA DE PÉRDIDAS</span>
          </div> -->
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span class="text-red-400">¿Cuánto pierdes</span>
            <br />
            <span class="text-white">por análisis manual?</span>
          </h2>
          <p class="text-lg text-white/70 max-w-2xl mx-auto">
            Calcula el costo real del tiempo perdido, multas evitables y errores en tu gestión de contratos
          </p>
        </div>

        <!-- Calculator -->
        <div class="glass-card max-w-3xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <!-- Inputs -->
            <div class="space-y-6">
              <h3 class="text-xl font-bold text-white mb-4">📊 Datos de tu entidad:</h3>
              
              <div>
                <label class="block text-white/80 text-sm font-medium mb-2">
                  Número de contratos anuales
                </label>
                <input
                  v-model.number="contratos"
                  type="number"
                  min="1"
                  class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Ej: 150"
                />
              </div>

              <div>
                <label class="block text-white/80 text-sm font-medium mb-2">
                  Horas dedicadas al análisis por contrato
                </label>
                <input
                  v-model.number="horasPorContrato"
                  type="number"
                  min="0.5"
                  step="0.5"
                  class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Ej: 4"
                />
              </div>

              <div>
                <label class="block text-white/80 text-sm font-medium mb-2">
                  Salario promedio mensual del equipo (COP)
                </label>
                <input
                  v-model.number="salarioMensual"
                  type="number"
                  min="1000000"
                  step="100000"
                  class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Ej: 8000000"
                />
              </div>

              <div>
                <label class="block text-white/80 text-sm font-medium mb-2">
                  Número de funcionarios en el equipo
                </label>
                <input
                  v-model.number="funcionarios"
                  type="number"
                  min="1"
                  class="w-full px-4 py-3 rounded-xl bg-gray-900/50 border border-gray-600 text-white focus:border-accent focus:ring-1 focus:ring-accent"
                  placeholder="Ej: 3"
                />
              </div>
            </div>

            <!-- Results -->
            <div class="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-500/30">
              <h3 class="text-xl font-bold text-white mb-6">💸 Pérdidas anuales actuales:</h3>
              
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <span class="text-white/70">Costo por hora:</span>
                  <span class="text-white font-semibold">{{ formatCurrency(costoHora) }}</span>
                </div>

                <div class="flex justify-between items-center">
                  <span class="text-white/70">Total horas anuales:</span>
                  <span class="text-white font-semibold">{{ totalHoras.toLocaleString() }} hrs</span>
                </div>

                <div class="border-t border-white/20 pt-4">
                  <div class="flex justify-between items-center mb-2">
                    <span class="text-red-300 font-medium">Costo tiempo perdido:</span>
                    <span class="text-red-400 font-bold text-lg">{{ formatCurrency(costoTiempo) }}</span>
                  </div>
                </div>

                <div class="flex justify-between items-center">
                  <span class="text-red-300 font-medium">Multas potenciales:</span>
                  <span class="text-red-400 font-bold text-lg">{{ formatCurrency(multasPotenciales) }}</span>
                </div>

                <div class="border-t border-red-400/50 pt-4 bg-red-500/20 rounded-xl p-4 -mx-2">
                  <div class="flex justify-between items-center">
                    <span class="text-white font-bold">TOTAL PÉRDIDAS:</span>
                    <span class="text-red-300 font-black text-2xl">{{ formatCurrency(totalPerdidas) }}</span>
                  </div>
                </div>

                <div class="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                  <div class="text-center">
                    <p class="text-green-300 text-sm mb-2">💰 Ahorro con CiviData:</p>
                    <p class="text-green-400 font-bold text-xl">{{ formatCurrency(ahorroCiviData) }}</p>
                    <p class="text-green-300 text-xs mt-1">Reducción del 85% en tiempo de análisis</p>
                  </div>
                </div>
              </div>

              <!-- CTA -->
              <div class="mt-6 text-center">
                <a 
                  href="#contact" 
                  class="inline-block btn-primary bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-xl"
                >
                  🚀 RECUPERA ESTE DINERO HOY
                </a>
              </div>
            </div>
          </div>

          <!-- Bottom Disclaimer -->
          <div class="mt-8 text-center text-white/60 text-xs">
            * Cálculos basados en promedios del sector público colombiano. Resultados pueden variar según la entidad.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

// Inputs reactivos
const contratos = ref(150)
const horasPorContrato = ref(4)
const salarioMensual = ref(8000000)
const funcionarios = ref(3)

// Cálculos
const costoHora = computed(() => {
  const salarioAnual = salarioMensual.value * 12 * funcionarios.value
  const horasLaboralesAnual = 2080 // 52 semanas * 40 horas
  return salarioAnual / horasLaboralesAnual
})

const totalHoras = computed(() => {
  return contratos.value * horasPorContrato.value
})

const costoTiempo = computed(() => {
  return totalHoras.value * costoHora.value
})

const multasPotenciales = computed(() => {
  // Estimación de multas basada en el tamaño de la entidad
  const baseMulta = contratos.value * 500000 // 500k por contrato mal gestionado
  return Math.min(baseMulta, 2000000000) // Máximo 2 mil millones
})

const totalPerdidas = computed(() => {
  return costoTiempo.value + multasPotenciales.value
})

const ahorroCiviData = computed(() => {
  return totalPerdidas.value * 0.85 // 85% de ahorro
})

// Función para formatear moneda
const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>