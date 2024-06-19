import Logo from "/src/assets/logo.svg";
import Hamburger from "/src/assets/icon-hamburger.svg";
function Header() {
  return (
    <div className="flex justify-between items-center pt-[3rem] px-[1.5rem] mb-[5rem]">
      <img className="w-max max-w-[8rem] h-max" src={Logo} alt="Logo" />
      <img
        className="w-max h-max cursor-pointer"
        src={Hamburger}
        alt="Hamburger"
      />
    </div>
  );
}

export default Header;
