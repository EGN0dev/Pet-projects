<script lang="ts">
import { defineComponent,ref } from 'vue';
import { RouterLink } from 'vue-router';




export default defineComponent({
    setup() {
            const plus1 = ref<number>(0)
            const puz1 = () => plus1.value++
  

        return {plus1,puz1}

        }
       
    
  
})

</script>

    <template>
            
            <div class="navbar">
                <div class="logo"><p> My pet projects compilation</p></div>
                <router-link class="button" to="/calculator">Go to calculator </router-link>
                <router-link class="button" to="/tictactoe">Go to tictactoe </router-link>
                <router-link class="button" to="/galleryViewer">Go to galleryViewer </router-link>
            </div>
            <div class="mainContainer">

        
            <router-view/>
        </div>
     </template>

<style>
body{
 background-color: rgb(39 39 42); 
 display: flex;
    justify-content: flex-start;
   
    flex-direction: row;


}
.mainContainer {
    display: flex;
    justify-content: center;
        
        
       height: 100vh;
        width: 100vw;
    }

.navbar {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    width: auto;
    position: relative;
    height: 60px;
    color: rgb(255 255 255);
    border: solid;
    border-radius: 30px;
    background-color: rgb(39 39 42);
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

.logo {
    font-family: cursive;
    font-size: 20px;
    color:rgb(255 255 255);
    background-color: rgb(39 39 42);
    border: solid;
    height: 40px;
    width: auto;
    margin-left:5px;
    margin-top:7px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 30px;
}


</style>