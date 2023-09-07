import { useState, useEffect } from "react";

import React from "react";

export default function BeeInfoPage() {
  const [page, SetPage] = useState("");

  async function LoadData() {
    try {
      let res = await fetch(
        "https://en.wikipedia.org/wiki/Honey_bee#:~:text=While%20about%2020%2C000%20species%20of,)%3B%20Apis%20florea%20(the%20red"
      );
      let data = await res.json();
      //SetPage(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    LoadData();
  }, []);
  return (
    <>
      <h1>Bee Info Pages</h1>
      <p>Here You Can Learn More About Bees...</p>
    </>
  );
}
