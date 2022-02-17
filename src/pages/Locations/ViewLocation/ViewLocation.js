import React, { useEffect, useState } from "react";

function ViewLocation() {
  const [locationData, setlocationData] = useState([]);

  const getLocationData = async () => {
    const data = await fetch(
      "http://localhost:3001/viewlocation/2a0eb6a9-5070-4edf-9604-9954a89ac8f7"
    );
    const result = await data.json();
    console.log(result);
  };
  useEffect(() => {
    getLocationData();
  }, []);
  return <div></div>;
}

export default ViewLocation;
