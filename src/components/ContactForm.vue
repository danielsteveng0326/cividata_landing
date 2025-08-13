<template>
  <section id="contacto" class="py-16 px-6">
    <h2 class="text-3xl font-bold text-center mb-8">Solicita una demo</h2>
    <form action="https://formsubmit.co/info@cividata.co" method="POST" class="max-w-xl mx-auto space-y-6">
      <input type="text" name="nombre" placeholder="Nombre" class="w-full border px-4 py-2 rounded" />
      <input type="email" name="correo" placeholder="Correo electrónico" class="w-full border px-4 py-2 rounded" required />
      <input type="text" name="entidad" placeholder="Entidad (opcional)" class="w-full border px-4 py-2 rounded" />
      <button type="submit" class="w-full bg-teal-600 text-white py-2 rounded font-semibold">Enviar solicitud</button>
    </form>
  </section>
</template>