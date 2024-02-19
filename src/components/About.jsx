import proPic from "../assets/about.png";

const About = () => {
  return (
    <div className="lg:mx-12 mx-4 py-10 bg-bgShade" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2"> 
          <img src={proPic} alt="" className="w-full sm:w-11/12" />
        </div>
        <div className="sm:w-1/2">
          <h2 className="md:text-5xl text-4xl font-bold">About <span>Me</span></h2>
          <p className="mt-8 md:pr-8 mb-8">
          👋 Hi, I'm Praveen Chavan, a dedicated Full Stack Developer with a Master's degree in Computer Application, specializing in Full Stack Development.
<br></br>
<br></br>
🚀 Eager to apply my specialized knowledge gained through my MCA program, I'm on the lookout for opportunities to contribute my expertise and drive innovation in the world of Full Stack Development.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
