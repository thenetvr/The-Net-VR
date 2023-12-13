import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    contact:
      "this is data from 'contact' route. Make a POST Request to send your message",
  });
}

export async function POST(req: any) {
  try {
    // retrieve email from user request body
    const { firstName, lastName, email, phoneNumber, description } =
      await req.json();

    return NextResponse.json({
      email: `This route will eventually send an email with the data given:
    ${firstName},
    ${lastName},
    ${email},
    ${phoneNumber},
    ${description}
    `,
    });
  } catch (err) {
    console.log(err);
  }
}
