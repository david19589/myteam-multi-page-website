import ImgPerson from "/src/assets/icon-person.svg";
import ImgCog from "/src/assets/icon-cog.svg";
import ImgChart from "/src/assets/icon-chart.svg";
import AvatarKady from "/src/assets/avatar-kady.jpg";
import AvatarAiysha from "/src/assets/avatar-aiysha.jpg";
import AvatarArthur from "/src/assets/avatar-arthur.jpg";
import SuccessStories from "../success-stories";
import { Link } from "react-router-dom";

const infoData = [
  {
    src: ImgPerson,
    altText: "ImgPerson",
    heading: "Experienced Individuals",
    paragraph:
      "Our network is made up of highly experienced professionals who are passionate about what they do.",
  },
  {
    src: ImgCog,
    altText: "ImgCog",
    heading: "Easy to Implement",
    paragraph:
      "Our processes have been refined over years of implementation meaning our teams always deliver.",
  },
  {
    src: ImgChart,
    altText: "ImgChart",
    heading: "Enhanced Productivity",
    paragraph:
      "Our customized platform with in-built analytics helps you manage your distributed teams.",
  },
];

const storiesData = [
  {
    src: AvatarKady,
    altText: "Kady Baker",
    paragraph:
      "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    author: "Kady Baker",
    position: "Product Manager at Bookmark",
  },
  {
    src: AvatarAiysha,
    altText: "Aiysha Reese",
    paragraph:
      "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    author: "Aiysha Reese",
    position: "Founder of Manage",
  },
  {
    src: AvatarArthur,
    altText: "Arthur Clarke",
    paragraph:
      "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    author: "Arthur Clarke",
    position: "Co-founder of MyPhysio",
  },
];

function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="lg:px-[10.5rem] lg:bg-[url('/src/assets/bg-pattern-home-1.svg')] bg-no-repeat bg-left">
        <div className="lg:flex-row lg:justify-center lg:bg-[bottom_right] lg:pb-[10rem] flex flex-col items-center h-[25.44rem] px-[1.5rem] bg-[url('/src/assets/bg-pattern-home-2.svg')] bg-no-repeat bg-bottom">
          <h1 className="lg:text-start lg:text-[6.3rem] lg:leading-[6.3rem] lg:max-w-[39rem] lg:mr-[2rem] lg:mb-0 md:text-[4rem] md:leading-[3.5rem] md:max-w-[21rem] text-[2.5rem] leading-[2.5rem] font-[700] max-w-[15rem] text-center text-[#FFF] mb-[1.2rem]">
            Find the best <span className="text-[#F67E7E]">talent</span>
          </h1>
          <div>
            <span className="hidden lg:flex h-[0.25rem] w-[3.13rem] bg-[#79C8C7] mb-[2rem]"></span>
            <p className="lg:text-start lg:max-w-[24rem] md:max-w-[31rem] text-[1rem] leading-[1.8rem] font-[600] max-w-[22rem] text-center text-[#FFF]">
              Finding the right people and building high performing teams can be
              hard. Most companies aren`t tapping into the abundance of global
              talent. We`re about to change that.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex-row lg:justify-center lg:py-[9rem] lg:bg-[bottom_right] flex flex-col bg-[#012F34] bg-[url('/src/assets/bg-pattern-home-3.svg')] bg-no-repeat bg-[right_top]">
        <div className="lg:p-0 lg:mb-0 md:pl-[6rem] pt-[4rem] mb-[3.5rem] pl-[1.5rem]">
          <span className="flex h-[0.25rem] w-[3.13rem] bg-[#F67E7E] mb-[2rem]"></span>
          <h1 className="lg:text-[3rem] lg:leading-[3rem] lg:mr-[8rem] md:max-w-[27rem] text-[2rem] leading-[2rem] font-[700] max-w-[13rem] text-start text-[#FFF]">
            Build & manage distributed teams like no one else.
          </h1>
        </div>
        <div className="lg:mb-0 md:flex md:flex-col md:items-center mb-[4rem]">
          {infoData.map((item, index) => (
            <div
              key={index}
              className="md:flex-row lg:mb-[2rem] flex flex-col items-center mb-[3rem] px-[1.5rem]"
            >
              <img
                className="md:mr-[1.5rem] mb-[1rem] w-max"
                src={item.src}
                alt={item.altText}
              />
              <div className="md:items-start flex flex-col items-center gap-[0.5rem]">
                <h1 className="md:text-start text-[1.13rem] leading-[1.75rem] font-[700] text-center text-[#F67E7E]">
                  {item.heading}
                </h1>
                <p className="lg:max-w-[25rem] md:text-start text-[0.94rem] leading-[1.563rem] font-[600] max-w-[21rem] text-center text-[#FFF] opacity-[80%]">
                  {item.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center bg-[#004047] pt-[8.8rem] bg-[url('/src/assets/bg-pattern-home-4-about-3.svg')] bg-no-repeat bg-[left_top]">
        <h1 className="lg:max-w-[63rem] lg:text-[3rem] lg:leading-[3rem] md:max-w-[31rem] text-[2rem] leading-[2rem] font-[700] max-w-[20rem] px-[1.5rem] text-center text-[#FFF] mb-[5.25rem]">
          Delivering real results for top companies. Some of our
          <span className="text-[#79C8C7]"> success stories.</span>
        </h1>
        <div className="w-full  bg-[url('/src/assets/bg-pattern-home-5.svg')] bg-no-repeat bg-[bottom_right]">
          <SuccessStories storiesData={storiesData} />
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

export default Home;
