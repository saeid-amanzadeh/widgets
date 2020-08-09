import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: '1- What is React?',
        content: 'React is good 1!'
    },
    {
        title: '2- What is React?',
        content: 'React is good 2 !'
    },
    {
        title: '3- What is React?',
        content: 'React is good 3!'
    },
    {
        title: '4- What is React?',
        content: 'React is good 4!'
    },
    {
        title: '5- What is React?',
        content: 'React is good 5!'
    }
];
export default () => {
    return (
        <div>
        <Search />
        </div>
    );
};