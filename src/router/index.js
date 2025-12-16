import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/modulos/plan-desarrollo',
    name: 'PlanDesarrollo',
    component: () => import('../views/modules/PlanDesarrollo.vue'),
    meta: { 
      title: 'Observatorio de Plan de Desarrollo',
      description: 'Visualiza el cumplimiento del plan de desarrollo'
    }
  },
  {
    path: '/modulos/geoportal',
    name: 'Geoportal',
    component: () => import('../views/modules/Geoportal.vue'),
    meta: { 
      title: 'Geoportal',
      description: 'Explora la geografía municipal'
    }
  },
  {
    path: '/modulos/agricultura',
    name: 'Agricultura',
    component: () => import('../views/modules/Agricultura.vue'),
    meta: { 
      title: 'Observatorio de Agricultura',
      description: 'Monitorea la producción agrícola'
    }
  },
  {
    path: '/modulos/contratacion',
    name: 'Contratacion',
    component: () => import('../views/modules/Contratacion.vue'),
    meta: { 
      title: 'SECOP, Colombia Compra Eficiente - Módulo de Contratación Estatal',
      description: 'Integración con SECOP y Colombia Compra Eficiente. Centraliza y analiza contratos públicos, licitaciones y procurement para entidades gubernamentales'
    }
  },
  {
    path: '/modulos/peticiones',
    name: 'Peticiones',
    component: () => import('../views/modules/Peticiones.vue'),
    meta: { 
      title: 'Módulo de Derechos de Petición',
      description: 'Automatiza la gestión ciudadana'
    }
  },
  {
    path: '/modulos/ejecucion',
    name: 'Ejecucion',
    component: () => import('../views/modules/Ejecucion.vue'),
    meta: { 
      title: 'SIGEP, DNP - Módulo de Ejecución y Avance Presupuestal',
      description: 'Integración con SIGEP y DNP para evaluar la ejecución presupuestal y seguimiento de proyectos de inversión pública'
    }
  },
  {
    path: '/modulos/calidad',
    name: 'Calidad',
    component: () => import('../views/modules/Calidad.vue'),
    meta: { 
      title: 'Colombia Compra Eficiente - Gestión de Calidad y Transparencia',
      description: 'Seguimiento de indicadores de transparencia según estándares de Colombia Compra Eficiente, auditorías y control interno gubernamental'
    }
  },
  {
    path: '/modulos/ia',
    name: 'IA',
    component: () => import('../views/modules/IA.vue'),
    meta: {
      title: 'IA SECOP, SIGEP - Asistentes de Inteligencia Artificial Gubernamental',
      description: 'Inteligencia artificial especializada en SECOP, SIGEP, Colombia Compra Eficiente y DNP para optimizar decisiones en contratación pública'
    }
  },
  {
    path: '/paa',
    name: 'PAA',
    component: () => import('../views/PaaLanding.vue'),
    meta: {
      title: 'PAA 2026 SECOP - Plan Anual de Adquisiciones Colombia Compra Eficiente',
      description: 'Descarga automática del Plan Anual de Adquisiciones 2026 desde SECOP. Compatible con Colombia Compra Eficiente y DNP para entidades públicas'
    }
  },
  {
    path: '/calcular',
    name: 'Calculator',
    component: () => import('../views/CalculatorView.vue'),
    meta: {
      title: 'Calculadora de Precios CiviData - Cotización Personalizada B2G',
      description: 'Calcula el precio exacto de CiviData para tu entidad pública. Cotización personalizada basada en necesidades específicas y presupuesto.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title and meta description
router.beforeEach((to, from, next) => {
  // Update title
  document.title = to.meta.title 
    ? `${to.meta.title} | CiviData` 
    : 'CiviData | SECOP, Colombia Compra Eficiente, SIGEP, DNP - Datos que transforman la contratación pública'
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription && to.meta.description) {
    metaDescription.setAttribute('content', to.meta.description)
  }
  
  // Update Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]')
  const ogDescription = document.querySelector('meta[property="og:description"]')
  const twitterTitle = document.querySelector('meta[property="twitter:title"]')
  const twitterDescription = document.querySelector('meta[property="twitter:description"]')
  
  if (ogTitle) {
    ogTitle.setAttribute('content', document.title)
  }
  
  if (ogDescription && to.meta.description) {
    ogDescription.setAttribute('content', to.meta.description)
  }
  
  if (twitterTitle) {
    twitterTitle.setAttribute('content', document.title)
  }
  
  if (twitterDescription && to.meta.description) {
    twitterDescription.setAttribute('content', to.meta.description)
  }
  
  next()
})

export default router
