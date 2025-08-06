import { useEffect } from "react";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase/config";

export const useActivity = () => {
  useEffect(() => {
    if (!auth.currentUser) return;

    let activityTimer;

    const updateActivity = async () => {
      try {
        const userDoc = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userDoc, {
          lastSeen: serverTimestamp(),
          online: true,
        });
      } catch (error) {
        console.error("Error updating activity:", error);
      }
    };

    const resetActivityTimer = () => {
      clearTimeout(activityTimer);

      updateActivity();

      activityTimer = setTimeout(async () => {
        try {
          const userDoc = doc(db, "users", auth.currentUser.uid);
          await updateDoc(userDoc, {
            online: false,
            lastSeen: serverTimestamp(),
          });
        } catch (error) {
          console.error("Error setting offline:", error);
        }
      }, 5 * 60 * 1000);
    };

    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];

    events.forEach((event) => {
      document.addEventListener(event, resetActivityTimer);
    });

    resetActivityTimer();

    return () => {
      clearTimeout(activityTimer);
      events.forEach((event) => {
        document.removeEventListener(event, resetActivityTimer);
      });
    };
  }, []);
};
