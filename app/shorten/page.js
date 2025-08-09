"use client"
import React, { useState } from 'react'
import Link from 'next/link'

export default function Page() {
  const [url, setUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [generated, setGenerated] = useState("")
  const [expiry, setExpiry] = useState(false)
  const [activation, setActivation] = useState(false)
  const [expiryDate, setExpiryDate] = useState("")
  const [activationDate, setActivationDate] = useState("")

  const Generate = () => {
    const myHeaders = new Headers();
    const now = new Date()

    // --- VALIDATIONS ---
    if (!url.trim()) {
      alert("Please enter a valid URL.")
      return
    }

    if (activationDate) {
      const activationTime = new Date(activationDate)
      if (isNaN(activationTime)) {
        alert("Invalid activation date.")
        return
      }
      if (activationTime < now) {
        alert("Activation date must be in the future.")
        return
      }
    }

    if (expiryDate) {
      const expiryTime = new Date(expiryDate)
      if (isNaN(expiryTime)) {
        alert("Invalid expiry date.")
        return
      }
      if (expiryTime < now) {
        alert("Expiry date must be in the future.")
        return
      }
    }

    if (activationDate && expiryDate) {
      const activationTime = new Date(activationDate)
      const expiryTime = new Date(expiryDate)
      if (expiryTime <= activationTime) {
        alert("Expiry date must be after the activation date.")
        return
      }
    }

    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl": shortUrl,
      "activation": activationDate,
      "expiry": expiryDate
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:3000/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
        setUrl("")
        setShortUrl("")
        setActivationDate("")
        setExpiryDate("")
        alert(result.message)
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className='bg-[#FAF9EE] min-h-screen py-4'>
      <div className='container mx-auto bg-[#A2AF9B] flex flex-col gap-4 md:w-1/3 w-65 p-3 my-5 rounded-2xl shadow-xl'>
        
        <h2 className='font-bold text-white text-lg'>Create Your Short Link</h2>
        
        <input 
          type="text" 
          value={url} 
          onChange={(e) => { setUrl(e.target.value) }} 
          placeholder='Paste your long URL here (e.g., https://example.com)' 
          className='bg-white rounded-lg py-2 px-2' 
        />

        <input 
          type="text" 
          value={shortUrl} 
          onChange={(e) => { setShortUrl(e.target.value) }} 
          placeholder='Custom short name ' 
          className='bg-white rounded-lg py-2 px-2' 
        />

        {!expiry && 
          <p className='cursor-pointer text-sm underline' onClick={() => setExpiry(true)}>
            + Add an expiry date
          </p>
        }
        {expiry &&
        <>
          <p className='text-white'>Set expiry date & time:</p>
          <input 
            type="datetime-local" 
            className='bg-white rounded-lg py-2 px-2' 
            value={expiryDate} 
            onChange={(e) => { setExpiryDate(e.target.value) }}
          />
        </>
        }

        {!activation && 
          <p className='cursor-pointer text-sm underline' onClick={() => setActivation(true)}>
            + Add an activation date
          </p>
        }
        {activation &&
        <>
          <p className='text-white'>Set activation date & time:</p>
          <input 
            type="datetime-local" 
            className='bg-white rounded-lg py-2 px-2' 
            value={activationDate} 
            onChange={(e) => { setActivationDate(e.target.value) }}
          />
        </>
        }

        <button 
          className='bg-[#DCCFC0] hover:bg-[#e1c8aa] cursor-pointer rounded-lg py-2 shadow-lg p-2 text-white font-semibold' 
          onClick={Generate}
        >
          Generate Short Link
        </button>

        {generated && 
          <div className="flex flex-col gap-2">
            <p className='font-bold text-white'>Your Short Link:</p>
            <Link target="_blank" href={generated}>
              <code className="bg-white px-2 py-1 rounded">{generated}</code>
            </Link>
          </div>
        }
      </div>
    </div>
  )
}
