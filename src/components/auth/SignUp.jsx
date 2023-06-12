import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import { signUpApi } from "../../api/client";
import styled from "styled-components";

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
                    navigate(`/signin`);
                }
            })
            .catch((err) => {
                throw new Error(err);
            });
    }

    return (
        <>
            <button onClick={redirectTo(`/`)}>Home</button>
            <button onClick={redirectTo(`/signin`)}>로그인</button>
            <h2>회원가입</h2>
            <SignUpForm
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
                    data-testid="signup-button"
                    disabled={!(email && password)}
                    onClick={handleSignUp}
                >
                    회원 가입
                </button>
            </SignUpForm>
        </>
    );
}

const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20vw;
    gap: 5px;
`

export default SignUp;