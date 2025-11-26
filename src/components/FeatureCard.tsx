
interface FeatureData {
  featuredImage: string;
  icon: string;
  heading: string;
  description: string;
}


const FeatureCard = ({ data, index }: { data: FeatureData; index?: number }) => {

    const isEven = (num?: number) => typeof num === "number" && num % 2 === 0;

  return (
    <div className="feature_card flex w-full max-w-[1020px] gap-[100px] mt-[60px] mb-[60px]">
      {isEven(index) ? <div className="flex gap-[90px]">
        <div className="left_box ">
          <img className=" w-[600px]" src={data.featuredImage} />
        </div>

        <div className="right_box">
          <div className="counter
          flex
          items-center
          w-[150%]
          h-[22px]
        bg-[#ADB7D8] 
          pl-10 
          relative
        text-white "

            style={{ clipPath: "polygon(3% -100%, 100% 0%, 100% 100%, 0% 140%)" }}
          >
            <span className="
            flex
            justify-center
            items-center
          bg-[#ADB7D8]
            border-2
          border-white
            aspect-square
            w-[40px]
            rounded-full
            text-xl
            font-medium">
              {typeof index === "number" ? index + 1 : ""}
            </span>
          </div>

          <div className="flex items-start gap-4 mt-10">
            <img className="w-[35px] h-[37px]" src={data.icon} alt="feature icon" />
            <h2 className="w-[60%] font-inter font-semibold text-[32px] leading-none">{data.heading}</h2>
          </div>
          <p className="mt-[20px] w-[85%]">{data.description}</p>

          <div className="cta-download mt-[30px]">
            <div className="flex gap-[20px]">
              <a href="#">
                <img
                  src="/images/google.png"
                  alt="download on google playstore"
                  className="w-[150px]"
                />
              </a>

              <a href="#">
                <img
                  src="/images/apple.png"
                  alt="download on apple app store"
                  className="w-[150px]"
                />
              </a>
            </div>
            <div></div>
          </div>

        </div>
      </div> : <div className="flex gap-[90px]">
        <div className="left_box">
          <div className="counter
          flex
          items-center
          justify-end
          w-full 
          h-[22px]
        bg-[#ADB7D8] 
          ml-[-570px]
          pr-10 
          relative
        text-white "

            style={{ clipPath: "polygon(0 0, 100% -50%, 97% 140%, 0% 100%)" }}
          >
            <span className="
            flex
            justify-center
            items-center
          bg-[#ADB7D8]
            border-2
          border-white
            aspect-square
            w-[40px]
            rounded-full
            text-xl
            font-medium">
              {typeof index === "number" ? index + 1 : ""}
            </span>

          </div>

          <div className="flex items-start gap-4 mt-10">
            <img className="w-[35px] h-[37px]" src={data.icon} alt="feature icon" />
            <h2 className="w-[60%] font-inter font-semibold text-[32px] leading-none">{data.heading}</h2>
          </div>

          <p className="mt-[20px] ">{data.description}</p>

          <div className="cta-download mt-[30px]">
            <div className="flex gap-[20px]">
              <a href="#">
                <img
                  src="/images/google.png"
                  alt="download on google playstore"
                  className="w-[150px]"
                />
              </a>

              <a href="#">
                <img
                  src="/images/apple.png"
                  alt="download on apple app store"
                  className="w-[150px]"
                />
              </a>
            </div>
            <div></div>
          </div>

        </div>

        <div className="right_box">
          <img className="w-[600px]" src={data.featuredImage} />
        </div>
      </div>}


    </div>
  );
};

export default FeatureCard;
