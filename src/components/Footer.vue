<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-6 py-12">
      <!-- Main Footer Content -->
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        
        <!-- Company Info -->
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <img src="/logo.png" alt="CiviData Logo" class="w-20 h-10" />
            <span class="text-xl font-bold">civiData</span>
          </div>
          <p class="text-gray-400 leading-relaxed">
            Plataforma integral para la gestión inteligente de contratos estatales. 
            Automatización, análisis y cumplimiento normativo.
          </p>
          <div class="text-sm text-gray-500">
             
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Enlaces Rápidos</h3>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#" class="hover:text-teal-400 transition-colors">Inicio</a></li>
            <li><a href="#" class="hover:text-teal-400 transition-colors">Características</a></li>
            <li><a href="https://wa.me/573002701230" target="_blank" class="hover:text-teal-400 transition-colors">Solicitar Demo</a></li>
            <li><a href="mailto:info@cividata.co" class="hover:text-teal-400 transition-colors">Contacto</a></li>
          </ul>
        </div>

        <!-- Contact & Social -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold">Síguenos</h3>
          <div class="flex items-center space-x-4">
            <!-- Instagram -->
            <a href="https://www.instagram.com/cividata_co/" 
               target="_blank" 
               class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C8.396 0 7.931.013 7.306.035 2.43.221 1.324 3.381 1.235 7.306c-.022.625-.035 1.09-.035 4.711 0 3.621.013 4.086.035 4.711.089 3.925 1.195 7.085 6.071 7.271.625.022 1.09.035 4.711.035 3.621 0 4.086-.013 4.711-.035 4.876-.186 5.982-3.346 6.071-7.271.022-.625.035-1.09.035-4.711 0-3.621-.013-4.086-.035-4.711C22.714 3.381 21.608.221 16.732.035 16.107.013 15.642 0 12.017 0zm0 2.167c3.564 0 3.987.012 5.394.087 3.231.148 4.716 1.568 4.864 4.864.075 1.407.087 1.83.087 5.394 0 3.564-.012 3.987-.087 5.394-.148 3.296-1.633 4.716-4.864 4.864-1.407.075-1.83.087-5.394.087-3.564 0-3.987-.012-5.394-.087-3.231-.148-4.716-1.568-4.864-4.864-.075-1.407-.087-1.83-.087-5.394 0-3.564.012-3.987.087-5.394.148-3.296 1.633-4.716 4.864-4.864 1.407-.075 1.83-.087 5.394-.087zm0 3.676c-3.707 0-6.717 3.01-6.717 6.717s3.01 6.717 6.717 6.717 6.717-3.01 6.717-6.717-3.01-6.717-6.717-6.717zm0 11.067c-2.401 0-4.35-1.949-4.35-4.35s1.949-4.35 4.35-4.35 4.35 1.949 4.35 4.35-1.949 4.35-4.35 4.35zm8.536-11.676c0 .865-.702 1.567-1.567 1.567-.865 0-1.567-.702-1.567-1.567s.702-1.567 1.567-1.567c.865 0 1.567.702 1.567 1.567z"/>
              </svg>
            </a>
            
            <!-- WhatsApp -->
            <a href="https://wa.me/573002701230" 
               target="_blank" 
               class="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </a>

            <!-- Email -->
            <a href="mailto:info@cividata.co" 
               class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
          
          <!-- Contact info -->
          <div class="space-y-2 text-sm text-gray-400">
            <p class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>info@cividata.co</span>
            </p>
            <p class="flex items-center space-x-2">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Colombia</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 pt-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-sm text-gray-400">
            <span>© 2025 CiviData</span>
            <span class="mx-2">·</span>
            <span>Hecho en Colombia 🇨🇴</span>
            <span class="mx-2">·</span>
            <span class="text-teal-400"> </span>
          </div>
          
          <div class="flex items-center space-x-6 text-sm text-gray-400">
            <a href="#" class="hover:text-teal-400 transition-colors"> </a>
            <a href="#" class="hover:text-teal-400 transition-colors"> </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>