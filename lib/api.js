export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API || "http://localhost:1337"
  }${path}?populate=*`;
}

export async function fetchAPI(path) {
  const requesturl = getStrapiURL(path);
  const response = await fetch(requesturl);
  const data = await response.json();
  return data;
}
