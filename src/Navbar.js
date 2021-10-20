import { useHistory } from "react-router";
const Navbar = () => {
    let history = useHistory();
    const handleClick = () => {
        history.goBack();
    }
    return ( 
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <h1 onClick={handleClick} className="arrow">&#8592;</h1>
            <h2>Movie Rating</h2>
            <img src="https://logoeps.com/wp-content/uploads/2013/06/universal-eps-vector-logo.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
        </div>
        </nav>
     );
}
 
export default Navbar;