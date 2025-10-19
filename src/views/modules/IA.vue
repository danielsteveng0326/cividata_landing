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

const SparklesIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' })
])

const moduleData = {
  title: 'Asistentes de IA',
  description: 'Asistentes inteligentes para apoyar la toma de decisiones y la formulación de documentos contractuales. Potencia tu gestión con inteligencia artificial.',
  icon: SparklesIcon,
  videoId: '',
  features: [
    {
      title: 'Asistente de Contratación',
      description: 'Genera estudios previos, pliegos de condiciones y minutas contractuales con IA.'
    },
    {
      title: 'Análisis Predictivo',
      description: 'Predice tendencias y patrones en datos históricos para anticipar necesidades.'
    },
    {
      title: 'Búsqueda Inteligente',
      description: 'Encuentra información relevante en documentos y bases de datos usando lenguaje natural.'
    },
    {
      title: 'Recomendaciones Automáticas',
      description: 'Recibe sugerencias basadas en mejores prácticas y experiencias previas.'
    },
    {
      title: 'Procesamiento de Lenguaje',
      description: 'Analiza y extrae información clave de documentos extensos automáticamente.'
    },
    {
      title: 'Chatbot Ciudadano',
      description: 'Asistente virtual que responde preguntas frecuentes de la ciudadanía 24/7.'
    }
  ],
  benefits: [
    {
      title: 'Ahorro de Tiempo',
      description: 'Reduce drásticamente el tiempo dedicado a tareas repetitivas y documentación.'
    },
    {
      title: 'Reducción de Errores',
      description: 'Minimiza errores humanos en la elaboración de documentos técnicos y legales.'
    },
    {
      title: 'Decisiones Basadas en Datos',
      description: 'Aprovecha el análisis de grandes volúmenes de información para decidir mejor.'
    },
    {
      title: 'Innovación Pública',
      description: 'Posiciona tu entidad a la vanguardia de la transformación digital del Estado.'
    }
  ]
}
</script>
