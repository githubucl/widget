import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
export default () => {
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
    return (
        <div>
        
            {/* <Accordion items={items} /> */}
            <Search/>
        </div>
    )
}