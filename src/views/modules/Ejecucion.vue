<template>
  <ModulePageTemplate
    :title="moduleData.title"
    :description="moduleData.description"
    :icon="moduleData.icon"
    :videoId="moduleData.videoId"
    :features="moduleData.features"
    :benefits="moduleData.benefits"
  />
</template>

<script setup>
import { h } from 'vue'
import ModulePageTemplate from '../../components/ModulePageTemplate.vue'

const TrendingIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' })
])

const moduleData = {
  title: 'Módulo de Ejecución y Avance',
  description: 'Evalúa la ejecución presupuestal y física de los proyectos con indicadores visuales en tiempo real. Toma decisiones informadas sobre la inversión pública.',
  icon: TrendingIcon,
  videoId: '',
  features: [
    {
      title: 'Dashboard Ejecutivo',
      description: 'Visualiza el estado de ejecución presupuestal y física de todos los proyectos en un solo lugar.'
    },
    {
      title: 'Seguimiento de Proyectos',
      description: 'Monitorea el avance de cada proyecto con indicadores de cumplimiento y alertas tempranas.'
    },
    {
      title: 'Análisis Presupuestal',
      description: 'Compara la ejecución presupuestal con lo programado y detecta desviaciones.'
    },
    {
      title: 'Indicadores de Gestión',
      description: 'Mide eficiencia, eficacia y efectividad en la ejecución de proyectos.'
    },
    {
      title: 'Reportes Automáticos',
      description: 'Genera informes de avance para diferentes audiencias: alcalde, concejo, ciudadanía.'
    },
    {
      title: 'Integración Financiera',
      description: 'Conecta con sistemas contables para actualización automática de datos presupuestales.'
    }
  ],
  benefits: [
    {
      title: 'Control Presupuestal',
      description: 'Evita sobrecostos y subejecución con monitoreo constante del presupuesto.'
    },
    {
      title: 'Transparencia en la Inversión',
      description: 'Muestra a la ciudadanía cómo se están invirtiendo los recursos públicos.'
    },
    {
      title: 'Toma de Decisiones Ágil',
      description: 'Identifica rápidamente proyectos que requieren ajustes o refuerzos presupuestales.'
    },
    {
      title: 'Rendición de Cuentas',
      description: 'Facilita la presentación de resultados con datos actualizados y confiables.'
    }
  ]
}
</script>
