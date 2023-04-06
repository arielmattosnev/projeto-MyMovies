import { Link } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <h2>
        <Link to="/">
          <BiCameraMovie />
          MyMovies
        </Link>
      </h2>
      <form>
        <input type="text" placeholder="busque um filme" />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
