<template>
  <div class="min-h-screen bg-white">
    <!-- Page Content -->
    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="py-12 md:py-16 bg-black text-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div class="text-center md:text-left">
            <p class="text-sm tracking-widest">Un événement organisé par</p>
            <p class="text-lg md:text-xl font-bold tracking-wider mt-1">ARCANES EVENTS</p>
          </div>
          <div class="text-center md:text-right">
            <p class="text-sm tracking-widest">UTLR® 2026</p>
            <p class="text-sm tracking-widest mt-1">LA ROCHELLE</p>
          </div>
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
