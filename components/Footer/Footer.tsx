import "./Footer.css";
export default function Footer() {
  return (
    <div className="bg-slate-800">
      <div className="flex flex-col py-4 px-10 lg:px-20 xl:px-72 md:py-16">
        <p className="text-center">
          © The Net VR. All Rights Reserved 2023. Licensing
        </p>
        <p className="text-center">
          Created By{" "}
          <a
            href="https://www.linkedin.com/in/noah-fajarda/"
            className="boujee-text"
            target="_blank"
          >
            Noah
          </a>
          . Powered by Next.js
        </p>
      </div>
    </div>
  );
}
