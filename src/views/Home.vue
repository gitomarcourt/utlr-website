<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="h-[70vh] relative bg-white">
      <!-- Video Background -->
      <div class="absolute inset-0 w-full h-full">
        <video
          class="w-full h-full object-cover opacity-70"
          autoplay
          loop
          muted
          playsinline
        >
          <source src="../assets/videos/hero-background.webm" type="video/webm">
          <source src="../assets/videos/hero-background.webm" type="video/mp4">
        </video>
      </div>

      <!-- Content -->
      <div class="relative z-10 h-full flex items-center justify-center px-4">
        <div class="text-center">
          <h1 class="text-[5rem] xs:text-[6rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-bold tracking-tighter text-black leading-none">
            UTLR<span class="registered">®</span>
          </h1>
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
        <div class="max-w-5xl mx-auto space-y-20">
          <!-- Section 1 -->
          <div class="flex flex-col md:flex-row items-start gap-8">
            <div class="w-full md:w-1/3">
              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">La ville comme vous ne l'avez jamais courue</h2>
            </div>
            <div class="w-full md:w-2/3 border-l-2 border-black pl-8">
              <p class="text-base sm:text-lg leading-relaxed">
                Le 31 janvier 2026, Arcanes Events lance la première édition de l'UTLR<span class="registered">®</span>. Cet Urban Trail unique vous invite à découvrir La Rochelle sous un nouveau jour, avec un parcours urbain inédit à travers les quartiers emblématiques de La Pallice et de Port-Neuf. Une expérience sportive et culturelle qui allie performance et découverte du patrimoine rochelais.
              </p>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="flex flex-col md:flex-row items-start gap-8">
            <div class="w-full md:w-1/3">
              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Une aventure urbaine unique</h2>
            </div>
            <div class="w-full md:w-2/3 border-l-2 border-black pl-8">
              <p class="text-base sm:text-lg leading-relaxed">
                Plongez au cœur d'un parcours exceptionnel mêlant passages secrets, escaliers historiques et sites industriels habituellement fermés au public. L'UTLR<span class="registered">®</span> vous fait vivre une expérience immersive où chaque kilomètre révèle une nouvelle facette de la ville : des quais animés du port aux ruelles pittoresques, en passant par des lieux emblématiques réinventés pour l'occasion.
              </p>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="flex flex-col md:flex-row items-start gap-8">
            <div class="w-full md:w-1/3">
              <h2 class="text-2xl sm:text-3xl font-bold tracking-tight">Un événement accessible à tous</h2>
            </div>
            <div class="w-full md:w-2/3 border-l-2 border-black pl-8">
              <p class="text-base sm:text-lg leading-relaxed">
                Que vous soyez coureur aguerri ou amateur de découvertes urbaines, l'UTLR<span class="registered">®</span> s'adapte à votre niveau avec deux parcours de 6 et 11 km. Au départ de La Sirène, mythique salle de concert rochelaise, vivez une expérience sportive unique où l'effort se mêle au plaisir de l'exploration. Une course où chaque foulée vous rapproche d'une nouvelle perspective sur votre ville.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12">RESTEZ INFORMÉ</h2>
          <NewsletterForm />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import NewsletterForm from '../components/NewsletterForm.vue'

gsap.registerPlugin(ScrollTrigger)

const date = ref<HTMLElement | null>(null)
const distance1 = ref<HTMLElement | null>(null)
const distance2 = ref<HTMLElement | null>(null)
const kids = ref<HTMLElement | null>(null)

onMounted(() => {
  // Animation des nombres
  const elements = [date.value, distance1.value, distance2.value, kids.value]
  elements.forEach(element => {
    if (element) {
      const endValue = parseInt(element.textContent || '0')
      gsap.fromTo(
        element,
        { textContent: '0' },
        {
          duration: 2,
          textContent: endValue,
          roundProps: 'textContent',
          ease: 'power1.inOut',
        }
      )
    }
  })
})
</script>

<style scoped>
input::placeholder {
  @apply text-black opacity-50;
}

.number-animation {
  display: inline-block;
}

.registered {
  font-size: 0.3em;
  font-weight: normal;
  opacity: 0.5;
}
</style>
