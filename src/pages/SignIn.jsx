import { useNavigate } from "react-router-dom";
import useValidation from "../hooks/useValidation";
import { useCallback } from "react";

function SignIn() {
    const navigate = useNavigate();
    const {
        isValidEmail,
        isValidPassword,
        messageEmail,
        messagePassword,
        validateInput,
        } = useValidation();

    const toPath = (path) => {
        return () => {
            navigate(path);
        }
    }
    const handleInput = useCallback((key) => (e) => {
        validateInput(key, e.target.value);
    }, [validateInput]);

    return (
        <>
            <button onClick={toPath(`/`)}>⬅️</button>
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
                <div>{messageEmail}</div>
                <div>{messagePassword}</div>
                <button
                    type="submit"
                    data-testid="signin-button"
                    disabled={!(isValidEmail && isValidPassword)}
                >
                    로그인
                </button>
            </form>
        </>
    );
}

export default SignIn;