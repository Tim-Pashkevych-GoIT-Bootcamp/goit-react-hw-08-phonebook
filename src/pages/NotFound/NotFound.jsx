import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">Page not found</p>
          <Link to="/" className="btn btn-success">
            Go to Home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
