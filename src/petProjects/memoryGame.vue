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

        const player1 = ref<string|null>('Player1')

        const player2 = ref<string|null>('Player2')

        player1.value = prompt('Введите имя первого игрока или забейте', 'Player1');

        player2.value = prompt('Введите имя второго игрока или забейте', 'Player2');

        const changeInfoLanguage = ref<boolean>(false)

        const gameResultArray:GameCard[] = []
        
        const gameResultArrayP2:GameCard[] = []

        const gameResult = (matchedArray:GameCard[]) => setTimeout(()=> {
                if(matchedArray.length===arrayOfCards.length){
                    hideAllCardsWithPointerEventsP2.value = 'none'
                    alert(`Game over! ${player1.value} won!`)
                }
        },10)

        const gameResultP2 = (matchedArray:GameCard[]) => setTimeout(()=> {
                if(matchedArray.length===arrayOfCardsP2.length){
                    hideAllCardsWithPointerEvents.value = 'none'
                    alert(`Game over! ${player2.value} won!`)
                }
        },10)

        const hideAllCardsWithPointerEvents = ref<string>('auto')
    
        const hideAllCardsWithPointerEventsP2 = ref<string>('auto')

        const showHideCard = ref<string>('')

        const showHideCardP2 = ref<string>('')

        let arrayTwoCards:GameCard[] = []

        let arrayTwoCardsP2:GameCard[] = []


        const flipCard = (card:GameCard) => {
            sameOrNot(card)
           return card.showHide = !card.showHide
        }

        const flipCardP2 = (card:GameCard) => {
            sameOrNotP2(card)
           return card.showHide = !card.showHide
        }

        const sameOrNot = (card:GameCard) => {
            if(arrayTwoCards.length<2){
                arrayTwoCards.push(card)
            }

        if(arrayTwoCards.length===2){
                hideAllCardsWithPointerEvents.value = 'none'
            for(let i = 0; i < arrayTwoCards.length; i++){
                if(arrayTwoCards[0].idForMatching===arrayTwoCards[1].idForMatching&&arrayTwoCards[0].uniqueId!==arrayTwoCards[1].uniqueId){
                    gameResultArray.push(arrayTwoCards[0])
                    gameResultArray.push(arrayTwoCards[1])
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

        }

        const sameOrNotP2 = (card:GameCard) => {
            if(arrayTwoCardsP2.length<2){
                arrayTwoCardsP2.push(card)
            }

        if(arrayTwoCardsP2.length===2){   
                hideAllCardsWithPointerEventsP2.value = 'none'
            for(let i = 0; i < arrayTwoCardsP2.length; i++){
                if(arrayTwoCardsP2[0].idForMatching===arrayTwoCardsP2[1].idForMatching&&arrayTwoCardsP2[0].uniqueId!==arrayTwoCardsP2[1].uniqueId){
                    gameResultArrayP2.push(arrayTwoCardsP2[0])      
                    gameResultArrayP2.push(arrayTwoCardsP2[1])              
                    arrayTwoCardsP2 = []                          
                    hideAllCardsWithPointerEventsP2.value = 'auto'
                    gameResultP2(gameResultArrayP2)                 
                }
                else { 
                    setTimeout(()=> {
                          hideAllCardsWithPointerEventsP2.value = 'none'
                          hideAllCardsWithPointerEventsP2.value = 'auto'
                          arrayTwoCardsP2[0].showHide = false;
                          arrayTwoCardsP2[1].showHide = false;
                          arrayTwoCardsP2.splice(0,2)
                        }, 2000)}
            }
        } 
       
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

        const arrayOfCardsP2:GameCard[] = [

{
        srcActive:'src/assets/MemoryGame images/1.jpeg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:7,
        uniqueId:902,   
},

{
        srcActive:'src/assets/MemoryGame images/2.jpeg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:8,
        uniqueId:903,
},

{
        srcActive:'src/assets/MemoryGame images/3.jpg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:9,
        uniqueId:904,
},

{
        srcActive:'src/assets/MemoryGame images/4.jpeg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:10,
        uniqueId:905,
},

{
        srcActive:'src/assets/MemoryGame images/1.jpeg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:7,
        uniqueId:906,
},

{
        srcActive:'src/assets/MemoryGame images/2.jpeg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:8,
        uniqueId:907,
},

{
        srcActive:'src/assets/MemoryGame images/3.jpg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:9,
        uniqueId:908,
},

{
        srcActive:'src/assets/MemoryGame images/4.jpeg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:10,
        uniqueId:909,
},

{
        srcActive:'src/assets/MemoryGame images/5.jpeg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:11,
        uniqueId:910,
},

{
        srcActive:'src/assets/MemoryGame images/5.jpeg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:11,
        uniqueId:911,
},

{
        srcActive:'src/assets/MemoryGame images/6.jpeg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:12,
        uniqueId:912,
},

{
        srcActive:'src/assets/MemoryGame images/6.jpeg',
        srcStock:'src/assets/MemoryGame images/0.jpg',
        showHide:false,
        idForMatching:12,
        uniqueId:913,
},

]
        const arrayRandomizerResult = ref<GameCard[]>()

        const arrayRandomizerResultP2 = ref<GameCard[]>()

        const arrayRandomizer = (array:GameCard[]) => {
           const shuffled = array.sort(() => 0.5 - Math.random());
           return shuffled
            
        }

        const arrayRandomizerP2 = (array:GameCard[]) => {
           const shuffled = array.sort(() => 0.5 - Math.random());
           return shuffled
            
        }

        onMounted(() => arrayRandomizerResult.value = arrayRandomizer(arrayOfCards))

        onMounted(() =>arrayRandomizerResultP2.value = arrayRandomizerP2(arrayOfCardsP2))
       
               
        return {player1, player2, arrayOfCards, arrayOfCardsP2, arrayRandomizerResult, arrayRandomizerResultP2, showHideCard, showHideCardP2, hideAllCardsWithPointerEvents, hideAllCardsWithPointerEventsP2, changeInfoLanguage, flipCard, flipCardP2}

        }
})

</script>

    <template>
     
        <div class="mainGameCard">
            
        <div class="playerContainer">
            <div class="player1">{{ player1 }}</div>
            <div class="player2">{{ player2 }}</div>
        </div>
            <div>
                    <div class="bodyCardGallery">
                        <div v-for="(image) in arrayRandomizerResult"> 
                                <img :class="(image.showHide) ? showHideCard='imagesSelectedMemoryGame' :  showHideCard='imagesMemoryGame'" :src="(image.showHide) ? image.srcActive : image.srcStock" @click="flipCard(image)"/>
                        </div>
                    </div>

                    <div class="bodyCardGalleryP2">
                        <div v-for="(image) in arrayRandomizerResultP2"> 
                                <img :class="(image.showHide) ? showHideCardP2='imagesSelectedMemoryGameP2' :  showHideCardP2='imagesMemoryGameP2'" :src="(image.showHide) ? image.srcActive : image.srcStock" @click="flipCardP2(image)"/>
                        </div>
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
                                Memory Game – это обычная детская игра с набором карточек. На одной стороне карточек есть изображение и каждое изображение появляется на двух картах.
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
        margin-top: 75px;
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
    }

    .playerContainer {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        margin-top: 10px;
        margin-right: 10px;
        margin-left: 10px;
    }

    .player1 {
        display: flex;
        justify-content: center;
        color: #DDD;
        height: 305px;
        border-color: rgb(2, 4, 6);
        border-radius: 20px;
        border: 3px solid #DDD;
        writing-mode: vertical-rl;
        text-orientation: upright;
    }

    .player2 {
        display: flex;
        justify-content: center;
        margin-top: 10px;
        color: #DDD;
        height: 305px;
        border-color: rgb(2, 4, 6);
        border-radius: 20px;
        border: 3px solid #DDD;
        writing-mode: vertical-rl;
        text-orientation: upright;
    }

    .bodyCardGallery {
        margin-top: 10px;
        width: 77vw;
        border-color: rgb(2, 4, 6);
        border-radius: 20px;
        border: 3px solid #DDD;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        height: auto;
        padding: 20px;
        row-gap: 20px;
        column-gap: 20px;
    }

    .infoAboutGame{
        margin-top: 10px;
        color: aliceblue;
        width: auto;
        border-color: rgb(2, 4, 6);
        border-radius: 20px;
        border: 3px solid #DDD;
        display: flex;
        flex-direction: column;
        height: 623px;
        padding: 20px;
        margin-left: 10px;
        margin-right: 10px;
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
        margin-top:7px;
        height: 40px;
        width: 115px;
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
        width: 115px;
        border: solid;
        border-radius: 30px;
        font-style: italic;
    }

    .buttonRusLanguageMemoryGame:hover {
        background-color: red;
        color: black;
        
    }

    .bodyCardGalleryP2 {
        margin-top: 10px;
        width: 77vw;
        border-color: rgb(2, 4, 6);
        border-radius: 20px;
        border: 3px solid #DDD;
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        height: auto;
        padding: 20px;
        row-gap: 20px;
        column-gap: 20px;       
    }

    .imagesMemoryGameP2 {
        width: 290px;
        height: 120px;
        border: 2px solid white;;
        border-radius: 20px;
        cursor: pointer;
        pointer-events: v-bind(hideAllCardsWithPointerEventsP2);
        transform: rotateY(180deg) !important;
        transition: transform ease-out 0.8s;
    }

    .imagesSelectedMemoryGameP2 {
        width: 290px;
        height: 120px;
        border: 2px solid white;;
        border-radius: 20px;
        cursor: pointer;
        pointer-events: none;
        transition: transform ease-out 0.8s;
    }

</style>