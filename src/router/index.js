import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/paa',
    name: 'PAA',
    component: () => import('../views/PAA.vue'),
    meta: {
      title: 'Plan Anual de Adquisiciones',
      description: 'Descarga automática del PAA de cualquier entidad pública de Colombia'
    }
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
      title: 'Módulo de Contratación Estatal',
      description: 'Centraliza y analiza contratos públicos'
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
      title: 'Módulo de Ejecución y Avance',
      description: 'Evalúa la ejecución presupuestal'
    }
  },
  {
    path: '/modulos/calidad',
    name: 'Calidad',
    component: () => import('../views/modules/Calidad.vue'),
    meta: { 
      title: 'Gestión de Calidad y Transparencia',
      description: 'Seguimiento de indicadores y auditorías'
    }
  },
  {
    path: '/modulos/ia',
    name: 'IA',
    component: () => import('../views/modules/IA.vue'),
    meta: { 
      title: 'Asistentes de IA',
      description: 'Inteligencia artificial para decisiones'
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

// Update document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title 
    ? `${to.meta.title} | CiviData` 
    : 'CiviData | Datos que transforman la gestión pública'
  next()
})

export default router
