import { Fragment } from "react";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { data: users } = useCollection("users");

  if (!users) {
    return <h2 className="text-3xl">Loading...</h2>;
  }
  return (
    <section className=" w-full flex items-center justify-center h-full">
      <h1 className="text-7xl  text-black">Welcome to Home</h1>
      <br />
      {users &&
        users.map((user) => {
          return (
            <Fragment key={user.id}>
              {user.online && (
                <div className="avatar avatar-online">
                  <div className="w-24 rounded-full">
                    <img src={user.photoURL} />
                  </div>
                </div>
              )}
              {!user.online && (
                <div className="avatar avatar-offline">
                  <div className="w-24 rounded-full"></div>
                </div>
              )}
            </Fragment>
          );
        })}
    </section>
  );
}

export default Home;
