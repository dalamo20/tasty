"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const API_ID = "f78a7304";
const API_KEY = "2b344c538e4e930bd2d20ca6f81a6cfb";
const TYPE = "public";

/**
 *
 * @param {Array} queries Query array
 * @param {Function} successCallback Success callback function
 */

export const fetchData = async function (queries, successCallback) {
  const query = queries
    ?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B");

  const url = `${ACCESS_POINT}?app_id=${API_ID}&app_key=${API_KEY}&type=${TYPE}${
    query ? `&${query}` : ""
  }`;

  const response = await fetch(url);

  if (response.ok) {
    const data = response.json();
    successCallback(data);
  }
};
