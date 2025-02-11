<template>
  <div class="min-h-screen bg-white">
    <!-- Page Content -->
    <main>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-white py-20">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"></div>
        
        <!-- Copyright -->
        <div class="mt-16 pt-8 border-t-2 border-black text-center text-sm">
          <p>&copy; 2026 UTLR®. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@400;700&display=swap');

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}
</style>
