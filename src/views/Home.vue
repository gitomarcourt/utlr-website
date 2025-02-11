<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="min-h-screen relative bg-white">
      <!-- Video Background -->
      <div class="absolute inset-0 w-full h-full">
        <video
          class="w-full h-full object-cover opacity-70"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="../assets/videos/hero-background.mp4" type="video/mp4">
        </video>
      </div>

      <!-- Content -->
      <div class="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div class="text-center">
          <h1 class="text-[5rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold tracking-tighter text-black leading-none">UTLR®</h1>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="py-16 md:py-24 bg-black text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          <!-- Date -->
          <div class="text-center relative">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-white"></div>
            <div class="pt-8">
              <div class="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-2">
                <span class="number-animation" ref="date">31</span>
              </div>
              <div class="text-lg sm:text-xl tracking-widest">
                JANVIER
              </div>
              <div class="text-lg sm:text-xl tracking-widest mt-1">
                2026
              </div>
            </div>
          </div>
          
          <!-- Distances -->
          <div class="text-center relative">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-white"></div>
            <div class="pt-8">
              <div class="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-2 flex items-center justify-center">
                <span class="number-animation" ref="distance1">6</span>
                <span class="text-xl sm:text-2xl mx-2">&</span>
                <span class="number-animation" ref="distance2">11</span>
              </div>
              <div class="text-lg sm:text-xl tracking-widest">
                KILOMÈTRES
              </div>
            </div>
          </div>
          
          <!-- Kids Race -->
          <div class="text-center relative">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-white"></div>
            <div class="pt-8">
              <div class="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-2">
                <span class="number-animation" ref="kids">1</span>
              </div>
              <div class="text-lg sm:text-xl tracking-widest">
                COURSE
              </div>
              <div class="text-lg sm:text-xl tracking-widest mt-1">
                ENFANTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Information Sections -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto space-y-16 md:space-y-20">
          <!-- Section 1 -->
          <div>
            <h2 class="text-xl sm:text-2xl font-bold mb-4">Un nouveau rendez-vous running en 2026</h2>
            <p class="text-base sm:text-lg leading-relaxed">
              Le samedi 31 janvier 2026, Arcanes Events lance la première édition de l'UTLR®, (acronyme de Urban Trail La Rochelle®), une course à pied populaire et responsable, tracée au cœur des quartiers de La Pallice et de Port-Neuf à La Rochelle.
            </p>
          </div>

          <!-- Section 2 -->
          <div>
            <h2 class="text-xl sm:text-2xl font-bold mb-4">Un autre regard sur la ville et son environnement</h2>
            <p class="text-base sm:text-lg leading-relaxed">
              L'urban trail, c'est bien plus qu'une simple course. C'est un parcours urbain à travers chemins, rues, infrastructures et lieux emblématiques de l'ouest de la cité maritime. Une façon originale de découvrir la ville, ses acteurs et son environnement citadin, portuaire et industriel, en passant par certains sites et itinéraires habituellement fermés au public.
            </p>
          </div>

          <!-- Section 3 -->
          <div>
            <h2 class="text-xl sm:text-2xl font-bold mb-4">Des parcours pour toutes et tous au départ de La Sirène</h2>
            <p class="text-base sm:text-lg leading-relaxed">
              Coureuses et coureurs affûtés, citadines et citadins curieux de porter un regard décalé sur la ville, l'UTLR® propose plusieurs tracés adaptés à tous les niveaux. Des parcours avec la salle de concert de la Sirène comme point de départ et d'arrivée, pour que chacunes et chacunes puissent trouver basket à son pied.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">RESTEZ INFORMÉ</h2>
          <form @submit.prevent="submitNewsletter" class="space-y-4 md:space-y-6">
            <div class="relative">
              <input
                v-model="email"
                type="email"
                required
                placeholder="Votre adresse email"
                class="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-black bg-transparent focus:outline-none text-base sm:text-lg"
              />
            </div>
            <button
              type="submit"
              class="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-black text-white font-bold hover:bg-white hover:text-black border-2 border-black transition-colors text-base sm:text-lg"
            >
              S'INSCRIRE
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const email = ref('')
const date = ref(null)
const distance1 = ref(null)
const distance2 = ref(null)
const kids = ref(null)

onMounted(() => {
  // Animation des nombres avec GSAP
  const numbers = document.querySelectorAll('.number-animation')
  numbers.forEach((number) => {
    gsap.from(number, {
      textContent: 0,
      duration: 2,
      ease: 'power2.out',
      snap: { textContent: 1 },
      scrollTrigger: {
        trigger: number,
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    })
  })
})

const submitNewsletter = async () => {
  if (email.value) {
    console.log('Newsletter subscription:', email.value)
    email.value = ''
  }
}
</script>

<style scoped>
input::placeholder {
  @apply text-black opacity-50;
}

.number-animation {
  display: inline-block;
}
</style>
