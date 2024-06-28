import React from 'react'
import { Logo } from '../Logo'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='row gap-10 text-white bg-bg-100 p-10'>
        <div>
            <Logo/>
        </div>
        <div className='col'>
            <h2 className='py-4 font-bold'>About us</h2>
            <ul>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
                <li>
                    <Link href='/faq'>FAQ</Link>
                </li>
            </ul>

        </div>
    </footer>
  )
}

