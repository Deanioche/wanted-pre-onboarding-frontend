import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import { signInApi } from "../../api/client";
import styled from "styled-components";

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
                    navigate(`/todo`);
                }
            })
            .catch((err) => {
                throw new Error(err);
            });
    }

    return (
        <>
            <button onClick={redirectTo(`/`)}>Home</button>
            <button onClick={redirectTo(`/signup`)}>회원가입</button>
            <h2>로그인</h2>
            <SignInForm
                onSubmit={(e) => e.preventDefault()}
            >
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
            </SignInForm>
        </>
    );
}

const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20vw;
    gap: 5px;
`

export default SignIn;