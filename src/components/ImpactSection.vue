<template>
  <section id="impact" class="relative py-16 sm:py-24 md:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
    </div>

    <div class="section-container relative z-10">
      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
        <!-- Left: Text Content -->
        <div class="space-y-6 sm:space-y-8 px-4 sm:px-0">
          <div class="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
            <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span class="text-xs sm:text-sm text-white/80">Impacto Nacional</span>
          </div>

          <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span class="text-white">Transformando</span>
            <br />
            <span class="gradient-text">la gestión pública</span>
            <br />
            <span class="text-white">en Colombia</span>
          </h2>

          <p class="text-base sm:text-lg text-white/70 leading-relaxed">
            CiviData impulsa la modernización del Estado a través del uso responsable de la información y la inteligencia artificial. Nuestra meta es mejorar la gestión pública en todos los municipios del país.
          </p>

          <!-- Features List -->
          <div class="space-y-3 sm:space-y-4 pt-4">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="flex items-start space-x-3 sm:space-x-4 group"
            >
              <div class="w-9 h-9 sm:w-10 sm:h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold mb-1 text-sm sm:text-base">{{ feature.title }}</h4>
                <p class="text-white/60 text-xs sm:text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Metrics Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 sm:px-0">
          <div 
            v-for="(metric, index) in metrics" 
            :key="index"
            class="glass-card text-center group py-6 sm:py-8"
            :class="index === 0 ? 'sm:col-span-2' : ''"
          >
            <div class="text-4xl sm:text-5xl md:text-6xl font-bold gradient-text mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
              {{ metric.value }}
            </div>
            <div class="text-white/80 font-medium mb-1 sm:mb-2 text-sm sm:text-base">{{ metric.label }}</div>
            <div class="text-white/50 text-xs sm:text-sm">{{ metric.description }}</div>
          </div>

          <!-- Additional Info Card -->
          <div class="sm:col-span-2 glass-card bg-gradient-accent/10 border-accent/30 py-6 sm:py-8">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-white font-semibold mb-1 text-sm sm:text-base">Cobertura Nacional</div>
                <div class="text-white/60 text-xs sm:text-sm">Presentes en múltiples departamentos</div>
              </div>
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-12 sm:mt-16 md:mt-20 text-center px-4 sm:px-0">
        <div class="glass-card max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-center md:text-left">
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-2">¿Listo para transformar tu entidad?</h3>
              <p class="text-white/60 text-sm sm:text-base">Únete a los municipios que ya están innovando con CiviData</p>
            </div>
            <a href="#contact" class="btn-primary whitespace-nowrap w-full md:w-auto text-center">
              Comenzar ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const metrics = [
  {
    value: '12000+',
    label: 'Contratos automatizados',
    description: 'Cumpliendo ley de transparencia'
  },
  {
    value: '1104+',
    label: 'Municipios de Cobertura',
    description: 'Solucione ágiles'
  },
  {
    value: '7000+',
    label: 'Derechos de petición atendidos',
    description: 'Optimizados con IA'
  }
]

const features = [
  {
    title: 'Integración total',
    description: 'Conecta todos tus sistemas en una sola plataforma inteligente'
  },
  {
    title: 'IA aplicada',
    description: 'Asistentes virtuales que facilitan la toma de decisiones'
  },
  {
    title: 'Transparencia garantizada',
    description: 'Visualización clara de datos para ciudadanos y funcionarios'
  }
]
</script>
