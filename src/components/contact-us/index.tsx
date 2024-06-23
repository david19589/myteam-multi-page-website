import ImgPerson from "/src/assets/icon-person.svg";
import ImgCog from "/src/assets/icon-cog.svg";
import ImgChart from "/src/assets/icon-chart.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodType } from "zod";
import clsx from "clsx";

type FormData = {
  name: string;
  email: string;
  companyName: string;
  title: string;
  message: string;
};

const schema: ZodType<FormData> = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(30, { message: "Name must be at most 30 characters long." })
    .regex(/^[A-Za-z]+$/, { message: "Name must contain only letters." }),
  email: z
    .string()
    .email({ message: "Email address is invalid." })
    .min(3, { message: "Email must be at least 3 characters long." })
    .max(40, { message: "Email must be at most 40 characters long." }),
  companyName: z
    .string()
    .min(1, { message: "Company Name is required." })
    .max(30, { message: "Company Name must be at most 30 characters long." }),
  title: z
    .string()
    .min(1, { message: "Title is required." })
    .max(30, { message: "Title must be at most 30 characters long." }),
  message: z
    .string()
    .min(0)
    .max(150, { message: "Message must be at most 150 characters long." }),
});

function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    reset();
    return data;
  };

  return (
    <div className="lg:flex lg:flex-row lg:w-full lg:items-center lg:justify-between md:bg-[url('/src/assets/bg-pattern-contact-2(2).svg')] pt-[10rem] pb-[5.5rem] bg-[url('/src/assets/bg-pattern-contact-2.svg')] bg-no-repeat bg-[right_bottom]">
      <div className="lg:items-start lg:w-full lg:pl-[10.3rem] md:bg-[url('/src/assets/bg-pattern-contact-1.png')] md:bg-no-repeat md:bg-[left_top] flex flex-col items-center px-[1.5rem]">
        <h1 className="lg:leading-[6.3rem] lg:mb-0 md:text-[4rem] md:leading-[3.5rem] text-[2.5rem] leading-[2.5rem] font-[700] text-[#FFF] mb-[1rem]">
          Contact
        </h1>
        <div>
          <h2 className="text-[2rem] leading-[3rem] font-[700] text-center text-[#F67E7E]">
            Ask us about
          </h2>
        </div>
        <div className="mb-[3.5rem] mt-[2.5rem]">
          <div className="md:mb-[0.5rem] flex items-center gap-[1.5rem] mb-[1rem]">
            <img className="w-max" src={ImgPerson} alt="ImgPerson" />
            <h3 className="md:max-w-full text-[1rem] leading-[1.3rem] font-[700] max-w-[12rem] text-[#FFF]">
              The quality of our talent network
            </h3>
          </div>
          <div className="md:mb-[0.5rem] flex items-center gap-[1.5rem] mb-[1rem]">
            <img className="w-max" src={ImgCog} alt="ImgCog" />
            <h3 className="md:max-w-full text-[1rem] leading-[1.3rem] font-[700] max-w-[12rem] text-[#FFF]">
              Usage & implementation of our software
            </h3>
          </div>
          <div className="md:mb-[0.5rem] flex items-center gap-[1.5rem]">
            <img className="w-max" src={ImgChart} alt="ImgChart" />
            <h3 className="md:max-w-full text-[1rem] leading-[1.3rem] font-[700] max-w-[12rem] text-[#FFF]">
              How we help drive innovation
            </h3>
          </div>
        </div>
      </div>
      <div className="lg:w-full lg:pr-[10.3rem] flex justify-center px-[1.5rem]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:max-w-[35rem] relative flex flex-col max-w-[20.3rem] w-full gap-[1.5rem]"
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className={clsx(
              errors.name?.message
                ? "border-[#F45f]"
                : "hover:border-[#79C8C7]",
              "bg-transparent outline-none border-b text-[#FFF] pb-[0.5rem] pl-[0.5rem]"
            )}
          />
          <span className="text-[0.7rem] leading-[0.8rem] font-[700] italic text-[#F67E7E] pl-[0.5rem] absolute top-[2.5rem]">
            {errors.name?.message}
          </span>
          <input
            {...register("email")}
            type="text"
            placeholder="Email Address"
            className={clsx(
              errors.email?.message
                ? "border-[#F45f]"
                : "hover:border-[#79C8C7]",
              "bg-transparent outline-none border-b text-[#FFF] pb-[0.5rem] pl-[0.5rem]"
            )}
          />
          <span className="text-[0.7rem] leading-[0.8rem] font-[700] italic text-[#F67E7E] pl-[0.5rem] absolute top-[6rem]">
            {errors.email?.message}
          </span>
          <input
            {...register("companyName")}
            type="text"
            placeholder="Company Name"
            className={clsx(
              errors.companyName?.message
                ? "border-[#F45f]"
                : "hover:border-[#79C8C7]",
              "bg-transparent outline-none border-b text-[#FFF] pb-[0.5rem] pl-[0.5rem]"
            )}
          />
          <span className="text-[0.7rem] leading-[0.8rem] font-[700] italic text-[#F67E7E] pl-[0.5rem] absolute top-[9.6rem]">
            {errors.companyName?.message}
          </span>
          <input
            {...register("title")}
            type="text"
            placeholder="Title"
            className={clsx(
              errors.title?.message
                ? "border-[#F45f]"
                : "hover:border-[#79C8C7]",
              "bg-transparent outline-none border-b text-[#FFF] pb-[0.5rem] pl-[0.5rem]"
            )}
          />
          <span className="text-[0.7rem] leading-[0.8rem] font-[700] italic text-[#F67E7E] pl-[0.5rem] absolute top-[13.3rem]">
            {errors.title?.message}
          </span>
          <input
            {...register("message")}
            type="text"
            placeholder="Message"
            className={clsx(
              errors.message?.message
                ? "border-[#F45f]"
                : "hover:border-[#79C8C7]",
              "relative font bg-transparent outline-none border-b text-[#FFF] overflow-hidden pb-[2rem] pl-[0.5rem]"
            )}
          />
          <span className="text-[0.7rem] leading-[0.8rem] font-[700] italic text-[#F67E7E] pl-[0.5rem] absolute top-[16.8rem]">
            {errors.message?.message}
          </span>
          <input
            type="submit"
            className="text-[1rem] font-sans leading-[1.8rem] font-[600] mt-[1.5rem] cursor-pointer px-[2rem] py-[0.7rem] w-fit rounded-3xl text-[#004047] bg-[#FFF] hover:text-[#FFF] hover:bg-[#004047] transition-all duration-200"
          />
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
