<template>
  <section id="impact" class="relative py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
    </div>

    <div class="section-container relative z-10">
      <!-- Content Grid -->
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Text Content -->
        <div class="space-y-8">
          <div class="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
            <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span class="text-sm text-white/80">Impacto Nacional</span>
          </div>

          <h2 class="text-4xl md:text-6xl font-bold leading-tight">
            <span class="text-white">Transformando</span>
            <br />
            <span class="gradient-text">la gestión pública</span>
            <br />
            <span class="text-white">en Colombia</span>
          </h2>

          <p class="text-lg text-white/70 leading-relaxed">
            CiviData impulsa la modernización del Estado a través del uso responsable de la información y la inteligencia artificial. Nuestra meta es mejorar la gestión pública en todos los municipios del país.
          </p>

          <!-- Features List -->
          <div class="space-y-4 pt-4">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="flex items-start space-x-4 group"
            >
              <div class="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors duration-300">
                <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h4 class="text-white font-semibold mb-1">{{ feature.title }}</h4>
                <p class="text-white/60 text-sm">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Metrics Cards -->
        <div class="grid grid-cols-2 gap-6">
          <div 
            v-for="(metric, index) in metrics" 
            :key="index"
            class="glass-card text-center group"
            :class="index === 0 ? 'col-span-2' : ''"
          >
            <div class="text-5xl md:text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-transform duration-300">
              {{ metric.value }}
            </div>
            <div class="text-white/80 font-medium mb-2">{{ metric.label }}</div>
            <div class="text-white/50 text-sm">{{ metric.description }}</div>
          </div>

          <!-- Additional Info Card -->
          <div class="col-span-2 glass-card bg-gradient-accent/10 border-accent/30">
            <div class="flex items-center justify-between">
              <div>
                <div class="text-white font-semibold mb-1">Cobertura Nacional</div>
                <div class="text-white/60 text-sm">Presentes en múltiples departamentos</div>
              </div>
              <div class="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="mt-20 text-center">
        <div class="glass-card max-w-4xl mx-auto">
          <div class="flex flex-col md:flex-row items-center justify-between gap-6">
            <div class="text-left">
              <h3 class="text-2xl font-bold text-white mb-2">¿Listo para transformar tu entidad?</h3>
              <p class="text-white/60">Únete a los municipios que ya están innovando con CiviData</p>
            </div>
            <a href="#contact" class="btn-primary whitespace-nowrap">
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
