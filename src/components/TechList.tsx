import React from 'react';
import { use, useState } from 'react'
import type { ItechList } from "./Types/techListType";
import TechCard from '../components/TechCard.tsx'
import Sideber from './Sideber.tsx';

interface techListProps {
  techListPromise: Promise<ItechList[]>;
}

const TechList = ({techListPromise} : techListProps) => {
    const TechList = use(techListPromise);
    console.log(TechList);
    return (
        <div className='container mx-auto max-w-6xl px-8'>
            <div className='grid grid-cols-10 gap-4 mt-10'>
                <div className='col-span-8'>
                    <TechCard TechList={TechList} />
                </div>
                <div className='col-span-2 border'>
                    <Sideber />
                </div>
            </div>

            
        </div>
    );
};

export default TechList;