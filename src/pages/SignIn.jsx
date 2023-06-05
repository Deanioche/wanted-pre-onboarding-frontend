import { useNavigate } from "react-router-dom";
import useValidation from "../hooks/useValidation";
import { useCallback } from "react";
import { signInApi } from "../api/auth";

function SignIn() {
    const navigate = useNavigate();
    const redirectTo = (url) => () => navigate(url);
    const {
        email,
        password,
        messageEmail,
        messagePassword,
        validateInput,
    } = useValidation();

    const handleInput = useCallback((key) => (e) => {
        validateInput(key, e.target.value);
    }, [validateInput]);

    const handleSignIn = (e) => {
        e.preventDefault();
        signInApi(email, password)
            .then((res) => {
                if (res.status === 200) {
                    localStorage.setItem("access_token", res.data.access_token);
                    alert("success");
                    navigate(`/todo`);
                }
            })
            .catch((err) => {
                console.log(err);
                alert(err.response.data.message);
            });
    }

    return (
        <>
            <button onClick={redirectTo(`/`)}>Home</button>
            <button onClick={redirectTo(`/signup`)}>회원가입 하러가기</button>
            <h2>로그인</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    data-testid="email-input"
                    placeholder="Enter your email"
                    onChange={handleInput("email")}
                    required
                />
                <input
                    type="password"
                    data-testid="password-input"
                    placeholder="Enter your password"
                    onChange={handleInput("password")}
                    required
                />
                {!email && <div>{messageEmail}</div>}
                {!password && <div>{messagePassword}</div>}
                <button
                    type="submit"
                    data-testid="signin-button"
                    onClick={handleSignIn}
                    disabled={!(email && password)}
                >
                    로그인
                </button>
            </form>
        </>
    );
}

export default SignIn;