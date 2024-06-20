interface Story {
  src: string;
  altText: string;
  paragraph: string;
  author: string;
  position: string;
}

function SuccessStories(props: { storiesData: Story[] }) {
  return (
    <div className="mb-[10.25rem] px-[1.5rem]">
      {props.storiesData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center mb-[3rem] bg-[url('/src/assets/icon-quotes.svg')] bg-no-repeat bg-top"
        >
          <div className="flex items-end h-[9rem]">
            <p className="md:max-w-[35rem] text-[0.94rem] leading-[1.56rem] font-[600] text-[#FFF] max-w-[21rem] text-center mb-[1rem]">
              {item.paragraph}
            </p>
          </div>
          <h2 className="text-[1.13rem] leading-[1.75rem] font-[700] text-[#79C8C7]">
            {item.author}
          </h2>
          <h3 className="text-[0.82rem] leading-[1.13rem] font-[500] italic text-[#FFF] mb-[1rem]">
            {item.position}
          </h3>
          <img
            className="w-[4rem] border-[0.13rem] border-[#C4FFFE] rounded-full"
            src={item.src}
            alt={item.altText}
          />
        </div>
      ))}
    </div>
  );
}

export default SuccessStories;
