import React from 'react'
import Card from './Components/Card'
import data from './utils/data'
import './styles/main.css'

const App = () => {
   
    return (
        <div>
            <h1 className='heading'>Our Reviews</h1>
            <Card data={data}/>
            
            
        </div>
    )
}

export default App
