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
      <div className="grid grid-cols-10 gap-2">
        <div style={{gridColumnStart: 2}} className="col-span-2">
          <div style={{paddingLeft: "15%"}}>
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
        <div style={{gridColumnStart: 8}}> 
          <div style={{fontSize: "1.2em"}}>
            <p>
              Navigation
            </p>
          </div>
          <p>
            <a
              href=""
              className="link-text"
            >
              Home
            </a>
          </p>
          <p>
            <a
              href=""
              className="link-text"
            >
              About
            </a>
          </p>
          <p>
            <a
              href=""
              className="link-text"
            >
              Team
            </a>
          </p>
          <p>
            <a
              href=""
              className="link-text"
            >
              News
            </a>
          </p>
          <p>
            <a
              href=""
              className="link-text"
            >
              NetVR Theater
            </a>
          </p>
        </div>
        <div style={{gridColumnStart: 9}} className="col-span-2">
          <div style={{fontSize: "1.2em"}}>
            <p>
              Socials
            </p>
          </div>
          <p>
            <a
              href=""
              className="link-text"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              href=""
              className="link-text"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href=""
              className="link-text"
            >
              Twitter
            </a>
          </p>
          <p>
            <a
              href=""
              className="link-text"
            >
              Discord
            </a>
          </p>
          <p>
            <a
              href=""
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
      <div className="grid grid-cols-10 gap-2">
        <div style={{gridColumnStart: 2}} className="col-span-2">
          <p>
            ©2024 The Net VR
          </p>
        </div>
        <div style={{gridColumnStart: 8}}> 
          <p>
            <a
              href=""
              className="link-text"
            >
              Privacy Policy
            </a>
          </p>
        </div>
        <div style={{gridColumnStart: 9}} className="col-span-2">
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
