import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

// Define the type for job data
interface JobData {
  company: string;
  position: string;
  status: string;
  deadline: string;
  notes: string;
}

// Function to add a job to the Firestore database
export const addJob = async (jobData: JobData): Promise<boolean | null> => {
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
      createdAt: new Date(),
    });
    console.log("Job added successfully");
    return true;
  } catch (error) {
    console.error("Error adding job:", error);
    return false;
  }
};
