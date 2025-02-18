import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
const navigate = useNavigate()

  return (
    <>
      <div className="not-found-container">
        <h1>Oops!</h1>
        <h3>404 - PAGE NOT FOUND</h3>
        <p>Sorry, the page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <button className = "go-back" onClick={() => navigate("/")}>Go back to main</button>
     
      
    </div>
    </>
  );
}

export default NotFound;
