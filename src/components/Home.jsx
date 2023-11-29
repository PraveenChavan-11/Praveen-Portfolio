import banner from "../assets/banner.png";

const Home = () => {
  return (
    <div className="bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-20 gap-5">
        <div className="md:w-1/2 w-full">
          <img src={banner} alt="Banner" className="w-full rounded-lg" />
        </div>
        <div className="md:w-1/2 w-full mt-5 text-center md:text-left">
          <p className="text-xl text-headingcolor font-semibold mb-4">Hey, <span>I am Praveen</span></p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px] mb-8">
            Front-End <br></br><span>Web Developer</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
