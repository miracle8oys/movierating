const Search = ({keyword, setKeyword}) => {

    const handleChange = (e) => {
        setKeyword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return ( 
    <form onSubmit={handleSubmit}>
        <div className="mb-2 form">
          <input type="Text" onChange={(e) => handleChange(e)} className="form-control" />
            <button type="submit" className="btn btn-primary">Submit</button>
        </div>
    </form> );
}
 
export default Search;