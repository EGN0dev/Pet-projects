<script lang="ts">
import { defineComponent,ref } from 'vue';

export default defineComponent({
    setup() {
       
        const imageData = ref<string>("https://www.memetemplates.in/uploads/1640209265.jpeg")
      

        let url = 'https://api.nasa.gov/planetary/apod?api_key=1C6088ZVNYInCaU0ldb3icmedNhci1myzg27lO8w'

            let image = ''

            const fetc = async() =>{

            await fetch(url).then(url=> url.json()).then(url=> imageData.value = url.url)

            console.log(image)
            
            }

            
        return {imageData,fetc}

        }
})

</script>

    <template>
     
        <div class="main">
            <button @click="fetc"> press me </button>
               
                    <div class="bodyGallery">
                        <div class="image-preview">
                            <img class="preview" :src="imageData">
                        </div>
                    </div>
        </div>
                    
     </template>

<style>

    .main {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
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

    .bodyGallery {
        margin-top: 10px;
        width: 64vw;
        height: 70vh;
        border-color: rgb(2, 4, 6);
        border-radius: 20px;
        border: 3px solid #DDD;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        height: auto;
        padding-left: 20px;
        padding-right: 20px;
    }

    .boddy {
        color: aliceblue;
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

    .buttonFile {
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: rgb(39 39 42);
        color: rgb(255 255 255);
        margin-left:5px;
        margin-top:7px;
        height: 40px;
        width: 130px;
        border: solid;
        border-radius: 30px;
    }

    .file-upload-form {
        margin-top: 10px;
        align-items: center;
        display: flex;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        color: aliceblue;
        padding: 20px;
        border: solid;
        width: 500px;
        height: 100px;
        flex-direction: row;
        border-radius: 30px;
    }

    .image-preview {
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        color: aliceblue;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    img.preview {
        width: 100%;
        height: 100%;
        background-color: white;
        border-radius: 20px;
        border: 0.5px solid #DDD;
        padding: 5px;
    }

    .imagePreviewHide {
        font-size: x-large;
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        color: aliceblue;
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: 3px solid #DDD;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .images {
        width: 290px;
        height: 120px;
        border: 2px solid white;;
        border-radius: 20px;
        cursor: pointer;
    }

    .imagesSelected {
        width: 290px;
        height: 120px;
        border: 2px solid purple;
        border-radius: 20px;
        cursor: pointer;
    }

    .dropZone {
        border: solid;
        width: 200px;
        height: 100px;
    }

    .overlay-layer{
        display: flex;
        align-items: center;
        justify-content: center;
        position:absolute;
        background-color:#000000;
        z-index:0;
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: rgb(39 39 42);
        color: white;
        margin-left:220px;
        margin-top:7px;
        height: 40px;
        width: 200px;
        border: solid;
        border-radius: 30px;
    }

    .upload_btn{
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position:absolute;
        z-index:10;
        opacity:0;
        padding-top: 5px;
        padding-left: 10px;
        padding-right: 10px;
        background-color: rgb(39 39 42);
        color: white;
        margin-left:220px;
        margin-top:7px;
        height: 40px;
        width: 200px;
        border: solid;
        border-radius: 30px;
    }

</style>