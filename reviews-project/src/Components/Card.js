import React,{useState} from 'react'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import data from '../utils/data'
const Card = ({ data }) => { 
    
    const [show, setShow] = useState(0)
    const { id, rating, name, job, image, text } = data[index]
    

    const previousPerson = () => {
        setShow()
    }
    const nextPerson = () => {
        setShow()
    }
    return (
        <div className='container'>
           
            <div key={data.id}>
                <div>
                    {data.image}
                </div>
                <h2>{data.name}</h2>
                <h4>{data.job}</h4>
                <h5>{data.rating} stars</h5>
                <p>{data.text}</p>
                <button>
                    <AiFillCaretLeft onClick={previousPerson}/>
                </button>
                <button>
                    <AiFillCaretRight onClick={nextPerson}/>
                </button>
            </div>
        </div>
    )
}

export default Card
