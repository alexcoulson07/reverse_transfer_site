import type { Course } from "./CourseSelect";

interface TypeButtonsProp {
  using: "COURSES" | "SECTION";
  updater: React.Dispatch<React.SetStateAction<"COURSES" | "SECTION">>;
  subjectUpdater: React.Dispatch<React.SetStateAction<string>>;
  courseUpdater: React.Dispatch<React.SetStateAction<Course>>;
}

export default function TypeButtons({
  using,
  updater,
  subjectUpdater,
  courseUpdater,
}: TypeButtonsProp) {
  const handleUsingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updater(event.target.value as TypeButtonsProp["using"]);
    subjectUpdater("");
    courseUpdater({
      course_code: "",
      title: "",
    });
  };

  return (
    <form className="text-xl [&_input]:ml-5 [&_input]:mr-2 [&_input]:h-4 [&_input]:w-4 [&_input]:appearance-none [&_input]:rounded-full [&_input]:border-2 [&_input:checked]:border-button-fill [&_input:checked]:bg-button-fill">
      <label>
        <input
          type="radio"
          name="choice"
          value="COURSES"
          checked={using === "COURSES"}
          onChange={handleUsingChange}
        ></input>
        Find A Course
      </label>
      <label>
        <input
          type="radio"
          name="choice"
          value="SECTION"
          checked={using === "SECTION"}
          onChange={handleUsingChange}
        ></input>
        Use a Section
      </label>
    </form>
  );
}
