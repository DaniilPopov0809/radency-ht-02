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
}

export interface ReceivedNoteItem {
  title: string;
  category: string;
  content: string;
  archive: boolean;
}

export type UpdateNoteItem = Partial<NoteItem>;

export type HandleFunction = (type?: ModalTypes, note?: NoteItem) => void;

export enum ModalTypes {
  Add = "add",
  Edit = "edit",
};

export type CategoryItem = {
    category: string;
    icon: any; 
}
