import React from 'react';
import { use } from 'react'
import type { ItechList } from "./Types/techListType";

interface techListProps {
  techListPromise: Promise<ItechList[]>;
}

const TechList = ({techListPromise} : techListProps) => {
    const TechList = use(techListPromise);
    console.log(TechList);
    return (
        <div>
            
        </div>
    );
};

export default TechList;