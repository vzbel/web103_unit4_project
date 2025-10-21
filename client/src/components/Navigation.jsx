import React from 'react'
import '../App.css'
import '../css/Navigation.css'

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center px-10 py-5 shadow-sm flex-wrap gap-2">
            <h1 className="text-xl font">HeroForge</h1>

            <ul className="flex gap-5">
                <li className="p-2 bg-blue-500 text-white rounded-sm"><a href='/' role='button'>Customize</a></li>
                <li className="p-2 bg-blue-500 text-white rounded-sm"><a href='/customcharacters' role='button'>View Characters</a></li>
            </ul>
            
        </nav>
    )
}

export default Navigation