<template>
  <div class="min-h-screen bg-white">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
      <!-- Header -->
      <div class="mx-auto max-w-2xl lg:text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Les Parcours
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">
          Des parcours pour toutes et tous au départ de La Sirène
        </p>
      </div>

      <!-- Course Details -->
      <div class="mt-16 space-y-20">
        <!-- UTLR SOLO 11km -->
        <div class="relative">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="relative lg:col-start-2">
              <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div class="aspect-[16/9] rounded-lg bg-gray-50 object-cover shadow-lg">
                    <!-- Add your image here -->
                  </div>
                  <figcaption class="mt-3 flex text-sm text-gray-500">
                    <span>Parcours UTLR® SOLO 11 km</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="relative lg:col-start-1">
              <h2 class="text-2xl font-bold tracking-tight text-utlr-orange sm:text-3xl">
                UTLR® SOLO 11 km
              </h2>
              <div class="mt-6 text-gray-600 space-y-6">
                <p>
                  Un tracé accessible mais stimulant, mêlant l'ensemble des paysages urbains de l'ouest rochelais.
                  Parfait pour les coureurs réguliers ou ceux en recherche de nouveaux défis !
                </p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Distance : 11 km</li>
                  <li>Départ : La Sirène</li>
                  <li>Parcours varié à travers la ville</li>
                  <li>Sites emblématiques et passages inédits</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- UTLR SOLO 6km -->
        <div class="relative">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="relative">
              <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div class="aspect-[16/9] rounded-lg bg-gray-50 object-cover shadow-lg">
                    <!-- Add your image here -->
                  </div>
                  <figcaption class="mt-3 flex text-sm text-gray-500">
                    <span>Parcours UTLR® SOLO 6 km</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="relative">
              <h2 class="text-2xl font-bold tracking-tight text-utlr-blue sm:text-3xl">
                UTLR® SOLO 6 km
              </h2>
              <div class="mt-6 text-gray-600 space-y-6">
                <p>
                  Un tracé atypique entre zones portuaire et industrielle, idéal pour les débutants
                  et ceux qui souhaitent s'initier à la course urbaine.
                </p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Distance : 6 km</li>
                  <li>Départ : La Sirène</li>
                  <li>Parcours accessible</li>
                  <li>Découverte du patrimoine portuaire</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- UTLR ENFANTS -->
        <div class="relative">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <div class="relative lg:col-start-2">
              <div class="relative mx-auto max-w-prose text-base lg:max-w-none">
                <figure>
                  <div class="aspect-[16/9] rounded-lg bg-gray-50 object-cover shadow-lg">
                    <!-- Add your image here -->
                  </div>
                  <figcaption class="mt-3 flex text-sm text-gray-500">
                    <span>Parcours UTLR® ENFANTS 1 km</span>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div class="relative lg:col-start-1">
              <h2 class="text-2xl font-bold tracking-tight text-utlr-yellow sm:text-3xl">
                UTLR® ENFANTS 1 km
              </h2>
              <div class="mt-6 text-gray-600 space-y-6">
                <p>
                  Une boucle sécurisée destinée aux enfants, pour courir autour de La Sirène
                  dans une ambiance nocturne sous les encouragements de l'ensemble du public.
                </p>
                <ul class="list-disc pl-5 space-y-2">
                  <li>Distance : 1 km</li>
                  <li>Parcours sécurisé</li>
                  <li>Ambiance festive</li>
                  <li>Encadrement spécifique</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here if needed
</script>
