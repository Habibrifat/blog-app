import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>The page not Found</p>
            <Link to={'/'}>Go To Homepage....</Link>
        </div>
     );
}
 
export default NotFound;