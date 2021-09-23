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
        setShow(show - 1)
        if (show === 0) {
            setShow(data.length - 1);
        }
    }
    const nextPerson = () => {
        setShow(show + 1)
        if (show < 0) {
            setShow(data.length - 1);
        }
    }
    return (
        <div className='container'>
           
            <div key={id}>
                <div className='profile-bg'>
                    <img src={image} alt={name} />
                </div>

                <h2>{name}</h2>
                <h4>{job}</h4>
                {/* <h5>{rating} stars</h5> */}
                <p className='contain-text'>{text}</p>
                <button className='btn'>
                    <AiFillCaretLeft onClick={previousPerson}/>
                </button>
                <button className='btn'>
                    <AiFillCaretRight onClick={nextPerson}/>
                </button>
            </div>
        </div>
    )
}

export default Card
