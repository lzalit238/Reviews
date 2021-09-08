import React from 'react'
import Card from './Components/Card'
import data from './utils/data'

const App = () => {
    return (
        <div>
            {
                data.map((cards) => {
                    return (
                        <Card key={cards.id} data={cards}/>
                    )
                })
            }
        </div>
    )
}

export default App
