const Footer = () => {
  return (
    <footer className='bg-[url(/images/heroBg.png)] bg-no-repeat bg-cover '>
      <div className='flex items-center max-w-[1280px] mx-auto pt-[50px] gap-[150px]'>

        <div className="left_box">
          <img className="w-[500px]" src="/images/chatImage.png" alt="" />
        </div>

        <div className="right_box">

          <div className="flex items-start gap-4">
            <img className="w-[35px] h-[37px]" src="/images/chatIcon.png" alt="feature icon" />
            <h2 className="w-[60%] font-inter font-semibold text-[32px] leading-none text-white">Chat Support - Track Price And Never Miss a Price Drop!</h2>
          </div>

          <p className="mt-[20px] w-[85%] text-white">Get Real-time Mill rates, book deals securely, and simplify your operations.</p>

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

      </div>
    </footer>
  )
}

export default Footer