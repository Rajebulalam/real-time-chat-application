import React from 'react';
import Header from './Header';
import Icon from './Icon';

const Interface = () => {
    return (
        <section>
            <div className='flex justify-between'>
                <Icon></Icon>
                <Header></Header>
            </div>
        </section>
    );
};

export default Interface;