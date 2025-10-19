# Guía de Uso de Logos - CiviData

## 📁 Ubicación de los Logos

Los logos están ubicados en la carpeta `public/`:

```
public/
├── Logo.svg          # Logo con colores originales
└── Logo_Blanco.svg   # Logo en blanco (para fondos oscuros)
```

## 🎨 Logos Implementados

### ✅ Lugares donde ya se usa el logo:

1. **Favicon** (`index.html`)
   - Archivo: `Logo.svg`
   - Aparece en la pestaña del navegador

2. **Navbar** (`src/components/Navbar.vue`)
   - Archivo: `Logo_Blanco.svg`
   - Altura: 40px (h-10)
   - Efecto hover: escala 1.05

3. **Footer** (`src/components/FooterSection.vue`)
   - Archivo: `Logo_Blanco.svg`
   - Altura: 40px (h-10)

## 🔧 Cómo Usar los Logos

### Logo Blanco (para fondos oscuros)

```vue
<img 
  src="/Logo_Blanco.svg" 
  alt="CiviData" 
  class="h-10 w-auto"
/>
```

**Cuándo usar:**
- ✅ Navbar (fondo oscuro)
- ✅ Footer (fondo oscuro)
- ✅ Secciones con fondo oscuro
- ✅ Hero sections

### Logo Original (para fondos claros)

```vue
<img 
  src="/Logo.svg" 
  alt="CiviData" 
  class="h-10 w-auto"
/>
```

**Cuándo usar:**
- ✅ Fondos blancos o claros
- ✅ Documentos impresos
- ✅ Presentaciones
- ✅ Favicon

## 📏 Tamaños Recomendados

### Navbar
```vue
class="h-8 w-auto"   <!-- Pequeño (32px) -->
class="h-10 w-auto"  <!-- Mediano (40px) - Actual -->
class="h-12 w-auto"  <!-- Grande (48px) -->
```

### Footer
```vue
class="h-8 w-auto"   <!-- Pequeño -->
class="h-10 w-auto"  <!-- Mediano - Actual -->
class="h-14 w-auto"  <!-- Grande -->
```

### Hero Section
```vue
class="h-16 w-auto"  <!-- 64px -->
class="h-20 w-auto"  <!-- 80px -->
class="h-24 w-auto"  <!-- 96px -->
```

## 🎭 Efectos y Animaciones

### Hover Effect (Escala)
```vue
<img 
  src="/Logo_Blanco.svg" 
  alt="CiviData" 
  class="h-10 w-auto hover:scale-105 transition-transform duration-300"
/>
```

### Con Enlace
```vue
<router-link to="/" class="group">
  <img 
    src="/Logo_Blanco.svg" 
    alt="CiviData" 
    class="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
  />
</router-link>
```

### Con Opacidad
```vue
<img 
  src="/Logo_Blanco.svg" 
  alt="CiviData" 
  class="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
/>
```

## 🌐 Meta Tags y SEO

### Open Graph (Redes Sociales)

Si quieres usar el logo en previews de redes sociales, agrega en `index.html`:

```html
<meta property="og:image" content="https://tudominio.com/Logo.svg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

**Nota:** Para redes sociales es mejor usar PNG. Puedes exportar:
- `Logo_Social.png` (1200x630px)

### Twitter Card

```html
<meta name="twitter:image" content="https://tudominio.com/Logo.svg">
```

## 📱 Responsive

### Mobile
```vue
<img 
  src="/Logo_Blanco.svg" 
  alt="CiviData" 
  class="h-8 md:h-10 w-auto"
/>
```

### Tablet y Desktop
```vue
<img 
  src="/Logo_Blanco.svg" 
  alt="CiviData" 
  class="h-8 sm:h-10 lg:h-12 w-auto"
/>
```

## 🎨 Variaciones de Diseño

### Logo con Fondo Glass
```vue
<div class="glass-card p-4 inline-block">
  <img 
    src="/Logo_Blanco.svg" 
    alt="CiviData" 
    class="h-12 w-auto"
  />
</div>
```

### Logo con Gradiente de Fondo
```vue
<div class="bg-gradient-accent p-4 rounded-xl inline-block">
  <img 
    src="/Logo_Blanco.svg" 
    alt="CiviData" 
    class="h-12 w-auto"
  />
</div>
```

### Logo Centrado
```vue
<div class="flex justify-center">
  <img 
    src="/Logo_Blanco.svg" 
    alt="CiviData" 
    class="h-16 w-auto"
  />
</div>
```

## 🔄 Agregar Logo en Nuevas Secciones

### En Hero Section
```vue
<template>
  <section class="hero">
    <div class="text-center">
      <img 
        src="/Logo_Blanco.svg" 
        alt="CiviData" 
        class="h-20 w-auto mx-auto mb-8 animate-fade-in"
      />
      <h1>Título</h1>
    </div>
  </section>
</template>
```

### En Loading Screen
```vue
<div class="fixed inset-0 bg-gradient-dark flex items-center justify-center">
  <img 
    src="/Logo_Blanco.svg" 
    alt="CiviData" 
    class="h-24 w-auto animate-pulse"
  />
</div>
```

### En 404 Page
```vue
<div class="text-center">
  <img 
    src="/Logo_Blanco.svg" 
    alt="CiviData" 
    class="h-16 w-auto mx-auto mb-8 opacity-50"
  />
  <h1>Página no encontrada</h1>
</div>
```

## 📦 Exportar Logos en Otros Formatos

Si necesitas el logo en otros formatos:

### PNG (para emails, documentos)
Exporta desde el SVG:
- `Logo.png` (512x512px o más)
- `Logo_Blanco.png` (512x512px o más)

### Favicon
Ya está configurado con SVG, pero si necesitas PNG:
- `favicon-16x16.png`
- `favicon-32x32.png`
- `favicon-96x96.png`

Agrega en `index.html`:
```html
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```

## ✅ Checklist de Implementación

- [x] Favicon actualizado
- [x] Logo en Navbar
- [x] Logo en Footer
- [ ] Logo en Hero Section (opcional)
- [ ] Logo en páginas de módulos (opcional)
- [ ] Logo en 404 page (opcional)
- [ ] Open Graph image (para redes sociales)
- [ ] Exportar versiones PNG si es necesario

## 🎯 Mejores Prácticas

1. **Siempre usa `w-auto`** para mantener el aspect ratio
2. **Define solo la altura** (`h-10`, `h-12`, etc.)
3. **Usa Logo_Blanco.svg** en fondos oscuros
4. **Usa Logo.svg** en fondos claros
5. **Agrega `alt="CiviData"`** para accesibilidad
6. **Usa transiciones suaves** para hover effects
7. **Mantén consistencia** en tamaños similares

## 🔧 Troubleshooting

### El logo no se ve
- Verifica que los archivos estén en `public/`
- Verifica que los nombres sean exactos: `Logo.svg` y `Logo_Blanco.svg`
- Limpia la caché del navegador (Ctrl + F5)

### El logo se ve pixelado
- Los SVG no deberían pixelarse
- Verifica que no estés usando PNG en lugar de SVG
- Asegúrate de usar `w-auto` para mantener proporción

### El logo es muy grande/pequeño
- Ajusta la clase de altura: `h-8`, `h-10`, `h-12`, etc.
- Usa clases responsive: `h-8 md:h-10 lg:h-12`

---

¡Tus logos están listos para usar en toda la aplicación! 🎨
