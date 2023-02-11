import React, { useState } from "react";
function DirectMap() {
  const [cacheSize, setCacheSize] = useState("");
  const [blockSize, setBlockSize] = useState("");
  const [kWays, setKways] = useState("");

  const [tag, setTag] = useState("");
  const [sets, setSets] = useState("");
  const [offsets, setOffsets] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[0]);

    // sets = log2(cachesize/ blocksize )
    // offset = log2(blocksize)
    // tag = 32 - sets and offsets
    setSets(
      Math.log2(
        parseInt(event.target[1].value) / parseInt(event.target[0].value)
      )
    );
    setOffsets(Math.log2(parseInt(event.target[1].value)));
    setTag(32 - sets - offsets);

    console.log(tag);
    console.log(sets);
    console.log(offsets);
  };
  return (
    <div>
      {" "}
      <h3>Dicreted Map</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Cahce Size
          <input
            value={cacheSize}
            onChange={(e) => setCacheSize(e.target.value)}
            placeholder="Enter Cache Size"
            type="text"
            name="cacheSize"
            required
          />
        </label>
        <br />
        <label>
          Block Size
          <input
            value={blockSize}
            onChange={(e) => setBlockSize(e.target.value)}
            placeholder="Enter Block Size"
            type="text"
            name="blockSize"
            required
          />
        </label>
        <br />
        <label>
          K-Ways
          <input
            value={kWays}
            onChange={(e) => setKways(e.target.value)}
            placeholder="Enter K-Ways"
            defaultValue={1}
            type="text"
            name="kWays"
            required
          />
        </label>

        <br />
        <button type="submit">Calculate</button>
      </form>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        <div>
          <p>Tag</p>
          <p>{tag}</p>
        </div>
        <div>
          <p>Sets</p>
          <p>{sets}</p>
        </div>
        <div>
          <p>Offsets</p>
          <p>{offsets}</p>
        </div>
      </div>
    </div>
  );
}

export default DirectMap;
