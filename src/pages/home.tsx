import { Link } from "react-router-dom"

export const Home = () => {
    return <>
        <p>Home</p><br />
        <Link to="/manager">Go to Manager</Link>        
    </>
}