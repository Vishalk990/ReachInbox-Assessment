
import { useRouteError, Link } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-white tracking-widest">
            {error.status || '404'}
          </h1>
          <div className="bg-blue-500 px-2 text-sm rounded rotate-12 absolute">
            {error.statusText || 'Page Not Found'}
          </div>
        </div>
        <p className="text-2xl font-semibold text-gray-300 md:text-3xl mb-8">
          {error.data || "Sorry, we couldn't find the page you're looking for."}
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default Error;