import React from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';

const Header = () => {
    return (
        <header className='w-full py-4'>
            <div className="navbar bg-base-100 px-4">
                <div className="flex-1">
                    <Link to='/' className="text-3xl font-bold">Messages</Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </label>
                        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end ml-3">
                        <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                            <div className="w-16 rounded-xl">
                                <img src="https://api.lorem.space/image/face?hash=33791" alt='personal' />
                            </div>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-5 p-2 shadow-2xl bg-base-100 rounded-box w-52">
                            <li>
                                <Link to='/' className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><Link to='/'>Settings</Link></li>
                            <li><Link to='/'>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <Main></Main>
        </header>
    );
};

export default Header;