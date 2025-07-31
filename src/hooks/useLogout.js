import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { logOut } from "../app/features/userSlice";
import toast from "react-hot-toast";
import { db } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

export const useLogout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    setIsLoading(true);
    try {
      const user = doc(db, "users", auth.currentUser.uid);
      await updateDoc(user, {
        online: false,
      });
      await signOut(auth);
      dispatch(logOut);
      toast.success("Ko'rishguncha!");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Chiqishda xatolik yuz berdi!");
    } finally {
      setIsLoading(false);
    }
  };

  return { logout, isLoading };
};
