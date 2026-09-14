import React from 'react';
import { use, useState } from 'react'
import type { ItechList } from "./Types/techListType";
import TechCard from '../components/TechCard.tsx'
import Sideber from './Sideber.tsx';

interface techListProps {
    techListPromise: Promise<ItechList[]>;
    stackNumber: number;
    setStackNumber: React.Dispatch<React.SetStateAction<number>>;
}

const TechList = ({ techListPromise, stackNumber, setStackNumber }: techListProps) => {
    const TechList = use(techListPromise);

    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

    return (
        <div className='container mx-auto max-w-6xl px-8'>
            <div className='grid grid-cols-1 md:grid-cols-10 gap-4 mt-10 items-start'>

                <div className='md:col-span-8'>
                    <TechCard
                        TechList={TechList}
                        selectedTechs={selectedTechs}
                        setSelectedTechs={setSelectedTechs}
                        stackNumber={stackNumber}
                        setStackNumber={setStackNumber}
                    />
                </div>

                <div className='md:col-span-2 border rounded-2xl border-gray-200'>
                    <Sideber
                        TechList={TechList}
                        selectedTechs={selectedTechs}
                        setSelectedTechs={setSelectedTechs}
                        stackNumber={stackNumber}
                        setStackNumber={setStackNumber}
                    />
                </div>

            </div>
        </div>
    );
};

export default TechList;