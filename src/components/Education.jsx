import 'swiper/css';
import 'swiper/css/pagination';
import ReviewCard from './Educationcard';

const Education = () => {
  return (
    <div className="lg:px-10 px-4 py-10 bg-bgShade " id='education'>
      <div className="mb-10">
        <h2 className="md:text-5xl text-4xl text-center text-headingcolor font-bold">
          My <span>Education</span>
        </h2>
      </div>
      <div>
           <ReviewCard/>
      </div>
    </div>
  );
};

export default Education;
