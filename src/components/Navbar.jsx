import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";
import logo from "../assets/logo.png";
import resume from "../assets/Praveen Chavan - Resume.pdf";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 right-0 bg-bgShade ${isSticky ? "shadow-md" : ""}`}>
      <nav className="py-4 md:px-12 px-4">
        <div className="flex items-center justify-between">
          <div className='cursor-pointer logo'>
            <img src={logo} alt="Logo" style={{ maxWidth: '200px', maxHeight: '50px' }} />
          </div>

          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body">
            <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="about"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              About
            </Link>
            <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="skills"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="education"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              Education
            </Link>
            <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="project"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              Project
            </Link>
            <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="experience"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              Experience
            </Link>
          </div>

          {/* Download icon for larger screens */}
          {!isMenuOpen && (
            <div className="hidden lg:block download">
              <a href={resume} download="Praveen Chavan-resume.pdf">
                <FaDownload className="cursor-pointer text-3xl md:text-2xl sm:text-xl hover:-translate-y-3 transition-all duration-300" />
              </a>
            </div>
          )}

          {/* Button for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-bgshade p-4 rounded-lg">
          <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="about"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              About
            </Link>
            <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="skills"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="education"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              Education
            </Link>
            <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="project"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              Project
            </Link>
            <Link
              onClick={closeMenu}
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="experience"
              className="block hover:text-blue-400 py-2 px-4 cursor-pointer"
            >
              Experience
            </Link>
            {/* Resume link */}
            <a href={resume} download="Praveen Chavan-resume.pdf" className="download lg:hidden block hover:text-blue-400 py-2 px-4 cursor-pointer">
              <span>Resume</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
