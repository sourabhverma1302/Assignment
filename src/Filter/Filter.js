import React from 'react';
import './Filter.css'
import { Button } from '@mui/material';
import { useDispatch,useSelector } from 'react-redux';
import { filteryourdata } from '../slices/FilterData';

const Filter = () => {
    const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.toLocaleString('default', { month: 'long' });
const year = currentDate.getFullYear();

const formattedDate = `${day} ${month} ${year}`;
    const dispatch=useDispatch();
    const data=useSelector(state=>state.filteryoudata.demodata);
    console.log(data);
  return (
    <div className='container'>
    <div className='filter'>
    <h1>Filter By</h1>
    <div className='filterdays'>
    <Button className='active' onClick={()=>dispatch(filteryourdata("date"))}>Date: Last 90 days</Button>
    <Button  onClick={()=>dispatch(filteryourdata("type"))}>Type</Button>
    <Button  onClick={()=>dispatch(filteryourdata("status"))}>Status</Button>
    </div>
    <h1 style={{fontWeight:'bold'}}>Completed</h1>
    </div>
    </div>
  )
}

export default Filter