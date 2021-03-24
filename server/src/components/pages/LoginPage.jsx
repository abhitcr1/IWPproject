import React, { useState } from "react";
import Carousel from "./Carousel";

function LoginPage({ emailErrorServer = false, passwordErrorServer = false }) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(emailErrorServer);
    const [emailErrorMsg, setEmailErrorMsg] = useState(
        "Can't find this email in the database!"
    );
    const [passwordError, setPasswordError] = useState(passwordErrorServer);
    function validate(type) {
        switch (type) {
            case "email":
                var re = /\S+@\S+\.\S+/;
                const res = re.test(email);
                if (!res) {
                    setEmailError(true);
                    setEmailErrorMsg("This email seems to be invalid.");
                } else {
                    setEmailErrorMsg("");
                    setEmailError(false);
                }
        }
    }
    return (
        <div className="container-fluid fs">
            <div className="row h-100">
                <div className="col-4 d-md-flex d-none h-100 p-0 align-items-center">
                    <Carousel />
                </div>
                <div className="col-sm col-md-8 h-100 p-5 align-items-center">
                    <span className="d-flex align-items-center">
                        <img src="./assets/favicon.png" alt="Logo" width="40" />
                        <h3 style={{ fontWeight: 700 }} className="px-3 m-0">
                            Diary
                        </h3>
                    </span>
                    <span className="my-3 d-block" style={{ fontWeight: 500 }}>
                        You need to login before we can get started.
                    </span>
                    <form className="w-75 w-sm-100 my-4" method="POST">
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputEmail1"
                                className="form-label"
                            >
                                Email address
                            </label>
                            <div className="input-group has-validation">
                                <input
                                    type="email"
                                    className={`form-control ${
                                        emailError ? "is-invalid" : ""
                                    }`}
                                    name="email"
                                    placeholder="example@example.com"
                                    onBlur={() => validate("email")}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <div className="invalid-feedback">
                                    {emailErrorMsg}
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="exampleInputPassword1"
                                className="form-label"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="P@$$w0rD"
                                name="password"
                                className={`form-control ${
                                    passwordError ? "is-invalid" : ""
                                }`}
                                required
                            />
                            <div className="invalid-feedback">
                                This password seems to be incorrect. Are you
                                sure this is your password?
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="loginCheck"
                                name="remember"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="loginCheck"
                            >
                                Keep me logged in
                            </label>
                        </div>
                        <button type="submit" className="btn btn-dark w-100">
                            Submit
                        </button>
                    </form>
                    <div className="d-flex flex-column">
                        <span className="py-2">
                            Don't have an account?{" "}
                            <a
                                href="signup"
                                className="text-dark"
                                style={{ fontWeight: 700 }}
                            >
                                Click here
                            </a>{" "}
                            to create one.
                        </span>
                        <span>
                            We all forget this.{" "}
                            <a
                                href="signup"
                                className="text-dark"
                                style={{ fontWeight: 700 }}
                            >
                                Click here
                            </a>{" "}
                            to reset your password.
                        </span>
                    </div>
                    <div className="position-absolute bottom-0 py-4 end-0 px-4">
                        <a
                            href="https://github.com/abhitcr1/shitposting"
                            className="fw-light text-muted text-decoration-none d-flex align-items-center"
                            style={{
                                fontSize: "0.9em",
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            <span className="px-2">Source Code</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
