import React,{useState} from 'react'
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import data from '../utils/data'
const Card = ({ data }) => { 
    
    const [show, setShow] = useState(0)
    const {id, rating, name, job, image, text} = data[index]
    const nextPerson = () => {
        setShow()
    }
    const previousPerson = () => {

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
                
                <AiOutlineArrowLeft onClick={switchCard}/>
                <AiOutlineArrowRight onClick={switchCard}/>
            </div>
        </div>
    )
}

export default Card
