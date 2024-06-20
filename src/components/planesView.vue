<script setup></script>

<template>
  <div class="m-5 p-7">
    <!-- <h1 class="text-center text-3xl mb-4">Nuestros Planes</h1> -->
    <div class="flex justify-center gap-9 flex-wrap">
      <planView
        titulo="Plan A"
        precio="s/.200"
        descripcion="Para pequeñas empresas. Ofrece facturación electrónica y reportes básicos. Fácil y accesible."
      />
      <planView
        titulo="Plan B"
        precio="s/.200"
        descripcion="Para negocios en crecimiento. Incluye inventarios, multiusuario y reportes avanzados. Mayor control y eficiencia."
      />
      <planView
        titulo="Plan C"
        descripcion="Para grandes empresas. Ofrece automatizació, soporte prioritario y análisis en tiempo real. Máxima eficiencia y personalización."
        precio="s/.200"
      />
    </div>
  </div>
</template>
