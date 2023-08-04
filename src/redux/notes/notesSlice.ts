import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { RootState, AppThunk } from '../../redux/store';
import { NoteItem, NotesState, UpdateNoteItem } from "../../types/types";

const initialState: NotesState = {
  notes: [
    {
      id: "vperTKBsSa_qi4pesmGNA",
      created: "Jule 27, 2023",
      title: "Shopping List",
      category: "Task",
      content: "Tomatossdd, bread",
      archive: false,
    },
    {
      id: "vperTKBsSa_qi4pesmGLD",
      created: "May 07, 2023",
      title: "Books",
      category: "Task",
      content: "Learn startup",
      archive: true,
    },
    {
      id: "vperTKBsSa_qi4pesmMAC",
      created: "March 15, 2023",
      title: "New Feature",
      category: "Idea",
      content: "Implant",
      archive: false,
    },
    {
      id: "vperTKBsSa_qi4pesmOLX",
      created: "June 20, 2023",
      title: "To do exercise",
      category: "Task",
      content: "Run, Push ups",
      archive: false,
    },
    {
      id: "vperTKBsSa_qi4pe34ffg",
      created: "June 15, 2023",
      title: "Create App",
      category: "Idea",
      content: "Food app",
      archive: false,
    },
    {
      id: "vperTKBsSa_qi4pessdfd",
      created: "Jule 31, 2023",
      title: "Clean window",
      category: "Random Thought",
      content: "",
      archive: false,
    },
    {
      id: "vperTKBsSa_qi4peyjjjm",
      created: "Jule 31, 2023",
      title: "Buy toy",
      category: "Random Thought",
      content: "",
      archive: false,
    },
  ],
  status: "idle",
  categories: ["Task", "Idea", "Random Thought"],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,

  reducers: {
    addNote: (state, action: PayloadAction<NoteItem>) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<NoteItem>) => {
      const index: number = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      state.notes.splice(index, 1);
    },
    editNote: (state, action: PayloadAction<UpdateNoteItem>) => {
      const newNotes: UpdateNoteItem = action.payload;
      const index: number = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      state.notes[index] = { ...state.notes[index], ...newNotes };
    },

  },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

// export default counterSlice.reducer;
