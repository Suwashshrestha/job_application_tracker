'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '../../lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push('/login');
      }
      setLoading(false);
    });

    // Cleanup subscription
    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 grid items-center">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, {user?.email}
          </h1>
          <div className="mt-6 border-4 border-dashed border-gray-200 rounded-lg h-96">
            {/* Add your dashboard content here */}
          </div>
        </div>
      </div>
    </div>
  );
}