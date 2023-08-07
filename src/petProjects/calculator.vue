<script lang="ts">
import { defineComponent,ref } from 'vue';


const enum Signs{
  Empty,
  Plus,
  Minus,
  Multiply,
  Divide
}


export default defineComponent({
      

    setup(){
      const buttonsColor = ref <string>("border-black border-2 rounded-full w-20 h-20 bg-indigo-200 relative")
      const firstVHolder = ref<string>('')
      const secondVHolder = ref<string>('')
      const result = ref<string>('')
      const functionAllower = ref <boolean>(true)
      const signValue = ref<Signs>(Signs.Empty)

      const resultLimit = () => {
        if(result.value !== ''){ return result.value+="2"}

      }

      const clear = () => {
        result.value = ''
        firstVHolder.value = ''
        secondVHolder.value = ''
        functionAllower.value = true
      }

      const plus = () => {
        signValue.value = Signs.Plus
        firstVHolder.value=result.value
        secondVHolder.value = ''
        result.value = ""
      }

      const minus = () => {
        signValue.value = Signs.Minus
        firstVHolder.value=result.value
        secondVHolder.value=''
        result.value = ""
      }

      const multiply = () => {
        signValue.value = Signs.Multiply
        firstVHolder.value=result.value
        secondVHolder.value = ''
        result.value = ""
      }

      const divide = () => {
        signValue.value = Signs.Divide
        firstVHolder.value=result.value
        secondVHolder.value = ''
        result.value = ""
      }

      const addMinus = () => {
        if(result.value!==''){
       let vHolder = parseInt (result.value)*(-1)

       result.value = vHolder.toString()
        }
      }

      const equalSign = (sign:Signs) => {
        secondVHolder.value = result.value
        if (firstVHolder.value && secondVHolder.value !==''){
        let numHolder = 0
        
     if (functionAllower.value){
        //create enum for sign to detect wich one v been pressed to calculate after equal func executing 
       switch (sign){
          case Signs.Plus:
            numHolder = parseFloat (firstVHolder.value) + parseFloat (secondVHolder.value)
            result.value = numHolder.toString()
            break

          case Signs.Minus: 
            numHolder = parseFloat  (firstVHolder.value) - parseFloat  (secondVHolder.value)
            result.value = numHolder.toString()
            break

          case Signs.Multiply:
            numHolder = parseFloat (firstVHolder.value) * parseFloat  (secondVHolder.value)
            result.value = numHolder.toString()
            break

          case Signs.Divide:
            numHolder = parseFloat (firstVHolder.value) / parseFloat (secondVHolder.value)
            result.value = numHolder.toString()
            break

         default: Signs.Empty
       }

       functionAllower.value = false

      }
     } 
    }

      const resultMaxLenght = (result:string) => {

      }

      const zero = () => {if (result.value != '0'){result.value += '0'}}
      const one = () => result.value += '1'
      const two = () => {if (result.value === '0'){result.value = '2'} else {result.value += '2'}}
      const three = () => {if (result.value === '0'){result.value = '3'} else {result.value += '3'}}

      const four = () => {if (result.value === '0'){result.value = '4'} else {result.value += '4'}}
      const five = () => {if (result.value === '0'){result.value = '5'} else {result.value += '5'}}
      const six = () => {if (result.value === '0'){result.value = '6'} else {result.value += '6'}}

      const seven = () => {if (result.value === '0'){result.value = '7'} else {result.value += '7'}}
      const eight = () => {if (result.value === '0'){result.value = '8'} else {result.value += '8'}}
      const nine = () => {if (result.value === '0'){result.value = '9'} else {result.value += '9'}}
      const comma = () => { 
       
      if(result.value.includes(".")==false){ 
        if(result.value != ''){
        result.value += '.'
      }}
      }
        return{firstVHolder,secondVHolder, signValue, buttonsColor, result, zero, one, two, three, four, five, six, seven, eight, nine, clear, plus, minus, equalSign, multiply, comma, addMinus, divide, resultLimit}
    }
})



</script>

<template>

<div class="border-black border-2  w-screen h-screen bg-neutral-700 flex items-center justify-center">

  <div class="border-black border-2 rounded-2xl bg-neutral-400 h-[800px] w-[400px] ">

    <div><p class="border-black border-2 rounded-3xl h-[80px] w-[350px] mt-[40px] ml-[25px] mb-[40px]  text-6xl bg-indigo-200 "> {{ result.substring(0,9) }} </p></div>

        <div class=" grid grid-cols-3 gap-6 ml-[30px]">
          <div> <button :class="buttonsColor" @click="comma">.</button> </div>
          <div> <button :class="buttonsColor" @click="addMinus">p/m</button> </div>
          <div> <button :class="buttonsColor" @click="divide">/</button> </div>
          <div> <button :class="buttonsColor" @click="multiply">x</button> </div>
          <div> <button :class="buttonsColor" @click="plus">+</button> </div>
          <div> <button :class="buttonsColor" @click="minus">-</button> </div>
          <div> <button :class="buttonsColor" @click="seven">7</button> </div>
          <div> <button :class="buttonsColor" @click="eight">8</button> </div>
          <div> <button :class="buttonsColor" @click="nine">9</button> </div>               
          <div> <button :class="buttonsColor" @click="four">4</button> </div>
          <div> <button :class="buttonsColor" @click="five">5</button> </div>
          <div> <button :class="buttonsColor" @click="six">6</button> </div>
          <div> <button :class="buttonsColor" @click="one">1</button> </div>
          <div> <button :class="buttonsColor" @click="two">2</button> </div>
          <div> <button :class="buttonsColor" @click="three" >3</button> </div>
          <div> <button :class="buttonsColor" @click="clear">C</button> </div>
          <div> <button :class="buttonsColor" @click="zero">0</button> </div>
          <div> <button :class="buttonsColor" @click="equalSign(signValue)">=</button> </div>
        </div>
    </div>
</div>

</template>