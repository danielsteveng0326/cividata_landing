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

const ShieldIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
])

const moduleData = {
  title: 'Gestión de Calidad y Transparencia',
  description: 'Integra herramientas para el seguimiento de indicadores, planes de mejoramiento y auditorías internas. Garantiza el cumplimiento de estándares de calidad.',
  icon: ShieldIcon,
  videoId: '',
  features: [
    {
      title: 'Sistema de Indicadores',
      description: 'Define, mide y monitorea indicadores de gestión alineados con objetivos estratégicos.'
    },
    {
      title: 'Planes de Mejoramiento',
      description: 'Gestiona hallazgos de auditorías y define acciones correctivas con seguimiento.'
    },
    {
      title: 'Auditorías Internas',
      description: 'Programa y ejecuta auditorías con listas de chequeo y registro de evidencias.'
    },
    {
      title: 'Gestión de Riesgos',
      description: 'Identifica, evalúa y mitiga riesgos operacionales y estratégicos.'
    },
    {
      title: 'Documentación de Procesos',
      description: 'Mantén actualizado el mapa de procesos y procedimientos de la entidad.'
    },
    {
      title: 'Cumplimiento Normativo',
      description: 'Verifica el cumplimiento de requisitos legales y normativos aplicables.'
    }
  ],
  benefits: [
    {
      title: 'Mejora Continua',
      description: 'Implementa un ciclo de mejora continua basado en datos y evidencias.'
    },
    {
      title: 'Certificación de Calidad',
      description: 'Facilita la obtención y mantenimiento de certificaciones de calidad.'
    },
    {
      title: 'Reducción de Riesgos',
      description: 'Previene situaciones que puedan afectar el cumplimiento de objetivos.'
    },
    {
      title: 'Transparencia Institucional',
      description: 'Demuestra compromiso con la excelencia y la rendición de cuentas.'
    }
  ]
}
</script>
