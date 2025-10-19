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

const MapIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7' })
])

const moduleData = {
  title: 'Geoportal',
  description: 'Explora la geografía municipal con información útil sobre infraestructura, turismo, servicios y recursos naturales. Visualiza datos geoespaciales de forma interactiva.',
  icon: MapIcon,
  videoId: '',
  features: [
    {
      title: 'Mapas Interactivos',
      description: 'Navega por mapas dinámicos con capas de información personalizables según tus necesidades.'
    },
    {
      title: 'Catálogo de Capas',
      description: 'Accede a múltiples capas de información: vías, servicios públicos, zonas de riesgo, turismo y más.'
    },
    {
      title: 'Análisis Espacial',
      description: 'Realiza análisis de proximidad, áreas de influencia y cruces de información geográfica.'
    },
    {
      title: 'Consulta de Predios',
      description: 'Busca información catastral y de uso de suelo de cualquier predio del municipio.'
    },
    {
      title: 'Rutas Turísticas',
      description: 'Visualiza y promociona los atractivos turísticos del municipio con rutas sugeridas.'
    },
    {
      title: 'Exportación de Datos',
      description: 'Descarga mapas e información geográfica en diferentes formatos para análisis externos.'
    }
  ],
  benefits: [
    {
      title: 'Planificación Territorial',
      description: 'Toma decisiones informadas sobre ordenamiento territorial y desarrollo urbano.'
    },
    {
      title: 'Gestión de Emergencias',
      description: 'Identifica zonas de riesgo y planifica respuestas ante emergencias de forma eficiente.'
    },
    {
      title: 'Promoción Turística',
      description: 'Atrae visitantes mostrando los atractivos del municipio de forma visual y atractiva.'
    },
    {
      title: 'Transparencia en Información',
      description: 'Permite que ciudadanos y empresas accedan fácilmente a información geográfica oficial.'
    }
  ]
}
</script>
