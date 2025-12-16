<template>
  <div class="min-h-screen bg-gradient-dark py-16 px-4">
    <!-- Header -->
    <div class="max-w-6xl mx-auto mb-12">
      <div class="text-center mb-8">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4">
          💰 Calculadora de Precios
          <br />
          <span class="gradient-text">CiviData B2G</span>
        </h1>
        <p class="text-xl text-white/70 max-w-3xl mx-auto">
          Calcula el precio exacto para tu entidad basado en necesidades específicas
        </p>
      </div>
    </div>

    <!-- Calculator -->
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-8">
        <!-- Input Form -->
        <div class="glass-card">
          <h2 class="text-2xl font-bold text-white mb-6">📋 Información de tu Entidad</h2>
          
          <!-- Tipo de Entidad -->
          <div class="mb-6">
            <label class="block text-white/80 text-sm font-medium mb-3">
              Tipo de Entidad *
            </label>
            <div class="grid grid-cols-2 gap-3">
              <label 
                v-for="tipo in tiposEntidad" 
                :key="tipo.value"
                class="cursor-pointer"
              >
                <input
                  v-model="calculator.tipoEntidad"
                  type="radio"
                  :value="tipo.value"
                  class="sr-only"
                />
                <div
                  class="p-4 rounded-xl border-2 text-center transition-all duration-300"
                  :class="calculator.tipoEntidad === tipo.value
                    ? 'border-accent bg-accent/20 text-white'
                    : 'border-gray-600 bg-gray-900/50 text-white/70 hover:border-accent/50'"
                >
                  <div class="text-2xl mb-2">{{ tipo.emoji }}</div>
                  <div class="font-medium text-sm">{{ tipo.label }}</div>
                </div>
              </label>
            </div>
          </div>

          <!-- Categoría Municipio (solo para entidades municipales) -->
          <div v-if="requiereCategoriaMunicipio" class="mb-6">
            <label class="block text-white/80 text-sm font-medium mb-3">
              Categoría de Municipio *
            </label>
            <div class="grid grid-cols-2 gap-3">
              <label
                v-for="categoria in categoriasMunicipio"
                :key="categoria.value"
                class="cursor-pointer"
              >
                <input
                  v-model="calculator.categoriaMunicipio"
                  type="radio"
                  :value="categoria.value"
                  class="sr-only"
                />
                <div
                  class="p-3 rounded-xl border-2 text-center transition-all duration-300"
                  :class="calculator.categoriaMunicipio === categoria.value
                    ? 'border-accent bg-accent/20 text-white'
                    : 'border-gray-600 bg-gray-900/50 text-white/70 hover:border-accent/50'"
                >
                  <div class="font-medium text-sm">{{ categoria.label }}</div>
                  <div class="text-xs opacity-70">{{ categoria.ingresos }}</div>
                </div>
              </label>
            </div>
          </div>

          <!-- Urgencia -->
          <div class="mb-6">
            <label class="block text-white/80 text-sm font-medium mb-3">
              Nivel de Urgencia
            </label>
            <div class="grid grid-cols-2 gap-3">
              <label 
                v-for="urgencia in nivelesUrgencia" 
                :key="urgencia.value"
                class="cursor-pointer"
              >
                <input
                  v-model="calculator.urgencia"
                  type="radio"
                  :value="urgencia.value"
                  class="sr-only"
                />
                <div 
                  class="p-3 rounded-xl border-2 text-center transition-all duration-300"
                  :class="calculator.urgencia === urgencia.value 
                    ? 'border-accent bg-accent/20 text-white' 
                    : 'border-gray-600 bg-gray-900/50 text-white/70 hover:border-accent/50'"
                >
                  <div class="text-lg mb-1">{{ urgencia.emoji }}</div>
                  <div class="font-medium text-sm">{{ urgencia.label }}</div>
                  <div class="text-xs opacity-70">{{ urgencia.multiplicador }}</div>
                </div>
              </label>
            </div>
          </div>

          <!-- Módulos -->
          <div class="mb-6">
            <label class="block text-white/80 text-sm font-medium mb-3">
              Módulos Requeridos
            </label>
            <div class="space-y-3">
              <label 
                v-for="modulo in modulos" 
                :key="modulo.id"
                class="flex items-center cursor-pointer"
              >
                <input
                  v-model="calculator.modulosSeleccionados"
                  type="checkbox"
                  :value="modulo.id"
                  class="w-4 h-4 text-accent border-gray-600 rounded focus:ring-accent focus:ring-2 bg-gray-900"
                />
                <div class="ml-3 flex-1">
                  <div class="text-white font-medium text-sm">{{ modulo.nombre }}</div>
                  <div class="text-white/60 text-xs">{{ modulo.descripcion }}</div>
                </div>
                <div class="text-accent font-bold text-sm">
                  +{{ formatCurrency(modulo.costo) }}
                </div>
              </label>
            </div>
          </div>

          <!-- Extras -->
          <div class="mb-6">
            <label class="block text-white/80 text-sm font-medium mb-3">
              Servicios Adicionales
            </label>
            <div class="space-y-3">
              <label 
                v-for="extra in extras" 
                :key="extra.id"
                class="flex items-center cursor-pointer"
              >
                <input
                  v-model="calculator.extrasSeleccionados"
                  type="checkbox"
                  :value="extra.id"
                  class="w-4 h-4 text-accent border-gray-600 rounded focus:ring-accent focus:ring-2 bg-gray-900"
                />
                <div class="ml-3 flex-1">
                  <div class="text-white font-medium text-sm">{{ extra.nombre }}</div>
                  <div class="text-white/60 text-xs">{{ extra.descripcion }}</div>
                </div>
                <div class="text-accent font-bold text-sm">
                  +{{ formatCurrency(extra.costo) }}
                </div>
              </label>
            </div>
          </div>
        </div>

        <!-- Results Panel -->
        <div class="space-y-6">
          <!-- Recomendación Tier -->
          <div class="glass-card">
            <h3 class="text-xl font-bold text-white mb-4">🎯 Tier Recomendado</h3>
            <div 
              class="p-4 rounded-xl border-2"
              :class="`border-${tierRecomendado.color} bg-${tierRecomendado.color}/20`"
            >
              <div class="flex items-center justify-between mb-3">
                <div>
                  <div class="text-xl font-bold text-white">{{ tierRecomendado.nombre }}</div>
                  <div class="text-sm opacity-80">{{ tierRecomendado.descripcion }}</div>
                </div>
                <div class="text-2xl">{{ tierRecomendado.emoji }}</div>
              </div>
              <div class="text-2xl font-black text-white">
                {{ formatCurrency(tierRecomendado.precioBase) }}/año
              </div>
            </div>
          </div>

          <!-- Desglose de Costos -->
          <div class="glass-card">
            <h3 class="text-xl font-bold text-white mb-4">💰 Desglose de Costos</h3>
            
            <div class="space-y-3">
              <!-- Precio Base -->
              <div class="flex justify-between items-center py-2">
                <span class="text-white/70">Precio Base ({{ tierRecomendado.nombre }})</span>
                <span class="text-white font-semibold">{{ formatCurrency(tierRecomendado.precioBase) }}</span>
              </div>

              <!-- Multiplicador Urgencia -->
              <div v-if="multiplicadorUrgencia > 1" class="flex justify-between items-center py-2">
                <span class="text-orange-300">Urgencia {{ calculator.urgencia }} (+{{ Math.round((multiplicadorUrgencia - 1) * 100) }}%)</span>
                <span class="text-orange-300 font-semibold">+{{ formatCurrency((tierRecomendado.precioBase * (multiplicadorUrgencia - 1))) }}</span>
              </div>

              <!-- Módulos -->
              <div v-for="moduloId in calculator.modulosSeleccionados" :key="moduloId">
                <div class="flex justify-between items-center py-2">
                  <span class="text-blue-300">{{ getModulo(moduloId).nombre }}</span>
                  <span class="text-blue-300 font-semibold">+{{ formatCurrency(getModulo(moduloId).costo) }}</span>
                </div>
              </div>

              <!-- Extras -->
              <div v-for="extraId in calculator.extrasSeleccionados" :key="extraId">
                <div class="flex justify-between items-center py-2">
                  <span class="text-green-300">{{ getExtra(extraId).nombre }}</span>
                  <span class="text-green-300 font-semibold">+{{ formatCurrency(getExtra(extraId).costo) }}</span>
                </div>
              </div>

              <!-- Total Suscripción -->
              <div class="border-t border-white/20 pt-3">
                <div class="flex justify-between items-center">
                  <span class="text-white font-bold text-lg">Suscripción Anual</span>
                  <span class="text-accent font-black text-2xl">{{ formatCurrency(precioSuscripcion) }}</span>
                </div>
              </div>

              <!-- Implementación -->
              <div class="flex justify-between items-center py-2 text-yellow-300">
                <span>Implementación (una vez)</span>
                <span class="font-semibold">{{ formatCurrency(precioImplementacion) }}</span>
              </div>

              <!-- Total Año 1 -->
              <div class="border-t border-accent/30 pt-3 bg-accent/10 rounded-lg p-3">
                <div class="flex justify-between items-center">
                  <span class="text-white font-bold text-xl">TOTAL AÑO 1</span>
                  <span class="text-accent font-black text-3xl">{{ formatCurrency(precioTotal) }}</span>
                </div>
                <div class="text-center mt-2 text-white/60 text-sm">
                  Años siguientes: {{ formatCurrency(precioSuscripcion) }}/año
                </div>
              </div>
            </div>
          </div>

          <!-- ROI Analysis -->
          <div class="glass-card">
            <h3 class="text-xl font-bold text-white mb-4">📊 Análisis ROI</h3>
            
            <div class="space-y-4">
              <div class="bg-red-500/20 rounded-lg p-4 border border-red-500/30">
                <div class="text-red-300 font-medium mb-2">💸 Pérdidas actuales estimadas:</div>
                <div class="text-red-400 font-bold text-xl">{{ formatCurrency(perdidasEstimadas) }}/año</div>
                <div class="text-red-300 text-sm mt-1">Por análisis manual + riesgo multas</div>
              </div>

              <div class="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                <div class="text-green-300 font-medium mb-2">💰 Ahorro con CiviData:</div>
                <div class="text-green-400 font-bold text-xl">{{ formatCurrency(ahorroAnual) }}/año</div>
                <div class="text-green-300 text-sm mt-1">85% reducción en tiempo + eliminación riesgos</div>
              </div>

              <div class="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30">
                <div class="text-blue-300 font-medium mb-2">⚡ ROI Proyectado:</div>
                <div class="text-blue-400 font-bold text-xl">{{ Math.round((ahorroAnual / precioTotal) * 100) }}%</div>
                <div class="text-blue-300 text-sm mt-1">Se paga solo en {{ Math.ceil((precioTotal / ahorroAnual) * 12) }} meses</div>
              </div>
            </div>
          </div>

          <!-- Action Button -->
          <div class="glass-card text-center">
            <h3 class="text-lg font-bold text-white mb-4">🚀 Propuesta Personalizada</h3>
            <button
              @click="generarPropuesta"
              class="w-full btn-primary bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 text-white font-bold px-6 py-4 text-lg"
            >
              GENERAR PROPUESTA OFICIAL
            </button>
            <p class="text-white/60 text-sm mt-3">
              Enviaremos la cotización detallada a tu email
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const calculator = ref({
  tipoEntidad: 'municipio',
  categoriaMunicipio: 'categoria_3',
  urgencia: 'alta',
  modulosSeleccionados: ['paa', 'transparencia'],
  extrasSeleccionados: []
})

const tiposEntidad = [
  { value: 'municipio', label: 'Municipio', emoji: '🏘️', requiereCategoria: true },
  { value: 'ciudad_intermedia', label: 'Ciudad Intermedia', emoji: '🏙️', requiereCategoria: true },
  { value: 'ciudad', label: 'Ciudad', emoji: '🌆', requiereCategoria: true },
  { value: 'ese', label: 'ESE', emoji: '🏥', requiereCategoria: false },
  { value: 'esp', label: 'ESP', emoji: '💧', requiereCategoria: false },
  { value: 'edu', label: 'EDU', emoji: '🎓', requiereCategoria: false }
]

const categoriasMunicipio = [
  { value: 'categoria_especial', label: 'Especial', ingresos: '> 600K SMLMV' },
  { value: 'categoria_1', label: 'Categoría 1', ingresos: '100K-600K SMLMV' },
  { value: 'categoria_2', label: 'Categoría 2', ingresos: '50K-100K SMLMV' },
  { value: 'categoria_3', label: 'Categoría 3', ingresos: '30K-50K SMLMV' },
  { value: 'categoria_4', label: 'Categoría 4', ingresos: '25K-30K SMLMV' },
  { value: 'categoria_5', label: 'Categoría 5', ingresos: '15K-25K SMLMV' },
  { value: 'categoria_6', label: 'Categoría 6', ingresos: '< 15K SMLMV' }
]

const nivelesUrgencia = [
  { value: 'baja', label: 'Baja', multiplicador: '+0%', emoji: '📅' },
  { value: 'media', label: 'Media', multiplicador: '+25%', emoji: '⚡' },
  { value: 'alta', label: 'Alta', multiplicador: '+50%', emoji: '🚨' },
  { value: 'critica', label: 'Crítica', multiplicador: '+75%', emoji: '🆘' }
]

const modulos = [
  { id: 'paa', nombre: 'PAA Automático', descripcion: 'Generación PAA con IA', costo: 0 },
  { id: 'transparencia', nombre: 'Transparencia', descripcion: 'Cumplimiento normativo', costo: 8000000 },
  { id: 'secop', nombre: 'Análisis SECOP', descripcion: 'Integración y análisis', costo: 12000000 },
  { id: 'sigep', nombre: 'Integración SIGEP', descripcion: 'Gestión empleo público', costo: 15000000 },
  { id: 'peticiones', nombre: 'Derechos Petición', descripcion: 'Automatización respuestas', costo: 10000000 },
  { id: 'auditoria', nombre: 'Auditoría IA', descripcion: 'Detección automática riesgos', costo: 18000000 },
  { id: 'reportes', nombre: 'Reportes Avanzados', descripción: 'Dashboard ejecutivo', costo: 6000000 },
  { id: 'mobile', nombre: 'App Móvil', descripcion: 'Acceso desde celular', costo: 5000000 }
]

const extras = [
  { id: 'implementacion_express', nombre: 'Implementación Express', descripcion: '15 días vs 45 días', costo: 8000000 },
  { id: 'capacitacion_presencial', nombre: 'Capacitación Presencial', descripcion: 'En tu entidad', costo: 8000000 },
  { id: 'consultoria', nombre: 'Consultoría Incluida', descripcion: '20 horas/año', costo: 15000000 },
  { id: 'soporte_24x7', nombre: 'Soporte 24/7', descripcion: 'Respuesta inmediata', costo: 12000000 },
  { id: 'customizacion', nombre: 'Customización', descripcion: 'Adaptación específica', costo: 20000000 }
]

const tiers = {
  municipio: { nombre: 'Esencial', precioBase: 12000000, color: 'blue-500', emoji: '⚡', descripcion: 'Para municipios' },
  ciudad_intermedia: { nombre: 'Profesional', precioBase: 35000000, color: 'purple-500', emoji: '🚀', descripcion: 'Para ciudades intermedias' },
  ciudad: { nombre: 'Enterprise', precioBase: 85000000, color: 'orange-500', emoji: '👑', descripcion: 'Para ciudades' },
  ese: { nombre: 'ESE', precioBase: 45000000, color: 'green-500', emoji: '🏥', descripcion: 'Para Empresas Sociales del Estado' },
  esp: { nombre: 'ESP', precioBase: 55000000, color: 'cyan-500', emoji: '💧', descripcion: 'Para Empresas de Servicios Públicos' },
  edu: { nombre: 'EDU', precioBase: 40000000, color: 'yellow-500', emoji: '🎓', descripcion: 'Para entidades educativas' }
}

const requiereCategoriaMunicipio = computed(() => {
  const tipoActual = tiposEntidad.find(t => t.value === calculator.value.tipoEntidad)
  return tipoActual?.requiereCategoria || false
})

const tierRecomendado = computed(() => tiers[calculator.value.tipoEntidad])

const multiplicadorUrgencia = computed(() => {
  const multipliers = { baja: 1, media: 1.25, alta: 1.5, critica: 1.75 }
  return multipliers[calculator.value.urgencia] || 1
})

const costoModulos = computed(() => {
  return calculator.value.modulosSeleccionados.reduce((total, moduloId) => {
    const modulo = modulos.find(m => m.id === moduloId)
    return total + (modulo ? modulo.costo : 0)
  }, 0)
})

const costoExtras = computed(() => {
  return calculator.value.extrasSeleccionados.reduce((total, extraId) => {
    const extra = extras.find(e => e.id === extraId)
    return total + (extra ? extra.costo : 0)
  }, 0)
})

const precioSuscripcion = computed(() => {
  const base = tierRecomendado.value.precioBase
  const conMultiplicadores = base * multiplicadorUrgencia.value
  return conMultiplicadores + costoModulos.value + costoExtras.value
})

const precioImplementacion = computed(() => {
  return Math.round(precioSuscripcion.value * 0.3) // 30% del precio anual
})

const precioTotal = computed(() => {
  return precioSuscripcion.value + precioImplementacion.value
})

const perdidasEstimadas = computed(() => {
  // Estimación base de pérdidas según tipo de entidad
  const basesPerdidas = {
    municipio: 25000000,
    ciudad_intermedia: 75000000,
    ciudad: 180000000,
    ese: 90000000,
    esp: 120000000,
    edu: 60000000
  }
  return basesPerdidas[calculator.value.tipoEntidad] || 50000000
})

const ahorroAnual = computed(() => {
  return Math.round(perdidasEstimadas.value * 0.85) // 85% de ahorro
})

const getModulo = (id) => modulos.find(m => m.id === id)
const getExtra = (id) => extras.find(e => e.id === id)

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

const generarPropuesta = () => {
  const propuesta = {
    entidad: calculator.value,
    tier: tierRecomendado.value.nombre,
    precioTotal: precioTotal.value,
    precioSuscripcion: precioSuscripcion.value,
    roi: Math.round((ahorroAnual.value / precioTotal.value) * 100),
    timestamp: new Date().toISOString()
  }
  
  console.log('Propuesta generada:', propuesta)
  
  // Aquí iría la lógica para enviar la propuesta
  alert(`Propuesta generada para ${tierRecomendado.value.nombre}: ${formatCurrency(precioTotal.value)}. Se enviará por email.`)
}
</script>

<style scoped>
input[type="radio"]:checked + div {
  transform: scale(1.05);
}

.glass-card {
  @apply bg-gradient-to-br from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6;
}

.btn-primary {
  @apply rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25;
}

.gradient-text {
  @apply bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text;
}

.bg-gradient-dark {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
}
</style>