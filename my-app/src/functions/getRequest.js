export const getRequest = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("response not ok");
      const json = await response.json();
      throw json;
    }

    const json = await response.json();
    console.log("JSON: ", json);

    return json;
  } catch (err) {
    console.log("error in api request: ", err);
  }
};
