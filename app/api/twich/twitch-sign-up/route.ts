import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';
// import { Resend } from "resend";

// const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function GET() {
  return NextResponse.json({
    contact:
      "this is data from 'twitch-sign-up' route. Make a POST Request to send your message",
  });
}

export async function POST(req: any) {
  try {
    // retrieve email from user request body
    const { first, last, twitchId } = await req.json();
    console.log(first, last, twitchId);
    return NextResponse.json({twitchId});

  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err });
  }
}

function  eventSubRequestOnline(twitchId: string): string {
/*
  curl -X POST 'https://api.twitch.tv/helix/eventsub/subscriptions' \
-H 'Authorization: Bearer 2gbdx6oar67tqtcmt49t3wpcgycthx' \
-H 'Client-Id: wbmytr93xzw8zbg0p1izqyzzc5mbiz' \
-H 'Content-Type: application/json' 
*/

  let requestBody = { 
      "type": "stream.online",
      "version": "1",
      "condition": {
          "broadcaster_user_id": twitchId
      },
      "transport": {
          "method": "webhook",
          "callback": "https://example.com/webhooks/callback",
          "secret": process.env.TWITCH_SECRET || ''
      }
  }


  return '';
}





function getSecret(): string {
  return process.env.TWITCH_SECRET || '';
}

function getHmacMessage(headers: NodeJS.Dict<string | string[]>, body: string): string {
  return `${headers['twitch-eventsub-message-id']}${headers['twitch-eventsub-message-timestamp']}${body}`;
}

function getHmac(secret: string, message: string): string {
  return crypto.createHmac('sha256', secret).update(message).digest('hex');
}

function verifyMessage(hmac: string, verifySignature: string): boolean {
  return crypto.timingSafeEqual(Buffer.from(hmac), Buffer.from(verifySignature));
}