import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    console.log(router.asPath);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-20">
        <div className="flex justify-between items-center md:flex-row">
          <div className="flex flex-col">
            <Link href="/">
              <h1 className="font-semibold text-xl">Ebro Lyon</h1>
              <p className="text-base font-light text-gray-500">
                jack of all trades
              </p>
              <p className="text-lg font-bold text-gray-500">master of none</p>
            </Link>
          </div>
          !-- real navbar part --
          <div className="space-x-8 hidden md:block">
            <Link
              href="/about"
              className={`text-base ${
                router.asPath === "/about"
                  ? "text-gray-800 font-bold"
                  : "text-gray-600 font-normal"
              }`}
            >
              About{" "}
              {router.asPath === "/about" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </Link>

            <Link
              href="/skills"
              className={`text-base ${
                router.asPath === "/skills"
                  ? "text-gray-800 font-bold"
                  : "text-gray-600 font-normal"
              }`}
            >
              Skills{" "}
              {router.asPath === "/skills" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </Link>

            <Link
              href="/projects"
              className={`text-base ${
                router.asPath === "/projects"
                  ? "text-gray-800 font-bold"
                  : "text-gray-600 font-normal"
              }`}
            >
              Projects{" "}
              {router.asPath === "/projects" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </Link>

            <Link
              href="/contact"
              className={`text-base ${
                router.asPath === "/contact"
                  ? "text-gray-800 font-bold"
                  : "text-gray-600 font-normal"
              }`}
            >
              Contact{" "}
              {router.asPath === "/contact" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-down inline-block h-3 w-3"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                  />
                </svg>
              )}
            </Link>
          </div>



        </div>
      </div>
    );
}

export default Navbar;