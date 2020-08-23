import React from "react";

// eslint-disable-next-line no-unused-vars
let ListContext;

export default ListContext = React.createContext(JSON.parse(localStorage.getItem("list")));
