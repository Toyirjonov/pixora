import { useCollection } from "../hooks/useCollection";
import { formatLastSeen } from "../utils/index";

const UserList = () => {
  const { data: users } = useCollection("users");

  return (
    <div className="flex flex-col h-screen w-80 border-l border-gray-300 bg-gray-100">
      <div className="bg-gray-200 border-b border-gray-300 py-4 px-4 flex-shrink-0">
        <h2 className="text-lg font-semibold text-gray-800 text-center">
          User List
        </h2>
      </div>

      <div className="overflow-y-auto flex-1">
        {users &&
          users.map((user) => (
            <div
              key={user.id}
              className="hover:bg-white/50 flex items-center gap-4 cursor-pointer p-4 border-b border-gray-200 transition-colors"
            >
              <div
                className={`avatar ${
                  user.online ? "avatar-online" : "avatar-offline"
                } flex-shrink-0`}
              >
                <div className="w-12 rounded-full">
                  <img src={user.photoURL} alt={user.displayName || "User"} />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-gray-800 truncate">
                  {user.displayName || "Noma'lum foydalanuvchi"}
                </h3>
                <p className="text-xs text-gray-500">
                  {user.online ? (
                    <span className="text-green-600 font-medium">onlayn</span>
                  ) : (
                    <span className="text-gray-500">
                      {formatLastSeen(user.lastSeen)}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
