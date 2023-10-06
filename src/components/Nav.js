// import React from "react";
let url = "https://picsum.photos/seed/picsum/200/300";

const Nav = () => {
  let value = Math.floor(Math.random() * 10);
  return (
    <>
      <div className="App">
        <p>{value}</p>
        {value === 7 ? <img src={url} /> : <h2>LOSS</h2>}
        {/* {value === 5 && <img src={url} />} */}
        <h1>Hello World</h1>
      </div>
    </>
  );
};

export default Nav;
