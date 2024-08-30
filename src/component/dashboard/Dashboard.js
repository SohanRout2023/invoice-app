import React from 'react'
import '../../component/dashboard/dashboard.css'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='dashboard-wrapper'> 
        <div className='side-nav'>
            <div className='profile-info'>
                <img src={localStorage.getItem('photoURL')}/>
               <div>
               <p>{localStorage.getItem('cName')}</p>
               <button>Logout</button>
               </div>
            </div>
            <hr/>
            <div className='menu'>
            <Link to='/dashboard/home' className='menu-link'>Home</Link>
            <Link to='/dashboard/invoices'className='menu-link'>Invoices</Link>
            <Link to='/dashboard/new-invoice' className='menu-link'>New Invoice</Link>
            <Link to='/dashboard/setting'className='menu-link'>Setting</Link>
            </div>

        </div>
        <div className='main-container'>
            <Outlet/>

        </div>
    </div>
  )
}

export default Dashboard