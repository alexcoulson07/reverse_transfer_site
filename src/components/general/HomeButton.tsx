import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <Link to="/home">
      <div className="w-62 h-12 text-white bg-beaver-orange rounded-3xl grid place-items-center text-xl hover:bg-black ">
        Go back home
      </div>
    </Link>
  );
}
