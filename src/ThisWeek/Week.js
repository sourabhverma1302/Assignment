import React from 'react';
import './Week.css';
import data from './WeekData';

const Week = () => {
  return (
    <div className='container'>
    <div className='weeks'>
    <h1>This Week</h1>
    <div className='weekdata'>
    {
        data.map((item,index)=>{
            return(
                <div className='eachdata'>
                <div className='name_date'>
                <img src={item.imageUrl} alt="" height={50} width={50}/>
                <div>
                <h1>{item.name}</h1>
                <p>{item.date}</p>
                </div>
                </div>
                <h1>{item.price}</h1>
                </div>
            )
        })
    }
    </div>
    </div>
    </div>
  )
}

export default Week