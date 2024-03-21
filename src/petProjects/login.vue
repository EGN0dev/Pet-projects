<script lang="ts">

import { defineComponent,ref } from 'vue';

import {hi, arrayOfUsers, } from "./loginBD.ts";

interface Contact {
    firstName: string;
    lastName?: string;
    number: number; 
    email?: string;
    id: number;
}

interface RegForm {
    log:string;
    reg:string;
}

interface LogForm {
    log:string;
    reg:string;
}

export default defineComponent({
    setup() {

   



        const regForm = ref<RegForm> ({
            log:'',
            reg:''
        })

        const logForm = ref<LogForm> ({
            log:'',
            reg:''
        })


        const loginForm = () =>{ 
           

        
        
        }

        const regisForm = () =>{ 
           

        
        
        }

          


            const searchBar = ref<string>('')
            const showAllInfo = ref<boolean>(false)

            const allInfoOBjHolder = ref<Contact|{}>()

            

            const filteredContacts = ref<Contact[]>([])

            const showFullContact = (contact:Contact) => {
                allInfoOBjHolder.value = contact
            }


          
          

            
            

            
            

           
         

                     
                      
                       


                  

              

                
                    
        return {searchBar, filteredContacts, showAllInfo, allInfoOBjHolder, showFullContact, logForm, regForm, loginForm, regisForm}

        }
})

</script>

    <template>
     
        <div class="main">
            
               
               
                    

                        <div class="login">
                            <p>Login</p>
                            <br>
                            <input class="button" placeholder="login" v-model="logForm.log"/>
                            <br>
                            <input class="button" placeholder="password" v-model="logForm.reg"/>
                            <br>
                            <button class="button" @click="loginForm()"> button </button>

                        </div>
                        <div class="register">
                            <p>Register</p>
                            <br>
                            <input class="button" placeholder="login" v-model="regForm.log"/>
                            <br>
                            <input class="button" placeholder="password" v-model="regForm.reg"/>
                            <br>
                            <button class="button" @click="regisForm()"> button </button>
                
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