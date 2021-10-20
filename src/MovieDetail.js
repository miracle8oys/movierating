import useFetchDetail from './useFetchDetail';
import './style.css';
import Detail from './Detail';
import { useParams } from 'react-router';
import { useHistory } from "react-router";

const MovieDetail = ({name}) => {

    let history = useHistory();

    if (name === '') {
        history.push('/');
    }

    const {id} = useParams();
    const url = 'https://www.omdbapi.com/?apikey=9caab08b&i=' + id;
    const {getData, loading} = useFetchDetail(url);

    return ( 
        <div className="detail">
            {loading && <h1>Loading...</h1>}
            { getData && <Detail name={name} data={getData} />}
        </div>
     );
}
 
export default MovieDetail;