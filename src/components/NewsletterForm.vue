<template>
  <div class="newsletter-form">
    <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
      <div class="relative">
        <input
          v-model="email"
          type="email"
          required
          pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
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
      <button
        type="submit"
        class="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-black text-white font-bold hover:bg-white hover:text-black border-2 border-black transition-colors text-base sm:text-lg"
        :disabled="isLoading"
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

const validateEmail = () => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
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
  if (emailError.value) {
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
    message.value = err.message || 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'
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
