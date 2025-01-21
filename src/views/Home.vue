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
        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
          <!-- Left Side -->
          <div class="py-12 md:py-20 pr-4 md:pr-12 flex flex-col justify-between h-full">
            <div class="space-y-6 md:space-y-8">
              <div class="inline-block border-2 border-black px-4 py-2">
                <span class="text-xl font-bold tracking-wide">#01</span>
              </div>
              <h1 class="text-5xl md:text-8xl font-bold tracking-tight leading-none">
                URBAN<br>TRAIL<br>LA<br>ROCHELLE
              </h1>
            </div>
            <div class="mt-8 md:mt-12">
              <div class="inline-block border-2 border-black px-4 py-2">
                <span class="text-xl font-bold">31.01.26</span>
              </div>
            </div>
          </div>

          <!-- Right Side -->
          <div class="bg-black text-white py-12 md:py-20 px-4 md:pl-12 flex flex-col justify-between relative">
            <div class="space-y-6 md:space-y-8 max-w-lg">
              <div class="h-1 w-12 bg-white"></div>
              <p class="text-lg md:text-2xl leading-relaxed">
                Un nouveau rendez-vous running en 2026 à La Rochelle. Une course urbaine unique qui vous fera découvrir la ville autrement.
              </p>
            </div>
            <div class="flex items-center space-x-4 mt-8 md:mt-0">
              <div class="h-1 w-12 bg-white"></div>
              <button class="border-2 border-white px-6 md:px-8 py-3 text-base md:text-lg font-bold hover:bg-white hover:text-black transition-colors">
                Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 md:py-32">
      <div class="px-4 md:container">
        <div class="max-w-6xl mx-auto space-y-24 md:space-y-32">
          <!-- Section 1 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div class="relative">
              <div class="h-1 w-12 bg-black mb-6 md:mb-8"></div>
              <h2 class="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Un nouveau<br>rendez&#8209;vous<br>running en 2026</h2>
              <div class="relative">
                <div class="border-2 border-black p-6 md:p-8">
                  <p class="text-base md:text-lg leading-relaxed">
                    Le samedi 31 janvier 2026, Arcanes Events lance la première édition de l'UTLR®, (acronyme de Urban Trail La Rochelle®), une course à pied populaire et responsable, tracée au cœur des quartiers de La Pallice et de Port-Neuf à La Rochelle.
                  </p>
                </div>
                <div class="absolute -bottom-2 -right-2 w-full h-full border-2 border-black bg-black -z-10"></div>
              </div>
            </div>
            <div class="bg-black aspect-square w-full"></div>
          </div>

          <!-- Section 2 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div class="bg-black aspect-square w-full order-2 md:order-1"></div>
            <div class="relative order-1 md:order-2">
              <div class="h-1 w-12 bg-black mb-6 md:mb-8"></div>
              <h2 class="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Un autre regard<br>sur la ville et son<br>environnement</h2>
              <div class="relative">
                <div class="border-2 border-black p-6 md:p-8">
                  <p class="text-base md:text-lg leading-relaxed">
                    L'urban trail, c'est bien plus qu'une simple course. C'est un parcours urbain à travers chemins, rues, infrastructures et lieux emblématiques de l'ouest de la cité maritime. Une façon originale de découvrir la ville, ses acteurs et son environnement citadin, portuaire et industriel, en passant par certains sites et itinéraires habituellement fermés au public.
                  </p>
                </div>
                <div class="absolute -bottom-2 -right-2 w-full h-full border-2 border-black bg-black -z-10"></div>
              </div>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div class="relative">
              <div class="h-1 w-12 bg-black mb-6 md:mb-8"></div>
              <h2 class="text-2xl md:text-4xl font-bold mb-6 md:mb-8">Des parcours pour<br>toutes et tous au<br>départ de La Sirène</h2>
              <div class="relative">
                <div class="border-2 border-black p-6 md:p-8">
                  <p class="text-base md:text-lg leading-relaxed">
                    Coureuses et coureurs affûtés, citadines et citadins curieux de porter un regard décalé sur la ville, l'UTLR® propose plusieurs tracés adaptés à tous les niveaux. Des parcours avec la salle de concert de la Sirène comme point de départ et d'arrivée, pour que chacunes et chacunes puissent trouver basket à son pied.
                  </p>
                </div>
                <div class="absolute -bottom-2 -right-2 w-full h-full border-2 border-black bg-black -z-10"></div>
              </div>
            </div>
            <div class="bg-black aspect-square w-full"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-black text-white py-16 md:py-32">
      <div class="px-4 md:container">
        <div class="max-w-2xl mx-auto">
          <div class="space-y-6 md:space-y-8">
            <h2 class="text-2xl md:text-3xl font-bold">RESTEZ INFORMÉ</h2>
            <form class="space-y-4" @submit.prevent="submitNewsletter">
              <div class="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  class="bg-transparent border-2 border-white px-4 py-3 flex-grow text-base md:text-lg"
                  v-model="email"
                  required
                >
                <button 
                  type="submit" 
                  class="bg-white text-black px-6 md:px-8 py-3 text-base md:text-lg font-bold hover:bg-black hover:text-white border-2 border-white transition-colors"
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
