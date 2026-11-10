import { useEffect, useState } from "react";
import type { Course } from "./CourseSelect";

const url = "http://localhost:4322/api/schoolSubjects?sgbi=003210";

interface SubjectSelectProps {
  updater: React.Dispatch<React.SetStateAction<string>>;
  courseUpdater: React.Dispatch<React.SetStateAction<Course>>;
}

export default function SubjectSelect({
  updater,
  courseUpdater,
}: SubjectSelectProps) {
  const [subjects, setSubjects] = useState<string[]>([]);

  useEffect(() => {
    const getSubjects = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.error(`HTTP error ${response.status}`);
        }
        const data = await response.json();
        setSubjects(data?.subjects);
      } catch (err) {
        console.error(err instanceof Error ? err.message : String(err));
      }
    };
    getSubjects();
  }, []);

  const selectSubject = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    if (event.target.value) {
      updater(event.target.value);
      courseUpdater({
        course_code: "",
        title: "",
      });
    }
  };

  return (
    <select
      className="w-118 h-12 bg-neutral-200 text-xl rounded-2xl drop-shadow-md z-0"
      onChange={selectSubject}
    >
      <option value="" disabled selected hidden className="font-light">
        Please choose an option
      </option>
      {subjects.map((sbj, idx) => (
        <option value={sbj} key={sbj + idx}>
          {"ㅤ" + sbj}
        </option>
      ))}
    </select>
  );
}
