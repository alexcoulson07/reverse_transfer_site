import HomeButton from "../../general/HomeButton";
import Info from "../../general/Info";

export default function AboutPage() {
  return (
    <main className="AboutPage min-h-219 max-h-219 flex flex-col justify-center min-w-full">
      <div className="h-200 bg-[url('/images/sign.webp')] bg-cover bg-center bg-no-repeat  flex flex-col justify-center">
        <div className="h-173 bg-white/80 flex flex-col justify-around items-center px-20 [&>p]:text-xl text-center">
          <h1 className="text-4xl font-exo-2 font-bold">HOW TO USE THIS TOOL</h1>
          <p>
            <b>Navigation:</b> The hamburger icon in the top left opens a
            navigation bar, which links to all pages on this site. The footer
            can also be used to find pages you are looking for.
          </p>
          <p>
            <b>Sections:</b> Sections let you add multiple courses to evaluate
            at once so you don’t have to do each individually. Go to the section
            page and click ‘add new section’. Enter in the name of the section.
            Next click ‘add course’ and select the subject and course number. If
            you want to remove a course, check the box near it then click
            ‘delete’. If you want to entirely delete a section, exit the editing
            menu and click ‘delete’ on the main section menu.
          </p>
          <p>
            <b>Finding Courses:</b> Choose between using a section or evaluating
            a individual course. If you choose to evaluate a individual course
            then select said courses subject and course code. When you are ready
            click ‘show results’ (or ‘update results’) to find colleges that
            offer transferable courses to the one(s) you chose.
          </p>
          <p className="inline-block">
            The information icons &nbsp;
            <Info tooltip="Example" />
            &nbsp; can be hovered over to see more details about an action or
            part of the site.
          </p>
          <HomeButton />
        </div>
      </div>
    </main>
  );
}
