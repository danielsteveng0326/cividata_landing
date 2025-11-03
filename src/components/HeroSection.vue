<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated Background -->
    <div class="absolute inset-0 bg-gradient-dark">
      <div class="absolute inset-0 bg-gradient-radial opacity-50"></div>
      
      <!-- Floating Particles -->
      <div class="absolute inset-0">
        <div 
          v-for="i in 20" 
          :key="i"
          class="absolute w-1 h-1 bg-accent rounded-full animate-float opacity-30"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }"
        ></div>
      </div>

      <!-- Grid Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="h-full w-full" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>
    </div>

    <!-- Content -->
    <div class="relative z-10 section-container text-center">
      <div class="max-w-5xl mx-auto space-y-6 sm:space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center space-x-2 glass-effect px-4 sm:px-6 py-2 sm:py-3 rounded-full animate-slide-down">
          <span class="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
          <span class="text-xs sm:text-sm text-white/80">Innovación en Gestión Pública</span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in px-4 sm:px-0">
          <span class="gradient-text text-shadow">
            Revolucionamos la
          </span>
          <br />
          <span class="text-white text-shadow">
            gestión pública con
          </span>
          <br />
          <span class="gradient-text text-shadow">
            datos inteligentes
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed animate-slide-up px-4 sm:px-0" style="animation-delay: 0.2s;">
          CiviData integra información, inteligencia artificial y analítica avanzada para impulsar gobiernos eficientes, transparentes y centrados en las personas.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 animate-slide-up px-4 sm:px-0" style="animation-delay: 0.4s;">
          <a href="#modules" class="btn-primary w-full sm:w-auto text-center">
            Explora nuestras soluciones
          </a>
          <a href="#contact" class="btn-outline w-full sm:w-auto text-center">
            Agenda una demostración
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 pt-12 sm:pt-16 max-w-3xl mx-auto animate-scale-in px-4 sm:px-0" style="animation-delay: 0.6s;">
          <div class="glass-card text-center py-6 sm:py-8">
            <div class="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">1104+</div>
            <div class="text-xs sm:text-sm text-white/60">Municipios de Cobertura</div>
          </div>
          <div class="glass-card text-center py-6 sm:py-8">
            <div class="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">12000+</div>
            <div class="text-xs sm:text-sm text-white/60">Contratos automatizados</div>
          </div>
          <div class="glass-card text-center py-6 sm:py-8">
            <div class="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2">7000+</div>
            <div class="text-xs sm:text-sm text-white/60">Derechos de petición atendidos</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup>
// No additional logic needed for now
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-20px) translateX(10px);
  }
  50% {
    transform: translateY(-10px) translateX(-10px);
  }
  75% {
    transform: translateY(-30px) translateX(5px);
  }
}
</style>
