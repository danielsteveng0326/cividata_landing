<template>
  <section class="py-20 px-6 bg-gray-50 relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute top-10 left-10 w-24 h-24 bg-teal-100 rounded-full blur-xl opacity-60"></div>
    <div class="absolute bottom-20 right-20 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-40"></div>
    
    <div class="container mx-auto max-w-7xl">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          ¿Qué puedes hacer con 
          <span class="text-blue-600">
            civiData?
          </span>
        </h2>
        
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Una plataforma completa que con la ayuda de inteligencia artificial,
          hace que hace tu gestión contractual sea fácil, ágil, segura y transparente.
        </p>
      </div>

      <!-- Features Image Section -->
      <div class="flex justify-center mb-16">
        <div class="relative max-w-4xl w-full">
          <!-- Main image container -->
          <div class="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <img src="/features.png" 
                 alt="CiviData Features Dashboard" 
                 class="w-full h-auto rounded-2xl object-cover transition-transform duration-700 hover:scale-150" />
          </div>
          
          <!-- Subtle background decoration -->
          <div class="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 rounded-3xl rotate-1 -z-10 opacity-60"></div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-2 gap-8 mb-20">
        <div v-for="(feature, index) in features" :key="index" 
             class="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200">
          <!-- Icon -->
          <div class="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
            <component :is="feature.icon" class="w-6 h-6 text-white" />
          </div>
          
          <!-- Content -->
          <div>
            <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ feature.desc }}
            </p>
          </div>
        </div>
      </div>

      <!-- Additional Benefits Section -->
      <div class="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Implementación Rápida</h3>
            <p class="text-gray-600"> </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Seguridad Garantizada</h3>
            <p class="text-gray-600"> </p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Soporte 24/7</h3>
            <p class="text-gray-600"> </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

// Icon components as render functions
const DocumentTextIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'w-6 h-6'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
  })
])

const ChartBarIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'w-6 h-6'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  })
])

const LightBulbIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'w-6 h-6'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  })
])

const ClipboardListIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'w-6 h-6'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  })
])

const CpuChipIcon = () => h('svg', {
  fill: 'none',
  stroke: 'currentColor',
  viewBox: '0 0 24 24',
  class: 'w-6 h-6'
}, [
  h('path', {
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    'stroke-width': '2',
    d: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z'
  })
])

const features = [
  { 
    title: 'Automatización de reportes', 
    desc: 'Genera informes listos para entes de control sin esfuerzo. Sistema inteligente que cumple con todos los requerimientos normativos.',
    icon: DocumentTextIcon
  },
  { 
    title: 'Visualización en tiempo real', 
    desc: 'Consulta la gestión contractual desde un tablero actualizado. Dashboards interactivos con métricas clave del proceso.',
    icon: ChartBarIcon
  },
  { 
    title: 'Decisiones basadas en datos', 
    desc: 'Analiza indicadores clave desde tableros interactivos. Inteligencia de negocio aplicada a la contratación pública.',
    icon: LightBulbIcon
  },
  { 
    title: 'Generación de actas y reportes', 
    desc: 'Crea actas automáticas listas para firmar y archivar. Documentación completa con firma digital.',
    icon: ClipboardListIcon
  }
]
</script>