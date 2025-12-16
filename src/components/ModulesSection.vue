<template>
  <section id="modules" class="relative py-16 sm:py-24 md:py-32 overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-gradient-radial opacity-30"></div>
    
    <div class="section-container relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0">
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          <span class="gradient-text">Nuestros Módulos</span>
          <br />
          <span class="text-white">Inteligentes</span>
        </h2>
        <p class="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
          Soluciones integradas que transforman la forma en que los gobiernos gestionan información y toman decisiones.
        </p>
      </div>

      <!-- Modules Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
        <router-link
          v-for="(module, index) in modules" 
          :key="index"
          :to="module.route"
          class="glass-card group cursor-pointer block py-6 sm:py-8"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Icon -->
          <div class="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-accent rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
            <component :is="module.icon" class="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          </div>

          <!-- Content -->
          <h3 class="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-accent transition-colors duration-300">
            {{ module.name }}
          </h3>
          <p class="text-white/60 text-sm leading-relaxed">
            {{ module.description }}
          </p>

          <!-- Hover Arrow -->
          <div class="mt-4 sm:mt-6 flex items-center text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span class="text-xs sm:text-sm font-medium">Conocer más</span>
            <svg class="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { h } from 'vue'

// Simple SVG icon components
const ChartIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
])

const MapIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' })
])

const LeafIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' })
])

const DocumentIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
])

const ClipboardIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' })
])

const TrendingIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' })
])

const ShieldIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
])

const SparklesIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' })
])

const modules = [
  /*{
    name: 'Observatorio de Plan de Desarrollo',
    description: 'Visualiza el cumplimiento del plan de desarrollo y conecta cada meta con las necesidades reales de la comunidad.',
    icon: ChartIcon,
    route: '/modulos/plan-desarrollo'
  },
  {
    name: 'Geoportal',
    description: 'Explora la geografía municipal con información útil sobre infraestructura, turismo, servicios y recursos naturales.',
    icon: MapIcon,
    route: '/modulos/geoportal'
  },
  {
    name: 'Observatorio de Agricultura',
    description: 'Monitorea la producción agrícola, indicadores ambientales y bienestar animal con datos actualizados y confiables.',
    icon: LeafIcon,
    route: '/modulos/agricultura'
  },*/
  {
    name: 'Módulo de Contratación Estatal',
    description: 'Centraliza, analiza y visualiza los contratos públicos para mejorar la eficiencia, el control y la transparencia.',
    icon: DocumentIcon,
    route: '/modulos/contratacion'
  },
  {
    name: 'Módulo de Derechos de Petición',
    description: 'Automatiza la gestión ciudadana y garantiza respuestas oportunas, trazables y eficientes.',
    icon: ClipboardIcon,
    route: '/modulos/peticiones'
  },
  {
    name: 'Módulo de Cobro Coactivo Inteligente',
    description: 'Unifica y centraliza los procesos de cobro coactivo con indicadores georeferenciados en tiempo real.',
    icon: TrendingIcon,
    route: '/modulos/ejecucion'
  }/*,
  {
    name: 'Gestión de Calidad y Transparencia',
    description: 'Integra herramientas para el seguimiento de indicadores, planes de mejoramiento y auditorías internas.',
    icon: ShieldIcon,
    route: '/modulos/calidad'
  },
  {
    name: 'Asistentes de IA',
    description: 'Asistentes inteligentes para apoyar la toma de decisiones y la formulación de documentos contractuales.',
    icon: SparklesIcon,
    route: '/modulos/ia'
  }*/
]
</script>
