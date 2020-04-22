/*javascript フィルター機能
let list = [1,2,3,4,5,6,7,8,9]
let result = list.filter(item=>item > 5);
console.log(result);
*/
import React from "react";
import { hydrate } from "react-dom";
import App from "./components/App";

hydrate(<App />, document.getElementById("app"));
