<template>
  <section id="contact" class="relative py-16 sm:py-24 md:py-32 overflow-hidden">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-radial opacity-40"></div>

    <div class="section-container relative z-10">
      <div class="max-w-4xl mx-auto">
        <!-- Contact Form -->
        <ContactForm />

        <!-- Contact Info -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4 sm:px-0">
          <div class="glass-card text-center group py-6 sm:py-8">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-accent/30 transition-colors duration-300">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div class="text-white/60 text-xs sm:text-sm mb-2">Email</div>
            <a href="mailto:info@cividata.co" class="text-white font-medium hover:text-accent transition-colors duration-300 text-sm sm:text-base">
              info@cividata.co
            </a>
          </div>

          <div class="glass-card text-center group py-6 sm:py-8">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-accent/30 transition-colors duration-300">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div class="text-white/60 text-xs sm:text-sm mb-2">Teléfono</div>
            <a href="https://wa.me/573002701230" target="_blank" class="text-white font-medium hover:text-accent transition-colors duration-300 text-sm sm:text-base">
              +57 300-123-4567
            </a>
          </div>

          <div class="glass-card text-center group py-6 sm:py-8">
            <div class="w-12 h-12 sm:w-14 sm:h-14 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-accent/30 transition-colors duration-300">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div class="text-white/60 text-xs sm:text-sm mb-2">Ubicación</div>
            <div class="text-white font-medium text-sm sm:text-base">Medellín, Colombia</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ContactForm from './ContactForm.vue'
</script>
