import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";

import { logOut } from "../app/features/userSlice";
import toast from "react-hot-toast";

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      dispatch(logOut());
      toast.success(`See you`);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return { logout, isLoading };
};
