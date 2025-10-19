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

const ChartIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' })
])

const moduleData = {
  title: 'Observatorio de Plan de Desarrollo',
  description: 'Visualiza el cumplimiento del plan de desarrollo y conecta cada meta con las necesidades reales de la comunidad. Monitorea indicadores, proyectos y avances en tiempo real.',
  icon: ChartIcon,
  videoId: '', // Agregar ID de YouTube cuando esté disponible
  features: [
    {
      title: 'Dashboard Interactivo',
      description: 'Visualiza el estado de cumplimiento de todas las metas del plan de desarrollo en un solo lugar.'
    },
    {
      title: 'Seguimiento de Indicadores',
      description: 'Monitorea indicadores de gestión y resultados con gráficos dinámicos y actualizaciones en tiempo real.'
    },
    {
      title: 'Conexión con Proyectos',
      description: 'Vincula cada meta con los proyectos específicos que contribuyen a su cumplimiento.'
    },
    {
      title: 'Reportes Automáticos',
      description: 'Genera reportes de avance automáticos para rendición de cuentas y seguimiento ciudadano.'
    },
    {
      title: 'Alertas Tempranas',
      description: 'Recibe notificaciones cuando una meta esté en riesgo de incumplimiento.'
    },
    {
      title: 'Participación Ciudadana',
      description: 'Permite que la comunidad consulte el avance de las metas que les interesan.'
    }
  ],
  benefits: [
    {
      title: 'Transparencia Total',
      description: 'Facilita la rendición de cuentas con información clara y accesible para todos los ciudadanos.'
    },
    {
      title: 'Toma de Decisiones Informada',
      description: 'Identifica rápidamente qué áreas necesitan atención prioritaria para cumplir las metas.'
    },
    {
      title: 'Eficiencia Administrativa',
      description: 'Reduce el tiempo dedicado a consolidar información de diferentes fuentes.'
    },
    {
      title: 'Alineación Estratégica',
      description: 'Asegura que todos los proyectos y acciones estén alineados con el plan de desarrollo.'
    }
  ]
}
</script>
