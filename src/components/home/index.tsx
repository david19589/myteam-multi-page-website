function Home() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-center h-[25.44rem] px-[1.5rem] bg-[url('/src/assets/bg-pattern-home-2.svg')] bg-no-repeat bg-bottom">
        <h1 className="text-[2.5rem] leading-[2.5rem] font-[700] max-w-[15rem] text-center text-[#FFF] mb-[1.2rem]">
          Find the best <span className="text-[#F67E7E]">talent</span>
        </h1>
        <p className="text-[1rem] leading-[1.8rem] font-[600] max-w-[22rem] text-center text-[#FFF]">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
      <div className="flex flex-row bg-[#012F34] pl-[1.5rem] bg-[url('/src/assets/bg-pattern-home-3.svg')] bg-no-repeat bg-right ">
        <div className="pt-[4rem] ">
          <span className="flex h-[0.25rem] w-[3.13rem] bg-[#F67E7E] mb-[2rem]"></span>
          <h1 className="text-[2rem] leading-[2rem] font-[700] max-w-[13rem] text-start text-[#FFF]">
            Build & manage distributed teams like no one else.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
