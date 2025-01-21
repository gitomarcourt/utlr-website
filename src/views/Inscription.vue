<template>
  <div class="min-h-screen bg-gray-50">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-2xl text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Inscription
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Choisissez votre formule et rejoignez l'aventure UTLR®
        </p>
      </div>

      <!-- Registration Cards -->
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <!-- SOLO 11km -->
        <div class="relative rounded-2xl bg-white p-8 shadow-lg">
          <h3 class="text-2xl font-bold text-utlr-orange">
            UTLR® SOLO 11 km
          </h3>
          <p class="mt-4 text-base text-gray-600">
            Un parcours varié pour pratiquants réguliers ou amateurs de défis
          </p>
          <div class="mt-6">
            <p class="text-4xl font-bold tracking-tight text-gray-900">25€</p>
          </div>
          <ul class="mt-8 space-y-4">
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-gray-600">Dossard personnalisé</span>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-gray-600">Ravitaillement</span>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-gray-600">T-shirt technique</span>
            </li>
          </ul>
          <button class="mt-8 w-full rounded-md bg-utlr-orange px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500">
            S'inscrire
          </button>
        </div>

        <!-- SOLO 6km -->
        <div class="relative rounded-2xl bg-white p-8 shadow-lg">
          <h3 class="text-2xl font-bold text-utlr-blue">
            UTLR® SOLO 6 km
          </h3>
          <p class="mt-4 text-base text-gray-600">
            Une formule resserrée autour du Port Atlantique
          </p>
          <div class="mt-6">
            <p class="text-4xl font-bold tracking-tight text-gray-900">15€</p>
          </div>
          <ul class="mt-8 space-y-4">
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-gray-600">Dossard personnalisé</span>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-gray-600">Ravitaillement</span>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-gray-600">T-shirt technique</span>
            </li>
          </ul>
          <button class="mt-8 w-full rounded-md bg-utlr-blue px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
            S'inscrire
          </button>
        </div>

        <!-- ENFANTS -->
        <div class="relative rounded-2xl bg-white p-8 shadow-lg">
          <h3 class="text-2xl font-bold text-utlr-yellow">
            UTLR® ENFANTS 1 km
          </h3>
          <p class="mt-4 text-base text-gray-600">
            Une boucle sécurisée pour les enfants
          </p>
          <div class="mt-6">
            <p class="text-4xl font-bold tracking-tight text-gray-900">5€</p>
          </div>
          <ul class="mt-8 space-y-4">
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-gray-600">Dossard personnalisé</span>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-gray-600">Médaille finisher</span>
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-gray-600">Goodies</span>
            </li>
          </ul>
          <button class="mt-8 w-full rounded-md bg-utlr-yellow px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500">
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>
