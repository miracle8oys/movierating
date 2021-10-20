import { useHistory } from "react-router";
const Login = ({setUsername}) => {

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/home');
    }
    const handleChange = (e) => {
        setUsername(e.target.value)
    }
    return ( 
        <div className="container login">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"><h5>USERNAME</h5></label>
                <input type="text" onChange={(e) => handleChange(e)} />
                <br />
                <div className="btn-login">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
     );
}
 
export default Login;