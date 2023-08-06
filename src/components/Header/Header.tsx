import { Navbar, Container } from "react-bootstrap";
import Logo from "../Logo/Logo";
import { TextLogo, Link} from "./Header.styled";

const Header = () => {
  return (
    <header>
      <Navbar bg="success" expand="lg" variant="light">
        <Container>
          <Navbar.Brand>
            <Link
              href={"/"}
              className="text-decoration-none d-flex align-items-center btn btn-link p-0"
            >
              <Logo />
              <TextLogo className="text-light">
                ToDo
              </TextLogo>
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
