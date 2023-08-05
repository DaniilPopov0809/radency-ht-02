import { NoteItem } from "../types/types";

export const countCategory = (data: NoteItem[], category:string, param:boolean) => {
   return data.reduce((acc, cur) => {
        if (cur.category === category && cur.archive === param) {   
            return acc +=1;
        }
        return acc;
    }, 0)
}