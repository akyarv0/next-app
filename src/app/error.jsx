"use client"
import { useEffect } from 'react'

const Error = ({ error , reset}) => {
    useEffect(() => {
        console.log(error)
    }, [error])
  return (
    <div> Something went wrong</div>
  )
}

export default Error