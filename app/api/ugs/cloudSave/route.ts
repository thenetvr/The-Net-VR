const PROJECT_ID = process.env.PROJECT_ID as string;

type paramsObject = {
    firstName: string,
    lastName: string,
    email: string,
    userId: string,
    twitchName: string,
  };


export default async function cloudSaveHandler(params: paramsObject, playerId: string, idToken: string) {
  try {
    const bodyParams = {"key": "playerData", "value": params};

    const response = await fetch(`https://cloud-save.services.api.unity.com/v1/data/projects/${PROJECT_ID}/players/${playerId}/items`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + idToken,
      },

      body: JSON.stringify(bodyParams),
    });

    if (!response.ok) {
      throw new Error(`Failed to save data items: ${response.statusText}`);
    }

    const responseStatus = {"status": 400}

    if (response.status === 200) {
        responseStatus.status = 200
    }

    return responseStatus;

  } catch (error) {

    console.error(error);
    return;
  }
}
