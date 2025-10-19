<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center group">
          <img 
            src="/Logo_Blanco.svg" 
            alt="CiviData" 
            class="h-8 md:h-12 w-auto group-hover:scale-105 transition-transform duration-300"
          />
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.href"
            @click.prevent="navigateToSection(link.href)"
            class="text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium cursor-pointer"
          >
            {{ link.name }}
          </a>
          <a href="/#contact" @click.prevent="navigateToSection('#contact')" class="btn-primary text-sm cursor-pointer">
            Agenda una demo
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg glass-effect hover:bg-white/10 transition-colors"
        >
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              v-if="!mobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16" 
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div 
        v-if="mobileMenuOpen"
        class="md:hidden glass-effect border-t border-white/10"
      >
        <div class="px-6 py-6 space-y-4">
          <a 
            v-for="link in navLinks" 
            :key="link.name"
            :href="link.href"
            @click.prevent="navigateToSection(link.href); mobileMenuOpen = false"
            class="block text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium py-2 cursor-pointer"
          >
            {{ link.name }}
          </a>
          <a href="https://calendly.com/cividata/nueva-reunion" @click.prevent="navigateToSection('#contact'); mobileMenuOpen = false" class="btn-primary w-full text-sm block text-center cursor-pointer">
            Agenda una demo
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Módulos', href: '#modules' },
  { name: 'Impacto', href: '#impact' },
  { name: 'Contacto', href: '#contact' },
]

const navigateToSection = (hash) => {
  // Si estamos en la home, solo hacer scroll
  if (route.path === '/') {
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    // Si estamos en otra página, navegar a home y luego hacer scroll
    router.push('/').then(() => {
      // Esperar un momento para que la página cargue
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    })
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
