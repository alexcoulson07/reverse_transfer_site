import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-footer min-h-75 flex-1 text-white text-xl px-10 py-5">
      <div className="flex flex-row-reverse">
        <div
          className="grid gap-10 grid-cols-2 grid-rows-2 text-left"
          dir="rtl"
        >
          <Link to={"/courses"}>
            <p>Classes</p>
          </Link>
          <Link to={"/sections"}>
            <p>Sections</p>
          </Link>
          <Link to={"/home"}>
            <p>Home</p>
          </Link>
          <Link to={"/about"}>
            <p>Help</p>
          </Link>
          <Link to={"/disclaimer"}>
            <p>Disclaimer</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
