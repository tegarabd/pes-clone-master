import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav'>
        <h1>PES MASTER</h1>

        <nav className='nav_child'>
            <a href='/'>efootball 2022</a>
            <a href='/'>efootball PES 2021</a>
            <a href='/'>PES 2020</a>
            <a href='/'>PES 2019</a>
        </nav>
    </nav>
  )
}
