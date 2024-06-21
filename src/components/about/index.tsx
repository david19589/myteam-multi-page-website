import AvatarNikita from "/src/assets/avatar-nikita.jpg";
import AvatarCristian from "/src/assets/avatar-cristian.jpg";
import AvatarCruz from "/src/assets/avatar-cruz.jpg";
import AvatarDrake from "/src/assets/avatar-drake.jpg";
import AvatarGriffin from "/src/assets/avatar-griffin.jpg";

const infoData = [
  {
    src: AvatarNikita,
    altText: "ImgPerson",
    name: "Nikita Marks",
    position: "Founder & CEO",
  },
  {
    src: AvatarCristian,
    altText: "ImgCog",
    name: "Cristian Duncan",
    position: "Co-founder & COO",
  },
  {
    src: AvatarCruz,
    altText: "ImgChart",
    name: "Cruz Hamer",
    position: "Co-founder & CTO",
  },
  {
    src: AvatarDrake,
    altText: "ImgCog",
    name: "Drake Heaton",
    position: "Business Development Lead",
  },
  {
    src: AvatarGriffin,
    altText: "ImgChart",
    name: "Griffin Wise",
    position: "Lead Marketing",
  },
];

function About() {
  return (
    <div>
      <div className="md:h-[20.44rem] lg:flex-row lg:justify-center lg:bg-[bottom_right] lg:pb-[10rem] flex flex-col items-center h-[28.44rem] px-[1.5rem] bg-[url('/src/assets/bg-pattern-about-1-mobile-nav-1.svg')] bg-no-repeat bg-[right_bottom]">
        <h1 className="lg:text-start lg:text-[4rem] lg:leading-[6.3rem] lg:w-[39rem] lg:mr-[2rem] lg:mb-0 lg:mt-[-1.5rem] md:text-[4rem] md:leading-[3.5rem] md:max-w-[21rem] text-[2.5rem] leading-[2.5rem] font-[700] max-w-[15rem] text-center text-[#FFF] mb-[1.2rem]">
          About
        </h1>
        <div>
          <span className="hidden lg:flex h-[0.25rem] w-[3.13rem] bg-[#F67E7E] mb-[2rem]"></span>
          <p className="lg:text-start lg:max-w-[40rem] md:max-w-[31rem] text-[1rem] leading-[1.8rem] font-[600] max-w-[22rem] text-center text-[#FFF]">
            We help companies build dynamic teams made up of top global talent.
            Using our network of passionate professionals we drive innovation
            and deliver incredible outcomes. Talented, diverse teams shape the
            best products and experiences. We`ll bring those teams to you.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#004047] px-[1.5rem] py-[5.5rem]">
        <h1 className="lg:text-[3rem] lg:leading-[3rem] lg:mr-[8rem] md:max-w-[27rem] text-[2rem] leading-[2rem] font-[700] max-w-[13rem] text-start text-[#FFF] mb-[3rem]">
          Meet the directors
        </h1>
        {infoData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative max-w-[20.5rem] w-full bg-[#012F34] px-[1.5rem] pt-[2rem] pb-[3.5rem] mb-[2rem]"
          >
            <img
              className="w-[6rem] border-[0.13rem] border-[#C4FFFE] rounded-full mb-[1rem]"
              src={item.src}
              alt={item.altText}
            />
            <h2 className="w-[10rem] text-center text-[1.2rem] leading-[1.8rem] font-[700] text-[#79C8C7]">
              {item.name}
            </h2>
            <h2 className="w-[9rem] text-center text-[0.95rem] leading-[1.2rem] font-[500] text-[#FFF]">
              {item.position}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
