
import { Link } from "react-router-dom";

const Register = () => {

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, email, photo, password);

    }


  return (
    <div>
      <div className="mb-8 p-4">
        <h1 className="text-5xl font-bold text-center">Register now!</h1>
        <form
          onSubmit={handleRegister}
          className="md:w-2/4 lg:w-1/3 mx-auto mt-4"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="URL"
              className="input input-bordered"
              required
              id=""
            />
          </div>
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
              Register
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account? Go to{" "}
          <Link className="text-blue-700 font-medium underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
