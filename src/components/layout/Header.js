"use client";
import { useEffect, useState } from "react";
import { FaArrowUp, FaBars, FaTimes } from "react-icons/fa";
import "@frostui/tailwindcss";
import Link from "next/link";
import { NAV_MENUS } from "@/helpers/data-helper";
import { useLocale } from "next-intl";
import ChangeLocaleButton from "../ui/ChangeLocaleButton";

export default () => {
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* =========== Navbar Start =========== */}
      <header
        id="navbar"
        className={`${
          isScrolled ? "nav-sticky" : ""
        } light fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5`}
      >
        <div className="container">
          <nav className="flex items-center">
            {/* Navbar Brand Logo */}
            <span href="index.html">
              <img
                src="assets/images/logo-dark.png"
                className="h-8 logo-dark"
                alt="Logo Dark"
              />
              <img
                src="assets/images/logo-light.png"
                className="h-8 logo-light"
                alt="Logo Light"
              />
            </span>

            {/* Nevigation Menu */}
            <div className="hidden lg:block ms-auto">
              <ul className="navbar-nav flex gap-x-3 items-center justify-center">
                {NAV_MENUS.map((nav, i) => (
                  <li key={i} className="nav-item">
                    <Link className="nav-link" href={nav.href}>
                      {nav.label[locale]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Button */}
            <div className="hidden lg:flex items-center ms-3">
              <ChangeLocaleButton />
            </div>

            {/* Moblie Menu Toggle Button (Offcanvas Button) */}
            <div className="lg:hidden flex items-center ms-auto px-2.5">
              <button
                type="button"
                data-fc-target="mobileMenu"
                data-fc-type="offcanvas"
              >
                <FaBars />
              </button>
            </div>
          </nav>
        </div>
      </header>
      {/* =========== Navbar End =========== */}

      {/* =========== Mobile Menu Start (Offcanvas) =========== */}
      <div
        id="mobileMenu"
        className="fc-offcanvas-open:translate-x-0 translate-x-full fixed top-0 end-0 transition-all duration-200 transform h-full w-full max-w-md z-50 bg-white border-s hidden"
      >
        <div className="flex flex-col h-full divide-y-2 divide-gray-200">
          {/* Mobile Menu Topbar Logo (Header) */}
          <div className="p-6 flex items-center justify-between">
            <a href="index.html">
              <img
                src="assets/images/logo-dark.png"
                className="h-8"
                alt="Logo"
              />
            </a>
            <button data-fc-dismiss className="flex items-center px-2">
              <FaTimes />
            </button>
          </div>
          {/* Mobile Menu Link List */}
          <div className="p-6 overflow-scroll h-full">
            <ul
              className="navbar-nav flex flex-col gap-2"
              data-fc-type="accordion"
            >
              {NAV_MENUS.map((nav, i) => (
                <li key={i} className="nav-item">
                  <Link href={nav.href} className="nav-link">
                    {nav.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Menu Download Button (Footer) */}
          <div className="p-6 flex items-center justify-center">
            {<ChangeLocaleButton />}
          </div>
        </div>
      </div>
      {/* =========== Mobile Menu End =========== */}

      <button
        data-toggle="back-to-top"
        type="button"
        onClick={backToTop}
        className={`${
          !isScrolled ? "hidden" : ""
        } fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center`}
      >
        <FaArrowUp />
      </button>
    </>
  );
};
