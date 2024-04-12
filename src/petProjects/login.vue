<script lang="ts">

import { defineComponent,ref } from 'vue';
import VueRouter from 'vue-router'
import  { contactCheck, userReg, User }  from "./loginBD.ts";
import router from '../router';






export interface RegForm {
    login:string;
    password:string;

}

export interface LogForm {
    
    login:string;
    password:string;
}

export default defineComponent({
    setup() {

        

        const showRegLog = ref<boolean>(true)

        const regForm = ref<RegForm> ({
            login:'',
            password:'',
        
        })

        const logForm = ref<LogForm> ({
            login:'',
            password:'',
           
        })


        const loginForm = () =>{ 
            contactCheck(logForm.value.login)
            router.push('/')
           

        
        
        }

        const regisForm = (user:User) =>{ 
            userReg(user)

           

        
        
        }

          


            const searchBar = ref<string>('')
            const showAllInfo = ref<boolean>(false)


           


          
          

            
            

            
            

           
         

                     
                      
                       


                  

              

                
                    
        return {searchBar, showAllInfo, logForm, regForm, loginForm, regisForm, showRegLog}

        }
})

</script>

    <template>
     
        <div class="main">
            
               
               
                    

                        <div v-if="showRegLog" class="login">
                            <p>Login</p>
                            <br>
                            <input class="button" placeholder="login" v-model="logForm.login"/>
                            <br>
                            <input class="button" placeholder="password" v-model="logForm.password"/>
                            <br>
                            <button class="button" @click="loginForm()"> button </button>
                            <button class="button" @click="()=> showRegLog=false"> Not registered? </button>

                        </div>
                        <div v-else="!showRegLog" class="register">
                            <p>Register</p>
                            <br>
                            <input class="button" placeholder="login" v-model="regForm.login"/>
                            <br>
                            <input class="button" placeholder="password" v-model="regForm.password"/>
                            <br>
                            <button class="button" @click="regisForm({login:regForm.login,password:regForm.password})"> button </button>
                            <button class="button" @click="()=> showRegLog=true"> Already have an account? </button>
                
                        </div>

                    
                  
        </div>
                    
     </template>

<style>

    .main {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }

    .login {
        margin-top: 30px;
        color: aliceblue;
        width: 50vw;
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

    .register {
        margin-top: 30px;
        color: aliceblue;
        width: 50vw;
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