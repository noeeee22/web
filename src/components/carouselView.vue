<script setup>
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
</script>

<template>
  <div class="carousel-container">
    <n-carousel draggable autoplay="">
      <div>
        <div class="carousel-text">
          <h1>TSI</h1>
          <p>
            Ofrecemos sistemas de facturación especializados y venta de equipos
            de escritorio de alta calidad.
          </p>
        </div>
        <img class="carousel-img w-full" :src="img3" />
      </div>
      <div>
        <div class="carousel-text">
          <h1>TSI</h1>
          <p>
            Ofrecemos sistemas de facturación especializados y venta de equipos
            de escritorio de alta calidad.
          </p>
        </div>
        <img class="carousel-img w-full" :src="img4" />
      </div>
    </n-carousel>
  </div>
</template>

<style scoped>
.carousel-img {
  width: 100%;
  height: 900px;
  object-fit: cover;
}

:deep(.creative-enter-from),
:deep(.creative-leave-to) {
  opacity: 0;
  transform: scale(0.8);
}

:deep(.creative-enter-active),
:deep(.creative-leave-active) {
  transition: all 0.3s ease;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 900px;
}

.carousel-text {
  position: absolute;
  top: 200px;
  left: 0;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 3%;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
}

.carousel-text h1 {
  font-size: 4.5rem;
  margin-bottom: 0.5rem;
  font-weight: bold;
  text-align: left;
}

.carousel-text p {
  font-size: 1.35rem;
}

@media (max-width: 768px) {
  .carousel-container {
    height: 600px;
  }
  .carousel-text {
    width: 100%;
    align-items: center;
    text-align: center;
  }
  .carousel-text h1 {
    font-size: 4rem; /* Ajusta el tamaño según tus necesidades */
  }
  .carousel-text p {
    font-size: 1.25rem; /* Ajusta el tamaño según tus necesidades */
  }
}

@media (max-width: 480px) {
  .carousel-container {
    height: 400px;
  }
  .carousel-text h1 {
    font-size: 3rem; /* Ajusta el tamaño según tus necesidades */
  }
  .carousel-text p {
    font-size: 1rem; /* Ajusta el tamaño según tus necesidades */
  }
}
</style>
