<template>
  <div class="min-h-screen bg-black flex items-center justify-center px-4">
    <div class="max-w-md w-full">
      <div class="text-center mb-16">
        <h1 class="text-[4rem] sm:text-[5rem] font-bold tracking-tighter text-white leading-none">UTLR®</h1>
      </div>
      
      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <input
            v-model="username"
            type="text"
            placeholder="Identifiant"
            class="w-full px-4 py-3 bg-transparent border-2 border-white text-white placeholder-gray-400 focus:outline-none"
          />
        </div>
        
        <div>
          <input
            v-model="password"
            type="password"
            placeholder="Mot de passe"
            class="w-full px-4 py-3 bg-transparent border-2 border-white text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        <div v-if="error" class="text-red-500 text-sm text-center">
          {{ error }}
        </div>
        
        <button
          type="submit"
          class="w-full px-4 py-3 bg-white text-black font-bold hover:bg-gray-100 transition-colors"
        >
          ENTRER
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  if (
    username.value === import.meta.env.VITE_AUTH_USERNAME &&
    password.value === import.meta.env.VITE_AUTH_PASSWORD
  ) {
    localStorage.setItem('utlr_auth', 'true')
    router.push('/')
  } else {
    error.value = 'Identifiants incorrects'
  }
}
</script>
