import { RootState } from '../../redux/store';

export const selectNotes = (state: RootState) => state.notes.notes;
export const selectCategoties = (state: RootState) => state.notes.categories;