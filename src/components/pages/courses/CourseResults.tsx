import type { CourseData } from "./CourseResult";
import CourseResult from "./CourseResult";
import { memo } from "react";

interface CourseDatas {
  courseDatas: CourseData[];
  updateResults: number;
}

function CourseResults({ courseDatas, updateResults }: CourseDatas) {
  return (
    <div>
      {courseDatas.map((data) => (
        <CourseResult
          key={data.subject}
          subject={data.subject}
          corseInfo={data.corseInfo}
          rerender={updateResults}
        />
      ))}
    </div>
  );
}

export default memo(
  CourseResults,
  (prev, next) => prev.updateResults === next.updateResults,
);
