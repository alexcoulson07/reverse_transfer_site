import { Link } from "react-router-dom";

interface PageButtonProps {
  title: string;
  image: string;
  link: string;
}

export default function PageButton({ title, image, link }: PageButtonProps) {
  return (
    <Link to={link}>
      <div className="PageButton bg-neutral-100 h-125 w-75 p-10 flex justify-around items-center flex-col rounded-2xl hover:bg-neutral-300">
        <div className="bg-beaver-orange w-62 h-62 flex items-center justify-center rounded-2xl">
          <img src={image} alt={title} width={200} height={200} />
        </div>
        <p className="text-2xl text-center">{title}</p>
      </div>
    </Link>
  );
}
