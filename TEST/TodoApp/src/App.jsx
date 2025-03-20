import React,{ useState } from 'react'
import Header from './Components/Header.jsx'
import Menu from './Components/Menu.jsx'
import Footer from './Components/Footer.jsx'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="flex bg-orange-100 w-full">
                <div className='w-2/6'>
                    <Menu />
                </div>
                <div className=" w-4/6">
                    <Header/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App
