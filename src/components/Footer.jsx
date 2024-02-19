import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const redirectTo = (url) => {
    window.open(url, "_blank");
  };

  const handleWhatsapp = () => {
    const phoneNumber = '9373668855';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    redirectTo(whatsappLink);
  };

  return (
    <div className="bg-bgShade md:px-10 px-4 py-6 shadow-xl rounded-lg">
      <div className='flex flex-col md:flex-row md:items-center justify-between items-center'>
      <div className='cursor-pointer logo'>
            <img src={logo} alt="Logo" style={{ maxWidth: '200px', maxHeight: '50px' }} />
          </div>
        <div className='flex items-center gap-4 ml-4'>
          <FaWhatsapp
            className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-3xl'
            onClick={handleWhatsapp}
          />
          <FaInstagram
            className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-3xl'
            onClick={() => redirectTo('https://www.instagram.com/_praveenchavan_')}
          />
          <FaGithub
            className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-3xl'
            onClick={() => redirectTo('https://github.com/PraveenChavan-11')}
          />
          <FaLinkedin
            className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-3xl'
            onClick={() => redirectTo('https://www.linkedin.com/in/praveen-chavan11')}
          />
        </div>
      </div>
      <div className="text-center text-white mt-6">&copy; 2024 Praveen Chavan. <span>All Rights Reserved.</span></div>
    </div>
  );
};

export default Footer;
