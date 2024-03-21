<script lang="ts">

import { defineComponent,ref,watch } from 'vue';



interface Contact {
    firstName: string;
    lastName?: string;
    number: number; 
    email?: string;
    id: number;
}

export default defineComponent({
    setup() {

           

       


            const searchBar = ref<string>('')
            const showAllInfo = ref<boolean>(false)

            const allInfoOBjHolder = ref<Contact|{}>()

            const contactsArr = ref<Contact[]>([

            {firstName:'bill', number: 22342346, id: Math.floor(Math.random()*90000) + 10000},
            {firstName:'andy', number: 33423467, id: Math.floor(Math.random()*90000) + 10000},
            {firstName:'dick', number: 42342347, id: Math.floor(Math.random()*90000) + 10000},
            {firstName:'sandy', number: 9999999, id: Math.floor(Math.random()*90000) + 10000},
            ])

            const filteredContacts = ref<Contact[]>([])

            const showFullContact = (contact:Contact) => {
                allInfoOBjHolder.value = contact
            }


          
           // const regex =  /[^0-9]/

            const search = () =>{if (searchBar.value === ''){filteredContacts.value=[]} else {filteredContacts.value = contactsArr.value.filter(contact => contact.firstName.includes(searchBar.value))}}
            

            
            

           
         

                     
                      
                       

                      
            watch(searchBar, () => {
                allInfoOBjHolder.value = {}
               
                search()
              //  searchBar.value = searchBar.value.replace(regex,'')
                //     if (searchBar.value.length > 8) {
                  //      searchBar.value = searchBar.value.substring(0,8)
                        
                //}
            })

                  

              

                
                    
        return {searchBar, contactsArr, filteredContacts, showAllInfo, allInfoOBjHolder, showFullContact}

        }
})

</script>

    <template>
     
        <div class="main">
            
               
               
                    <div class="bodyGallery">
                        <div class="data-container">
                            <p>Contacts</p>
                            <br>
                            <input class="button" placeholder="Search contacts" v-model="searchBar"/>

                        </div>
                        <div class="imagesContainer">
                            <div @click="showFullContact(contact)" v-for="(contact) in filteredContacts">
                                <p style="color: aliceblue;"> {{contact.firstName}}</p>
                             
                            </div>
                        </div>

                        <div class="imagesContainer">
                                    <p style="color: aliceblue;"> {{allInfoOBjHolder?.firstName}}</p>
                                    <p style="color: aliceblue;"> {{allInfoOBjHolder?.number}}</p>
                                    <p style="color: aliceblue;"> {{allInfoOBjHolder?.id}}</p>
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