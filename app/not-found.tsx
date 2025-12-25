'use client';
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl mb-6">Page Under Construction</h2>
      <p className="mb-6 text-center">
        The page you are looking for is not ready yet. Stay tuned!
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-black hover:bg-black/70 rounded-md font-bold transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
