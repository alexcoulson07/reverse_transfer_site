import HomeButton from "../../general/HomeButton";

const transferToolLink =
  "https://prodapps.isadm.oregonstate.edu/BannerExtensibility/customPage/page/admCourseSearch";

export default function DisclaimerPage() {
  return (
    <main className="DisclaimerPage min-h-168 max-h-168  flex flex-col justify-center min-w-full">
      <div className="h-150 bg-[url('/images/thearch.webp')] bg-cover bg-center bg-no-repeat flex flex-col justify-center">
        <div className="h-84 bg-white/80 text-center flex flex-col justify-around items-center px-20">
          <h1 className="font-exo-2 font-bold text-4xl">DISCLAMER</h1>
          <p className="text-xl ">
            This is not an official OSU site. This tool was based on
            <a
              href={transferToolLink}
              className="text-beaver-orange"
              target="_blank"
            >
              {" "}
              <u>OSU’s transfer course search tool</u>
            </a>
            , as a way to allow students to ‘reverse transfer’. The information
            on this site may not be 100% accurate. Please double check with your
            advisor and/or the office of registrar that the your courses will
            properly transfer before enrolling. The information on this site was
            last updated November 6th 2026.
          </p>
          <HomeButton />
        </div>
      </div>
    </main>
  );
}
