<script lang="ts">

import { defineComponent,ref,watch } from 'vue';

interface Rover {
    sol:string
    roverName: string;
    availableRovers: {text:string; value:string}[]
    availableCameras: {text:string; value:string}[]
}

export default defineComponent({
    setup() {
       
          

          
         

              

                    
        return {}

        }
})

</script>

    <template>
     
        <div class="main">
            
               
                    <div class="bodyGallery">
                    
                    </div>
                    <div class="bodyGallery">
                        <div class="data-container">

                        </div>
                        <div class="imagesContainer">
                        
                        </div>
                    </div>

        </div>
                    
     </template>

<style>

    .main {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }

    .bodyGallery {
        width: 80vw;
        border-color: rgb(2, 4, 6);
        border-radius: 20px;
        border: 3px solid #DDD;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        height: auto;
        padding-left: 20px;
        padding-left: 20px;
        padding-bottom: 20px;
    }

    .imagesSelected {
        width: 290px;
        height: 120px;
        border: 2px solid purple;
        border-radius: 20px;
        cursor: pointer;
        transition: "width 2s";
    }

    .imagesSelectedEnlarge {
        width: 59vw;
        height: 49vh;
        border: 2px solid purple;
        border-radius: 20px;
        cursor: pointer;
    }

    .imagesContainer {    
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        border-radius: 20px;
        border: 3px solid #DDD;
        gap: 10px;
        width: 100%;
        padding-left: 12px;
        margin-bottom: 20px;
        padding-right: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .image-preview {
        width: 100%;
        height: 100%;
        border-radius: 20px;
    }

    .data-container {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        color: aliceblue;
        margin-top: 10px;
        width: 100%;
        height: 100%;
        border-color: rgb(2, 4, 6);
        border-radius: 20px;
        border: 3px solid #DDD;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        height: auto;
        padding: 20px;   
    }

    .button {
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: rgb(39 39 42);
        color: rgb(255 255 255);
        margin-left:5px;
        margin-top:7px;
        height: 40px;
        width: auto;
        border: solid;
        border-radius: 30px;
    }

</style>