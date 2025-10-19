<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0 bg-gradient-dark">
        <div class="absolute inset-0 bg-gradient-radial opacity-40"></div>
        
        <!-- Floating Particles -->
        <div class="absolute inset-0">
          <div 
            v-for="i in 15" 
            :key="i"
            class="absolute w-1 h-1 bg-accent rounded-full animate-float opacity-20"
            :style="{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }"
          ></div>
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-10 section-container text-center">
        <router-link 
          to="/"
          class="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full mb-8 hover:bg-white/10 transition-all duration-300 group"
        >
          <svg class="w-4 h-4 text-white/60 group-hover:text-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span class="text-sm text-white/80 group-hover:text-white transition-colors">Volver al inicio</span>
        </router-link>

        <!-- Icon -->
        <div class="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-8 animate-scale-in">
          <component :is="icon" class="w-10 h-10 text-white" />
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
          <span class="gradient-text text-shadow">{{ title }}</span>
        </h1>

        <!-- Description -->
        <p class="text-lg md:text-xl text-white/70 max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s;">
          {{ description }}
        </p>
      </div>
    </section>

    <!-- Video Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent"></div>
      
      <div class="section-container relative z-10">
        <div class="max-w-5xl mx-auto">
          <!-- Video Title -->
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
              Conoce cómo funciona
            </h2>
            <p class="text-white/60">
              Video demostrativo del módulo
            </p>
          </div>

          <!-- YouTube Video Embed -->
          <div class="glass-card p-4 animate-scale-in" style="animation-delay: 0.4s;">
            <div class="relative w-full" style="padding-bottom: 56.25%;">
              <iframe
                v-if="videoId"
                :src="`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`"
                class="absolute top-0 left-0 w-full h-full rounded-lg"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <div 
                v-else
                class="absolute top-0 left-0 w-full h-full rounded-lg bg-white/5 flex items-center justify-center"
              >
                <div class="text-center">
                  <svg class="w-16 h-16 text-white/40 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p class="text-white/60">Video próximamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="relative py-20">
      <div class="section-container">
        <div class="max-w-6xl mx-auto">
          <!-- Section Title -->
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-5xl font-bold mb-6">
              <span class="text-white">Características</span>
              <br />
              <span class="gradient-text">principales</span>
            </h2>
          </div>

          <!-- Features Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div 
              v-for="(feature, index) in features" 
              :key="index"
              class="glass-card group"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-lg font-semibold text-white mb-2">{{ feature.title }}</h3>
              <p class="text-white/60 text-sm">{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-radial opacity-20"></div>
      
      <div class="section-container relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="glass-card">
            <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
                Beneficios clave
              </h2>
            </div>

            <div class="space-y-6">
              <div 
                v-for="(benefit, index) in benefits" 
                :key="index"
                class="flex items-start space-x-4 group"
              >
                <div class="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span class="text-white font-bold">{{ index + 1 }}</span>
                </div>
                <div class="flex-1">
                  <h4 class="text-white font-semibold mb-1">{{ benefit.title }}</h4>
                  <p class="text-white/60 text-sm">{{ benefit.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20">
      <div class="section-container">
        <div class="glass-card max-w-4xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para implementar este módulo?
          </h2>
          <p class="text-white/70 mb-8 max-w-2xl mx-auto">
            Agenda una demostración personalizada y descubre cómo este módulo puede transformar tu gestión.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <router-link to="/#contact" class="btn-primary">
              Agenda una demo
            </router-link>
            <router-link to="/" class="btn-outline">
              Ver todos los módulos
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  icon: {
    type: Object,
    required: true
  },
  videoId: {
    type: String,
    default: ''
  },
  features: {
    type: Array,
    required: true
  },
  benefits: {
    type: Array,
    required: true
  }
})
</script>
