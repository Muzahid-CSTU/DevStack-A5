import React from 'react';
import type { ItechList } from './Types/techListType';

const TechCard = ({TechList}) => {
    return (
        <div className='grid grid-cols-3'>
        {
            TechList.map((Tech : ItechList) =>{
                return <div>
                    {Tech.name}
                </div>
            })
        }
        </div>
    );
};

export default TechCard;