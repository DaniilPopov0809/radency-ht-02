import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className="bg-lime-500 shadow-md">
      <div className="container py-3 px-2 mx-auto">
        <nav>
          <a
            href={"/"}
            className="px-3 py-1 underline-none inline-flex items-center hover:scale-105 focus-visible:outline-none focus-visible:ring focus-visible:ring-violet-400 focus-visible:rounded-lg duration-300"
          >
            <Logo />
            <p className="text-white text-2xl ms-1 font-semibold">ToDo</p>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
