import { useState, useEffect } from "react";

import React from "react";

export default function BeeInfoPage() {
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const url= "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&titles=Bee";
  // async function LoadData() {
  //   debugger;
  //   try {
  //     let res = await fetch(
  //       "https://en.wikipedia.org/w/api.php?action=query&titles=Bee&prop=extracts&format=json"
  //     );
  //     let data = await res.json();
  
  //     console.log(data);
   
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const extractAPIContents = json => {
    const { pages } = json.query;
    return Object.keys(pages).map(id => pages[id].extract);
  };
const getContents = async () => {
    let resp;
    let contents = [];
    setLoading(true);
    try {
      resp = await fetch(url);
      const json = await resp.json();
      contents = extractAPIContents(json);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
    setContents(contents);
  };
  console.log(contents);
  useEffect(() => {
   
  getContents();
  }, []);
  if (loading) return "Loading..."
  if (error) return "An Error Has Accurred :("
  return (
    <>
      <h1>Bee Info Pages</h1>
      <p>Here You Can Learn More About Bees...</p>
      {
        contents.map(content=>(
          <div dangerouslySetInnerHTML={{ __html:content}}/>
        ))
      }
    </>
  );
}
