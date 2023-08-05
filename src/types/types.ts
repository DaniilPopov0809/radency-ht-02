export interface NoteItem {
    id: string;
    created: string;
    title: string;
    category: string;
    content: string;
    archive: boolean;
}

export interface NotesState {
    notes: NoteItem[];
    categories: string[];
    status: 'idle' | 'loading' | 'failed';
  }

  export interface ReceivedNoteItem  {
    title: string;
    category: string;
    content: string;
    archive: boolean; 
  }

  // export interface StatsItem {
  //   category: string,
  //   active: number,
  //   archived: number,
  // }

  export type UpdateNoteItem = Partial<NoteItem>;