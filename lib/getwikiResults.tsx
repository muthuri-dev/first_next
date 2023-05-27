import React from "react";

export default async function getwikiResults(searchTearm: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: searchTearm,
    gsrlimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exintro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });
  const response = await fetch(
    "https://en.wikipedia.org/w/api.php?" + searchParams
  );
  return response.json();
}
