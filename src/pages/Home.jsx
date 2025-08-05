import { useCollection } from "../hooks/useCollection";
import UserList from "../components/UserList";

function Home() {
  const { data: users } = useCollection("users");

  if (!users) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-800">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full flex h-screen overflow-hidden bg-white">
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <h1 className="text-6xl md:text-7xl font-black text-gray-300 mb-8 text-center">
          Welcome to HOME
        </h1>
      </div>
      <UserList />
    </section>
  );
}

export default Home;
