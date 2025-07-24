import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-black"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                >
                  <path d="M10 9V0h12v9H10zm12 5h10v18H20V14zM0 14h10v18H0V14z" />
                </svg>
                <span className="ml-2 text-lg font-bold text-black">
                  Unsplash
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Beautiful free images and photos that you can download and use
                for any project.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Community
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Topics
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Collections
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Awards
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-4">
                Product
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Developers
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Unsplash+
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Apps
                  </Link>
                </li>
                <li>
                  <Link className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    Stats
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex space-x-6 mb-4 md:mb-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="opacity-50"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                    aria-hidden="false"
                  >
                    <desc lang="en-US">X (formerly Twitter) icon</desc>
                    <path d="M13.69 10.622 20.25 3h-1.555l-5.693 6.618L8.454 3H3.21l6.876 10.007L3.21 21h1.554l6.012-6.99L15.578 21h5.245L13.69 10.622Zm-2.126 2.474-.697-.996-5.543-7.93H7.71l4.474 6.399.697.997 5.815 8.317h-2.387l-4.745-6.787Z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="opacity-50"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                    aria-hidden="false"
                  >
                    <desc lang="en-US">Facebook icon</desc>
                    <path d="M22 12c0-5.563-4.5-10-10-10S2 6.5 2 12c0 5 3.688 9.125 8.438 9.875v-6.938H7.874V12h2.563V9.812c0-2.5 1.5-3.874 3.75-3.874 1.124 0 2.25.187 2.25.187v2.438h-1.25c-1.25 0-1.626.75-1.626 1.562V12h2.75l-.437 2.875h-2.313v7C18.313 21.187 22 17 22 12Z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg
                    className="opacity-50"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    version="1.1"
                    aria-hidden="false"
                  >
                    <desc lang="en-US">Instagram icon</desc>
                    <path d="M21.933 7.877c-.048-1.064-.219-1.79-.465-2.429a4.874 4.874 0 0 0-1.154-1.77 4.959 4.959 0 0 0-1.77-1.154c-.635-.246-1.361-.417-2.429-.464C15.052 2.012 14.71 2 11.996 2c-2.714 0-3.056.012-4.123.06-1.063.047-1.79.218-2.425.464-.658.254-1.214.599-1.77 1.155a4.959 4.959 0 0 0-1.154 1.77c-.246.634-.417 1.36-.464 2.428C2.012 8.94 2 9.282 2 11.996c0 2.714.012 3.056.06 4.123.047 1.064.218 1.79.464 2.429.254.658.599 1.214 1.155 1.77a4.958 4.958 0 0 0 1.77 1.154c.634.246 1.36.417 2.428.464 1.067.048 1.405.06 4.123.06s3.056-.012 4.123-.06c1.063-.047 1.79-.218 2.429-.464a4.872 4.872 0 0 0 1.77-1.155 4.956 4.956 0 0 0 1.154-1.77c.246-.634.417-1.36.465-2.428.047-1.067.059-1.405.059-4.123s-.016-3.056-.067-4.119Zm-1.798 8.159c-.044.976-.206 1.504-.345 1.857a3.103 3.103 0 0 1-.746 1.15c-.35.35-.683.568-1.151.747-.353.135-.881.301-1.857.345-1.056.047-1.37.06-4.04.06s-2.984-.012-4.04-.06c-.976-.044-1.504-.207-1.857-.345a3.103 3.103 0 0 1-1.15-.746 3.054 3.054 0 0 1-.747-1.151c-.135-.353-.301-.881-.345-1.857-.047-1.056-.06-1.37-.06-4.04s.013-2.984.06-4.04c.044-.976.206-1.504.345-1.857.183-.468.397-.801.746-1.15.35-.35.683-.568 1.151-.747.353-.135.881-.301 1.857-.345 1.056-.047 1.37-.06 4.04-.06s2.984.013 4.04.06c.976.044 1.504.206 1.857.345.468.183.801.397 1.15.746.35.35.568.683.747 1.151.135.353.301.881.345 1.857.047 1.056.06 1.37.06 4.04s-.012 2.988-.06 4.04Zm-8.139-9.17a5.136 5.136 0 1 0 .002 10.27 5.136 5.136 0 0 0-.002-10.27Zm0 8.463a3.333 3.333 0 1 1 0-6.665 3.333 3.333 0 0 1 0 6.665Zm6.536-8.67a1.197 1.197 0 1 1-2.397 0 1.197 1.197 0 1 1 2.397 0Z"></path>
                  </svg>
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex space-x-6 text-sm">
                  <Link className="text-gray-600 hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </Link>
                  <Link className="text-gray-600 hover:text-gray-900 transition-colors">
                    Terms
                  </Link>
                  <Link className="text-gray-600 hover:text-gray-900 transition-colors">
                    Security
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
