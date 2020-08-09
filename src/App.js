import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

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

const options = [
    {
      label: 'The Color Red',
      value: 'red'
    },
    {
      label: 'The Color Green',
      value: 'green'
    },
    {
      label: 'The Color Blue',
      value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [dropdown, setDropdown] = useState(false);

    return (
        <div>
            <button onClick={ ()=> setDropdown(!dropdown) }>
                Dropdown
            </button>
            {dropdown ?
                <Dropdown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}/>
                    : null
            }
        </div>
    );
};