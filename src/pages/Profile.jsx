import { useState } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const { user } = useSelector((state) => state.user);
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile</h1>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/4 border-r border-gray-200">
              <nav className="flex flex-col">
                <button
                  id="general"
                  onClick={() => setActiveTab("general")}
                  className={`px-6 py-3 text-left text-sm font-medium border-b border-gray-100 transition-colors ${
                    activeTab === "general"
                      ? "bg-blue-50 text-blue-600 border-r-2 border-r-blue-600 font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  General
                </button>
                <button
                  id="change-password"
                  onClick={() => setActiveTab("change-password")}
                  className={`px-6 py-3 text-left text-sm font-medium border-b border-gray-100 transition-colors ${
                    activeTab === "change-password"
                      ? "bg-blue-50 text-blue-600 border-r-2 border-r-blue-600 font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  Change password
                </button>
                <button
                  id="info"
                  onClick={() => setActiveTab("info")}
                  className={`px-6 py-3 text-left text-sm font-medium border-b border-gray-100 transition-colors ${
                    activeTab === "info"
                      ? "bg-blue-50 text-blue-600 border-r-2 border-r-blue-600 font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  Info
                </button>
                <button
                  id="social-links"
                  onClick={() => setActiveTab("social-links")}
                  className={`px-6 py-3 text-left text-sm font-medium border-b border-gray-100 transition-colors ${
                    activeTab === "social-links"
                      ? "bg-blue-50 text-blue-600 border-r-2 border-r-blue-600 font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  Social links
                </button>
                <button
                  id="connections"
                  onClick={() => setActiveTab("connections")}
                  className={`px-6 py-3 text-left text-sm font-medium border-b border-gray-100 transition-colors ${
                    activeTab === "connections"
                      ? "bg-blue-50 text-blue-600 border-r-2 border-r-blue-600 font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  Connections
                </button>
                <button
                  id="notifications"
                  onClick={() => setActiveTab("notifications")}
                  className={`px-6 py-3 text-left text-sm font-medium border-b border-gray-100 transition-colors ${
                    activeTab === "notifications"
                      ? "bg-blue-50 text-blue-600 border-r-2 border-r-blue-600 font-bold"
                      : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  Notifications
                </button>
              </nav>
            </div>

            <div className="lg:w-3/4">
              <div className="p-6">
                {activeTab === "general" && (
                  <div>
                    <div className="flex items-center mb-6 pb-6 border-b border-gray-200">
                      <img
                        src={user?.photoURL}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <label className="inline-flex items-center px-4 py-2 border border-blue-500 text-blue-500 text-sm font-medium rounded-md hover:bg-blue-50 cursor-pointer transition-colors">
                          Upload new photo
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                          />
                        </label>
                        <button className="ml-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors">
                          Reset
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Username
                        </label>
                        <input
                          type="text"
                          defaultValue={user.username}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.displayName || ""}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          E-mail
                        </label>
                        <input
                          type="email"
                          defaultValue={user?.email || ""}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        {!user?.emailVerified && (
                          <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                            <div className="text-sm text-yellow-800">
                              Your email is not confirmed. Please check your
                              inbox.
                              <br />
                              <button className="text-yellow-800 underline hover:no-underline">
                                Resend confirmation
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          type="text"
                          placeholder="Company Ltd."
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "change-password" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Current password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Repeat new password
                      </label>
                      <input
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "info" && (
                  <div>
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Bio
                        </label>
                        <textarea
                          rows="5"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc arcu, dignissim sit amet sollicitudin iaculis..."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Birthday
                        </label>
                        <input
                          type="text"
                          defaultValue="May 3, 1995"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Country
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option value="USA">USA</option>
                          <option value="Canada" selected>
                            Canada
                          </option>
                          <option value="UK">UK</option>
                          <option value="Germany">Germany</option>
                          <option value="France">France</option>
                        </select>
                      </div>
                    </div>

                    <hr className="border-gray-200 my-6" />

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Contacts
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            defaultValue="+0 (123) 456 7891"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Website
                          </label>
                          <input
                            type="url"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "social-links" && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Twitter
                      </label>
                      <input
                        type="url"
                        defaultValue="https://twitter.com/user"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Facebook
                      </label>
                      <input
                        type="url"
                        defaultValue="https://www.facebook.com/user"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Google+
                      </label>
                      <input
                        type="url"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        LinkedIn
                      </label>
                      <input
                        type="url"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Instagram
                      </label>
                      <input
                        type="url"
                        defaultValue="https://www.instagram.com/user"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}

                {activeTab === "connections" && (
                  <div className="space-y-6">
                    <div>
                      <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors">
                        Connect to <strong>Twitter</strong>
                      </button>
                    </div>

                    <hr className="border-gray-200" />

                    <div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-medium text-gray-900 flex items-center">
                            <svg
                              className="w-5 h-5 text-red-500 mr-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            You are connected to Google:
                          </h4>
                          <p className="text-gray-600">{user?.email}</p>
                        </div>
                        <button className="text-red-500 hover:text-red-700 text-sm">
                          Remove
                        </button>
                      </div>
                    </div>

                    <hr className="border-gray-200" />

                    <div>
                      <button className="px-4 py-2 bg-blue-800 text-white text-sm font-medium rounded-md hover:bg-blue-900 transition-colors">
                        Connect to <strong>Facebook</strong>
                      </button>
                    </div>

                    <hr className="border-gray-200" />

                    <div>
                      <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors">
                        Connect to <strong>Instagram</strong>
                      </button>
                    </div>
                  </div>
                )}

                {activeTab === "notifications" && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Activity
                      </h3>
                      <div className="space-y-4">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-3 text-sm text-gray-700">
                            Email me when someone comments on my article
                          </span>
                        </label>

                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-3 text-sm text-gray-700">
                            Email me when someone answers on my forum thread
                          </span>
                        </label>

                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-3 text-sm text-gray-700">
                            Email me when someone follows me
                          </span>
                        </label>
                      </div>
                    </div>

                    <hr className="border-gray-200 my-6" />

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Application
                      </h3>
                      <div className="space-y-4">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-3 text-sm text-gray-700">
                            News and announcements
                          </span>
                        </label>

                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-3 text-sm text-gray-700">
                            Weekly product updates
                          </span>
                        </label>

                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            defaultChecked
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                          />
                          <span className="ml-3 text-sm text-gray-700">
                            Weekly blog digest
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
