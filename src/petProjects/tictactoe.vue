<script lang="ts">
import { defineComponent,ref } from 'vue';

export default defineComponent ({
    setup(){
        const buttonsColor = ref <string>("border-black border-2  w-40 h-40 bg-indigo-200 relative ")

        const cageNum1 = ref <boolean> (false)
        const cageNum2 = ref <boolean> (false)
        const cageNum3 = ref <boolean> (false)
        const cageNum4 = ref <boolean> (false)
        const cageNum5 = ref <boolean> (false)
        const cageNum6 = ref <boolean> (false)
        const cageNum7 = ref <boolean> (false)
        const cageNum8 = ref <boolean> (false)
        const cageNum9 = ref <boolean> (false)
        const playerOneTwo = ref <boolean>(false)
        const someoneWon = ref <boolean>(false)

        const buttonsDisabler1 = ref <boolean>(false)
        const buttonsDisabler2 = ref <boolean>(false)
        const buttonsDisabler3 = ref <boolean>(false)
        const buttonsDisabler4 = ref <boolean>(false)
        const buttonsDisabler5 = ref <boolean>(false)
        const buttonsDisabler6 = ref <boolean>(false)
        const buttonsDisabler7 = ref <boolean>(false)
        const buttonsDisabler8 = ref <boolean>(false)
        const buttonsDisabler9 = ref <boolean>(false)

        const resultCageNum1 = ref <string>('.')
        const resultCageNum2 = ref <string>('.')
        const resultCageNum3 = ref <string>('.')
        const resultCageNum4 = ref <string>('.')
        const resultCageNum5 = ref <string>('.')
        const resultCageNum6 = ref <string>('.')
        const resultCageNum7 = ref <string>('.')
        const resultCageNum8 = ref <string>('.')
        const resultCageNum9 = ref <string>('.')
        
        const cageNumFunc1 = () => {cageNum1.value = true; if (playerOneTwo.value==false){resultCageNum1.value = 'x';buttonsDisabler1.value = true;playerOneTwo.value=true;} else{resultCageNum1.value = 'o';buttonsDisabler1.value = true;playerOneTwo.value=false};whoWins()} 
        const cageNumFunc2 = () => {cageNum2.value = true; if (playerOneTwo.value==false){resultCageNum2.value = 'x';buttonsDisabler2.value = true;playerOneTwo.value=true;} else{resultCageNum2.value = 'o';buttonsDisabler2.value = true;playerOneTwo.value=false};whoWins()} 
        const cageNumFunc3 = () => {cageNum3.value = true; if (playerOneTwo.value==false){resultCageNum3.value = 'x';buttonsDisabler3.value = true;playerOneTwo.value=true;} else{resultCageNum3.value = 'o';buttonsDisabler3.value = true;playerOneTwo.value=false};whoWins()} 
        const cageNumFunc4 = () => {cageNum4.value = true; if (playerOneTwo.value==false){resultCageNum4.value = 'x';buttonsDisabler4.value = true;playerOneTwo.value=true;} else{resultCageNum4.value = 'o';buttonsDisabler4.value = true;playerOneTwo.value=false};whoWins()} 
        const cageNumFunc5 = () => {cageNum5.value = true; if (playerOneTwo.value==false){resultCageNum5.value = 'x';buttonsDisabler5.value = true;playerOneTwo.value=true;} else{resultCageNum5.value = 'o';buttonsDisabler5.value = true;playerOneTwo.value=false};whoWins()} 
        const cageNumFunc6 = () => {cageNum6.value = true; if (playerOneTwo.value==false){resultCageNum6.value = 'x';buttonsDisabler6.value = true;playerOneTwo.value=true;} else{resultCageNum6.value = 'o';buttonsDisabler6.value = true;playerOneTwo.value=false};whoWins()} 
        const cageNumFunc7 = () => {cageNum7.value = true; if (playerOneTwo.value==false){resultCageNum7.value = 'x';buttonsDisabler7.value = true;playerOneTwo.value=true;} else{resultCageNum7.value = 'o';buttonsDisabler7.value = true;playerOneTwo.value=false};whoWins()} 
        const cageNumFunc8 = () => {cageNum8.value = true; if (playerOneTwo.value==false){resultCageNum8.value = 'x';buttonsDisabler8.value = true;playerOneTwo.value=true;} else{resultCageNum8.value = 'o';buttonsDisabler8.value = true;playerOneTwo.value=false};whoWins()} 
        const cageNumFunc9 = () => {cageNum9.value = true; if (playerOneTwo.value==false){resultCageNum9.value = 'x';buttonsDisabler9.value = true;playerOneTwo.value=true;} else{resultCageNum9.value = 'o';buttonsDisabler9.value = true;playerOneTwo.value=false};whoWins()} 
  
        const whoWins = () => {

          setTimeout(() => {
 
          if (resultCageNum1.value === 'x' && resultCageNum2.value === 'x' && resultCageNum3.value === 'x' ||
              resultCageNum4.value === 'x' && resultCageNum5.value === 'x' && resultCageNum6.value === 'x' ||
              resultCageNum7.value === 'x' && resultCageNum8.value === 'x' && resultCageNum9.value === 'x' ||

              resultCageNum1.value === 'x' && resultCageNum4.value === 'x' && resultCageNum7.value === 'x' ||
              resultCageNum2.value === 'x' && resultCageNum5.value === 'x' && resultCageNum8.value === 'x' ||
              resultCageNum3.value === 'x' && resultCageNum6.value === 'x' && resultCageNum9.value === 'x' ||
              
              resultCageNum1.value === 'x' && resultCageNum5.value === 'x' && resultCageNum9.value === 'x'||
              resultCageNum3.value === 'x' && resultCageNum5.value === 'x' && resultCageNum7.value === 'x'
              )

             {
                
              someoneWon.value = true

                if (confirm('Won player x! Try again?')) {location.reload()} else {alert('Fuck you then. Reload page yourself.');}

                buttonsDisabler1.value=true
                buttonsDisabler2.value=true
                buttonsDisabler3.value=true
                buttonsDisabler4.value=true
                buttonsDisabler5.value=true
                buttonsDisabler6.value=true
                buttonsDisabler7.value=true
                buttonsDisabler8.value=true
                buttonsDisabler9.value=true

             }

             else if (resultCageNum1.value === 'o' && resultCageNum2.value === 'o' && resultCageNum3.value === 'o' ||
                      resultCageNum4.value === 'o' && resultCageNum5.value === 'o' && resultCageNum6.value === 'o' ||
                      resultCageNum7.value === 'o' && resultCageNum8.value === 'o' && resultCageNum9.value === 'o' ||

                      resultCageNum1.value === 'o' && resultCageNum4.value === 'o' && resultCageNum7.value === 'o' ||
                      resultCageNum2.value === 'o' && resultCageNum5.value === 'o' && resultCageNum8.value === 'o' ||
                      resultCageNum3.value === 'o' && resultCageNum6.value === 'o' && resultCageNum9.value === 'o' ||
              
                      resultCageNum1.value === 'o' && resultCageNum5.value === 'o' && resultCageNum9.value === 'o'||
                      resultCageNum3.value === 'o' && resultCageNum5.value === 'o' && resultCageNum7.value === 'o'
              )

             {
                someoneWon.value = true

                if (confirm('Won player o! Try again?')) {location.reload()} else {alert('Fuck you then. Reload page yourself.');}

                buttonsDisabler1.value=true
                buttonsDisabler2.value=true
                buttonsDisabler3.value=true
                buttonsDisabler4.value=true
                buttonsDisabler5.value=true
                buttonsDisabler6.value=true
                buttonsDisabler7.value=true
                buttonsDisabler8.value=true
                buttonsDisabler9.value=true

             } else if ((cageNum1.value&&cageNum2.value&&cageNum3.value&&cageNum4.value&&cageNum5.value&&cageNum6.value&&cageNum7.value&&cageNum8.value&&cageNum9.value)&&someoneWon.value==false) 
             { 
               if (confirm('This is a draw! Try again?')) {location.reload()} else {alert('Fuck you then. Reload page yourself.');};  

                buttonsDisabler1.value=true
                buttonsDisabler2.value=true
                buttonsDisabler3.value=true
                buttonsDisabler4.value=true
                buttonsDisabler5.value=true
                buttonsDisabler6.value=true
                buttonsDisabler7.value=true
                buttonsDisabler8.value=true
                buttonsDisabler9.value=true
              }
          }, 1)

      }
        return {buttonsColor,buttonsDisabler1,buttonsDisabler2,buttonsDisabler3,buttonsDisabler4,buttonsDisabler5,buttonsDisabler6,buttonsDisabler7,buttonsDisabler8,buttonsDisabler9,whoWins,cageNumFunc1,cageNumFunc2,cageNumFunc3,cageNumFunc4,cageNumFunc5,cageNumFunc6,cageNumFunc7,cageNumFunc8,cageNumFunc9,
        resultCageNum1,resultCageNum2,resultCageNum3,resultCageNum4,resultCageNum5,resultCageNum6,resultCageNum7,resultCageNum8,resultCageNum9}
    }
})

</script>

<template>

<div class="border-black border-2  w-screen h-screen bg-neutral-700 flex items-center justify-center">
  <div class="border-black border-2 rounded-2xl bg-neutral-400 h-[800px] w-[800px] flex items-center justify-center">
      <div class="display: grid grid grid-cols-3 "> 
        <div> <button :disabled='buttonsDisabler1' :class="buttonsColor" @click="cageNumFunc1" >{{ resultCageNum1 }}</button> </div>
        <div> <button :disabled='buttonsDisabler2' :class="buttonsColor" @click="cageNumFunc2" >{{ resultCageNum2 }}</button> </div>
        <div> <button :disabled='buttonsDisabler3' :class="buttonsColor" @click="cageNumFunc3" >{{ resultCageNum3 }}</button> </div>               
        <div> <button :disabled='buttonsDisabler4' :class="buttonsColor" @click="cageNumFunc4" >{{ resultCageNum4 }}</button> </div>
        <div> <button :disabled='buttonsDisabler5' :class="buttonsColor" @click="cageNumFunc5" >{{ resultCageNum5 }}</button> </div>
        <div> <button :disabled='buttonsDisabler6' :class="buttonsColor" @click="cageNumFunc6" >{{ resultCageNum6 }}</button> </div>
        <div> <button :disabled='buttonsDisabler7' :class="buttonsColor" @click="cageNumFunc7" >{{ resultCageNum7 }}</button> </div>
        <div> <button :disabled='buttonsDisabler8' :class="buttonsColor" @click="cageNumFunc8" >{{ resultCageNum8 }}</button> </div>
        <div> <button :disabled='buttonsDisabler9' :class="buttonsColor" @click="cageNumFunc9" >{{ resultCageNum9 }}</button> </div>
      </div>
  </div>
</div>

</template>