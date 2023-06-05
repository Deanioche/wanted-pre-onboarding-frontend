import { useNavigate } from "react-router-dom";
import useValidation from "../hooks/useValidation";
import { useCallback } from "react";
import { signUpApi } from "../api/auth";

function SignUp() {
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
    }, [validateInput])

    const handleSignUp = (e) => {
        e.preventDefault();
        signUpApi(email, password)
        .then((res) => {
            if (res.status === 201) {
                alert("success");
                navigate(`/signin`);
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
            <button onClick={redirectTo(`/signin`)}>로그인 하러가기</button>
            <h2>회원가입</h2>
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
                    data-testid="signup-button"
                    disabled={!(email && password)}
                    onClick={handleSignUp}
                >
                    회원 가입
                </button>
            </form>
        </>
    );
}

export default SignUp;