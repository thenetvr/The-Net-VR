import { NextResponse } from "next/server";

export async function POST(req:any) {
  try {
    const {loginName, appAccessToken, clientId} = await req.json();
    const response = await fetch(`https://api.twitch.tv/helix/users?login=${loginName}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + appAccessToken,
        'Client-Id': clientId,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get User Id: ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log(responseData);

    const userList = responseData["data"];

    let userId = "invalid";

    if (userList.length > 0) {
        userId = userList[0]['id'];
    }

    return NextResponse.json({"userId": userId});

  } catch (error) {
    console.error(error);

  }
}