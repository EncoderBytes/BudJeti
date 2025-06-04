import  { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-6 left-0 z-50 bg-transparent ">
      <div className="w-8/12  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img src="/logo.png" alt="Company Logo" className="h-[114px] w-[114px]" />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-800 hover:text-[#1929D6] font-medium">Home</a>
            <a href="#wallet" className="text-gray-800 hover:text-[#1929D6] font-medium">Business Wallet</a>
            <a href="#wallet" className="text-gray-800 hover:text-[#1929D6] font-medium">Support</a>
            <button className="w-12 h-7 bg-[#1929D6] text-white  cursor:pointer cursor-pointer ">Login</button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-800">
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 pt-4 pb-6 space-y-4">
          <a href="#home" className="block text-gray-800  hover:text-[#1929D6] ">Home</a>
          <a href="#wallet" className="block text-gray-800  hover:text-[#1929D6] ">Business Wallet</a>
          <a href="#wallet" className="block text-gray-800  hover:text-[#1929D6] ">Support</a>
          <button className="w-full bg-[#1929D6] text-white py-2 rounded-lg  hover:text-[#1929D6]  transition">Login</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
