import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export function useSEO() {
  const route = useRoute()
  
  // SEO keywords mapping for each route
  const seoData = {
    '/': {
      keywords: 'SECOP, Colombia Compra Eficiente, SIGEP, DNP, CiviData, contratación pública, datos inteligentes, inteligencia artificial, gobierno digital, transparencia, Colombia',
      schema: {
        '@type': 'WebPage',
        name: 'CiviData - SECOP, Colombia Compra Eficiente, SIGEP',
        description: 'Plataforma líder especializada en SECOP, Colombia Compra Eficiente, SIGEP y DNP para transformar la contratación pública colombiana'
      }
    },
    '/modulos/contratacion': {
      keywords: 'SECOP módulo contratación, Colombia Compra Eficiente integración, contratos públicos, licitaciones Colombia, procurement analytics, contratación estatal',
      schema: {
        '@type': 'SoftwareApplication',
        name: 'Módulo SECOP Contratación CiviData',
        description: 'Módulo especializado para SECOP y Colombia Compra Eficiente, análisis de contratos públicos y licitaciones'
      }
    },
    '/modulos/ejecucion': {
      keywords: 'SIGEP ejecución presupuestal, DNP seguimiento proyectos, presupuesto público Colombia, monitoreo inversión pública',
      schema: {
        '@type': 'SoftwareApplication',
        name: 'Módulo SIGEP Ejecución Presupuestal',
        description: 'Integración con SIGEP y DNP para seguimiento de ejecución presupuestal y proyectos de inversión'
      }
    },
    '/paa': {
      keywords: 'PAA 2026 SECOP, Plan Anual Adquisiciones, Colombia Compra Eficiente PAA, descarga automática PAA, entidades públicas Colombia',
      schema: {
        '@type': 'WebApplication',
        name: 'PAA 2026 SECOP - Descarga Automática',
        description: 'Descarga automática del Plan Anual de Adquisiciones 2026 desde SECOP, compatible con Colombia Compra Eficiente'
      }
    }
  }
  
  const updateSEOTags = () => {
    const currentSEO = seoData[route.path] || seoData['/']
    
    // Update keywords meta tag
    const keywordsTag = document.querySelector('meta[name="keywords"]')
    if (keywordsTag && currentSEO.keywords) {
      keywordsTag.setAttribute('content', currentSEO.keywords)
    }
    
    // Update structured data
    const existingScript = document.querySelector('script[data-vue-seo]')
    if (existingScript) {
      existingScript.remove()
    }
    
    if (currentSEO.schema) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-vue-seo', 'true')
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        ...currentSEO.schema,
        url: `https://cividata.com${route.path}`,
        publisher: {
          '@type': 'Organization',
          name: 'CiviData',
          url: 'https://cividata.com'
        },
        inLanguage: 'es-CO',
        isPartOf: {
          '@type': 'WebSite',
          name: 'CiviData',
          url: 'https://cividata.com'
        }
      })
      document.head.appendChild(script)
    }
  }
  
  // Watch for route changes
  watch(() => route.path, updateSEOTags, { immediate: true })
  
  return {
    updateSEOTags
  }
}

// Google Analytics enhanced tracking for SEO
export function trackSEOEvent(action, page, keywords) {
  if (typeof gtag !== 'undefined') {
    gtag('event', action, {
      event_category: 'SEO',
      event_label: page,
      custom_parameter_keywords: keywords,
      page_title: document.title,
      page_location: window.location.href
    })
  }
}

// Track searches related to government systems
export function trackGovernmentSystemSearch(system, query) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'government_system_search', {
      event_category: 'Government Systems',
      event_label: system, // SECOP, Colombia Compra Eficiente, SIGEP, DNP
      search_term: query,
      timestamp: new Date().toISOString()
    })
  }
}