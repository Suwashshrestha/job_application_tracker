import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const addJob = async (jobData) => {
  const user = auth.currentUser;
  if (!user) {
    console.log("User not authenticated");
    return null;
  }

  try {
    await addDoc(collection(db, "jobs"), {
      userId: user.uid,
      company: jobData.company,
      position: jobData.position,
      status: jobData.status,
      deadline: jobData.deadline,
      notes: jobData.notes,
      createdAt: new Date()
    });
    console.log("Job added successfully");
    return true;
  } catch (error) {
    console.error("Error adding job:", error);
    return false;
  }
};
