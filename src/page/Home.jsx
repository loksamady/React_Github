import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h2 className="text-[50px] font-bold">Home Page</h2>
      <Link className="text-[25px] text-red-800" to="/about">
        About
      </Link>
      <br />
      <Link className="text-[25px] text-red-800" to="/service">
        Service
      </Link>
    </div>
  );
};

export default Home;
