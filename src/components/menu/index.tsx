import { Link } from "react-router-dom";
import Close from "/src/assets/icon-close.svg";
import clsx from "clsx";

function Menu(props: {
  openMenu: boolean;
  setOpenMenu: (status: boolean) => void;
}) {
  return (
    <div
      className={clsx(
        props.openMenu ? "translate-x-0" : "translate-x-[60rem]",
        "md:hidden flex justify-end fixed z-10 top-0 bottom-0 left-0 right-0 transition-all duration-150"
      )}
    >
      <div className="bg-[#2C6269] w-[70%] px-[3rem] py-[3.5rem] bg-[url('/src/assets/bg-pattern-about-1-mobile-nav-1.svg')] bg-no-repeat bg-[right_bottom]">
        <div className="flex justify-end">
          <img
            onClick={() => {
              props.setOpenMenu(false);
            }}
            className="mb-[2.5rem] cursor-pointer"
            src={Close}
            alt="Close"
          />
        </div>

        <div className="mb-[2.3rem]">
          <Link className="flex w-max cursor-default" to="/">
            <h2
              onClick={() => {
                props.setOpenMenu(false);
              }}
              className="text-[1.2rem] w-max leading-[1.8rem] font-[600] mb-[1.5rem] text-[#FFF] cursor-pointer hover:text-[#F67E7E]"
            >
              home
            </h2>
          </Link>
          <Link className="flex w-max" to="/about">
            <h2
              onClick={() => {
                props.setOpenMenu(false);
              }}
              className="text-[1.2rem] w-max leading-[1.8rem] font-[600] text-[#FFF] cursor-pointer hover:text-[#F67E7E]"
            >
              about
            </h2>
          </Link>
        </div>
        <div className="flex justify-center">
          <Link className="flex w-max" to="/contact-us">
            <button
              onClick={() => {
                props.setOpenMenu(false);
              }}
              className="text-[1.13rem] leading-[1.75rem] font-[600] rounded-3xl border-[0.13rem] border-[#FFF] text-[#FFF] px-[1.5rem] py-[0.5rem] hover:text-[#012F34] transition-all duration-200 hover:bg-[#FFF]"
            >
              contact us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
