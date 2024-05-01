const setStorage = (key, data) => {
  try {
    const dataAsString = JSON.stringify(data);
    const encodedData = btoa(dataAsString);
    localStorage.setItem(key, encodedData);
  } catch (error) {
    console.error("Error storing data in localStorage:", error);
  }
};

const getStorage = (key) => {
  try {
    const encodedData = localStorage.getItem(key);
    // console.log("Encoded Data:", encodedData);
    if (!encodedData) {
      // console.log("No data found for key:", key);
      return null;
    }
    const decodedData = atob(encodedData);
    // console.log("Decoded Data:", decodedData);
    return JSON.parse(decodedData);
  } catch (error) {
    console.error("Error retrieving data from localStorage:", error);
    return null;
  }
};

const clearStorage = (key) => {
  localStorage.removeItem(key);
};

const storageHasData = () => localStorage.length > 0;
