import AvatarNikita from "/src/assets/avatar-nikita.jpg";
import AvatarCristian from "/src/assets/avatar-cristian.jpg";
import AvatarCruz from "/src/assets/avatar-cruz.jpg";
import AvatarDrake from "/src/assets/avatar-drake.jpg";
import AvatarGriffin from "/src/assets/avatar-griffin.jpg";
import AvatarAden from "/src/assets/avatar-aden.jpg";
import LogoVerge from "/src/assets/logo-the-verge.png";
import LogoJakarta from "/src/assets/logo-jakarta-post.png";
import LogoGuardian from "/src/assets/logo-the-guardian.png";
import LogoRadar from "/src/assets/logo-tech-radar.png";
import LogoGadgets from "/src/assets/logo-gadgets-now.png";
import { Link } from "react-router-dom";
import Directors from "../meet-directors";

const infoData = [
  {
    src: AvatarNikita,
    altText: "AvatarNikita",
    name: "Nikita Marks",
    position: "Founder & CEO",
    paragraph:
      "“It always amazes me how much talent there is in every corner of the globe.”",
  },
  {
    src: AvatarCristian,
    altText: "AvatarCristian",
    name: "Cristian Duncan",
    position: "Co-founder & COO",
    paragraph:
      "“Distributed teams required unique processes. You need to approach work in a new way.”",
  },
  {
    src: AvatarCruz,
    altText: "AvatarCruz",
    name: "Cruz Hamer",
    position: "Co-founder & CTO",
    paragraph:
      "“Technology is at the forefront of enabling distributed teams. That's where we come in.”",
  },
  {
    src: AvatarDrake,
    altText: "AvatarDrake",
    name: "Drake Heaton",
    position: "Business Development Lead",
    paragraph:
      "“Hiring similar people from similar backgrounds is a surefire way to stunt innovation.”",
  },
  {
    src: AvatarGriffin,
    altText: "AvatarGriffin",
    name: "Griffin Wise",
    position: "Lead Marketing",
    paragraph:
      "“Unique perspectives shape unique products, which is what you need to survive these days.”",
  },
  {
    src: AvatarAden,
    altText: "AvatarAden",
    name: "Aden Allan",
    position: "Head of Talent",
    paragraph:
      "“Empowered teams create truly amazing products. Set the north star and let them follow it.”",
  },
];

const logoData = [
  {
    src: LogoVerge,
    altText: LogoVerge,
  },
  {
    src: LogoJakarta,
    altText: LogoJakarta,
  },
  {
    src: LogoGuardian,
    altText: LogoGuardian,
  },
  {
    src: LogoRadar,
    altText: LogoRadar,
  },
  {
    src: LogoGadgets,
    altText: LogoGadgets,
  },
];

function About() {
  return (
    <div className="pt-[10rem]">
      <div className="md:h-[20.44rem] lg:flex-row lg:justify-center lg:bg-[bottom_right] lg:pb-[10rem] md:bg-[url('/src/assets/bg-pattern-about-1-mobile-nav-1.svg')] flex flex-col items-center h-[28.44rem] px-[1.5rem] bg-[url('/src/assets/bg-pattern-about-1-mobile-nav-1-mobile.png')] bg-no-repeat bg-[right_bottom]">
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
      <div className="lg:py-[9rem] md:bg-dual-background-tablet md:py-[6.5rem] flex flex-col items-center justify-center bg-[#004047] px-[1.5rem] py-[5.5rem] bg-dual-background bg-dual-pos bg-no-repeat">
        <h1 className="lg:text-[3rem] lg:leading-[3rem] text-[2rem] leading-[2rem] font-[700] w-full text-center text-[#FFF] mb-[3rem]">
          Meet the directors
        </h1>
        <Directors infoData={infoData} />
      </div>
      <div className="flex flex-col justify-center px-[1.5rem] py-[5.5rem] bg-[#012F34] bg-[url('/src/assets/bg-pattern-about-5.png')] bg-no-repeat bg-[top_left]">
        <h2 className="lg:text-[3rem] lg:leading-[3rem] lg:mr-[8rem] text-[2rem] leading-[2rem] font-[700] w-full text-center text-[#FFF] mb-[4rem]">
          Some of our clients
        </h2>
        <div className="md:flex md:flex-row md:justify-center md:items-center md:gap-[3rem]">
          {logoData.map((item, index) => (
            <div className="flex justify-center" key={index}>
              <img
                className="max-w-[10.5rem] w-full mb-[3.5rem]"
                src={item.src}
                alt={item.altText}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex-row md:justify-center md:gap-[5.5rem] flex flex-col items-center pt-[5rem] pb-[7rem] px-[1.5rem] bg-[#F67E7E] bg-[url('/src/assets/bg-pattern-home-6-about-5.svg')] bg-no-repeat bg-[left_bottom]">
        <h1 className="lg:text-[3rem] lg:leading-[3rem] lg:mr-[10rem] md:mb-0 text-[2rem] leading-[2rem] font-[700] text-[#012F34] text-center mb-[1.5rem]">
          Ready to get started?
        </h1>
        <Link to="/contact-us">
          <button className="text-[1.13rem] leading-[1.75rem] font-[600] rounded-3xl border-[0.13rem] border-[#012F34] text-[#012F34] px-[1.5rem] py-[0.5rem] hover:text-[#FFF] transition-all duration-200 hover:bg-[#012F34]">
            contact us
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
