<template>
  <section class="relative min-h-screen bg-gradient-to-br from-teal-500 via-teal-600 to-blue-700 text-white overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0">
      <div class="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      <div class="absolute bottom-20 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
    </div>
    
    <!-- Main content -->
    <div class="relative z-10 container mx-auto px-6 pt-20 pb-12">
      <div class="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        
        <!-- Left content -->
        <div class="space-y-8">
          <!-- Logo and badge -->
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <img src="/logo.png" alt="Logo CiviData" class="w-64 h-32" />
              <div class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <span class="text-sm font-medium">Módulo Contratación</span>
              </div>
            </div>
          </div>

          <!-- Main heading -->
          <div class="space-y-">
            <h1 class="text-5xl lg:text-6xl font-bold leading-tight">
              La Plataforma
              <span class="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                #1 para la gestión Inteligente 
              </span>
              <span class="block">de Contratos Estatales</span>
            </h1>
            
            <p class="text-xl text-teal-100 leading-relaxed max-w-lg">
              CiviData es una solución integral que automatiza, visualiza y optimiza 
              los procesos de contratación pública.
            </p>
          </div>

          <!-- CTA buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="https://wa.me/573207803362" 
               target="_blank" 
               class="group bg-white text-teal-600 font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>Conversemos por WhatsApp</span>
            </a>
            
            <a href="#contacto" 
               class="group border-2 border-white/30 px-8 py-4 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Solicita una demo</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8">
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-300">900+</div>
              <div class="text-sm text-teal-100">Contratos Automatizados</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-300">80%</div>
              <div class="text-sm text-teal-100">Reducción Tiempo</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-300">100%</div>
              <div class="text-sm text-teal-100">Cumplimiento</div>
            </div>
          </div>
        </div>

        <!-- Right content - Hero image/mockup -->
        <div class="relative lg:ml-12">
          <div class="relative">
            <!-- Main device mockup -->
            <div class="relative z-10 bg-white rounded-3xl p-1 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div class="bg-gray-50 rounded-2xl overflow-hidden">
                <img src="/hero.png" 
                     alt="CiviData Dashboard" 
                     class="w-full h-auto object-cover rounded-2xl" />
              </div>
            </div>
            
            <!-- Floating elements -->
            <div class="absolute -top-10 -left-6 bg-white/20 backdrop-blur-sm p-4 rounded-2xl border border-white/30 z-20">
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-sm font-medium">Siempre En línea</span>
              </div>
            </div>
            


            <!-- Background decoration -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl -rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom wave -->
    <div class="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="w-full h-12 fill-gray-50">
        <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
    </div>
  </section>
</template>