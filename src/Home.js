import DataList from "./DataList";
import useFetch from "./useFetch";
import './style.css';
import Search from "./Search";
import { useState } from "react";

const Home = () => {

    const [keyword, setKeyword] = useState('marvel');

    let url = 'https://www.omdbapi.com/?apikey=9caab08b&s=' + keyword;
    const {getData, loading} = useFetch(url);
    return ( 
        <div className="home">
            <Search keyword={keyword} setKeyword={setKeyword} />
            {loading && <h1>Loading...</h1>}
            {getData && <DataList movies={getData} /> }
        </div>
     );
}
 
export default Home;