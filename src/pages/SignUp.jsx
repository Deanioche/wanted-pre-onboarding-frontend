import { useNavigate } from "react-router-dom";

function SignUp() {
    const navigate = useNavigate();

    const toPath = (path) => {
        return () => {
            navigate(path);
        }
    }

    return (
        <>
            <h1>회원가입</h1>
            <button onClick={toPath(`/`)}>⬅️</button>
            <input data-testid="email-input" />
            <input data-testid="password-input" />
            <button data-testid="signup-button">회원가입</button>
        </>
    );
}

export default SignUp;