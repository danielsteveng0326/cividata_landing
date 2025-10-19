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

const DocumentIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
])

const moduleData = {
  title: 'Módulo de Contratación Estatal',
  description: 'Centraliza, analiza y visualiza los contratos públicos para mejorar la eficiencia, el control y la transparencia en la gestión contractual.',
  icon: DocumentIcon,
  videoId: '',
  features: [
    {
      title: 'Gestión Integral de Contratos',
      description: 'Administra todo el ciclo de vida contractual desde la planeación hasta la liquidación.'
    },
    {
      title: 'Análisis de Datos',
      description: 'Identifica patrones, riesgos y oportunidades de mejora en la contratación pública.'
    },
    {
      title: 'Dashboard de Control',
      description: 'Visualiza el estado de todos los contratos, plazos, pagos y cumplimiento en tiempo real.'
    },
    {
      title: 'Alertas Automáticas',
      description: 'Recibe notificaciones sobre vencimientos, incumplimientos o situaciones que requieren atención.'
    },
    {
      title: 'Integración con SECOP',
      description: 'Sincroniza información con la plataforma nacional de contratación pública.'
    },
    {
      title: 'Reportes de Transparencia',
      description: 'Genera reportes públicos sobre contratación para rendición de cuentas ciudadana.'
    }
  ],
  benefits: [
    {
      title: 'Mayor Transparencia',
      description: 'Facilita el acceso ciudadano a información sobre cómo se invierten los recursos públicos.'
    },
    {
      title: 'Control y Seguimiento',
      description: 'Reduce riesgos de incumplimiento y mejora la supervisión de contratos.'
    },
    {
      title: 'Eficiencia Administrativa',
      description: 'Automatiza procesos repetitivos y reduce tiempos de gestión contractual.'
    },
    {
      title: 'Toma de Decisiones Estratégicas',
      description: 'Analiza históricos de contratación para optimizar futuras adquisiciones.'
    }
  ]
}
</script>
