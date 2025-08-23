'use client'

import { useState } from 'react'
import { Phone, Mail } from 'lucide-react'

export default function ContactUs(){
  const [copiedText, setCopiedText] = useState('')
  const [showCopied, setShowCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      setShowCopied(true)
      
      setTimeout(() => {
        setShowCopied(false)
      }, 6000)
    } catch (err: unknown) {
      console.error('Failed to copy text: ', err)
    }
  }

  return(
    <>


      <div className="flex flex-col gap-18 py-28 px-4 md:px-52">
        <div className="font-primary text-5xl">
          Get in Touch
          <div className="font-secondary text-sm text-zinc-700">
            Please feel free to contact us anytime.
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between md:pr-56 ">
          <form className="bg-white flex flex-col gap-12">
            <input
              placeholder="Your Name"
              className="font-secondary border-b border-stone-300 p-4 text-xl"
            />
            <input
              placeholder="Your Email"
              className="font-secondary border-b border-stone-300 p-4 text-xl"
            />
            <textarea
              placeholder="Your Message"
              className="font-secondary border-b border-stone-300 p-4 text-xl"
            />
            <button className="bg-neutral-700 text-white font-secondary p-4 font-medium tracking-wide hover:shadow-[2px_3px_7px_rgba(0,0,0,0.4)] transition-all duration-300">
              Send
            </button>
          </form>
          <div className="flex flex-col items-center md:items-start gap-9">
            <div className="font-secondary text-3xl text-zinc-800">
              Talk to us
            </div>
            <div 
              className="flex font-para text-zinc-600 hover:underline hover:cursor-pointer flex-row gap-4 mt-4 text-xl tracking-tight items-center"
              onClick={() => copyToClipboard('+91 8866349970')}
            >
              <Phone /> +91 88663-49970
              {showCopied && copiedText === '+91 88663-49970' && (
                <span className="text-zinc-500 text-sm ml-2">✓ copied</span>
              )}
            </div>
            <div 
              className="flex font-para text-zinc-600 hover:underline hover:cursor-pointer flex-row gap-4 text-xl tracking-tight items-center"
              onClick={() => copyToClipboard('+91 7400888060')}
            >
              <Phone /> +91 74008-88060
              {showCopied && copiedText === '+91 74008-88060' && (
                <span className="text-zinc-500 text-sm ml-2">✓ copied</span>
              )}
            </div>
            <div 
              className="flex font-para text-zinc-600 hover:underline hover:cursor-pointer flex-row gap-4 text-xl tracking-tight items-center"
              onClick={() => copyToClipboard('webmantrasol@gmail.com')}
            >
              <Mail/> webmantrasol@gmail.com
              {showCopied && copiedText === 'webmantrasol@gmail.com' && (
                <span className="text-zinc-500 text-sm ml-2">✓ copied</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}