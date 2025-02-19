import "./Logo.css";
import cat from "../assets/cat.png";
function Logo() {
  return (
    <>
    <div className="logo">
      <h1>To-Do</h1>
      <img src={cat} alt="cat" />
    </div>
    
    </>
  );
}

export default Logo;
