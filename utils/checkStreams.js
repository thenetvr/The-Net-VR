export async function fetchData(url) {
    console.log("Here");
    try {
      const response = await fetch(url, {
        method: 'GET', // or 'POST', 'PUT', etc., based on your needs
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers here
        },
      });
  
      if (!response.ok) {
        console.log("Not okay!");
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      console.log(response);
      //const data = await response.json();
      //console.log(data);
      //return data;
      return response;
    } catch (error) {
      throw new Error(`There was a problem fetching the data: ${error}`);
    }
  }