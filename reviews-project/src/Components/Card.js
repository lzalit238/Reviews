import React,{useState} from 'react'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
// import data from '../utils/data'
const Card = ({data}) => { 
    
    const [show, setShow] = useState(0)
    const { id, rating, name, job, image, text } = data[show]
    
    const myNum = (number) => {
        if (number > data.length - 1) {
            return 0;
        }
        if (number < 0) {
            return data.length - 1;
        }
    }

    const previousPerson = () => {
        setShow()
    }
    const nextPerson = () => {
        setShow()
    }
    return (
        <div className='container'>
           
            <div key={id}>
                <div>
                    {image}
                </div>
                <h2>{name}</h2>
                <h4>{job}</h4>
                <h5>{rating} stars</h5>
                <p>{text}</p>
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
