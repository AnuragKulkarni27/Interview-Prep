import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Spinner = () => {
    const navigate = useNavigate()
    const [count,setCount] = useState(5);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => --prev)
        },1000)
        count === 0 && navigate(`/`)
        return () => clearInterval(interval)
    }, [count,navigate])

  return (
    <>
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <h1 className='text-center'>redirecting you in {count}</h1>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </>
  )
}

export default Spinner