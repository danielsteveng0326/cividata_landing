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

const LeafIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' })
])

const moduleData = {
  title: 'Observatorio de Agricultura',
  description: 'Monitorea la producción agrícola, indicadores ambientales y bienestar animal con datos actualizados y confiables. Impulsa el desarrollo rural sostenible.',
  icon: LeafIcon,
  videoId: '',
  features: [
    {
      title: 'Registro de Productores',
      description: 'Mantén una base de datos actualizada de todos los productores agrícolas del municipio.'
    },
    {
      title: 'Seguimiento de Cultivos',
      description: 'Monitorea áreas cultivadas, tipos de cultivos y estimaciones de producción por temporada.'
    },
    {
      title: 'Indicadores Ambientales',
      description: 'Rastrea el uso de recursos hídricos, calidad del suelo y prácticas sostenibles.'
    },
    {
      title: 'Bienestar Animal',
      description: 'Registra y monitorea el estado de salud y condiciones de la ganadería local.'
    },
    {
      title: 'Alertas Fitosanitarias',
      description: 'Recibe notificaciones sobre plagas, enfermedades o condiciones climáticas adversas.'
    },
    {
      title: 'Estadísticas de Producción',
      description: 'Genera reportes de producción agrícola y pecuaria para análisis y planificación.'
    }
  ],
  benefits: [
    {
      title: 'Desarrollo Rural',
      description: 'Identifica oportunidades para apoyar a los productores y mejorar la productividad.'
    },
    {
      title: 'Seguridad Alimentaria',
      description: 'Planifica estrategias para garantizar el abastecimiento local de alimentos.'
    },
    {
      title: 'Sostenibilidad Ambiental',
      description: 'Promueve prácticas agrícolas responsables que protejan los recursos naturales.'
    },
    {
      title: 'Toma de Decisiones Basada en Datos',
      description: 'Diseña políticas públicas agrícolas fundamentadas en información real y actualizada.'
    }
  ]
}
</script>
