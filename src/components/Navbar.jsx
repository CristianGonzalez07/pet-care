import Logo from "../assets/Logo.svg";

const scroll = (value) => {
  const element = document.getElementById(value);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

export default function Navbar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 h-[100px] bg-transparent">
      <div className="md:col-span-3 lg:col-span-2 flex items-center justify-center mx-2">
        <img src={Logo}></img>
      </div>
      <nav className="col-span-2 lg:col-start-4 xl:col-start-5 items-center hidden lg:flex lg:items-center lg:w-auto">
        <ul className="grid grid-cols-4 gap-5">
          <li className="flex items-center">
            <a 
              onClick={ (e) => {
                e.preventDefault();
                scroll("Home")
              }} 
              className="text-primary font-sigmar cursor-pointer"
            >
              Home
            </a>
          </li>
          <li className="flex items-center">
            <span className="text-primary font-sigmar">
              <a 
                onClick={ (e) => {
                  e.preventDefault();
                  scroll("About")
                }} 
                className="text-primary font-sigmar cursor-pointer"
              >
                About
              </a>
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-primary font-sigmar">
              <a 
                onClick={ (e) => {
                  e.preventDefault();
                  scroll("Services")
                }} 
                className="text-primary font-sigmar cursor-pointer"
              >
                Services
              </a>
            </span>
          </li>
          <li className="flex items-center">
            <span className="text-primary font-sigmar">
              <a 
                onClick={ (e) => {
                  e.preventDefault();
                  scroll("Contact")
                }} 
                className="text-primary font-sigmar cursor-pointer"
              >
                Contact
              </a>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
