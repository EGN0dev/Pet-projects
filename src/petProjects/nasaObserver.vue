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
       
        const imageData = ref<string>("https://vintagesign.cn/cdn/shop/products/Ins092_8_1200x.jpg?v=1597917906")

        const imageDataArr = ref<string[]>([])
      

      //  let url = 'https://api.nasa.gov/planetary/apod?api_key=1C6088ZVNYInCaU0ldb3icmedNhci1myzg27lO8w'

                   

            

            const explanation = ref<string>('press button to get explanation')

            const regex = /[^A-Z0-9]/

            const regexN = /[0-9]/

           



            const date = ref<string>('press button to get date')

            const title = ref<string>('press button to get title')

            //const alertt = () => alert("fuck you")

            const sol = ref<string>("")
          

            
                 


            const fetchApod = async(url:string) =>{

              await fetch(url)

             .then(url=> url.json()).then(url=> {
                imageData.value = url.url
                title.value = url.title
                explanation.value = url.explanation
                date.value = url.date
            
            })
           // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=1C6088ZVNYInCaU0ldb3icmedNhci1myzg27lO8w'
            
            }


                    //let url = 'https://api.nasa.gov/planetary/apod?api_key=1C6088ZVNYInCaU0ldb3icmedNhci1myzg27lO8w'

                   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                   //rover app below
                   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                   const selectRoverCam = ref<string>('fhaz')

                   const selectedRover = ref<string>('opportunity')

                   const errorDisp = ref<string>('')
                     

                        const options = ref([
                        { text: 'fhaz', value: 'fhaz' },
                        { text: 'rhaz', value: 'rhaz' },
                        ])
                    
                        const rover:Rover = ref( {
                            sol: '',
                            roverName: 'opportunity',
                            availableRovers:[
                            {text: 'Opportunity', value:'opportunity'},
                            {text: 'Curiosity', value:'curiosity'},
                            {text: 'Spirit', value:'spirit'}
                        
                        ],
                        availableCameras: [
                            { text: 'fhaz', value: 'fhaz' },
                            { text: 'rhaz', value: 'rhaz' },
                            { text: 'navcam', value: 'navcam' },
                            { text: 'pancam', value: 'pancam' },
                            { text: 'minites', value: 'minites' }
                        ]


                    }).value

                      
            watch(rover, () => {
               rover.sol = rover.sol.replace(regex,'')
                if (rover.sol.length >4) {
                    rover.sol = rover.sol.replace(regexN,'')
                    
                }
               
            
            })

                    watch(selectedRover, ()=> {
                        switch(selectedRover.value){
                            case 'opportunity':
                                { 
                                   rover.availableCameras = []
                                    rover.availableCameras.push(
                                        { text: 'Fhaz', value: 'fhaz' },
                                        { text: 'Rhaz', value: 'rhaz' },
                                        { text: 'Navcam', value: 'navcam' },
                                        { text: 'Pancam', value: 'pancam' },
                                        { text: 'Minites', value: 'minites' }
                                         
                            )} 
                            break
                            case 'curiosity':
                            { 
                                   rover.availableCameras = []
                                    rover.availableCameras.push(
                                        { text: 'Fhaz', value: 'fhaz' },
                                        { text: 'Rhaz', value: 'rhaz' },
                                        { text: 'Mast', value: 'mast' },
                                        { text: 'Chemcam', value: 'chemcam' },
                                        { text: 'Mahli', value: 'mahli' },
                                        { text: 'Mardi', value: 'mardi' },
                                        { text: 'Navcam', value: 'navcam' },
                                 
                                         
                            )} 
                            break
                            case 'spirit':
                            { 
                                   rover.availableCameras = []
                                    rover.availableCameras.push(
                                        { text: 'Fhaz', value: 'fhaz' },
                                        { text: 'Rhaz', value: 'rhaz' },
                                        { text: 'Navcam', value: 'navcam' },
                                        { text: 'Pancam', value: 'pancam' },
                                        { text: 'Minites', value: 'minites' }
                            )} 
                            break
                        }
                    })

                    

                   const enlargeImgBool = ref<boolean>(false)

                   const index0fActImg = ref<number>()

                   const imageSizeOnClick = ref<string>('imagesSelected')

                   const changeImgSize = (index) => {
                    enlargeImgBool.value = true
                    imageSizeOnClick.value = 'imagesSelectedEnlarge'
                    index0fActImg.value = index 

                   }

                    const imageDataRover = ref<string>("https://vintagesign.cn/cdn/shop/products/Ins092_8_1200x.jpg?v=1597917906")

                    const roverType = ref<string>('')
                

                    const fetchRover = async(url:string) =>{

                    await fetch(url)

                    .then(url=> url.json())

                    

                  // .then(url => console.log(Object.values(url.forEach(ur=>console.log(ur)) ))

                    .then(url=> (url.photos))

                    .then(photosArray => {
                        console.log(photosArray)
                        photosArray.forEach(photo=>imageDataArr.value.push(photo['img_src']))})

                    

                        
                        
                      //  if(photo['img_src']===undefined){errorDisp.value=`no pictures have been taken on ${rover.sol} day, on rover ${selectedRover} on camera ${selectRoverCam}. Please try another camera or day or rover`;
                    //console.log(errorDisp.value)

                       
                        
                        
                         

                    

                    

                    

                    

                      
                        // Function to set image dimensions
                     
                        // Function to reset image dimensions
                   

                   // .then(photo=> {
                     //   if( photo.hasOwnProperty("img_src")){
                       //     console.log(imageDataRover.value = photo.img_src)
                         //   console.log(photo)
                            
                       // } else {console.log('no photo, dumbass')
                       // console.log(photo)}
                       // })
                   // .catch(error=> console.log(error))
                        
                       
                    


                  

                    
                    

                   // .then(url=> url.forEach((element) => Object.keys(element).forEach(array_key => console.log(array_key))))

                   // .then(url=> imageDataRover.value = url[0].img_src)

                    //.then(url=>console.log(url))

                    //.then(url=> url.forEach((image)=>imageDataRover.value = image[0].img_src))
                    // https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=1C6088ZVNYInCaU0ldb3icmedNhci1myzg27lO8w'

                    }

                    


        

            
        return {imageData,explanation,date,title,fetchApod,fetchRover,imageDataRover,sol,imageDataArr,roverType,enlargeImgBool,imageSizeOnClick, changeImgSize, index0fActImg, selectRoverCam, options, rover, selectedRover, errorDisp}

        }
})

</script>

    <template>
     
        <div class="main">
            
               
                    <div class="bodyGallery">
                        <div class="image-preview">
                            <img class="preview" :src="imageData">
                        </div>
                        <div class="data-container">
                            <p>Picture of the day:</p>
                            <br>
                            <p>{{ `Date: ${date}` }}</p>
                            <br>
                            <p>{{ `Title: ${title}` }}</p>
                            <br>
                            <p>{{ `Explanation: ${explanation}` }}</p>
                            <br>
                            <button class="button" @click="fetchApod('https://api.nasa.gov/planetary/apod?api_key=1C6088ZVNYInCaU0ldb3icmedNhci1myzg27lO8w')"> Press me to get data </button>
                        </div>  
                    </div>
                    <div class="bodyGallery">
                  
                        <div class="data-container">
                            <p>Mars rover photos:</p>
                            <br>
                            <input class="button" v-model="rover.sol"/>
                            <br>

                            <select style="color: black;" v-model="selectedRover">
                                <option v-for="rovers in rover.availableRovers" :value="rovers.value">
                                    {{ rovers.text }}
                                </option>
                            </select>
                            <br>

                            <select style="color: black;" v-model="selectRoverCam">
                                <option v-for="cameras in rover.availableCameras" :value="cameras.value">
                                    {{ cameras.text }}
                                </option>
                                </select>

                                <br>

                                <p>{{ errorDisp }}</p>

                                <br>

                     
                         
                            <button class="button" @click="fetchRover(`https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?sol=${rover.sol}&camera=${selectRoverCam}&page=1&api_key=1C6088ZVNYInCaU0ldb3icmedNhci1myzg27lO8w`)"> Press me to get data </button>
                          
                        </div>
                        <div class="imagesContainer">
                            <div  v-for="(image,index) in imageDataArr">
                                <img :class="(index==index0fActImg) ? imageSizeOnClick ='imagesSelectedEnlarge' :  imageSizeOnClick='imagesSelected'" :src="image" @click="changeImgSize(index)" >
                            </div>
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