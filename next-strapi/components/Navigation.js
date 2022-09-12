import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";

const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(!navOpen);
    console.log(navOpen);
  };

  return (
    <>
      <div className="h-14 bg-blue-500 px-8">
        <nav className="flex justify-between items-center ">
          <div>Logo</div>
          <div className="w-12 md:w-3/4 lg:w-2/4">
            <ul
              className={`${
                navOpen ? "-translate-x-0 mr-2" : "translate-x-full"
              } overflow-hidden absolute top-10 right-0 pt-12 h-3/5 w-1/2 mt-6 rounded bg-blue-500 transition-all flex flex-col  md:relative md:flex md:flex-row  md:justify-between md:translate-x-full md:top-0`}
            >
              <li className="cursor-pointer flex md:text-base pl-2  py-2 mx-2 my-1 hover:rounded hover:bg-blue-400 text-white hover:text-black transition-all ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <Link href="/" className="px-2 text-lg ">
                  Home
                </Link>
              </li>

              <li className="cursor-pointer flex md:text-base pl-2 py-2 mx-2 my-1 hover:rounded hover:bg-blue-400 text-white hover:text-black transition-all ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>

                <Link href="/Shop" className="px-2 text-lg ">
                  Shop
                </Link>
              </li>
              <li className="cursor-pointer flex md:text-base pl-2 py-2 mx-2 my-1 hover:rounded hover:bg-blue-400 text-white hover:text-black transition-all ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <Link href="/Contact" className="px-2 text-lg ">
                  Contact
                </Link>
              </li>
              <li className="cursor-pointer flex md:text-base pl-2 py-2 mx-2 my-1 hover:rounded hover:bg-blue-400 text-white hover:text-black transition-all ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                <Link href="/Order" className="px-2 text-lg ">
                  Order
                </Link>
              </li>
            </ul>
            <div
              className="md:hidden float-right"
              onClick={() => {
                openNav();
              }}
            >
              <Hamburger />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
