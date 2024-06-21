import Logo from "/src/assets/logo.svg";
import Hamburger from "/src/assets/icon-hamburger.svg";
import { useState } from "react";
import Menu from "../menu";
import clsx from "clsx";
import { Link } from "react-router-dom";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="lg:px-[10.31rem] md:px-[2.5rem] flex justify-between items-center pt-[3rem] px-[1.5rem] mb-[5rem]">
        <div className="md:flex md:flex-row md:items-center md:gap-[3rem]">
          <img className="w-max max-w-[8rem] h-max" src={Logo} alt="Logo" />
          <div className="md:flex md:mb-0 hidden gap-[1.5rem] mb-[1.5rem]">
            <Link to="/">
              <h2 className="text-[1rem] leading-[1.5rem] font-[600] text-[#FFF] cursor-pointer hover:text-[#F67E7E]">
                home
              </h2>
            </Link>
            <Link to="/about">
              <h2 className="text-[1rem] leading-[1.5rem] font-[600] text-[#FFF] cursor-pointer hover:text-[#F67E7E]">
                about
              </h2>
            </Link>
          </div>
        </div>
        <Link to="/contact-us">
          <button className="md:flex hidden text-[1.13rem] leading-[1.75rem] font-[600] rounded-3xl border-[0.13rem] border-[#FFF] text-[#FFF] px-[1.5rem] py-[0.5rem] hover:text-[#012F34] transition-all duration-200 hover:bg-[#FFF]">
            contact us
          </button>
        </Link>
        <img
          onClick={() => {
            setOpenMenu(true);
          }}
          className="md:hidden w-max h-max cursor-pointer"
          src={Hamburger}
          alt="Hamburger"
        />
      </div>
      <div
        className={clsx(
          openMenu &&
            "md:hidden flex justify-end fixed z-10 top-0 bottom-0 left-0 right-0 bg-[#0e2f33af] transition-all duration-150"
        )}
      >
        <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </>
  );
}

export default Header;
