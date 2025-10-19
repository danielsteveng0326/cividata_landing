# Guía de Módulos - CiviData Landing Page

## 📹 Cómo Agregar Videos de YouTube

Cada módulo tiene su propia página con un espacio dedicado para un video explicativo de YouTube.

### Paso 1: Obtener el ID del Video

1. Ve al video en YouTube
2. La URL se verá así: `https://www.youtube.com/watch?v=ABC123XYZ`
3. El ID del video es la parte después de `v=`: **ABC123XYZ**

### Paso 2: Agregar el ID al Módulo

Edita el archivo del módulo correspondiente en `src/views/modules/`:

**Ejemplo para Plan de Desarrollo:**

```vue
// src/views/modules/PlanDesarrollo.vue

const moduleData = {
  title: 'Observatorio de Plan de Desarrollo',
  description: '...',
  icon: ChartIcon,
  videoId: 'ABC123XYZ',  // ← Agrega aquí el ID del video
  features: [...],
  benefits: [...]
}
```

### Lista de Archivos por Módulo

| Módulo | Archivo | Ruta |
|--------|---------|------|
| Plan de Desarrollo | `PlanDesarrollo.vue` | `/modulos/plan-desarrollo` |
| Geoportal | `Geoportal.vue` | `/modulos/geoportal` |
| Agricultura | `Agricultura.vue` | `/modulos/agricultura` |
| Contratación Estatal | `Contratacion.vue` | `/modulos/contratacion` |
| Derechos de Petición | `Peticiones.vue` | `/modulos/peticiones` |
| Ejecución y Avance | `Ejecucion.vue` | `/modulos/ejecucion` |
| Calidad y Transparencia | `Calidad.vue` | `/modulos/calidad` |
| Asistentes de IA | `IA.vue` | `/modulos/ia` |

---

## 🎨 Personalizar Contenido de Módulos

### Modificar Características (Features)

Cada módulo tiene 6 características principales. Para editarlas:

```vue
features: [
  {
    title: 'Nombre de la Característica',
    description: 'Descripción breve de la característica'
  },
  // Agrega más o edita las existentes
]
```

### Modificar Beneficios

Cada módulo tiene 4 beneficios clave:

```vue
benefits: [
  {
    title: 'Nombre del Beneficio',
    description: 'Explicación del beneficio'
  },
  // Agrega más o edita los existentes
]
```

---

## 🔗 Estructura de Navegación

### Desde la Home

Los usuarios pueden hacer clic en cualquier card de módulo en la sección "Nuestros Módulos Inteligentes" para ir a la página detallada.

### Desde una Página de Módulo

- **Botón "Volver al inicio"**: Regresa a la home
- **Botón "Ver todos los módulos"**: Regresa a la sección de módulos en la home
- **Botón "Agenda una demo"**: Va a la sección de contacto

### Desde el Navbar

Los enlaces del navbar funcionan tanto en la home como en las páginas de módulos.

---

## 🎬 Características del Video Player

### Configuración Actual

- **Responsive**: Se adapta a cualquier tamaño de pantalla
- **Aspect Ratio**: 16:9 (estándar de YouTube)
- **Controles**: Nativos de YouTube
- **Autoplay**: Desactivado (el usuario debe dar play)
- **Branding**: Minimalista (`modestbranding=1`)
- **Videos relacionados**: Solo del mismo canal (`rel=0`)

### Si No Hay Video

Cuando `videoId` está vacío (`''`), se muestra un placeholder con:
- Icono de play
- Texto "Video próximamente"

---

## 🎯 Ejemplo Completo de Módulo

```vue
<template>
  <ModulePageTemplate
    :title="moduleData.title"
    :description="moduleData.description"
    :icon="moduleData.icon"
    :videoId="moduleData.videoId"
    :features="moduleData.features"
    :benefits="moduleData.benefits"
  />
</template>

<script setup>
import { h } from 'vue'
import ModulePageTemplate from '../../components/ModulePageTemplate.vue'

// Definir el icono
const MyIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 13l4 4L19 7' })
])

const moduleData = {
  title: 'Nombre del Módulo',
  description: 'Descripción completa del módulo que aparece en el hero.',
  icon: MyIcon,
  videoId: 'dQw4w9WgXcQ', // ID de YouTube
  
  features: [
    {
      title: 'Característica 1',
      description: 'Descripción de la característica'
    },
    {
      title: 'Característica 2',
      description: 'Descripción de la característica'
    },
    // ... hasta 6 características
  ],
  
  benefits: [
    {
      title: 'Beneficio 1',
      description: 'Explicación del beneficio'
    },
    {
      title: 'Beneficio 2',
      description: 'Explicación del beneficio'
    },
    // ... hasta 4 beneficios
  ]
}
</script>
```

---

## 🚀 Agregar un Nuevo Módulo

### 1. Crear el Archivo de la Vista

Crea un nuevo archivo en `src/views/modules/NuevoModulo.vue` usando el template de ejemplo arriba.

### 2. Agregar la Ruta

Edita `src/router/index.js`:

```js
{
  path: '/modulos/nuevo-modulo',
  name: 'NuevoModulo',
  component: () => import('../views/modules/NuevoModulo.vue'),
  meta: { 
    title: 'Nombre del Nuevo Módulo',
    description: 'Descripción breve'
  }
}
```

### 3. Agregar a la Lista de Módulos

Edita `src/components/ModulesSection.vue`:

```js
const modules = [
  // ... módulos existentes
  {
    name: 'Nuevo Módulo',
    description: 'Descripción breve del nuevo módulo',
    icon: NuevoIcon,
    route: '/modulos/nuevo-modulo'
  }
]
```

---

## 🎨 Diseño de las Páginas

### Secciones de Cada Página

1. **Hero Section**
   - Botón "Volver al inicio"
   - Icono del módulo
   - Título grande con gradiente
   - Descripción
   - Partículas animadas de fondo

2. **Video Section**
   - Título "Conoce cómo funciona"
   - Video de YouTube embebido
   - Card con efecto glass

3. **Features Section**
   - Grid de 3 columnas (responsive)
   - Cards con checkmark
   - Hover effects

4. **Benefits Section**
   - Lista numerada
   - Cards con gradiente accent
   - Animaciones al hover

5. **CTA Section**
   - Llamado a la acción
   - Dos botones: "Agenda una demo" y "Ver todos los módulos"

### Efectos Visuales

- ✅ Glassmorphism en todas las cards
- ✅ Partículas flotantes en el hero
- ✅ Gradientes dinámicos
- ✅ Animaciones de entrada escalonadas
- ✅ Hover effects con escala y brillo
- ✅ Transiciones suaves entre páginas

---

## 📱 Responsive Design

Las páginas de módulos son completamente responsive:

- **Mobile** (< 768px): 1 columna
- **Tablet** (768px - 1024px): 2 columnas
- **Desktop** (> 1024px): 3 columnas

El video mantiene su aspect ratio en todos los dispositivos.

---

## 🔧 Troubleshooting

### El video no se muestra

1. Verifica que el `videoId` sea correcto
2. Asegúrate de que el video sea público en YouTube
3. Revisa la consola del navegador por errores

### Las rutas no funcionan

1. Verifica que Vue Router esté instalado: `npm list vue-router`
2. Asegúrate de que `router` esté importado en `main.js`
3. Revisa que las rutas en `router/index.js` coincidan con los enlaces

### Las animaciones no se ven

1. Verifica que Tailwind esté compilando correctamente
2. Revisa que las clases de animación estén en `tailwind.config.js`
3. Limpia la caché del navegador

---

## 📊 Métricas y Analytics

Para trackear visitas a páginas de módulos, puedes agregar eventos de Google Analytics:

```js
// En router/index.js, en el beforeEach hook
router.beforeEach((to, from, next) => {
  // Existing code...
  
  // Track page view
  if (window.gtag && to.path.includes('/modulos/')) {
    window.gtag('event', 'page_view', {
      page_path: to.path,
      page_title: to.meta.title
    })
  }
  
  next()
})
```

---

## 🎯 Mejores Prácticas

1. **Videos cortos**: Mantén los videos entre 2-5 minutos
2. **Descripciones claras**: Usa lenguaje simple y directo
3. **Características específicas**: Enfócate en beneficios tangibles
4. **Imágenes de calidad**: Si agregas screenshots, optimízalas
5. **Actualiza regularmente**: Mantén el contenido fresco y relevante

---

## 📞 Soporte

Si necesitas ayuda para personalizar los módulos, consulta:
- `CUSTOMIZATION.md` - Guía general de personalización
- `README.md` - Documentación principal del proyecto
- `FEATURES.md` - Lista completa de características

---

¡Listo para agregar tus videos y personalizar cada módulo! 🚀
