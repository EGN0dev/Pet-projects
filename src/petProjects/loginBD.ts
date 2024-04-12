import router from "../router";
import  { RegForm,LogForm }  from "./login.vue";
import VueRouter from 'vue-router'
export interface User {
    login:string;
    password:string;
   
}
export enum Status {
    LoggedIn,
    NotLoggedIn,
    
    
}

const LoggedIn:boolean = false 

export const arrayOfUsers:User[] = [
    {login: 'arnold01', password: 'password'},
    {login: 'arno01', password: 'password'},
    {login: 'a', password: 'a' },
    {login: 'ald01', password: 'password', },

]



export const contactCheck = (userLogin:string) => {
    let userFound = false
    let userExist = ''
    for (let i=0; i<arrayOfUsers.length; i++){
        if (arrayOfUsers[i].login===userLogin) {
            userExist = 'user exist'
            userFound = true
        break
          
            
        } else {
                userExist = 'user not exist'
                userFound = false
                
            }

    }
    alert(userExist)
    return userFound
    

    
    
   // alert('all good')

}

export const allowLogin = () => {

}

export const userReg = (user:User) => {
  let result = contactCheck(user.login)
  if(result){
    alert('already exist')
   // router.push('index')
  }
  else{
    arrayOfUsers.push(user)
  }
    
}
