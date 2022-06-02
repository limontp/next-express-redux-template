import { useSelector } from 'react-redux';
import { setSampleData } from '../store/actions/sampleAction';
import { wrapper } from '../store/store';
import Link from 'next/link';

export default function Home() {
    const store = useSelector(state => state.sampleData);
    return (
        <>
            <ul>
                <li>
                    <Link href="/b" as="/a">
                        <a>a</a>
                    </Link>
                </li>
                <li>
                    <Link href="/a" as="/b">
                        <a>b</a>
                    </Link>
                </li>
                {
                    store.sample.map(item => <p key={item}>Item: {item}</p>)
                }
            </ul>
            {store.loading ? <p>Loading...</p> : <p>Loaded</p>}
        </>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(({ dispatch }) => async (req, res) => {
    // dispatch({ type: "GET_SAMPLE", payload: [1123, 1321, "ada, 234"] });
    setSampleData(["From", "Server Side", "props"])(dispatch);
    return { props: {} };
});
