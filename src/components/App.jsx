import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Gif from "./Gif";
import GifList from "./GifList";

const App = () => {
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  // const selectedGifId = "TilmLMmWrRYYHjLfub";
  const [selectedGifId, setSelectedGifId] = useState("TilmLMmWrRYYHjLfub");
  const [gifIds, setGifIds] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);
  //setselectedGifId("HuVCpmfKheI2Q")
  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif gifId={selectedGifId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedGifId={setSelectedGifId} />
      </div>
    </div>
  );
};

export default App;
