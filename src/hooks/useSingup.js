import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { login } from "../app/features/userSlice";
import { doc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export const useSignup = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const signup = async (firstName, lastName, email, password) => {
    setIsLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res.user) {
        throw new Error("Autentifikatsiya muvaffaqiyatsiz tugadi");
      }

      await updateProfile(res.user, {
        displayName: `${firstName} ${lastName}`,
        photoURL: `https: //api.dicebear.com/9.x/adventurer-neutral/svg?seed=${
          firstName + lastName
        }`,
      });

      await setDoc(doc(db, "users", res.user.uid), {
        online: true,
        firstName,
        lastName,
        email,
        photoURL: `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${
          firstName + lastName
        }`,
        displayName: `${firstName} ${lastName}`,
        uid: res.user.uid,
        createdAt: new Date().toISOString(),
      });

      dispatch(
        login({
          ...res.user,
          displayName: `${firstName} ${lastName}`,
          photoURL: `https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${
            firstName + lastName
          }`,
        })
      );

      toast.success(`Xush kelibsiz, ${firstName}!`);
    } catch (error) {
      console.error("Ro'yxatdan o'tishda xatolik:", error);

      if (error.code === "auth/email-already-in-use") {
        toast.error("Bu email allaqachon ro'yxatdan o'tgan.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Parol kamida 6 ta belgidan iborat bo'lishi kerak!");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Email formati noto'g'ri.");
      } else {
        toast.error(error.message || "Ro'yxatdan o'tishda xatolik yuz berdi.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { signup, isLoading };
};
