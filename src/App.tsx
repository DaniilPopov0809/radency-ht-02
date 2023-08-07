import NotesTable from "./components/NotesTable/NotesTable";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Header />
      <main className="container mx-auto py-3 px-2 text-neutral-900 overflow-y-auto">
        <NotesTable stats={false} />
        <NotesTable stats={true} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
