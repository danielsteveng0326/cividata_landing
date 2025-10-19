# Configuración de Agenda Virtual

## 📅 Cómo Configurar el Botón de Agenda

El botón "Agenda una demostración" ahora redirige a una agenda virtual externa. Aquí te explico cómo configurarlo:

### 1. Editar la URL

Abre el archivo `src/components/ContactSection.vue` y busca esta línea:

```vue
const agendaUrl = 'https://calendly.com/tu-usuario/demo-cividata'
```

Reemplázala con la URL de tu servicio de agendamiento.

---

## 🛠️ Servicios de Agendamiento Recomendados

### Opción 1: Calendly (Recomendado)

**Ventajas:**
- ✅ Gratis para uso básico
- ✅ Integración con Google Calendar, Outlook, etc.
- ✅ Personalización de disponibilidad
- ✅ Recordatorios automáticos por email
- ✅ Interfaz profesional

**Cómo obtener tu URL:**

1. Crea una cuenta en [calendly.com](https://calendly.com)
2. Configura tu disponibilidad
3. Crea un tipo de evento (ej: "Demo CiviData - 30 min")
4. Copia el enlace del evento
5. Pégalo en `agendaUrl`

**Ejemplo:**
```vue
const agendaUrl = 'https://calendly.com/cividata/demo-30min'
```

---

### Opción 2: Google Calendar

**Ventajas:**
- ✅ Gratis
- ✅ Integrado con Gmail
- ✅ Familiar para usuarios

**Cómo crear un enlace:**

1. Ve a [Google Calendar](https://calendar.google.com)
2. Crea un evento
3. Haz clic en "Más opciones"
4. Copia el enlace para compartir

**Ejemplo:**
```vue
const agendaUrl = 'https://calendar.google.com/calendar/u/0/appointments/schedules/...'
```

---

### Opción 3: Microsoft Bookings

**Ventajas:**
- ✅ Incluido en Microsoft 365
- ✅ Integración con Teams
- ✅ Profesional

**Cómo obtener tu URL:**

1. Accede a [Microsoft Bookings](https://outlook.office.com/bookings/)
2. Crea un servicio de reserva
3. Copia el enlace de reserva
4. Pégalo en `agendaUrl`

**Ejemplo:**
```vue
const agendaUrl = 'https://outlook.office365.com/owa/calendar/CiviData@...'
```

---

### Opción 4: Cal.com

**Ventajas:**
- ✅ Open source
- ✅ Gratis
- ✅ Muy personalizable

**Cómo obtener tu URL:**

1. Crea cuenta en [cal.com](https://cal.com)
2. Configura tu evento
3. Copia el enlace
4. Pégalo en `agendaUrl`

**Ejemplo:**
```vue
const agendaUrl = 'https://cal.com/cividata/demo'
```

---

### Opción 5: Acuity Scheduling

**Ventajas:**
- ✅ Muy profesional
- ✅ Muchas integraciones
- ✅ Pagos integrados

**Ejemplo:**
```vue
const agendaUrl = 'https://cividata.acuityscheduling.com/schedule.php'
```

---

## 🎨 Personalizar el Botón

### Cambiar el Texto

Edita en `ContactSection.vue`:

```vue
<a :href="agendaUrl" ...>
  Agenda una demostración  <!-- Cambia este texto -->
</a>
```

### Cambiar el Icono

Reemplaza el SVG del calendario por otro icono:

```vue
<!-- Icono de calendario actual -->
<svg class="w-6 h-6 mr-3" ...>
  <path d="M8 7V3m8 4V3m-9 8h10M5 21h14..." />
</svg>

<!-- Ejemplo: Icono de video llamada -->
<svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
</svg>
```

---

## 📊 Tracking de Conversiones

### Google Analytics

Para trackear cuántas personas hacen clic en el botón:

```vue
<a 
  :href="agendaUrl"
  @click="trackAgendaClick"
  ...
>
```

Agrega en el script:

```vue
<script setup>
const agendaUrl = 'https://calendly.com/tu-usuario/demo'

const trackAgendaClick = () => {
  if (window.gtag) {
    window.gtag('event', 'click', {
      event_category: 'CTA',
      event_label: 'Agenda Demo',
      value: 1
    })
  }
}
</script>
```

---

## 🔗 Múltiples Opciones de Agendamiento

Si quieres ofrecer diferentes tipos de demos:

```vue
<script setup>
const agendaOptions = [
  {
    title: 'Demo Rápida (15 min)',
    url: 'https://calendly.com/cividata/demo-15min',
    description: 'Conoce las funcionalidades principales'
  },
  {
    title: 'Demo Completa (45 min)',
    url: 'https://calendly.com/cividata/demo-45min',
    description: 'Revisión detallada de todos los módulos'
  },
  {
    title: 'Consultoría (60 min)',
    url: 'https://calendly.com/cividata/consultoria',
    description: 'Análisis personalizado de tus necesidades'
  }
]
</script>

<template>
  <!-- En lugar de un solo botón, muestra opciones -->
  <div class="grid md:grid-cols-3 gap-6">
    <a 
      v-for="option in agendaOptions"
      :key="option.title"
      :href="option.url"
      target="_blank"
      class="glass-card text-center group cursor-pointer"
    >
      <h3 class="text-lg font-bold text-white mb-2">{{ option.title }}</h3>
      <p class="text-white/60 text-sm mb-4">{{ option.description }}</p>
      <span class="text-accent text-sm font-medium">Agendar →</span>
    </a>
  </div>
</template>
```

---

## ✅ Checklist de Configuración

- [ ] Elegir servicio de agendamiento
- [ ] Crear cuenta y configurar disponibilidad
- [ ] Obtener URL del calendario
- [ ] Actualizar `agendaUrl` en `ContactSection.vue`
- [ ] Probar que el enlace funciona
- [ ] Configurar recordatorios automáticos
- [ ] Personalizar mensaje de confirmación
- [ ] (Opcional) Configurar tracking de analytics

---

## 🎯 Mejores Prácticas

1. **Disponibilidad clara**: Define horarios específicos para demos
2. **Duración apropiada**: 30-45 minutos es ideal para demos
3. **Buffer time**: Deja 15 min entre citas
4. **Confirmación automática**: Activa emails de confirmación
5. **Recordatorios**: Envía recordatorio 24h y 1h antes
6. **Zona horaria**: Asegúrate de que se detecte automáticamente
7. **Preguntas previas**: Pide información básica al agendar

---

## 📞 Información de Contacto Actualizada

Las cards de contacto ahora tienen:
- ✅ Enlaces clicables (mailto: y tel:)
- ✅ Hover effects mejorados
- ✅ Efecto glass consistente
- ✅ Iconos más grandes y visibles

Para actualizar la información:

```vue
<!-- Email -->
<a href="mailto:tu-email@cividata.com">
  tu-email@cividata.com
</a>

<!-- Teléfono -->
<a href="tel:+573001234567">
  +57 300 123 4567
</a>

<!-- Ubicación -->
<div>Tu Ciudad, País</div>
```

---

¡Listo! Ahora tu landing page tiene un sistema profesional de agendamiento. 🚀
