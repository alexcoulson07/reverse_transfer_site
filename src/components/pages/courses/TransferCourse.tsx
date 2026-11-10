import type { transferCourse } from "./CourseResult";
export default function TransferCourse({ data }: { data: transferCourse }) {
  return (
    <div className="my-2 grid min-h-16 grid-cols-2 items-center  rounded-md bg-course px-4 py-2 shadow-sm shadow-black mb-5">
      <span className="min-w-0 truncate text-base leading-tight sm:text-lg">
        {data.subj_code} {data.course_code} - {data.title}
      </span>
      <div className="min-w-0 text-right">
        <div className="truncate text-base leading-tight sm:text-lg">
          {data.school}
        </div>
        <div className="text-xs font-light leading-tight text-gray-600">
          {data.sgbi_code}
        </div>
      </div>
    </div>
  );
}
