import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    const toPath = (path) => {
        return () => {
            navigate(path);
        }
    }

    return (
        <>
            <button onClick={toPath(`/signin`)}>로그인</button>
            <button onClick={toPath(`/signup`)}>회원가입</button>
        </>
    );
}

export default Home;