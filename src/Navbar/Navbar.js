import React from 'react';
import paypallogo from '../assets/paypal-logo-icon-13.jpg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { Button } from '@mui/material';
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='container'>
    <div style={{backgroundColor:'darkblue',width:'100%'}}>
    <div className='navbar'>
    <div className='menu'>
    <img src={paypallogo} alt="" srcset="" height={40} width={40} />
    <Button>Home</Button>
    <Button>Finances</Button>
    <Button>Send and Request</Button>
    <Button>Deals</Button>
    <Button>Wallet</Button>
    <Button>Activity</Button>
    <Button>Help</Button>
    </div>
    <div className='notification_login'>
    <NotificationsIcon/>
    <SettingsIcon/>
    <Button>Logout</Button>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar