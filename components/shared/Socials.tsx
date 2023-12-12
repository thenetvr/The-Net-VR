import Image from "next/image";

export default function Socials() {
  const socials = ["discord", "facebook", "instagram", "twitter", "youtube"];
  return (
    <div>
      <h1 className="font-bold flex items-center gap-3">
        {socials.map((social, idx) => (
          <a
            href="https://www.youtube.com"
            className="flex hover:bg-blue-400 p-1 rounded transition-all bg-white"
          >
            <Image
              key={idx}
              src={`/images/socials/${social}.png`}
              alt={social}
              width={30}
              height={30}
            />
          </a>
        ))}
      </h1>
    </div>
  );
}
