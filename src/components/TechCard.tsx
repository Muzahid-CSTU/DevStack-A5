import React from 'react';
import type { ItechList } from './Types/techListType';
import { FaStar } from "react-icons/fa6";

interface TechCardProps {
    TechList: ItechList[];
    selectedTechs: string[];
    setSelectedTechs: React.Dispatch<React.SetStateAction<string[]>>;
    stackNumber: number;
    setStackNumber: React.Dispatch<React.SetStateAction<number>>;
}

const TechCard = ({ 
    TechList, 
    selectedTechs, 
    setSelectedTechs, 
    stackNumber, 
    setStackNumber 
}: TechCardProps) => {

    const handleSelectStack = (name: string) => {
        setSelectedTechs([...selectedTechs, name]);

        const current = stackNumber + 1;
        setStackNumber(current);
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TechList.map((Tech: ItechList) => {
                const isSelected = selectedTechs.includes(Tech.name);

                return (
                    <div 
                        key={Tech.name} 
                        className="border border-gray-200 rounded-2xl p-4 bg-white"
                    >

                        <div className="flex justify-between items-start mb-4">
                            <img 
                                src={Tech.icon} 
                                alt={Tech.name} 
                                className="h-9 w-9 object-contain"
                            />

                            <div className="text-sm border rounded-full px-3 py-1">
                                {Tech.badge}
                            </div>
                        </div>

                        <h2 className="text-lg font-semibold mb-2">
                            {Tech.name}
                        </h2>

                        <p className="text-sm text-gray-500 leading-5 min-h-[60px]">
                            {Tech.description}
                        </p>

                        <div className="flex items-center justify-between text-xs text-gray-500 mt-4 mb-4">

                            <div className="bg-gray-100 px-2 py-1 rounded">
                                {Tech.category}
                            </div>

                            <div>
                                {Tech.difficulty}
                            </div>

                            <div className='grid grid-cols-2'>
                                <div>
                                    <FaStar />
                                </div>

                                <div>
                                    {Tech.rating}
                                </div>
                            </div>

                        </div>

                        <button
                            onClick={() => handleSelectStack(Tech.name)}
                            className={`btn w-full ${
                                isSelected
                                    ? 'bg-gray-100 text-black border border-gray-200'
                                    : 'bg-black text-white'
                            }`}
                            disabled={isSelected}
                        >
                            {isSelected ? 'Added' : 'Add to Stack'}
                        </button>

                    </div>
                );
            })}
        </div>
    );
};

export default TechCard;