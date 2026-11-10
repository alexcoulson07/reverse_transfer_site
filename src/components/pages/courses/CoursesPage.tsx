import { useState } from "react";
import Info from "../../general/Info";
import TypeButtons from "./TypeButtons";
import SubjectSelect from "./SubjectSelect";
import CourseSelect from "./CourseSelect";
import type { Course } from "./CourseSelect";
import CourseResults from "./CourseResults";
import ResultsButton from "./ResultsButton";

const tooltips = {
  type: "Choose to find a specific course, or use a premade set of courses.",
  subject:
    "Select the school subject of the course you want to find the equivalencies of.",
  course: "Select the course that you want to find the equivalencies of.",
};

export default function CoursesPage() {
  const [using, setUsing] = useState<"COURSES" | "SECTION">("COURSES");
  const [subject, setSubject] = useState<string>("");
  const [courseInfo, setCourseInfo] = useState<Course>({
    course_code: "",
    title: "",
  });
  const [updateResults, setUpdateResults] = useState(0);

  return (
    <main className="CoursesPage min-h-225 flex flex-col justify-center min-w-full items-center">
      <div className="h-25 bg-black w-full text-white flex flex-col justify-around items-center">
        <h1 className="text-2xl font-bold font-exo-2">FIND TRANSFER CLASSES</h1>
        <p className="text-xl">
          Select a class or section and find OSU equivalencies
        </p>
      </div>
      <div className="min-h-200 bg-neutral-100 w-250 ">
        <div className="h-100 py-10 px-30 flex flex-col justify-around items-center">
          <div className="relative flex w-118 justify-center items-center">
            <div className="absolute -left-14">
              <Info tooltip={tooltips.type} />
            </div>
            <TypeButtons
              using={using}
              updater={setUsing}
              subjectUpdater={setSubject}
              courseUpdater={setCourseInfo}
            />
          </div>

          {using === "COURSES" && (
            <div className="relative flex w-118 justify-center items-center">
              <div className="absolute -left-14">
                <Info tooltip={tooltips.subject} />
              </div>
              <SubjectSelect
                updater={setSubject}
                courseUpdater={setCourseInfo}
              />
            </div>
          )}
          {subject && (
            <div className="relative flex w-118 justify-center items-center">
              <div className="absolute -left-14">
                <Info tooltip={tooltips.course} />
              </div>
              <CourseSelect
                courseInfo={courseInfo}
                subject={subject}
                updater={setCourseInfo}
              />
            </div>
          )}
          {courseInfo.course_code != "" && (
            <ResultsButton result={updateResults} updater={setUpdateResults} />
          )}
        </div>
        <div className="h-1 bg-black mx-10"></div>
        <div className="h-auto"></div>
        {updateResults ? (
          <div>
            <CourseResults
              courseDatas={[{ corseInfo: courseInfo, subject: subject }]}
              updateResults={updateResults}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
