# CiviData Landing Page

Landing page moderna e inmersiva para CiviData, inspirada en el diseño de Luma Labs con efectos glassmorphism, animaciones fluidas y una experiencia visual impactante.

## 🎨 Características de Diseño

- **Glassmorphism**: Efectos de vidrio esmerilado con blur y transparencias
- **Gradientes Dinámicos**: Paleta de colores oscura con acentos violeta (#7B61FF)
- **Animaciones Fluidas**: Transiciones suaves, efectos hover y scroll animations
- **Responsive Design**: Adaptado a todos los dispositivos
- **Modo Oscuro**: Diseño optimizado para tema oscuro por defecto

## 🚀 Stack Tecnológico

- **Vue.js 3** con Composition API
- **Vite** como build tool
- **Tailwind CSS** para estilos
- **Fuente Inter** de Google Fonts

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Navbar.vue                  # Navegación con efecto glass
│   ├── HeroSection.vue             # Hero con partículas animadas
│   ├── ModulesSection.vue          # Grid de módulos con cards glass
│   ├── ImpactSection.vue           # Métricas y features
│   ├── ContactSection.vue          # Formulario de contacto
│   ├── FooterSection.vue           # Footer minimalista
│   └── ModulePageTemplate.vue      # Template para páginas de módulos
├── views/
│   ├── Home.vue                    # Vista principal
│   └── modules/
│       ├── PlanDesarrollo.vue      # Página del módulo Plan de Desarrollo
│       ├── Geoportal.vue           # Página del módulo Geoportal
│       ├── Agricultura.vue         # Página del módulo Agricultura
│       ├── Contratacion.vue        # Página del módulo Contratación
│       ├── Peticiones.vue          # Página del módulo Peticiones
│       ├── Ejecucion.vue           # Página del módulo Ejecución
│       ├── Calidad.vue             # Página del módulo Calidad
│       └── IA.vue                  # Página del módulo IA
├── router/
│   └── index.js                    # Configuración de rutas
├── composables/
│   └── useScrollAnimation.js       # Hooks para animaciones de scroll
├── App.vue                         # Componente principal
├── main.js                         # Entry point
└── index.css                       # Estilos globales y Tailwind
```

## 🎯 Secciones

### Home Page

#### 1. Hero Section
- Título impactante con gradientes
- Partículas flotantes animadas
- Grid pattern de fondo
- CTAs principales
- Métricas destacadas

#### 2. Módulos Inteligentes
- 8 módulos en grid responsive
- Cards con efecto glassmorphism
- Hover effects con escala y brillo
- Iconos personalizados
- **Enlaces a páginas individuales de cada módulo**

#### 3. Impacto Nacional
- Layout de dos columnas
- Métricas animadas
- Lista de características
- CTA secundario

#### 4. Contacto
- Formulario funcional
- Validación de campos
- Información de contacto
- Animaciones de envío

#### 5. Footer
- Links organizados
- Redes sociales
- Diseño minimalista

### Páginas de Módulos (8 páginas individuales)

Cada módulo tiene su propia página con:

- **Hero personalizado** con icono y descripción
- **Video de YouTube** embebido (espacio para agregar ID)
- **6 características principales** con iconos
- **4 beneficios clave** numerados
- **CTAs** para agendar demo o volver a módulos
- **Botón "Volver al inicio"** en el hero
- **Transiciones suaves** al navegar

#### Módulos Disponibles:
1. `/modulos/plan-desarrollo` - Observatorio de Plan de Desarrollo
2. `/modulos/geoportal` - Geoportal
3. `/modulos/agricultura` - Observatorio de Agricultura
4. `/modulos/contratacion` - Contratación Estatal
5. `/modulos/peticiones` - Derechos de Petición
6. `/modulos/ejecucion` - Ejecución y Avance
7. `/modulos/calidad` - Calidad y Transparencia
8. `/modulos/ia` - Asistentes de IA

## 🎨 Paleta de Colores

```css
Primary: #0A0A0A (Negro profundo)
Secondary: #FFFFFF (Blanco)
Accent: #7B61FF (Violeta)
Glass BG: rgba(255, 255, 255, 0.05)
Glass Border: rgba(255, 255, 255, 0.1)
```

## ✨ Efectos Especiales

- **Partículas flotantes** en el hero
- **Scroll animations** con Intersection Observer
- **Glass cards** con hover effects
- **Gradient text** en títulos principales
- **Smooth scrolling** entre secciones
- **Botón scroll to top** animado

## 🔧 Personalización

### Cambiar colores
Edita `tailwind.config.js`:

```js
colors: {
  accent: '#TU_COLOR',
  // ...
}
```

### Modificar animaciones
Edita `tailwind.config.js` en la sección `keyframes` y `animation`.

### Ajustar contenido
Cada componente tiene su contenido en arrays/objetos dentro del `<script setup>`.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Deploy

El proyecto está configurado para deploy en Railway/Netlify/Vercel:

```bash
npm run build
# Los archivos estarán en /dist
```

## 📹 Agregar Videos de YouTube

Para agregar videos a las páginas de módulos, consulta `MODULES_GUIDE.md` para instrucciones detalladas.

**Resumen rápido:**

1. Obtén el ID del video de YouTube (ej: `dQw4w9WgXcQ`)
2. Edita el archivo del módulo en `src/views/modules/`
3. Agrega el ID en `videoId: 'TU_ID_AQUI'`

```vue
const moduleData = {
  videoId: 'dQw4w9WgXcQ', // ← Agrega aquí
  // ...
}
```

## 📄 Licencia

© 2024 CiviData. Todos los derechos reservados.

## 🤝 Contacto

- Email: contacto@cividata.com
- Teléfono: +57 300 123 4567
- Ubicación: Bogotá, Colombia

## 📚 Documentación Adicional

- **MODULES_GUIDE.md** - Guía completa para gestionar páginas de módulos y videos
- **FEATURES.md** - Lista detallada de todas las características
- **CUSTOMIZATION.md** - Cómo personalizar colores, textos y más
- **DEPLOYMENT.md** - Guías de despliegue en diferentes plataformas
