// "use client";
// import { useState } from "react";
// import Logo from "./Logo";
// import Navbar from "./Navbar";

// function Header({ className }) {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header
//       className={`${className} z-50 relative transition-all duration-300`}
//       id="header-el"
//     >
//       <div className="container-div flex items-center justify-between">
//         <div className="flex justify-between items-center  px-8 py-5">
//           <div className="flex items-center justify-between w-full">
//             <Logo />
//             <button
//               className="lg:hidden p-2 rounded focus:outline-none"
//               onClick={toggleMenu}
//               aria-label="Toggle Navigation"
//             >
//               <svg
//                 className="w-6 h-6 stroke-white"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//         <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
//       </div>
//     </header>
//   );
// }

// export default Header;

"use client";
import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  //display: grid;
  //grid-auto-flow: column;
  //justify-content: space-between;
  return (
    <header
      className={`${className} z-50 relative transition-all duration-300 `}
      id="header-el"
    >
      <div className="lg:grid lg:grid-flow-col lg:justify-between lg:container-div">
        <div className="container-div flex items-center  px-8 py-5 justify-between">
          <Logo pClassName="text-white" />
          <button
            className="lg:hidden p-2 rounded focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-6 h-6 stroke-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </header>
  );
}

export default Header;
