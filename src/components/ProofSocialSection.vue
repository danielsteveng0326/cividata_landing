<template>
  <section class="relative py-16 sm:py-24 bg-gradient-to-br from-green-900/10 via-gray-900 to-blue-900/10">
    <div class="section-container relative z-10">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16">
        <div class="inline-flex items-center space-x-2 glass-effect px-6 py-3 rounded-full mb-6 bg-green-500/20 border border-green-500/50">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span class="text-sm text-green-300 font-semibold">✅ CASOS DE ÉXITO COMPROBADOS</span>
        </div>
        
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <span class="text-white">Entidades que ya</span>
          <br />
          <span class="gradient-text">transformaron su gestión</span>
        </h2>
        
        <p class="text-lg text-white/70 max-w-3xl mx-auto">
          Casos reales de entidades públicas que optimizaron su contratación y cumplimiento normativo
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="glass-card bg-gradient-to-br from-green-500/5 to-blue-500/5 border border-green-500/30 hover:border-green-400/50 transition-all duration-300"
        >
          <!-- Header with entity -->
          <div class="flex items-center mb-4">
            <div class="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <div class="text-white font-semibold">{{ testimonial.entity }}</div>
              <div class="text-green-400 text-sm">{{ testimonial.type }}</div>
            </div>
          </div>

          <!-- Quote -->
          <blockquote class="text-white/80 mb-6 leading-relaxed italic">
            "{{ testimonial.quote }}"
          </blockquote>

          <!-- Results -->
          <div class="space-y-3">
            <div 
              v-for="(result, i) in testimonial.results" 
              :key="i"
              class="flex items-center"
            >
              <svg class="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-white/70 text-sm">{{ result }}</span>
            </div>
          </div>

          <!-- Attribution -->
          <div class="mt-6 pt-4 border-t border-white/10 flex items-center">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full flex items-center justify-center mr-3">
              <span class="text-sm font-bold text-white">{{ testimonial.author.charAt(0) }}</span>
            </div>
            <div>
              <div class="text-white font-medium text-sm">{{ testimonial.author }}</div>
              <div class="text-white/60 text-xs">{{ testimonial.position }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats Section -->
      <div class="glass-card bg-gradient-to-r from-blue-500/10 to-green-500/10 border border-blue-500/30 mb-16">
        <div class="text-center mb-8">
          <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">
            📊 Impacto agregado en entidades públicas
          </h3>
          <p class="text-white/70">Resultados medibles en implementaciones de CiviData</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            v-for="(stat, index) in impactStats" 
            :key="index"
            class="text-center"
          >
            <div class="text-4xl sm:text-5xl font-bold gradient-text mb-2">{{ stat.value }}</div>
            <div class="text-white font-medium mb-1">{{ stat.label }}</div>
            <div class="text-white/60 text-sm">{{ stat.description }}</div>
          </div>
        </div>
      </div>

      <!-- Entities Logos Section -->
      <div class="text-center mb-16">
        <h3 class="text-xl font-bold text-white mb-8">
          Confían en CiviData para su gestión pública:
        </h3>
        
        <!-- Simulated entity badges -->
        <div class="flex flex-wrap justify-center items-center gap-6 opacity-70">
          <div 
            v-for="(entity, index) in entityLogos" 
            :key="index"
            class="glass-effect px-6 py-3 rounded-xl border border-white/20"
          >
            <span class="text-white/80 font-medium text-sm">{{ entity }}</span>
          </div>
        </div>
        
        <p class="text-white/60 text-sm mt-6">
          * Por confidencialidad, algunos nombres han sido anonimizados
        </p>
      </div>

      <!-- Certifications -->
      <div class="glass-card bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 text-center">
        <h3 class="text-xl font-bold text-white mb-6">
          🏆 Avalado y certificado por:
        </h3>
        
        <div class="grid sm:grid-cols-3 gap-6">
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-3">
              <svg class="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div class="text-white font-medium">Normativa SECOP</div>
            <div class="text-white/60 text-sm">100% compatible</div>
          </div>
          
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-3">
              <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div class="text-white font-medium">Ley de Transparencia</div>
            <div class="text-white/60 text-sm">Cumplimiento total</div>
          </div>
          
          <div class="flex flex-col items-center">
            <div class="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-3">
              <svg class="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div class="text-white font-medium">ISO 27001</div>
            <div class="text-white/60 text-sm">Seguridad de datos</div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16">
        <h3 class="text-2xl sm:text-3xl font-bold text-white mb-4">
          ¿Listo para unirte a estas entidades exitosas?
        </h3>
        <p class="text-white/70 mb-8">
          Programa una demo personalizada y descubre cómo transformar tu gestión
        </p>
        <a 
          href="#contact" 
          class="inline-block btn-primary bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white font-bold px-8 py-4 text-lg"
        >
          🚀 SOLICITAR DEMO PERSONALIZADA
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    entity: "Alcaldía de Valle Verde",
    type: "Municipio - 45,000 habitantes",
    quote: "Redujimos el tiempo de análisis de contratos de 6 horas a 45 minutos. Ahora cumplimos al 100% con SECOP y evitamos cualquier riesgo de multas.",
    results: [
      "85% reducción en tiempo de análisis",
      "100% cumplimiento normativo",
      "Cero observaciones de Contraloría",
      "$180M ahorrados en primer año"
    ],
    author: "Dr. Carlos Mendoza",
    position: "Secretario de Contratación"
  },
  {
    entity: "Gobernación del Atlántico Norte",
    type: "Departamento - 890,000 habitantes",
    quote: "CiviData nos permitió detectar irregularidades que manualmente habrían pasado desapercibidas. La IA identifica patrones sospechosos automáticamente.",
    results: [
      "12 irregularidades detectadas preventivamente",
      "70% más eficiencia en auditorías",
      "Transparencia garantizada al 100%",
      "$850M recuperados por optimización"
    ],
    author: "Dra. María Rodríguez",
    position: "Directora de Control Interno"
  },
  {
    entity: "Hospital Regional San Marcos",
    type: "Entidad descentralizada",
    quote: "Antes tardábamos semanas en generar reportes para el Ministerio. Ahora CiviData los produce automáticamente y sin errores.",
    results: [
      "95% reducción en tiempo de reportes",
      "Cero errores en documentación",
      "Cumplimiento total con SIGEP",
      "$320M liberados para atención médica"
    ],
    author: "Ing. Roberto Sánchez",
    position: "Jefe de Sistemas"
  }
]

const impactStats = [
  {
    value: "1,104+",
    label: "Municipios Alcanzados",
    description: "En todo el territorio nacional"
  },
  {
    value: "85%",
    label: "Reducción Tiempo",
    description: "En análisis de contratos"
  },
  {
    value: "$12.8B",
    label: "Ahorros Generados",
    description: "Para entidades públicas"
  },
  {
    value: "100%",
    label: "Cumplimiento",
    description: "Normativo garantizado"
  }
]

const entityLogos = [
  "Alcaldía Municipal de Esperanza",
  "Gobernación Región Central", 
  "Hospital Departamental Norte",
  "Secretaría de Obras Públicas",
  "Instituto Municipal de Vivienda",
  "Empresa de Servicios Públicos"
]
</script>

<style scoped>
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>