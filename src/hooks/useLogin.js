import { useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { login as _login } from "../app/features/userSlice";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const req = await signInWithEmailAndPassword(auth, email, password);
      if (!req.user) {
        throw new Error("Autification filed !");
      }

      dispatch(_login(req.user));
      toast.success(`Welcome back`);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
