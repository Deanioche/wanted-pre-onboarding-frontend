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
            <button onClick={toPath(`/signin`)}>To signin</button>
            <button onClick={toPath(`/signup`)}>To signup</button>
        </>
    );
}

export default Home;