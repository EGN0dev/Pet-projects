export interface User {
    login:string;
    password:string;
    loggedIn:Status
}
export enum Status {
    LoggedIn,
    NotLoggedIn,
    
}

export const arrayOfUsers:User[] = [
    {login: 'arnold01', password: 'password', loggedIn: Status.NotLoggedIn},
    {login: 'arno01', password: 'password', loggedIn: Status.NotLoggedIn},
    {login: 'ald01', password: 'password', loggedIn: Status.NotLoggedIn},
    {login: 'a', password: 'a', loggedIn: Status.NotLoggedIn},

]



export const hi = () => alert('hi')
