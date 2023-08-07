<script lang="ts">

import { defineComponent,ref } from 'vue';


export default defineComponent ({
    setup(){
        const buttonsColor = ref <string>("border-black border-2  w-20 h-20 bg-indigo-200 relative")
            

        return {buttonsColor }
    }
})






</script>

<template>

<div class="border-black border-2  w-screen h-screen bg-neutral-700 flex items-center justify-center">

<div class="border-black border-2 rounded-2xl bg-neutral-400 h-[800px] w-[400px] flex items-center justify-center">

 
      <div class="display: grid grid grid-cols-3 ">
 
        <div > <button :class="buttonsColor" >7</button> </div>
        <div> <button :class="buttonsColor" >8</button> </div>
        <div> <button :class="buttonsColor" >9</button> </div>               
        <div> <button :class="buttonsColor" >4</button> </div>
        <div> <button :class="buttonsColor" >5</button> </div>
        <div> <button :class="buttonsColor"> 6</button> </div>
        <div> <button :class="buttonsColor">1</button> </div>
        <div> <button :class="buttonsColor" >2</button> </div>
        <div> <button :class="buttonsColor"  >3</button> </div>
       
      
      </div>
  </div>
</div>


</template>