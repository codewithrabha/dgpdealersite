const HeroSection = () => {
  return (
    <section className="bg-[url(/images/heroBg.png)] bg-center bg-no-repeat bg-cover mt-[-100px] rounded-b-[40px]">
      <div className="max-w-[1280px] mx-auto flex justify-between pt-[150px] pb-[20px]">
        <div className="flex flex-col left-container w-[50%] gap-5">
          <h1 className="heading text-5xl text-white font-bold w-[550px]">
            India’s Most Trusted Market Place For Steel Industry.
          </h1>

          <p className="description mt-[10px] w-[60%] text-xl text-white">
            Get Real-time Mill rates, book deals securely, and simplify your
            operations.
          </p>

          <div className="download-stats flex items-center gap-5 mt-[15px]">
            <div className="flex">
              <img src="/images/user-avatar.png" className="avatar w-[30px]" />
              <img
                src="/images/user-avatar-one.png"
                className="avatar w-[30px] ml-[-10px]"
              />
              <img
                src="/images/user-avatar-two.png"
                className="avatar w-[30px] ml-[-10px]"
              />
              <img
                src="/images/user-avatar-three.png"
                className="avatar w-[30px] ml-[-10px]"
              />
              <img
                src="/images/user-avatar-four.png"
                className="avatar w-[30px] ml-[-10px]"
              />
            </div>
            <p className="text-white">500+ People Downloaded</p>
          </div>

          <div className="cta-download">
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

        <div className="right-container flex justify-end w-[50%] ">
          <img
            className="w-[500px] scale-[1.1] mt-[-30px]"
            src="/images/phone-mockup.png"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
