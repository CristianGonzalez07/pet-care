import Logo from "../assets/Logo.svg";

export default function Navbar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 h-[100px] bg-transparent">
      <div className="md:col-span-3 lg:col-span-2 flex items-center justify-center mx-2">
        <img src={Logo}></img>
      </div>
      <nav className="col-span-2 lg:col-start-4 xl:col-start-5 items-center hidden lg:flex lg:items-center lg:w-auto">
        <ul className="grid grid-cols-4 gap-5">
          <li className="flex items-center">
            <span className="text-primary font-sigmar">Home</span>
          </li>
          <li className="flex items-center">
            <span className="text-primary font-sigmar">About</span>
          </li>
          <li className="flex items-center">
            <span className="text-primary font-sigmar">Services</span>
          </li>
          <li className="flex items-center">
            <span className="text-primary font-sigmar">Contact</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
