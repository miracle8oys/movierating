import './style.css';
import {Link} from 'react-router-dom';
const DataList = ({movies}) => {
    return ( 
        <div className="data-list">
            {movies.map(movie => (
                <div className="card" key={movie.imdbID}>
                    <Link to={`/detail/${movie.imdbID}`}>
                        <img src={movie.Poster} className="card-img-top" alt="..." />
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default DataList;