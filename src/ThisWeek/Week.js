import React from 'react';
import './Week.css';
import { useDispatch,useSelector } from 'react-redux';
import { filteryourdata } from '../slices/FilterData';

const Week = () => {
    const data=useSelector(state=>state.filteryoudata.demodata);
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
                <p>{item.date}&nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:'bold'}}>{item.status}</span></p>
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