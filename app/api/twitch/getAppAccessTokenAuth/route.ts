import { NextResponse } from "next/server";

type TwitchTokenResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

export async function POST(req: any) {
  try {
    const { clientId, clientSecret } = await req.json();

    const response = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },

      // Use URLSearchParams to encode the body with x-www-form-urlencoded format
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: "client_credentials",
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch token: ${response.statusText}`);
    }

    const data: TwitchTokenResponse = await response.json();

    return NextResponse.json(data);

  } catch (error) {

    console.error(error);
    return NextResponse.json({ error: error });
  }
}

