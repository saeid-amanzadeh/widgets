import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

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
    const [ selected, setSelected ] = useState(options[0]);
    return (
        <div>
            <Header/>
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select a color"
                    options = { options }
                    selected = { selected }
                    onSelectedChange = { setSelected }
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>

        </div>
    );
};