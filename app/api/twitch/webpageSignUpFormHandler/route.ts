import { NextResponse } from "next/server";
import crypto from "crypto";


const CLIENT_ID = process.env.TWITCH_CLIENT_ID || '';
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET || '';
const PROJECT_ID = process.env.PROJECT_ID || '';

export async function GET() {
  return NextResponse.json({
    contact:
      "this is data from 'twitch-sign-up TEST' route. Make a POST Request to send your message",
  });
}

export async function POST(req: any) {
  try {
    const formResponse = {
                          "status": 200, 
                          "twitchUserId": "", 
                        };
    // retrieve email from user request body
    const { first, last, email, twitchName } = await req.json();
    console.log(first, last, email, twitchName);

    const appAccessToken = await getAccessToken() as string;
    const userId = await getUserId(twitchName, appAccessToken, CLIENT_ID) as string;

    if (userId === "invalid") {
      console.log("Web handler see userId is invalid")
      formResponse['twitchUserId'] = "invalid";
    } else {
      formResponse['twitchUserId'] = userId;

      const securityToken = "Auth777!";
      const username = twitchName;
      const password = userId + securityToken;

      const ugsResponse = await ugsSignUpHandler(username, password) || {};

      if (hasOwnPropertyCustom(ugsResponse, 'userId') && hasOwnPropertyCustom(ugsResponse, 'idToken')) {

        const playerId = ugsResponse["userId"] as string;
        const idToken = ugsResponse["idToken"] as string;

        const params = {
          firstName: first,
          lastName: last,
          email: email,
          userId: userId,
          twitchName: twitchName,
        }

        const cloudSaveResponse = await savePlayerData(params, idToken, playerId, PROJECT_ID);
        if (cloudSaveResponse?.status != 200) {
          formResponse["status"] = 400
        }
      } else {
        // signup not successful, Twitch name already registered
        formResponse["status"] = 409
      }
    }

    return NextResponse.json({formResponse});

  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err });
  }
}


async function getAccessToken() {
  try {
    const response = await fetch('http://localhost:3000/api/twitch/getAppAccessTokenAuth', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
      }),
    });
  
    if (!response.ok) {
      throw new Error(`Failed to get Twitch Access Token: ${response.statusText}`);
    }
  
    const responseData = await response.json();

    const accessToken = responseData["access_token"]
    console.log('Access Token:', accessToken);

    return accessToken;

  } catch (error) {
    console.error('Failed to get the access token:', error);
    throw new Error('Failed to fetch Twitch app access token:');
  }
}

async function getUserId(loginName: string, appAccessToken: string, clientId: string) {
  try {
    const response = await fetch('http://localhost:3000/api/twitch/getTwitchUserId', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loginName: loginName,
        appAccessToken: appAccessToken,
        clientId: clientId,
      }),
    });
  
    if (!response.ok) {
      throw new Error(`Failed to get UserId: ${response.statusText}`);
    }
  
    const responseData = await response.json();

    const userId = responseData["userId"]
    console.log('User ID:', userId);

    return userId;

  } catch (error) {
    console.error('Failed to get Twitch UserId:', error);
    throw new Error('Failed to fetch Twitch UserId:');
  }
}

async function savePlayerData(params: object, idToken: string, playerId: string, projectId: string) {
  try {
    const response = await fetch('http://localhost:3000/api/ugs/cloudSave', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        params: params,
        idToken: idToken,
        playerId: playerId,
        projectId: projectId
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to save player data with Cloud Save: ${response.statusText}`);
    }
  
    const responseData = await response.json();

    console.log('Cloud Save Response: ', responseData);

    return responseData;

  } catch (error) {
    console.error('Failed to save player data with Cloud Save: ', error);
    throw new Error('Failed to save player data with Cloud Save:');
  }
}


async function ugsSignUpHandler(username: string, password: string) {
  try {
    const response = await fetch('http://localhost:3000/api/ugs/signup', {
      method: "GET",
      headers: {
        "username": username,
        "password": password,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to sign up: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;

  } catch (error) {

    console.error(error);
    return;
  }
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

function hasOwnPropertyCustom<X extends {}, Y extends PropertyKey>
  (obj: X, prop: Y): obj is X & Record<Y, unknown> {
  return obj.hasOwnProperty(prop);
}




// For webhook stuff
function  eventSubRequestOnline(userId: string): string {
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
            "broadcaster_user_id": userId
        },
        "transport": {
            "method": "webhook",
            "callback": "https://example.com/webhooks/callback",
            "secret": process.env.TWITCH_SECRET || ''
        }
    }
  
  
    return '';
  }
  