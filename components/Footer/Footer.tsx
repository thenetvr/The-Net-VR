import "./Footer.css";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-slate-800">
      <div>
        <hr></hr>
        <br></br>
        <br></br>
      </div>
      <div className="flex-container">
        <div className="flex-item-left">
          <div >
          <Image
            key={"icon"}
            src={`/images/iconAndLogo.png`}
            alt={"icon"}
            width={100}
            height={100}
            style={{ width: "auto" }}
          />
          </div>
          <div style={{fontSize: "1.2em"}}>
            <p>
              Contact: info@thenetvr.com
            </p>
            <p>
              Address: Austin, Tx, 78701
            </p>
          </div>
        </div>
        <div className="flex-item"> 
          <div style={{fontSize: "1.2em"}}>
            <h1 className="font-bold flex items-center gap-3">
              Navigation
            </h1>
          </div>
          <p>
            <a
              href="/"
              className="link-text"
            >
              Home
            </a>
          </p>
          <p>
            <a
              href="#about"
              className="link-text"
            >
              About
            </a>
          </p>
          <p>
            <a
              href="#team"
              className="link-text"
            >
              Team
            </a>
          </p>
          <p>
            <a
              href="#news"
              className="link-text"
            >
              News
            </a>
          </p>
          <p>
            <a
              href="#our-theaters"
              className="link-text"
            >
              NetVR Theater
            </a>
          </p>
        </div>
        <div className="flex-item">
          <div style={{fontSize: "1.2em"}}>
            <h1 className="font-bold flex items-center gap-3">
              Socials
            </h1>
          </div>
          <p>
            <a
              href="https://www.facebook.com/thenetvr"
              className="link-text"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/thenetvr/"
              className="link-text"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com/thenetvr"
              className="link-text"
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              href="https://discord.com/invite/DpNy4Ur"
              className="link-text"
            >
              Discord
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/channel/UCWOD7IdEz0z6S-K3Sf6B86Q"
              className="link-text"
            >
              Youtube
            </a>
          </p>
        </div>
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
       <hr></hr>
        <br></br>
      </div>
      <div className="flex-container">
        <div className="flex-item-left">
          <p>
            ©2024 The Net VR
          </p>
        </div>
        <div className="flex-item"> 
          <p>
            <a
              href=""
              className="link-text"
            >
              Privacy Policy
            </a>
          </p>
        </div>
        <div className="flex-item">
          <p>
            <a
              href=""
              className="link-text"
            >
              Terms and Conditions
            </a>
          </p>
        </div>
      </div>
      <br></br>
    </div>
  );
}
