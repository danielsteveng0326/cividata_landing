# Changelog - CiviData Landing Page

## [2.1.0] - Botón de Agenda Virtual

### 🔄 Cambios en Contacto

#### Formulario Eliminado
- ❌ Removido formulario de contacto completo
- ✅ Reemplazado con botón de agenda virtual
- ✅ Integración con servicios externos (Calendly, Google Calendar, etc.)

#### Nuevo Botón CTA
- ✅ Botón grande y destacado "Agenda una demostración"
- ✅ Icono de calendario animado
- ✅ Flecha con animación al hover
- ✅ Abre en nueva pestaña
- ✅ URL configurable en `ContactSection.vue`

#### Cards de Contacto Mejoradas
- ✅ Efecto glass en cada card
- ✅ Enlaces clicables (mailto: y tel:)
- ✅ Hover effects mejorados
- ✅ Iconos más grandes (14px → 14px)
- ✅ Transiciones suaves en hover

### 📁 Archivos Modificados
- `src/components/ContactSection.vue` - Simplificado y optimizado
- `AGENDA_SETUP.md` - Nueva guía de configuración

### 🎨 Mejoras de UX
- Proceso de agendamiento más directo
- Menos fricción para el usuario
- Integración con herramientas profesionales
- Mejor experiencia móvil

---

## [2.0.0] - Sistema de Navegación y Páginas de Módulos

### 🎉 Nuevas Características

#### Sistema de Rutas con Vue Router
- ✅ Instalado y configurado Vue Router 4
- ✅ Navegación fluida entre páginas sin recargar
- ✅ Transiciones animadas entre vistas
- ✅ Scroll automático al inicio al cambiar de página
- ✅ Títulos dinámicos según la página

#### 8 Páginas Individuales de Módulos
Cada módulo ahora tiene su propia página dedicada con:

1. **Observatorio de Plan de Desarrollo** (`/modulos/plan-desarrollo`)
2. **Geoportal** (`/modulos/geoportal`)
3. **Observatorio de Agricultura** (`/modulos/agricultura`)
4. **Módulo de Contratación Estatal** (`/modulos/contratacion`)
5. **Módulo de Derechos de Petición** (`/modulos/peticiones`)
6. **Módulo de Ejecución y Avance** (`/modulos/ejecucion`)
7. **Gestión de Calidad y Transparencia** (`/modulos/calidad`)
8. **Asistentes de IA** (`/modulos/ia`)

#### Características de las Páginas de Módulos

**Hero Section:**
- Botón "Volver al inicio" con animación
- Icono grande del módulo con gradiente
- Título con efecto gradient-text
- Descripción detallada
- Partículas flotantes animadas (15 partículas)
- Grid pattern de fondo

**Sección de Video:**
- Reproductor de YouTube embebido y responsive
- Aspect ratio 16:9 mantenido en todos los dispositivos
- Placeholder cuando no hay video configurado
- Card con efecto glass contenedor

**Sección de Características:**
- Grid de 3 columnas (responsive: 1-2-3)
- 6 características por módulo
- Iconos con checkmark
- Cards con efecto glass y hover

**Sección de Beneficios:**
- Lista numerada de 4 beneficios
- Cards con gradiente accent
- Animaciones al hover
- Diseño en una sola columna centrada

**Sección CTA:**
- Dos botones de acción
- "Agenda una demo" (lleva a contacto)
- "Ver todos los módulos" (vuelve a home)

#### Template Reutilizable
- ✅ `ModulePageTemplate.vue` - Componente base para todas las páginas
- ✅ Props configurables para personalización
- ✅ Diseño consistente en todos los módulos
- ✅ Fácil de extender y modificar

#### Navegación Mejorada
- ✅ Cards de módulos ahora son enlaces clicables
- ✅ Hover effects mejorados con indicador "Conocer más"
- ✅ Navegación desde cualquier punto del sitio
- ✅ Breadcrumbs visuales (botón volver)

### 🎨 Mejoras de Diseño

#### Transiciones de Página
- Fade in/out suave (0.3s)
- Slide fade opcional
- Mode "out-in" para evitar overlaps
- Animaciones CSS optimizadas

#### Efectos Visuales
- Partículas flotantes en cada hero de módulo
- Gradientes radiales de fondo
- Glass effects consistentes
- Animaciones escalonadas en grids

### 📁 Nuevos Archivos

**Estructura de Rutas:**
```
src/router/
└── index.js                    # Configuración de rutas
```

**Vistas:**
```
src/views/
├── Home.vue                    # Vista principal (home)
└── modules/
    ├── PlanDesarrollo.vue
    ├── Geoportal.vue
    ├── Agricultura.vue
    ├── Contratacion.vue
    ├── Peticiones.vue
    ├── Ejecucion.vue
    ├── Calidad.vue
    └── IA.vue
```

**Componentes:**
```
src/components/
└── ModulePageTemplate.vue      # Template base para módulos
```

**Documentación:**
```
MODULES_GUIDE.md               # Guía completa de módulos
CHANGELOG.md                   # Este archivo
```

### 🔧 Cambios Técnicos

#### Dependencias
- ➕ Agregado: `vue-router@4`

#### Configuración
- 📝 Actualizado `main.js` para usar Vue Router
- 📝 Actualizado `App.vue` para usar `<router-view>`
- 📝 Refactorizado contenido de home a `Home.vue`

#### Componentes Modificados
- `ModulesSection.vue`: Cards convertidas a `<router-link>`
- `App.vue`: Implementado router-view con transiciones
- `main.js`: Configurado router en la app

### 📹 Integración de Videos

#### YouTube Embeds
- ✅ Reproductor responsive con aspect ratio 16:9
- ✅ Configuración minimalista (sin branding excesivo)
- ✅ Videos relacionados solo del mismo canal
- ✅ Placeholder cuando no hay video
- ✅ Fácil configuración por módulo

#### Cómo Agregar Videos
```vue
const moduleData = {
  videoId: 'ABC123XYZ', // ID de YouTube
  // ...
}
```

### 🎯 Contenido por Módulo

Cada módulo incluye:
- **Título y descripción** personalizados
- **6 características** específicas del módulo
- **4 beneficios clave** para el usuario
- **Icono único** representativo
- **Espacio para video** de YouTube

### 📱 Responsive Design

Todas las páginas son completamente responsive:
- Mobile: 1 columna
- Tablet: 2 columnas
- Desktop: 3 columnas
- Video mantiene aspect ratio en todos los tamaños

### ⚡ Performance

- Lazy loading de rutas con `import()`
- Componentes optimizados
- Transiciones CSS (GPU accelerated)
- Scroll behavior suave

### 🔗 SEO

- Meta tags dinámicos por página
- Títulos descriptivos en cada ruta
- URLs amigables (`/modulos/nombre-modulo`)
- Navegación con enlaces semánticos

---

## [1.0.0] - Landing Page Inicial

### Características Base
- Hero section con partículas
- Sección de módulos (8 módulos)
- Sección de impacto
- Formulario de contacto
- Footer completo
- Navbar con scroll effect
- Diseño glassmorphism
- Tema oscuro
- Animaciones fluidas

---

## Próximas Mejoras Sugeridas

### Corto Plazo
- [ ] Agregar videos de YouTube a cada módulo
- [ ] Implementar búsqueda de módulos
- [ ] Agregar breadcrumbs en páginas de módulos
- [ ] Modo claro/oscuro toggle

### Mediano Plazo
- [ ] Blog de noticias y casos de éxito
- [ ] Galería de screenshots por módulo
- [ ] Testimonios de clientes
- [ ] Comparador de módulos

### Largo Plazo
- [ ] Portal de documentación
- [ ] Demo interactivo de módulos
- [ ] Sistema de tickets/soporte
- [ ] Área de clientes

---

**Versión actual:** 2.0.0  
**Última actualización:** Octubre 2025  
**Desarrollado para:** CiviData
