import React from 'react';
import type { ItechList } from './Types/techListType';
import { toast } from 'react-toastify';

interface SideberProps {
    TechList: ItechList[];
    selectedTechs: string[];
    setSelectedTechs: React.Dispatch<React.SetStateAction<string[]>>;
    stackNumber: number;
    setStackNumber: React.Dispatch<React.SetStateAction<number>>;
}

const Sideber = ({TechList,selectedTechs,setSelectedTechs,stackNumber,setStackNumber}: SideberProps) => {

    const handleRemove = (name: string) => {
        setSelectedTechs(selectedTechs.filter((tech) => tech !== name));
        setStackNumber(stackNumber - 1);
        toast.info(`${name} removed from stack`);
    };

    const handleRemoveAll = () => {
        setSelectedTechs([]);
        setStackNumber(0);
        toast.info('All technologies removed from stack');
    };

    return (
        <div className='p-4'>
            <h1 className='text-base font-bold'>Your Stack</h1>
            <p className='text-sm text-[#64748B] mb-4'>{stackNumber} Technology Selected</p>
            {
                selectedTechs.length === 0 ? (
                    <div className='border border-dashed border-gray-200 rounded-lg p-4 text-center'>
                        <p className='text-xs text-gray-400'>Your stack is empty.</p>
                    </div>
                ) : (
                    <div className='flex flex-col gap-3'>
                        {
                            selectedTechs.map((name) => {
                                const Tech = TechList.find((tech) => tech.name === name);
                                if (!Tech) return null;
                                return (
                                    <div key={Tech.name}className='flex items-center justify-between border border-gray-200 rounded-lg p-3'>
                                        <div className='flex items-center gap-2'>
                                            <img src={Tech.icon} alt={Tech.name} className='h-7 w-7 object-contain' />
                                            <div>
                                                <h2 className='text-sm font-semibold'>{Tech.name}</h2>
                                                <p className='text-xs text-gray-400'>{Tech.category}</p>
                                            </div>
                                        </div>
                                        <button onClick={() => handleRemove(Tech.name)} className='text-gray-400 hover:text-red-500' >
                                            ✕
                                        </button>
                                    </div>
                                );
                            })
                        }
                        <button onClick={handleRemoveAll} className='btn w-full bg-red-500 text-white hover:bg-red-600 mt-2' >
                            Remove All
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default Sideber;