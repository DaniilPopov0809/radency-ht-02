import { Container } from "react-bootstrap";
import NotesTable from "./components/NotesTable/NotesTable";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <Container as={"main"} className="px-2 py-3">
        <NotesTable stats={false} />
        <NotesTable stats={true} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
