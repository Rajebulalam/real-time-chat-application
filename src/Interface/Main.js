import { faEllipsisVertical, faGear, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <section className='w-full flex'>
            <div style={{ boxShadow: ' 7px 0 5px 2px rgba(100, 100, 111, 0.2)' }} className='w-3/12 card my-3 h-[570px] mr-5'>
                <div class="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content flex flex-col items-center justify-center">
                        <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    </div>
                    <div class="drawer-side py-3">
                        <label for="my-drawer-2" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
                            <div className='relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 absolute top-[15px] left-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                <input type="text" placeholder="Search People" class="input rounded-md outline-none border-none bg-gray-200 w-full lg:max-w-lg pl-8" />
                            </div>
                            <div className='my-3 flex items-center justify-between px-2'>
                                <div>
                                    <FontAwesomeIcon className='fontawesome text-xl p-3 bg-gradient-to-b from-primary to-secondary rounded-lg text-white' icon={faUser}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='fontawesome text-xl py-3 px-[8px]  hover:bg-gradient-to-b hover:from-primary hover:to-secondary hover:text-white rounded-lg' icon={faUserGroup}></FontAwesomeIcon>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='fontawesome text-xl py-3 px-[10px]  hover:bg-gradient-to-b hover:from-primary hover:to-secondary hover:text-white rounded-lg' icon={faGear}></FontAwesomeIcon>
                                </div>
                            </div>
                            <li className='my-2 bg-gray-200'>
                                <Link to='/'>
                                    <div className='flex items-center'>
                                        <img className="w-[52px] h-[52px] rounded-full" src="https://api.lorem.space/image/face?hash=33791" alt='personal' />
                                        <h2 className='font-semibold text-xl pl-3'>Full Name</h2>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-6/12 my-3'>
                <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} class="navbar bg-base-100 rounded-xl">
                    <div class="flex-1">
                        <div>
                            <img style={{ width: '50px', height: '53px' }} className='rounded-full' src="https://api.lorem.space/image/face?hash=33791" alt='personal' />
                        </div>
                        <div className='ml-3'>
                            <h2 className='font-bold text-lg'>Name</h2>
                            <small style={{ position: 'relative', top: '-8px' }}>Online</small>
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