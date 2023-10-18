
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";

const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form);
    }

    return (
        <div className="mb-8 p-4">
            <h1 className="text-5xl font-bold text-center">Please Login!</h1>
            <form onSubmit={ handleLogin}
        className="md:w-2/4 lg:w-1/3 mx-auto mt-4"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary normal-case text-base font-semibold">
            Continue with email/password
          </button>
        </div>
      </form>
      <div className="mt-4 mb-2 text-center">Or,</div>
      <div className="flex justify-center items-center">
        <button className="btn btn-outline normal-case">
          <FaGoogle /> Login with Google
        </button>
      </div>
      <p className="text-center mt-4">
        Don't have an account? Please{" "}
        <Link className="text-blue-700 font-medium underline" to="/register">
          Register
        </Link>
      </p>
            
        </div>
    );
};

export default Login;