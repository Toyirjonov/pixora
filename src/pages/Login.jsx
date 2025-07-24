import { useSelector, useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const { userData, registeredUsers } = useSelector((store) => store.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email === userData.email && password === userData.password) {
      toast.success("Login is success");
      dispatch(login());
      return;
    }

    const foundUser = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      toast.success("Login is success");
      dispatch(
        login({
          email: foundUser.email,
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          username: foundUser.username,
          id: foundUser.id,
        })
      );
    } else {
      toast.error("Email yoki parol noto'g'ri!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Login</h1>
        <p className="text-sm text-gray-600">Welcome back.</p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm text-gray-800 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="password" className="text-sm text-gray-800">
              Password
            </label>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot your password?
            </a>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Enter your password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-md text-white font-semibold bg-gradient-to-b from-gray-800 to-black hover:from-black hover:to-gray-900 transition-colors"
        >
          Login
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/singup"
            className="text-gray-800 underline hover:text-gray-600"
          >
            Sign up
          </Link>
        </p>
      </div>

      <div className="mt-8 text-xs text-gray-400 text-center">
        <p>Email: admin@gmail.com</p>
        <p>Password: aqaqaq</p>
      </div>
    </div>
  );
}

export default Login;
