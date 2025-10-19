# Guía de Personalización - CiviData Landing Page

Esta guía te ayudará a personalizar la landing page según tus necesidades.

## 🎨 Cambiar Colores

### Método 1: Tailwind Config (Recomendado)

Edita `tailwind.config.js`:

```js
colors: {
  primary: '#TU_COLOR_PRIMARIO',
  secondary: '#TU_COLOR_SECUNDARIO',
  accent: '#TU_COLOR_ACCENT',      // Color principal de marca
  'glass-bg': 'rgba(255, 255, 255, 0.05)',
  'glass-border': 'rgba(255, 255, 255, 0.1)',
}
```

### Método 2: Gradientes

```js
backgroundImage: {
  'gradient-dark': 'linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%)',
  'gradient-accent': 'linear-gradient(135deg, #COLOR1 0%, #COLOR2 100%)',
}
```

### Colores Recomendados por Estilo

**Tech/Futurista:**
- Accent: `#00F0FF` (Cyan)
- Gradient: `#0A0A0A → #001F3F`

**Corporativo:**
- Accent: `#0066CC` (Azul)
- Gradient: `#0A0A0A → #1A1A2E`

**Creativo:**
- Accent: `#FF6B6B` (Coral)
- Gradient: `#0A0A0A → #2C1A3F`

---

## ✏️ Modificar Contenido

### Hero Section

Edita `src/components/HeroSection.vue`:

```vue
<h1>
  <span class="gradient-text">TU TÍTULO</span>
  <br />
  <span class="text-white">LÍNEA 2</span>
  <br />
  <span class="gradient-text">LÍNEA 3</span>
</h1>

<p>Tu descripción aquí...</p>
```

**Métricas:**
```vue
<script setup>
// Cambia los valores en el template
<div class="text-3xl">TU_VALOR</div>
<div class="text-sm">TU_LABEL</div>
</script>
```

### Módulos

Edita `src/components/ModulesSection.vue`:

```js
const modules = [
  {
    name: 'Nombre del Módulo',
    description: 'Descripción del módulo...',
    icon: IconComponent  // Usa uno de los iconos existentes
  },
  // Agrega más módulos...
]
```

**Agregar nuevo módulo:**
1. Copia un objeto del array `modules`
2. Cambia `name` y `description`
3. Selecciona un `icon` existente o crea uno nuevo

### Métricas de Impacto

Edita `src/components/ImpactSection.vue`:

```js
const metrics = [
  {
    value: 'TU_VALOR',
    label: 'TU_LABEL',
    description: 'Descripción breve'
  }
]
```

### Información de Contacto

Edita `src/components/ContactSection.vue` y `FooterSection.vue`:

```vue
<!-- Email -->
<div class="text-white">tu@email.com</div>

<!-- Teléfono -->
<div class="text-white">+57 XXX XXX XXXX</div>

<!-- Ubicación -->
<div class="text-white">Tu Ciudad, País</div>
```

---

## 🔗 Cambiar Enlaces

### Navbar

Edita `src/components/Navbar.vue`:

```js
const navLinks = [
  { name: 'Sección 1', href: '#seccion1' },
  { name: 'Sección 2', href: '#seccion2' },
  // Agrega más...
]
```

### Footer

Edita `src/components/FooterSection.vue`:

```js
const productLinks = [
  { name: 'Link 1', href: '/ruta' },
  // ...
]

const companyLinks = [
  { name: 'Link 1', href: '/ruta' },
  // ...
]
```

### Redes Sociales

```js
const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com/tu_usuario', icon: TwitterIcon },
  // Actualiza los href con tus URLs
]
```

---

## 🖼️ Cambiar Logo

### Opción 1: Imagen

Reemplaza el SVG en `Navbar.vue` y `FooterSection.vue`:

```vue
<img src="/tu-logo.png" alt="Logo" class="w-10 h-10" />
```

### Opción 2: Personalizar SVG

Edita el SVG existente o reemplázalo con tu propio código SVG.

---

## 🎭 Modificar Animaciones

### Velocidad de Animaciones

Edita `tailwind.config.js`:

```js
animation: {
  'fade-in': 'fadeIn 0.8s ease-out forwards',  // Cambia 0.8s
  'slide-up': 'slideUp 1.2s ease-out forwards', // Más lento
}
```

### Desactivar Animaciones

Elimina las clases de animación:

```vue
<!-- Antes -->
<div class="animate-fade-in">...</div>

<!-- Después -->
<div>...</div>
```

### Agregar Nueva Animación

1. Define el keyframe en `tailwind.config.js`:

```js
keyframes: {
  tuAnimacion: {
    '0%': { /* estado inicial */ },
    '100%': { /* estado final */ }
  }
}
```

2. Registra la animación:

```js
animation: {
  'tu-animacion': 'tuAnimacion 1s ease-out'
}
```

3. Úsala:

```vue
<div class="animate-tu-animacion">...</div>
```

---

## 🌐 Cambiar Idioma

### Textos Estáticos

Busca y reemplaza todos los textos en español por tu idioma en cada componente.

### Crear Sistema i18n (Avanzado)

1. Instala vue-i18n:
```bash
npm install vue-i18n
```

2. Crea archivos de traducción en `src/locales/`

3. Configura en `main.js`

---

## 📱 Ajustar Responsive

### Cambiar Breakpoints

Edita `tailwind.config.js`:

```js
theme: {
  screens: {
    'sm': '640px',
    'md': '768px',   // Cambia estos valores
    'lg': '1024px',
    'xl': '1280px',
  }
}
```

### Grid de Módulos

Edita `ModulesSection.vue`:

```vue
<!-- Antes: 1-2-3 columnas -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<!-- Después: 1-2-4 columnas -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

---

## 🔧 Funcionalidad del Formulario

### Conectar a Backend

Edita `src/components/ContactSection.vue`:

```js
const handleSubmit = async () => {
  isSubmitting.value = true
  
  try {
    const response = await fetch('https://tu-api.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData.value)
    })
    
    if (response.ok) {
      showSuccess.value = true
      // Reset form...
    }
  } catch (error) {
    console.error('Error:', error)
    // Mostrar error al usuario
  } finally {
    isSubmitting.value = false
  }
}
```

### Integrar con EmailJS

1. Instala EmailJS:
```bash
npm install @emailjs/browser
```

2. Configura en el componente:
```js
import emailjs from '@emailjs/browser'

const handleSubmit = async () => {
  await emailjs.send(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    formData.value,
    'YOUR_PUBLIC_KEY'
  )
}
```

---

## 🎨 Efectos Glass Personalizados

### Intensidad del Blur

Edita `src/index.css`:

```css
.glass-effect {
  @apply bg-glass-bg backdrop-blur-xl;  /* Cambia xl por sm, md, lg, 2xl */
}
```

### Transparencia

Edita `tailwind.config.js`:

```js
colors: {
  'glass-bg': 'rgba(255, 255, 255, 0.10)',  // Más opaco (0.05 → 0.10)
  'glass-border': 'rgba(255, 255, 255, 0.20)',
}
```

---

## 🌟 Agregar Nuevas Secciones

### Paso 1: Crear Componente

Crea `src/components/TuSeccion.vue`:

```vue
<template>
  <section id="tu-seccion" class="relative py-32">
    <div class="section-container">
      <h2 class="text-4xl font-bold gradient-text">Tu Título</h2>
      <!-- Tu contenido -->
    </div>
  </section>
</template>

<script setup>
// Tu lógica
</script>
```

### Paso 2: Importar en App.vue

```vue
<script setup>
import TuSeccion from './components/TuSeccion.vue'
</script>

<template>
  <main>
    <HeroSection />
    <TuSeccion />  <!-- Agregar aquí -->
    <ModulesSection />
    <!-- ... -->
  </main>
</template>
```

### Paso 3: Agregar al Navbar

```js
const navLinks = [
  { name: 'Tu Sección', href: '#tu-seccion' },
  // ...
]
```

---

## 🚀 Optimización

### Reducir Tamaño de Build

1. **Eliminar componentes no usados**
2. **Optimizar imágenes** (usa WebP)
3. **Lazy load** de secciones:

```vue
<script setup>
import { defineAsyncComponent } from 'vue'

const ModulesSection = defineAsyncComponent(() => 
  import('./components/ModulesSection.vue')
)
</script>
```

### Mejorar Performance

1. **Reduce partículas** en Hero (de 20 a 10)
2. **Usa `will-change`** en elementos animados
3. **Implementa Intersection Observer** para animar solo elementos visibles

---

## 📊 Analytics

### Google Analytics (Ya incluido)

El código ya está en `index.html`. Solo actualiza el ID:

```html
<script>
  gtag('config', 'TU-TRACKING-ID');
</script>
```

### Agregar Eventos Personalizados

```js
// En cualquier componente
const trackEvent = () => {
  if (window.gtag) {
    window.gtag('event', 'nombre_evento', {
      event_category: 'categoria',
      event_label: 'label'
    })
  }
}
```

---

## 🎯 Tips Finales

1. **Mantén la consistencia** en colores y espaciado
2. **Prueba en múltiples dispositivos** antes de publicar
3. **Optimiza imágenes** antes de subirlas
4. **Usa variables CSS** para valores repetidos
5. **Documenta cambios importantes**

---

## 🆘 Solución de Problemas

### Los estilos no se aplican
- Verifica que Tailwind esté compilando: `npm run dev`
- Revisa la consola del navegador

### Las animaciones no funcionan
- Asegúrate de que las clases estén en `tailwind.config.js`
- Verifica que no haya conflictos de CSS

### El formulario no envía
- Revisa la consola para errores
- Verifica la URL del endpoint
- Comprueba CORS si usas API externa

---

¿Necesitas más ayuda? Revisa la documentación de:
- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
