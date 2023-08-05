import React from 'react';
import NotesTable from './components/NotesTable/NotesTable';

function App() {
  return (
    <>
   <NotesTable stats={false}/>
   <NotesTable stats={true}/>
   </>
  );
}

export default App;
