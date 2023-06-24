import React from 'react';
import './Filter.css'
import { Button } from '@mui/material';

const Filter = () => {
  return (
    <div className='container'>
    <div className='filter'>
    <h1>Filter By</h1>
    <div className='filterdays'>
    <Button className='active'>Date: Last 90 days</Button>
    <Button>Type</Button>
    <Button>Status</Button>
    </div>
    <h1 style={{fontWeight:'bold'}}>Completed</h1>
    </div>
    </div>
  )
}

export default Filter