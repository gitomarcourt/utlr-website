<template>
  <div class="newsletter-form">
    <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
      <div class="relative">
        <input
          v-model="email"
          type="email"
          required
          placeholder="Votre adresse email"
          class="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-black bg-transparent focus:outline-none text-base sm:text-lg"
          :disabled="isLoading"
        />
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

const email = ref('')
const isLoading = ref(false)
const message = ref('')
const error = ref(false)

const handleSubmit = async () => {
  isLoading.value = true
  message.value = ''
  error.value = false

  try {
    const response = await fetch('/api/newsletter-subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email.value }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Une erreur est survenue')
    }

    message.value = 'Merci pour votre inscription !'
    email.value = ''
  } catch (err: any) {
    error.value = true
    message.value = err.message === 'Email already subscribed' 
      ? 'Cette adresse email est déjà inscrite à notre newsletter.'
      : 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.'
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
