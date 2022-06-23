import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <section className='w-full flex'>
            <div style={{ boxShadow: ' 7px 0 5px 2px rgba(100, 100, 111, 0.2)' }} className='w-3/12 card my-3 h-auto mr-5'>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col items-center justify-center">
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div class="drawer-side">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                            <li className='mb-2'><Link to='/'>Sidebar Item</Link></li>
                            <li><Link to='/'>Sidebar Item</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-6/12 my-3'>
                <div style={{boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}} class="navbar bg-base-100 rounded-xl">
                    <div class="flex-1">
                        <div>
                            <img style={{width: '50px', height: '50px'}} className='rounded-full' src="https://api.lorem.space/image/face?hash=33791" alt='personal' />
                        </div>
                        <div className='ml-3'>
                            <h2 className='font-bold text-lg'>Name</h2>
                            <small style={{position: 'relative', top: '-8px'}}>Online</small>
                        </div>
                    </div>
                    <div class="flex-none gap-2">
                        <div class="dropdown dropdown-end">
                            <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                                <FontAwesomeIcon className='fontawesome text-2xl' icon={faEllipsisVertical}></FontAwesomeIcon>
                            </label>
                            <ul tabIndex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <Link to='/' class="justify-between">
                                        Profile
                                        <span class="badge">New</span>
                                    </Link>
                                </li>
                                <li><Link to='/'>Settings</Link></li>
                                <li><Link to='/'>Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;