<template>
  <div class="min-h-screen bg-white">
    <!-- Page Content -->
    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="py-12 md:py-16 bg-black text-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 items-center">
          <!-- Colonne 1: Organisateur -->
          <div class="text-center">
            <p class="text-sm tracking-widest mb-4">Un événement organisé par</p>
            <img :src="logoArcanesEvents" alt="Arcanes Events" class="w-48 mx-auto mb-4" />
            <div class="flex items-center justify-center gap-4">
              <a href="https://www.linkedin.com/company/102587804/admin/dashboard/" target="_blank" rel="noopener" class="text-white hover:opacity-75">
                <img :src="iconLinkedin" alt="LinkedIn" class="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61556700119400" target="_blank" rel="noopener" class="text-white hover:opacity-75">
                <img :src="iconFacebook" alt="Facebook" class="w-6 h-6" />
              </a>
            </div>
          </div>

          <!-- Colonne 2: La Sirène -->
          <div class="flex justify-center">
            <a href="https://la-sirene.fr" target="_blank" rel="noopener" class="w-48 h-24 bg-white rounded-lg p-4 flex items-center justify-center hover:opacity-75 transition-opacity">
              <img :src="logoLaSirene" alt="La Sirène" class="max-w-full max-h-full" style="object-fit: contain;" />
            </a>
          </div>

          <!-- Colonne 3: Port Atlantique -->
          <div class="flex justify-center">
            <a href="https://www.larochelle.port.fr" target="_blank" rel="noopener" class="w-48 h-24 bg-white rounded-lg p-4 flex items-center justify-center hover:opacity-75 transition-opacity">
              <img :src="logoPortAtlantique" alt="Port Atlantique" class="max-w-full max-h-full" style="object-fit: contain;" />
            </a>
          </div>

          <!-- Colonne 4: UTLR -->
          <div class="text-center md:text-right">
            <p class="text-2xl md:text-xl tracking-widest font-bold">UTLR<span class="registered">®</span> 2025</p>
            <p class="text-lg md:text-l tracking-widest mt-2">LA ROCHELLE</p>
            <div class="flex flex-col md:items-end mt-4 space-y-2">
              <router-link to="/rgpd" class="text-sm tracking-widest hover:underline">Politique de confidentialité</router-link>
              <router-link to="/mentions-legales" class="text-sm tracking-widest hover:underline">Mentions légales</router-link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import logoArcanesEvents from './assets/images/Logo-Arcanes-Events-paysage-blanc.png'
import logoLaSirene from './assets/images/logo-la-sirene.jpg'
import logoPortAtlantique from './assets/images/logo-port-atlantique.png'
import iconLinkedin from './assets/images/linkedin.svg'
import iconFacebook from './assets/images/facebook.svg'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&display=swap');

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
