interface InfoProps {
  tooltip: string;
}
export default function Info({ tooltip }: InfoProps) {
  return (
    <span className="group relative inline-block">
      <img src="/svgs/info_blue.svg" alt="info icon" width={24} height={24} />
      <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 w-max max-w-40 whitespace-normal rounded bg-black/80 p-1 mb-2 text-md text-white opacity-0 group-hover:opacity-100 text-center">
        {tooltip}
      </span>
    </span>
  );
}
