import React from 'react';
import { TfiThought } from 'react-icons/tfi';
import { GiIdea } from 'react-icons/gi';
import { BsListTask } from 'react-icons/bs';
import { CategoryItem } from '../types/types';

const categoriesIcon: CategoryItem[] = [
    { category:"Random Thought", icon: TfiThought},
    { category:"Idea", icon: GiIdea},
    { category:"Task", icon: BsListTask}
];

export const findCategoryIcon = (category:string) => {
   const findIcon: CategoryItem | undefined = categoriesIcon.find(el => el.category === category);
   if(findIcon){
    return React.createElement(findIcon.icon, { size: 24, color: "rgb(196 181 253)"});
   } 
}