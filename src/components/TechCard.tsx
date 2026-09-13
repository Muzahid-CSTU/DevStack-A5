import React from 'react';
import type { ItechList } from './Types/techListType';

interface TechCardProps {
    TechList: ItechList[];
}

const TechCard = ({ TechList }: TechCardProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {TechList.map((Tech: ItechList) => (
                <div key={Tech.name} className="border border-gray-200 rounded-2xl p-4 bg-white">
                    <div className="flex justify-between items-start mb-4">
                        <img src={Tech.icon} alt={Tech.name} className="h-9 w-9 object-contain"/>
                        <div className="text-sm border rounded-full px-3 py-1">{Tech.badge}</div>
                    </div>
                    <h2 className="text-lg font-semibold mb-2">{Tech.name}</h2>
                    <p className="text-sm text-gray-500 leading-5 min-h-[60px]">{Tech.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500 mt-4 mb-4">
                        <div className="bg-gray-100 px-2 py-1 rounded">{Tech.category}</div>
                        <div>{Tech.difficulty}</div>
                        <div>⭐ {Tech.rating}</div>
                    </div>

                    <button className="btn w-full bg-black text-white">Add to Stack</button>
                </div>
            ))}
        </div>
    );
};

export default TechCard;