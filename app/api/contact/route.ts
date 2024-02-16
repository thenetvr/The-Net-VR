import { EmailTemplate } from "@/components/Email/Email";
import { NextResponse } from "next/server";
/*
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function GET() {
  return NextResponse.json({
    contact:
      "this is data from 'contact' route. Make a POST Request to send your message",
  });
}

export async function POST(req: any) {
  try {
    // retrieve email from user request body
    const { first, last, email, phone, message } = await req.json();
    console.log(first, last, email, phone, message);

    const data = await resend.emails.send({
      // can't change send FROM domain
      from: "The Net VR <onboarding@resend.dev>",
      // from: "The Net VR <info@thenetvr.com>",
      to: "development@thenetvr.com",
      subject: "Welcome To The Net VR!",
      react: EmailTemplate({ first, last, email, phone, message }),
    });
    return NextResponse.json({ ...data });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err });
  }
}
*/