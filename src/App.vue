<template>
  <div class="min-h-screen bg-white">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 transition-all duration-300" :class="{'bg-white shadow-md': isScrolled}">
      <div class="container">
        <div class="flex h-16 items-center justify-between" :class="{'border-b-2 border-black': !isScrolled}">
          <div class="flex items-center">
            <router-link to="/" class="text-black font-bold text-xl tracking-widest uppercase hover:bg-black hover:text-white px-4 py-2">UTLR®</router-link>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-1">
                <router-link to="/" class="nav-link">Accueil</router-link>
              </div>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="toggleMobileMenu" class="p-2 hover:bg-black hover:text-white">
              <span class="sr-only">Menu</span>
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <div class="md:hidden" v-show="isMobileMenuOpen">
          <div class="bg-white border-t-2 border-black py-2">
            <router-link to="/" class="block px-4 py-2 hover:bg-black hover:text-white">Accueil</router-link>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <main class="pt-16">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-white py-20">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <!-- Logo et organisateur -->
          <div class="text-center md:text-left">
            <h3 class="text-xl font-bold mb-2">UTLR®</h3>
            <p>Un événement organisé par<br><strong>Arcanes Events</strong></p>
          </div>
          
          <!-- Contact -->
          <div class="text-center">
            <a href="mailto:contact@utlr.fr" class="hover:underline">Contact</a>
          </div>
          
          <!-- Social -->
          <div class="text-center md:text-right">
            <a href="#" class="hover:underline">Instagram</a>
          </div>
        </div>
        
        <!-- Copyright -->
        <div class="mt-16 pt-8 border-t-2 border-black text-center text-sm">
          <p>&copy; 2026 UTLR®. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial scroll position
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&display=swap');

.nav-link {
  @apply px-4 py-2 text-black hover:bg-black hover:text-white;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

.shadow-md {
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
</style>
