import Logo from "/src/assets/logo.svg";
import Hamburger from "/src/assets/icon-hamburger.svg";
function Header() {
  return (
    <div className="md:px-[2.5rem] flex justify-between items-center pt-[3rem] px-[1.5rem] mb-[5rem]">
      <div className="md:flex md:flex-row md:items-center md:gap-[3rem]">
        <img className="w-max max-w-[8rem] h-max" src={Logo} alt="Logo" />
        <div className="md:flex md:mb-0 hidden gap-[1.5rem] mb-[1.5rem]">
          <h2 className="text-[1rem] leading-[1.5rem] font-[600] text-[#FFF] cursor-pointer hover:text-[#F67E7E]">
            home
          </h2>
          <h2 className="text-[1rem] leading-[1.5rem] font-[600] text-[#FFF] cursor-pointer hover:text-[#F67E7E]">
            about
          </h2>
        </div>
      </div>
      <button className="md:flex hidden text-[1.13rem] leading-[1.75rem] font-[600] rounded-3xl border-[0.13rem] border-[#FFF] text-[#FFF] px-[1.5rem] py-[0.5rem] hover:text-[#012F34] transition-all duration-200 hover:bg-[#FFF]">
        contact us
      </button>
      <img
        className="md:hidden w-max h-max cursor-pointer"
        src={Hamburger}
        alt="Hamburger"
      />
    </div>
  );
}

export default Header;
