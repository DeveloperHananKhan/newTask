import {create} from 'zustand'


interface Authentication {
token: string | null,
isAuthenticated : boolean;
login : (email:string,password:string) => void,
logout : ()=> void
}

export const useAuthStore = create<Authentication>((set)=>({
token: null,
isAuthenticated: false,

login:async (email,password)=> {

try {
  const res = await fetch('https://reqres.in/api/login',{
  method: 'POST',
  headers: {
    'x-api-key': 'reqres-free-v1',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'eve.holt@reqres.in',
    password: 'cityslicka'
  })
})
  const data = await res.json()

  if(data.token){
    set({
      token:data.token,
      isAuthenticated: true 
    })
    localStorage.setItem('token',JSON.stringify(data.token))
  }else{
    throw new Error("Invalid credentials");
  }

} catch (error) {
  throw error
}

},
logout : ()=> {
  set({
    token: null,
    isAuthenticated: false
  })
  localStorage.removeItem('token')
}





}))