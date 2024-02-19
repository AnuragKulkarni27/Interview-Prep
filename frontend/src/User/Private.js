import React, { useState, useEffect } from 'react'
import useAuthStore from '../stores/authStore'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Spinner from './Spinner'

const PrivateRoute = () => {
  const { auth } = useAuthStore()
  const [ok,setOk] = useState(false)
  
  useEffect(() => {
    const authCheck = async() => {
      const res = await axios.get(`${process.env.REACT_APP_API}/api/v1/user/user-auth`, {
        headers: {
          "Authorization": auth?.token
        }
      })
      if(res.data.ok) {
        setOk(true)
      }
      else {
        setOk(false)
      }
    }
    if(auth?.token) {
      authCheck()
    }
  },[auth?.token])

  return ok ? <Outlet /> : <Spinner path='user'/> 
}

export default PrivateRoute