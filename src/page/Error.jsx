import { Link } from "react-router-dom"; // Ensure you have an image at this path
const Error = () => {
  return (
    <div className="eror-page flex flex-col items-center justify-center h-screen">
      <img src="./error404-en.png" alt="" />
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
