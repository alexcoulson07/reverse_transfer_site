import PageButton from "./PageButton";

export default function HomePage() {
  return (
    <main className="DisclaimerPage max-h-219 min-h-219 flex flex-col justify-around min-w-full ">
      <div className="h-150 bg-[url('/images/MU.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center *:mx-2">
        <PageButton
          title={"HOW TO USE THIS TOOL"}
          image={"/svgs/question_mark.svg"}
          link={"/about"}
        />
        <PageButton
          title={"FIND CLASSES"}
          image={"/svgs/school.svg"}
          link={"/courses"}
        />
        <PageButton
          title={"CREATE SECTION"}
          image={"/svgs/dashboard.svg"}
          link={"/sections"}
        />
      </div>
      <div className="min-h-50 bg-neutral-100 flex items-center flex-col w-full text-center justify-around py-10 px-25">
        <h1 className="font-exo-2 font-bold text-2xl">FIND TRANSFER CLASSES</h1>
        <p className=" text-xl">
          Classes at OSU can be expensive. Community College is a great way to
          save money. This tool allows you to find community colleges that offer
          OSU classes that transfer over easily.
        </p>
      </div>
    </main>
  );
}
