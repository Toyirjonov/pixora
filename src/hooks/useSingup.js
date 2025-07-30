import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/config"; // db qo‘shildi
import { login } from "../app/features/userSlice";
import { collection, doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export const useSignup = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res.user) {
        throw new Error("Authentication failed");
      }

      await updateProfile(auth.currentUser, {
        displayName: `${firstName} ${lastName}`,
        photoURL: `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${
          firstName + lastName
        }`,
      });

      await setDoc(doc(db, "users", auth.currentUser.uid), {
        online: true,
        firstName,
        lastName,
        email,
        photoURL: auth.currentUser.photoURL,
      });

      dispatch(login(res.user));
      toast.success(`Welcome, ${firstName}!`);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Bu email allaqachon ro‘yxatdan o‘tgan.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Parol kamida 6 ta belgidan iborat bo‘lishi kerak!");
      } else {
        toast.error(error.message || "Ro‘yxatdan o‘tishda xatolik.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading };
};
