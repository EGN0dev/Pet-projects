<script lang="ts">

import { defineComponent,ref, onMounted } from 'vue';

interface GameCard {
    srcActive:string;
    srcStock:string;
    showHide: boolean;
    idForMatching:number;
    uniqueId:number;
}

export default defineComponent({
    setup() {

        const changeInfoLanguage = ref<boolean>(false)

        const gameResultArray:GameCard[] = []

        const gameResult = (matchedArray:GameCard[]) => setTimeout(()=> {
                if(matchedArray.length===arrayOfCards.length){
                    alert('game over')
                }
        },10)

        const hideAllCardsWithPointerEvents = ref<string>('auto')

        const showHideCard = ref<string>('')

        let arrayTwoCards:GameCard[] = []

        const flipCard = (card:GameCard) => {
            
            sameOrNot(card)
           
           return card.showHide = !card.showHide
          
        }

        const sameOrNot = (card:GameCard) => {
            
            console.log(arrayTwoCards.length)
            if(arrayTwoCards.length<2){
                arrayTwoCards.push(card)
            }

            if(arrayTwoCards.length===2){
                hideAllCardsWithPointerEvents.value = 'none'
            for(let i = 0; i < arrayTwoCards.length; i++){
                if(arrayTwoCards[0].idForMatching===arrayTwoCards[1].idForMatching&&arrayTwoCards[0].uniqueId!==arrayTwoCards[1].uniqueId){
                    gameResultArray.push(arrayTwoCards[0])
                    gameResultArray.push(arrayTwoCards[1])
                    console.log(gameResultArray.length)
                    arrayTwoCards = []
                    hideAllCardsWithPointerEvents.value = 'auto'
                    gameResult(gameResultArray)
                       
                }
                else { 
                
                    setTimeout(()=> {
                          hideAllCardsWithPointerEvents.value = 'none'
                          hideAllCardsWithPointerEvents.value = 'auto'
                          arrayTwoCards[0].showHide = false;
                          arrayTwoCards[1].showHide = false;
                          arrayTwoCards.splice(0,2)
                        }, 2000)}
            }
        } 
        console.log(arrayTwoCards.length)
        }

    



        

        const arrayOfCards:GameCard[] = [

        {
                srcActive:'src/assets/MemoryGame images/1.jpeg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:1,
                uniqueId:890,   
        },

        {
                srcActive:'src/assets/MemoryGame images/2.jpeg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:2,
                uniqueId:891,
        },

        {
                srcActive:'src/assets/MemoryGame images/3.jpg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:3,
                uniqueId:892,
        },

        {
                srcActive:'src/assets/MemoryGame images/4.jpeg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:4,
                uniqueId:893,
        },

        {
                srcActive:'src/assets/MemoryGame images/1.jpeg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:1,
                uniqueId:894,
        },

        {
                srcActive:'src/assets/MemoryGame images/2.jpeg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:2,
                uniqueId:895,
        },

        {
                srcActive:'src/assets/MemoryGame images/3.jpg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:3,
                uniqueId:896,
        },

        {
                srcActive:'src/assets/MemoryGame images/4.jpeg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:4,
                uniqueId:897,
        },

        {
                srcActive:'src/assets/MemoryGame images/5.jpeg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:5,
                uniqueId:898,
        },

        {
                srcActive:'src/assets/MemoryGame images/5.jpeg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:5,
                uniqueId:899,
        },

        {
                srcActive:'src/assets/MemoryGame images/6.jpeg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:6,
                uniqueId:900,
        },

        {
                srcActive:'src/assets/MemoryGame images/6.jpeg',
                srcStock:'src/assets/MemoryGame images/0.jpg',
                showHide:false,
                idForMatching:6,
                uniqueId:901,
        },

        ]
        const arrayRandomizerResult = ref<GameCard[]>()

       

        const arrayRandomizer = (array:GameCard[]) => {
           const shuffled = array.sort(() => 0.5 - Math.random());
           return shuffled
            
        }

        

        

        onMounted(() => arrayRandomizerResult.value = arrayRandomizer(arrayOfCards))
       
          

          
         

              

                    
        return {arrayOfCards, arrayRandomizerResult, showHideCard, hideAllCardsWithPointerEvents,changeInfoLanguage, flipCard}

        }
})

</script>

    <template>
     
        <div class="mainGameCard">
            
               
               
                    <div class="bodyCardGallery">
                        <div v-for="(image) in arrayRandomizerResult"> 
                                <img :class="(image.showHide) ? showHideCard='imagesSelectedMemoryGame' :  showHideCard='imagesMemoryGame'" :src="(image.showHide) ? image.srcActive : image.srcStock" @click="flipCard(image)"/>
                        </div>
                    </div>

                    <div class="infoAboutGame">
                        <div v-if="changeInfoLanguage">
                            <p>
                                The memory game is a common children's game played with a set of cards. The cards have a pictures on one side and each picture appears on two (or sometimes four) cards. 
                                The game starts with all the cards face down and players take turns to turn over two cards. If the two cards have the same picture, then they keep the cards, 
                                otherwise they turn the cards face down again. The winner is the person with the most cards when all the cards have been taken.
                            </p>
                        </div> 
                        <div v-else="!changeInfoLanguage">
                            <p>
                                MemoryGame – это обычная детская игра с набором карточек. На одной стороне карточек есть изображения и каждое изображение появляется на двух картах.
                                 Игра начинается со всех карт лицевой стороной вниз, игроки по очереди переворачивают две карты. Если на двух картах одинаковое изображение, карты остаются открытыми.
                                 В противном случае они снова переворачивают карты лицевой стороной вниз. Победителем становится тот, кто первее обнаружил все пары карт.
                            </p>
                        </div> 
                        <div class="buttonLanguageMemoryGameContainer">
                       <div> <button class="buttonEngLanguageMemoryGame" @click="()=> changeInfoLanguage = true"> English </button></div>
                    <div> <button class="buttonRusLanguageMemoryGame" @click="()=> changeInfoLanguage = false"> Русский </button></div>
                </div>
                    </div>

        </div>
                    
     </template>

<style>

    .mainGameCard {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }

    .bodyCardGallery {
        margin-top: 10px;
        width: 80vw;
        border-color: rgb(2, 4, 6);
        border-radius: 20px;
        border: 3px solid #DDD;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        height: auto;
        padding: 20px;
        row-gap: 20px;
        column-gap: 20px;
       
    }

    .infoAboutGame{
        margin-top: 10px;
        color: aliceblue;
        width: 80vw;
        border-color: rgb(2, 4, 6);
        border-radius: 20px;
        border: 3px solid #DDD;
        display: flex;
        flex-direction: column;
        height: auto;
        padding: 20px;
       
    }

    .imagesMemoryGame {
        width: 290px;
        height: 120px;
        border: 2px solid white;;
        border-radius: 20px;
        cursor: pointer;
        pointer-events: v-bind(hideAllCardsWithPointerEvents);
        transform: rotateY(180deg) !important;
        transition: transform ease-out 0.8s;
       
     
    }

    .imagesSelectedMemoryGame {
        
        width: 290px;
        height: 120px;
        border: 2px solid white;;
        border-radius: 20px;
        cursor: pointer;
        pointer-events: none;
       
        transition: transform ease-out 0.8s;
   
    }

    .buttonLanguageMemoryGameContainer{
      
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        
    }

    .buttonEngLanguageMemoryGame {  
        background-color: rgb(39 39 42);
        color: cyan;
        margin-left:5px;
        margin-top:7px;
        height: 40px;
        width: 100px;
        border: solid;
        border-radius: 30px;
        font-style: italic;
    }

    .buttonEngLanguageMemoryGame:hover {  
        background-color: cyan;
        color: black;
        
    }
    .buttonRusLanguageMemoryGame {
        background-color: rgb(39 39 42);
        color: red;
        margin-left:5px;
        margin-top:7px;
        height: 40px;
        width: 100px;
        border: solid;
        border-radius: 30px;
        font-style: italic;
    }

    .buttonRusLanguageMemoryGame:hover {
        background-color: red;
        color: black;
        
    }




</style>