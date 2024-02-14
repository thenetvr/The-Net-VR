import { NextResponse } from "next/server";
import { fetchData } from "@/utils/checkStreams";
// import { Resend } from "resend";

// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function GET() {
  console.log("At the get!");
  const data = "smallant";

  const url = "https://www.twitch.tv/smallant";

  const payload = fetchData(url);
  console.log(payload);
  return NextResponse.json({
    response: payload,
  });
}




/*
    const data = await resend.emails.send({
      // can't change send FROM domain
      from: "The Net VR <onboarding@resend.dev>",
      // from: "The Net VR <info@thenetvr.com>",
      to: "development@thenetvr.com",
      subject: "Welcome To The Net VR!",
      react: EmailTemplate({ first, last, email, phone, message }),
    });
    return NextResponse.json({ ...data });
*/

