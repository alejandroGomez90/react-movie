import('../styles/LoginView.css');
import { Loader } from '../components/Loader';
import { useLogin } from '../hooks/useLogin';

const LoginView = () => {
  const { logInUser, isLoading } = useLogin();

  const onSubmit = (event: React.SyntheticEvent | any) => {
    event.preventDefault();
    const { username, password } = event.target;
    const user = {userName: username.value, password: password.value}
    logInUser(user);
  }

  if (isLoading) return <Loader />

    return (
        <div className="wrapper">
            <form className="form-signin" onSubmit={onSubmit}>
                <h2 className="form-signin-heading">Please login</h2>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Email Address"
                />
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                />
                <button
                    className="btn btn-lg btn-primary btn-block m-2"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginView;
