import React from 'react'
import { useAuth } from '../../auth/AuthProvider'

export default function Login() {
    const auth = useAuth()
    const setUser = () =>{
        const user = {
            id:1,
        }
        auth.setAll(user)
    }
  return (
    <h1 className="text-1xl text-center  font-bold underline" onClick={setUser}>
    Hello world!
  </h1>
  )
}
