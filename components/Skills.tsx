'use client';
import React from 'react'
import FlowingMenu from './ui/FlowingMenu'

const demoItems = [
  { link: '#', text: 'Web Development', image: '' },
  { link: '#', text: 'Sonoma', image: 'https://picsum.photos/600/400?random=2' },
  { link: '#', text: 'Monterey', image: 'https://picsum.photos/600/400?random=3' },
  { link: '#', text: 'Sequoia', image: 'https://picsum.photos/600/400?random=4' }
];

const Skills = () => {
  return (
    <div className="flex justify-center items-center flex-col m-10">
        <h1 className="text-4xl font-bold mb-6">My Skills</h1>
        <div className="h-150 w-full">
            <FlowingMenu items={demoItems} />
        </div>
    </div>
  )
}

export default Skills