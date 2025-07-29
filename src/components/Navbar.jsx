import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "../app/features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

function Navbar() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);

      dispatch(logOut());
    }
  };
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                version="1.1"
                aria-labelledby="unsplash-home"
                aria-hidden="false"
              >
                <desc lang="en-US">Unsplash logo</desc>
                <title id="unsplash-home">Unsplash Home</title>
                <path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path>
              </svg>
              <span className="ml-2 text-xl font-bold text-black">
                Unsplash
              </span>
            </Link>
          </div>
          <div className="hidden md:flex flex-1 max-w-2xl mx-6">
            <form
              method="get"
              action="/s"
              role="search"
              aria-label="Find visuals sitewide"
              className="flex items-center gap-2 bg-gray-50 border border-gray-300 rounded-full px-4 py-2 shadow-sm w-full"
            >
              <button
                type="submit"
                title="Search"
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>

              <div className="relative flex-1">
                <input
                  type="search"
                  name="searchKeyword"
                  placeholder="Search photos and illustrations"
                  autoComplete="off"
                  autoCapitalize="none"
                  spellCheck="false"
                  className="w-full outline-none bg-transparent placeholder-gray-500 text-sm"
                />
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {user ? (
              <>
                <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                </button>

                <Link
                  to="/"
                  className="flex items-center space-x-1 sm:space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 sm:px-3 py-1 rounded hover:bg-gray-100"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span className="hidden sm:inline">Home</span>
                </Link>

                <Link
                  to="/profile"
                  className="flex items-center space-x-1 sm:space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 sm:px-3 py-1 rounded hover:bg-gray-100"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-2 sm:px-3 py-1 rounded hover:bg-gray-100"
                >
                  <span className="hidden sm:inline">Chiqish</span>
                  <svg
                    className="w-4 h-4 sm:hidden"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-3 py-1 rounded hover:bg-gray-100"
              >
                Kirish
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
