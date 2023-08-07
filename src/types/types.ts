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

export type HandleFunction = (type?: ModalType, note?: NoteItem) => void;

export type ModalType = "add" | "edit";
