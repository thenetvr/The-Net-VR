import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const { params, idToken, playerId, projectId } = await req.json();

    const bodyParams = {"key": "playerData", "value": params};

    const response = await fetch(`https://cloud-save.services.api.unity.com/v1/data/projects/${projectId}/players/${playerId}/items`, {
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

    return NextResponse.json(responseStatus);

  } catch (error) {

    console.error(error);
    return;
  }
}
