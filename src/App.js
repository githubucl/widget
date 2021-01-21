import React, { useState } from 'react'
import Accordion from './components/Accordion'
import DropDown from './components/dropDown'
import Search from './components/Search'

const items = [
    {
        title: 'what is react',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'why use react?',
        content: 'React is a favourite JS library among engineers'
    },
    {
        title: 'how do you use React?',
        content: 'you use React by creating components'
    }
]
const options=[
    {
        label:'the color green',
        value:'green'
    },
    {
        label:'the color blue',
        value:'blue'
    },
    {
        label:'the color red',
        value:'red'
    }
]
export default () => {
   
    const [selected,setSelected]=useState(options[0])
    return (
        <div>
        
            {/* <Accordion items={items} /> */}
            {/* <Search/> */}
            <DropDown 
            options={options} 
            selected={selected}
            onSelected={setSelected}
            />
        </div>
    )
}