import clsx from "clsx";
import { useState } from "react";
import CrossSvg from "/src/assets/icon-cross.svg";

interface DataTypes {
  src: string;
  altText: string;
  name: string;
  position: string;
  paragraph: string;
}

function Directors(props: { infoData: DataTypes[] }) {
  const [showInfo, setShowInfo] = useState(props.infoData.map(() => false));

  const toggleShowInfo = (index: number) => {
    setShowInfo((prev) => {
      const newArray = [...prev];
      newArray[index] = !newArray[index];
      return newArray;
    });
  };

  return (
    <div className="lg:grid-cols-3 lg:max-w-[69rem] md:grid md:grid-cols-2 md:gap-[2rem] md:max-w-[35.2rem] flex flex-col items-center w-full max-w-[20.5rem]">
      {props.infoData.map((item, index) => (
        <div
          key={index}
          className={clsx(
            showInfo[index] ? "bg-[#002529]" : "bg-[#012F34]",
            "lg:max-w-[22rem] md:max-w-[18rem] flex flex-col items-center relative max-w-[20.5rem] w-full h-[17.5rem] px-[1.5rem] pt-[2rem] pb-[3.5rem] mb-[3rem] transition-all duration-300"
          )}
        >
          <img
            className={clsx(
              showInfo[index] && "hidden",
              "w-[6rem] border-[0.13rem] border-[#C4FFFE] rounded-full mb-[1rem]"
            )}
            src={item.src}
            alt={item.altText}
          />
          <h2 className="w-[10rem] text-center text-[1.2rem] leading-[1.8rem] font-[700] text-[#79C8C7]">
            {item.name}
          </h2>
          <p
            className={clsx(
              showInfo[index] ? "flex" : "hidden",
              "w-[15rem] text-center text-[0.95rem] leading-[1.6rem] font-[600] text-[#FFF] mb-[1.5rem] mt-[0.5rem]"
            )}
          >
            {item.paragraph}
          </p>
          <div
            className={clsx(
              showInfo[index] ? "flex" : "hidden",
              "flex gap-[1rem]"
            )}
          >
            <svg
              className="cursor-pointer group"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
            >
              <path
                className="group-hover:fill-[#F67E7E]"
                fill="#FFF"
                d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
              />
            </svg>
            <svg
              className="cursor-pointer group"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                className="group-hover:fill-[#F67E7E]"
                fill="#FFF"
                d="M18 0H2C.9 0 0 .9 0 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-5.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5V17H8V8h3v1.2c.5-.8 1.6-1.4 2.5-1.4 1.9 0 3.5 1.6 3.5 3.5V17z"
              />
            </svg>
          </div>
          <h2
            className={clsx(
              showInfo[index] && "hidden",
              "max-w-[15rem] text-center text-[0.95rem] leading-[1.2rem] font-[600] text-[#FFF] mb-[1.5rem]"
            )}
          >
            {item.position}
          </h2>
          <button
            onClick={() => {
              toggleShowInfo(index);
            }}
            className={clsx(
              showInfo[index]
                ? "bg-[#79C8C7] hover:bg-[#F67E7E]"
                : "bg-[#F67E7E] hover:bg-[#79C8C7]",
              "flex justify-center items-center absolute bottom-[-1.7rem] w-[3.5rem] h-[3.5rem] rounded-full outline-none"
            )}
          >
            <img
              className={clsx(
                showInfo[index] && "rotate-45",
                "transition-all duration-300"
              )}
              src={CrossSvg}
              alt="CrossSvg"
            />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Directors;
