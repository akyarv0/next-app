"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const GoBack = () => {
    const router = useRouter()
  return (
<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => router.back()}>Go Back</button>
  )
}

export default GoBack