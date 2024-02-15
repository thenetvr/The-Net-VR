const PROJECT_ID = process.env.PROJECT_ID as string;

type paramsObject = {
    firstName: string,
    lastName: string,
    email: string,
    userId: string,
    twitchName: string,
  };

type dataItemObj = {
    "key": string,
    "value": string
} 

export default async function cloudSaveHandler(params: paramsObject, playerId: string, idToken: string) {
  try {
    console.log("Now inside cloudSave Handler");
    // format body for adding multiple data items
    const keyValueList: dataItemObj[] = [];
    // Add this for Typescript to know that we can call params[prop] safely
    // let prop: keyof typeof params;
    // for (prop in params) {
    //     if (Object.prototype.hasOwnProperty.call(params, prop))
    //     const objToAdd = {"key": prop, "value": params[prop]}
    //     keyValueList.push(objToAdd);
    // }
    Object.entries(params).forEach(([key, value]) => keyValueList.push({"key": key, "value": value}))
    console.log("keyValueList: " + keyValueList.toString());
    const bodyParams = {"data": keyValueList};
    console.log("bodyParams: " + bodyParams.toString())
    const response = await fetch(`https://cloud-save.services.api.unity.com/v1/data/projects/${PROJECT_ID}/players/${playerId}/items-batch`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + idToken,
      },

      body: new URLSearchParams(bodyParams.toString()),
    });
    console.log("URL PARAMS: " + new URLSearchParams(bodyParams.toString()));
    if (!response.ok) {
      throw new Error(`Failed to fetch token: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Data Response: " + data)
    return data;

  } catch (error) {

    console.error(error);
    return;
  }
}
