<template>
  <div class="newsletter-form">
    <p class="text-base sm:text-lg mb-6 max-w-2xl mx-auto">
      Vous souhaitez être informé en avant-première de l'ouverture des inscriptions et des actualités de l'UTLR<span class="registered">®</span> ? Inscrivez-vous !
    </p>
    <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
      <div class="relative">
        <input
          v-model="email"
          type="email"
          required
          pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,64}"
          title="Veuillez entrer une adresse email valide"
          placeholder="Votre adresse email"
          class="w-full px-4 sm:px-6 py-3 sm:py-4 border-2"
          :class="{
            'border-black': !error && !emailError,
            'border-red-600': error || emailError,
            'bg-transparent': true
          }"
          :disabled="isLoading"
          @input="validateEmail"
        />
        <div v-if="emailError" class="text-red-600 text-sm mt-1">
          {{ emailError }}
        </div>
      </div>

      <!-- Case RGPD -->
      <div class="flex items-start gap-2">
        <input
          type="checkbox"
          id="rgpd"
          v-model="rgpdAccepted"
          required
          class="mt-1"
        />
        <label for="rgpd" class="text-sm text-left">
          En cochant cette case, j'accepte que mes données personnelles soient utilisées pour me tenir informé des actualités de l'UTLR<span class="registered">®</span>. Pour plus d'informations sur le traitement de vos données et vos droits, consultez notre <a href="/mentions-legales" class="underline hover:text-gray-600">politique de confidentialité</a>.
        </label>
      </div>

      <button
        type="submit"
        class="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-black text-white font-bold hover:bg-white hover:text-black border-2 border-black transition-colors text-base sm:text-lg"
        :disabled="isLoading || !rgpdAccepted"
      >
        {{ isLoading ? 'EN COURS...' : 'S\'INSCRIRE' }}
      </button>
    </form>
    <transition name="fade">
      <div v-if="message" 
           class="mt-4 text-base sm:text-lg"
           :class="{'text-green-600': !error, 'text-red-600': error}"
      >
        {{ message }}
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { subscribeToNewsletter } from '../lib/newsletter'

const email = ref('')
const isLoading = ref(false)
const message = ref('')
const error = ref(false)
const emailError = ref('')
const rgpdAccepted = ref(false)

const validateEmail = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,64}$/
  if (!email.value) {
    emailError.value = 'L\'adresse email est requise'
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Veuillez entrer une adresse email valide'
  } else {
    emailError.value = ''
  }
}

const handleSubmit = async () => {
  validateEmail()
  if (emailError.value || !rgpdAccepted.value) {
    return
  }

  isLoading.value = true
  message.value = ''
  error.value = false

  try {
    await subscribeToNewsletter(email.value)
    message.value = 'Merci pour votre inscription !'
    email.value = ''
    emailError.value = ''
  } catch (err: any) {
    console.error('Erreur détaillée:', err)
    error.value = true
    if (err.message.includes('already exists')) {
      message.value = 'Cette adresse email est déjà inscrite à notre newsletter.'
    } else {
      message.value = 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

input::placeholder {
  @apply text-black opacity-50;
}
</style>
