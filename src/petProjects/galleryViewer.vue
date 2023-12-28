<script lang="ts">
import { defineComponent,ref } from 'vue';


export default defineComponent({
    setup() {
        const onErrorValue = ref<string>(`this.style.display='none'`)
        const imagePreview = ref<string>('image-preview')
        const imagePreviewBool = ref<boolean>(false)
        const imageDataArray = ref<string[]>([])
        const imageData = ref<string>("")
        const imageGalleryElement = ref<string>("images") 
        const index0fActive = ref<number>()

        const onDragOver = (event:any) => {
            event.preventDefault()
            event.dataTransfer.dropEffect = "copy"
        }

       

        const onDrop = (event:any) => {
           // console.log(index0fActive.value)
           // let arrayPreAdd = [...imageDataArray.value]
            event.preventDefault()
            let files = event.dataTransfer.files
                 for (let i = 0; i < files.length; i++){
                     imageDataArray.value.push(URL.createObjectURL(files[i])) 
                      //  imageData.value = URL.createObjectURL(files[0])     
           }
           //let arrayPostAdd = imageDataArray.value
           //console.log(arrayPostAdd.length,arrayPreAdd.length)
           // index0fActive.value += arrayPostAdd.length-arrayPreAdd.length
            //console.log(imageGalleryElement.value)
            //imageGalleryElement.value='imagesSelected'
            //console.log(imageGalleryElement.value)
            //console.log(index0fActive.value)
        }
        
        const changePic = (index:number) =>{
            imagePreviewBool.value = true
            onErrorValue.value = `this.style.display='block'`
            imageData.value=imageDataArray.value[index]
            imageGalleryElement.value='imagesSelected'
            index0fActive.value = index 
            console.log(index0fActive.value)
        }

        const previewImage = (event:any) => {
           // let arrayPreAdd = [...imageDataArray.value]
                var input = event.target;
                     // Ensure that you have a file before attempting to read it
                         if (input.files && input.files[0]) {
                                 // create a new FileReader to read this image and convert to base64 format
                                 var reader = new FileReader();
                                    // Define a callback function to run, when FileReader finishes its job

                                    reader.onload = (e) => {
                                        // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                                            // Read image as base64 and set to imageData
                                               // imageData.value = e.target.result;
                                                let stringHolder:string = e.target.result;
                                                    imageDataArray.value.push(stringHolder)
                }
                                                    // Start the reader job - read file as a data url (base64 format)
                                                      reader.readAsDataURL(input.files[0]);
                                                        //let arrayPostAdd = imageDataArray.value
                                                        //console.log(arrayPostAdd.length,arrayPreAdd.length)
                                                       // index0fActive.value += arrayPostAdd.length-arrayPreAdd.length
                                                        //console.log(index0fActive.value)
                                                                                                    
                                                            
             
              
                
            }
        }
            





        return {onDrop,onDragOver,previewImage,imageData,imageDataArray,changePic,imageGalleryElement,index0fActive,imagePreview,imagePreviewBool,onErrorValue}

        }
       
    
  
})

</script>

    <template>
     
        <div class="main">
                    <div class="file-upload-form"  @dragover.prevent="onDragOver" @drop.prevent="onDrop">
                        Drag an image file here or:
                            <input class="upload_btn" type="file" @change="previewImage" accept="image/*">
                                <div class="overlay-layer">Upload photo</div>
                    </div>
                    <div class="bodyGallery" v-if="imageDataArray.length != 0">
                        <div class="image-preview" v-if="imagePreviewBool" >
                            <img class="preview" :src="imageData">
                        </div>
                        <div class="imagePreviewHide" v-else="!imagePreviewBool" >
                            <span>Choose picture below</span>
                        </div>
                        <div class="imagesContainer">
                            <div v-for="(image,index) in imageDataArray"> 
                                <img :class="(index==index0fActive) ? imageGalleryElement='imagesSelected' :  imageGalleryElement='images'"  :src="image" @click="changePic(index)"/>
                            </div>
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