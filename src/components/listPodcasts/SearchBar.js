import { useState } from "react";
const SearchBar = ({keyword, onChange}) => {
    const [inputText, setInputText] = useState("");
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"none", padding:"0.5rem"};
    let inputHandler = (e) => {
      //convert input text to lower case
      let lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    return (
      <input 
       style={BarStyle}
       key="search-bar"
       value={inputText}
       placeholder={"Filter Podcast..."}
       onChange={inputHandler}
      />
    );
  }
  
export default SearchBar;