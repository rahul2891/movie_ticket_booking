import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav>
       <Link to="/">
        <div className="logo">
          <img src="../logo.jpg" alt="site logo" width={40} height={30} />
          <span className="logo-text">Book My Ticket</span>
        </div>
        </Link>
    <Link to="/"><span>Home</span></Link>
    </nav>
  )
}

export default Navbar