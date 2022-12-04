const Login = () => {
    return (
        <div className="row">
            <div className="col-auto">
                <img height={721} src="/images/bookship.jpeg" alt="illustration"/>
            </div>
            <div className="col-4 m-auto">
                <h1 className="text-center">Welcome Back</h1>
                <label htmlFor="UsernameInput" className="col-form-label">Username</label>
                <input className="form-control" id="UsernameInput"></input>
                <label htmlFor="PasswdInput" className="col-form-label">Password</label>
                <input type="password" className="form-control" id="PasswdInput"></input>
                <button className="btn btn-warning rounded w-100 mt-5">Log In</button>
                <p className="text-center mt-3">Don't have an account?
                    <span><a href="/login" className="btn btn-link align-baseline">Sign up</a></span>
                </p>
            </div>
        </div>
    );
}
export default Login;