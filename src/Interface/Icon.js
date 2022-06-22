import { faCalendarCheck, faCommentDots, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Icon = () => {
    return (
        <div className='w-2/12 bg-accent h-screen'>
            <div className='flex items-center justify-center py-8'>
                <div>
                    <div>
                        <FontAwesomeIcon className='fontawesome text-4xl p-3 bg-gradient-to-b from-primary to-secondary rounded-lg text-white mb-3' icon={faCommentDots}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon className='fontawesome text-4xl py-3 px-[15px] hover:bg-gradient-to-b hover:from-primary hover:to-secondary hover:text-white text-gray-300 rounded-lg mb-3' icon={faUser}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon style={{fontSize: '33px'}} className='fontawesome p-3 hover:bg-gradient-to-b hover:from-primary hover:to-secondary hover:text-white text-gray-300 rounded-lg mb-3' icon={faStar}></FontAwesomeIcon>
                    </div>
                    <div>
                        <FontAwesomeIcon className='fontawesome text-4xl py-3 px-[15px] hover:bg-gradient-to-b hover:from-primary hover:to-secondary hover:text-white text-gray-300 rounded-lg' icon={faCalendarCheck}></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Icon;