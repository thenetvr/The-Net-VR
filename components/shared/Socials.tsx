import Image from "next/image";

export default function Socials() {
  const socials = [
    ["discord", "https://discord.com/invite/DpNy4Ur"], 
    ["facebook", "https://www.facebook.com/thenetvr"],
    ["instagram", "https://www.instagram.com/thenetvr/"],
    ["twitter", "https://twitter.com/thenetvr"],
    ["youtube", "https://www.youtube.com/channel/UCWOD7IdEz0z6S-K3Sf6B86Q"]
  ];
  return (
    <div>
      <h1 className="font-bold flex items-center gap-3">
        {socials.map(([social, link], idx) => (
          <a
            key={idx}
            href={link}
            className="flex hover:bg-blue-400 p-1 rounded transition-all bg-white"
          >
            <Image
              key={idx}
              src={`/images/socials/${social}.png`}
              alt={social}
              width={30}
              height={30}
              style={{ width: "auto" }}
            />
          </a>
        ))}
      </h1>
    </div>
  );
}
