import { useState, useEffect } from "react";
import type { Course } from "./CourseSelect";
import TransferCourse from "./TransferCourse";

const url = (subject: string, number: string) =>
  `http://localhost:4322/api/transferCourses?subject=${subject}&number=${number}`;

interface CourseResultProps {
  corseInfo: Course;
  subject: string;
  rerender: number;
}

export interface CourseData {
  corseInfo: Course;
  subject: string;
}

export interface transferCourse {
  course_code: string;
  title: string;
  sgbi_code: string;
  subj_code: string;
  school: string;
}

export default function CourseResult({
  corseInfo,
  subject,
  rerender,
}: CourseResultProps) {
  const [transferCourses, setTransferCourses] = useState<transferCourse[]>([]);

  useEffect(() => {
    const getTransferCourses = async () => {
      try {
        const response = await fetch(url(subject, corseInfo.course_code));
        if (!response.ok) {
          console.error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        setTransferCourses(data?.transfer_courses);
      } catch (err) {
        console.error(err instanceof Error ? err.message : String(err));
      }
    };
    getTransferCourses();
  }, [rerender]);

  return (
    <div className="flex h-125 flex-col overflow-hidden">
      <div className="text-xl text-center *:my-5">
        <p>Showing results for</p>
        <p className="font-bold font-exo-2">{`${subject} ${corseInfo.course_code} — ${corseInfo.title}`}</p>
      </div>
      <div className="mx-30 overflow-y-auto overflow-x-hidden">
        {transferCourses.map((course, index) => (
          <TransferCourse key={`${course?.sgbi_code}-${index}`} data={course} />
        ))}
      </div>
    </div>
  );
}
