<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="min-h-screen relative bg-white">
      <!-- Background Pattern -->
      <div class="absolute inset-0 grid grid-cols-2">
        <div class="bg-white"></div>
        <div class="bg-black"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 px-4 md:container min-h-screen flex items-center">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
          <!-- Left Side -->
          <div class="py-20 pr-4 md:pr-12 flex flex-col justify-between h-full">
            <div class="space-y-8">
              <div class="inline-block border-2 border-black px-4 py-2">
                <span class="text-xl font-bold tracking-wide">#01</span>
              </div>
              <h1 class="text-6xl md:text-8xl font-bold tracking-tight leading-none">
                URBAN<br>TRAIL<br>LA<br>ROCHELLE
              </h1>
            </div>
            <div class="mt-12">
              <div class="inline-block border-2 border-black px-4 py-2">
                <span class="text-xl font-bold">31.01.26</span>
              </div>
            </div>
          </div>

          <!-- Right Side -->
          <div class="bg-black text-white py-20 pl-4 md:pl-12 flex flex-col justify-between relative">
            <div class="space-y-8 max-w-lg">
              <div class="h-1 w-12 bg-white"></div>
              <p class="text-xl md:text-2xl leading-relaxed">
                Un nouveau rendez-vous running en 2026 à La Rochelle. Une course urbaine unique qui vous fera découvrir la ville autrement.
              </p>
            </div>
            <div class="flex items-center space-x-4">
              <div class="h-1 w-12 bg-white"></div>
              <button class="border-2 border-white px-8 py-3 text-lg font-bold hover:bg-white hover:text-black transition-colors">
                Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 z-10">
        <div class="h-12 w-0.5 bg-black animate-pulse"></div>
        <span class="text-sm font-bold tracking-widest">SCROLL</span>
      </div>
    </section>

    <!-- Main Content -->
    <section class="px-4 md:container py-20 md:py-32">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div class="content-box">
          <div class="relative mb-8">
            <div class="bg-black h-1 w-12 absolute -top-4 left-0"></div>
            <h2 class="text-2xl md:text-3xl font-bold">Un nouveau<br>rendez-vous</h2>
          </div>
          <p class="text-base md:text-lg">
            Le samedi 31 janvier 2026, Arcanes Events lance la première édition de l'UTLR®, (acronyme de Urban Trail La Rochelle®), une course à pied populaire et responsable, tracée au cœur des quartiers de La Pallice et de Port-Neuf à La Rochelle.
          </p>
        </div>
        <div class="content-box">
          <div class="relative mb-8">
            <div class="bg-black h-1 w-12 absolute -top-4 left-0"></div>
            <h2 class="text-2xl md:text-3xl font-bold">Un autre<br>regard</h2>
          </div>
          <p class="text-base md:text-lg">
            L'urban trail, c'est bien plus qu'une simple course. C'est un parcours urbain à travers chemins, rues, infrastructures et lieux emblématiques de l'ouest de la cité maritime.
          </p>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-black text-white py-20 md:py-32">
      <div class="px-4 md:container">
        <div class="max-w-2xl mx-auto">
          <div class="space-y-8">
            <h2 class="text-3xl font-bold">RESTEZ INFORMÉ</h2>
            <form class="space-y-4" @submit.prevent="submitNewsletter">
              <div class="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  class="bg-transparent border-2 border-white px-4 py-3 flex-grow"
                  v-model="email"
                  required
                >
                <button 
                  type="submit" 
                  class="bg-white text-black px-8 py-3 font-bold hover:bg-black hover:text-white border-2 border-white transition-colors"
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')

const submitNewsletter = () => {
  console.log('Email soumis:', email.value)
  email.value = ''
}
</script>

<style scoped>
.content-box {
  position: relative;
}

.content-box h2 {
  position: relative;
  display: inline-block;
}

.content-box h2::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: black;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.content-box:hover h2::after {
  transform: scaleX(1);
}

input {
  background: transparent;
  outline: none;
}

input:focus {
  border-color: white;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
