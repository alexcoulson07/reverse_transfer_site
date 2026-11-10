import { useEffect, useState } from "react";

const COURSES_URL =
  "http://localhost:4322/api/subjectCourses?sgbi=003210&subject=";

interface CourseSelectProps {
  courseInfo: Course;
  subject: string;
  updater: React.Dispatch<React.SetStateAction<Course>>;
}

export interface Course {
  course_code: string;
  title: string;
}

export default function CourseSelect({
  courseInfo,
  subject,
  updater,
}: CourseSelectProps) {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const url = COURSES_URL + subject;
        const response = await fetch(url);
        if (!response.ok) {
          console.error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        const courseData = data?.school_courses as Course[];
        setCourses(courseData);
      } catch (err) {
        console.error(err instanceof Error ? err.message : String(err));
      }
    };
    getCourses();
  }, [subject]);

  const selectCourseNumber = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const selectedCourse = courses.find(
      (course) => course?.course_code === event.target.value,
    );
    if (selectedCourse) updater(selectedCourse);
  };

  return (
    <select
      className="w-118 h-12 bg-neutral-200 text-xl rounded-2xl drop-shadow-md z-0"
      onChange={selectCourseNumber}
      value={courseInfo?.course_code ?? ""}
    >
      <option value="" disabled className="font-light">
        {courses.length === 0
          ? `No courses available for ${subject}`
          : "Please choose an option"}
      </option>
      {courses.length > 0 &&
        courses.map((course) => (
          <option
            value={course?.course_code}
            key={`${subject}_${course?.course_code}`}
          >
            {`${subject} ${course?.course_code} — ${course?.title}`}
          </option>
        ))}
    </select>
  );
}
