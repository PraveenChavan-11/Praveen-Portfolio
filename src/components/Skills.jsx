import htmlImage from '../assets/html.png';
import cssImage from '../assets/css.png';
import jsImage from '../assets/js.png';
import phpImage from '../assets/php.png';
import reactImage from '../assets/react.png';
import processWireImage from '../assets/processwire.png';

const skills = [
  {
    id: 1,
    name: 'HTML',
    image: htmlImage,
  },
  {
    id: 2,
    name: 'CSS',
    image: cssImage,
  },
  {
    id: 3,
    name: 'JavaScript',
    image: jsImage,
  },
  {
    id: 4,
    name: 'PHP',
    image: phpImage,
  },
  {
    id: 5,
    name: 'React',
    image: reactImage,
  },
  {
    id: 6,
    name: 'ReactNative',
    image: reactImage,
  },
  {
    id: 7,
    name: 'ProcessWire [CMS]',
    image: processWireImage,
  },
  // Add more skills as needed
];

const Skills = () => {
    return (
      <div className="lg:mx-12 mx-4 py-5 bg-bgShade" id="skills">
        <div className="mb-10">
          <h2 className="md:text-5xl text-4xl text-center text-headingcolor font-bold">
            My <span>Skills</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="p-2 shadow-xl rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300 flex flex-col items-center"
              style={{ maxWidth: '200px' }}
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
  
