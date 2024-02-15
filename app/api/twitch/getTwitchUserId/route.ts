import { NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from 'next';
import authHandler from "../getAppAccessTokenAuth/route";

// curl -X GET 'https://api.twitch.tv/helix/users?id=141981764' \
// -H 'Authorization: Bearer cfabdegwdoklmawdzdo98xt2fo512y' \
// -H 'Client-Id: uo6dggojyb8d6soh92zknwmi5ej1q2'

const CLIENT_ID = process.env.TWITCH_CLIENT_ID || '';
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET || '';


export default async function userIdHandler(appAccessToken: string) {
  try {
    const response = await fetch('https://api.twitch.tv/helix/users', {
      method: 'GET',
      headers: {
        'Authorization': 'Bear ' + appAccessToken,
        'Client-Id': CLIENT_ID,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get User Id: ${response.statusText}`);
    }

    const responseData = await response.json();

    const userId = responseData["data"][0]["id"];

    return userId;

  } catch (error) {

    console.error(error);
    //res.status(500).json({ message: 'Failed to obtain Twitch app access token' });
  }
}
