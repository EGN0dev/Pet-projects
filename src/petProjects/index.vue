<script lang="ts">
import { defineComponent,ref } from 'vue';
import { RouterLink } from 'vue-router';




export default defineComponent({
    setup() {
            
  

        return {}

        },
       
    
  
})

</script>

<template>
    <div class="flex w-screen h-screen flex-col items-center border-black border-2 rounded-2xl">
        <p>THIS IS HOMEPAGE</p>
        <router-link class="border-black border-2 rounded-2xl" to="/calculator">Go to calculator </router-link>
        <router-link class="border-black border-2 rounded-2xl" to="/tictactoe">Go to tictactoe </router-link>
    
    </div>
    <router-view/>
    </template>