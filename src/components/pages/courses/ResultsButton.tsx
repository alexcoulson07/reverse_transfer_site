interface ResultsButtonProps {
  result: number;
  updater: React.Dispatch<React.SetStateAction<number>>;
}

export default function ResultsButton({ result, updater }: ResultsButtonProps) {
  const handleClick = () => {
    updater((r) => r + 1);
    console.log(result);
  };

  return (
    <button
      className="w-62 h-12 text-white bg-beaver-orange rounded-3xl grid place-items-center text-xl"
      onClick={handleClick}
    >
      {result ? "Update" : "Show"} Results
    </button>
  );
}
