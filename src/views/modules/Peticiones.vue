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

const ClipboardIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' })
])

const moduleData = {
  title: 'Módulo de Derechos de Petición',
  description: 'Automatiza la gestión ciudadana y garantiza respuestas oportunas, trazables y eficientes a todas las solicitudes de la comunidad.',
  icon: ClipboardIcon,
  videoId: '',
  features: [
    {
      title: 'Recepción Multicanal',
      description: 'Recibe peticiones por web, correo electrónico, presencial o cualquier canal habilitado.'
    },
    {
      title: 'Asignación Inteligente',
      description: 'Distribuye automáticamente las peticiones a las dependencias responsables según el tema.'
    },
    {
      title: 'Seguimiento en Tiempo Real',
      description: 'Permite a los ciudadanos consultar el estado de sus peticiones en cualquier momento.'
    },
    {
      title: 'Control de Plazos',
      description: 'Monitorea los términos legales y envía alertas antes de vencimientos.'
    },
    {
      title: 'Plantillas de Respuesta',
      description: 'Agiliza respuestas con plantillas predefinidas para casos comunes.'
    },
    {
      title: 'Estadísticas y Reportes',
      description: 'Analiza tipos de peticiones, tiempos de respuesta y temas más frecuentes.'
    }
  ],
  benefits: [
    {
      title: 'Cumplimiento Legal',
      description: 'Garantiza el respeto a los términos legales de respuesta establecidos por la ley.'
    },
    {
      title: 'Satisfacción Ciudadana',
      description: 'Mejora la experiencia del ciudadano con respuestas rápidas y transparentes.'
    },
    {
      title: 'Trazabilidad Total',
      description: 'Mantén un registro completo de todas las interacciones con la ciudadanía.'
    },
    {
      title: 'Identificación de Necesidades',
      description: 'Detecta problemas recurrentes y oportunidades de mejora en la gestión pública.'
    }
  ]
}
</script>
