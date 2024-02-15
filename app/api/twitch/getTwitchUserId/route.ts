const CLIENT_ID = process.env.TWITCH_CLIENT_ID || '';
const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET || '';


export default async function userIdHandler(loginName: string, appAccessToken: string) {
  try {

    const response = await fetch(`https://api.twitch.tv/helix/users?login=${loginName}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + appAccessToken,
        'Client-Id': CLIENT_ID,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get User Id: ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log(responseData);

    const userList = responseData["data"];

    let userId = 'invalid';

    if (userList.length > 0) {
        userId = userList[0]['id'];
    }

    return userId;

  } catch (error) {
    console.error(error);

  }
}