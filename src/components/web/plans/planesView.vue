<script setup>
const iconc = IconMaterialSymbolsWorkspacePremiumRounded;
</script>

<template>
  <div class="m-5 p-7">
    <div class="flex justify-center gap-9 flex-wrap">
      <planView
        ico="iconc"
        titulo="Plan A"
        precio="s/.200"
        descripcion="Para pequeñas empresas: facturación electrónica y reportes básicos. Fácil y accesible."
      />
      <planView
        ico="iconc"
        titulo="Plan B"
        precio="s/.200"
        descripcion="Para negocios en crecimiento: inventarios, multiusuario y reportes avanzados. Mayor control y eficiencia."
      />
      <planView
        ico="iconc"
        titulo="Plan C"
        descripcion="Para grandes empresas: automatización y análisis en tiempo real. Máxima eficiencia y personalización."
        precio="s/.200"
      />
    </div>
  </div>
</template>
