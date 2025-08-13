<template>
  <section class="py-20 px-6 bg-gray-50">
    <h2 class="text-3xl font-bold text-center mb-12">¿Qué puedes hacer con CiviData?</h2>
    <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div v-for="(item, index) in features" :key="index" class="bg-white p-6 rounded-xl shadow">
        <h3 class="font-semibold text-xl mb-2">{{ item.title }}</h3>
        <p>{{ item.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  { title: 'Automatización de reportes', desc: 'Genera informes listos para entes de control sin esfuerzo.' },
  { title: 'Visualización en tiempo real', desc: 'Consulta la gestión contractual desde un tablero actualizado.' },
  { title: 'Decisiones basadas en datos', desc: 'Analiza indicadores clave desde tableros interactivos.' },
  { title: 'Generación de actas y reportes', desc: 'Crea actas automáticas listas para firmar y archivar.' },
  { title: 'Asistente IA en contratación', desc: 'Resuelve dudas jurídicas con inteligencia artificial entrenada.' }
]
</script>