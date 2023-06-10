// import "./App.css";
// import { useState } from "react";
// import Hooks from "./Hooks";

// import GetApiCall from "./Component/GetApiCall";

// function App() {
//   const [changeName, setChangeName] = useState("Ashutosh");
//   const [changeButtonHover, setChangeButtonHover] = useState("Hover this");
//   const [changeColor, setChangeColor] = useState("blue");
//   const [changeBackgroundColor, setChangeBackgroundColor] = useState("yellow");
//   console.log("changeNmase", changeName);
//   const handleChangeName = () => {
//     setChangeName("Ashutosh Maurya qqq");
//     console.log("Test");
//   };
//   const handleChangeName2 = (e) => {
//     setChangeName("Delhi");
//     console.log("Test", e);
//   };
//   console.log("changeButtonHover", changeButtonHover);
//   const handleMouseMove = () => {
//     setChangeButtonHover("button changed name");
//     setChangeColor("red");
//     setChangeBackgroundColor("blue");
//     console.log("mouse move");
//   };
//   const handleMouseLeave = () => {
//     setChangeButtonHover("Hover this");
//     setChangeColor("blue");
//     setChangeBackgroundColor("yellow");
//   };
//   return (
//     <div className="App">
//       <div className="changeNameMainDiv w-25">
//         <h4 className="m-3 text-center">{changeName}</h4>
//         <div className="text-center">
//           <button onClick={handleChangeName} className="m-2">
//             ChangeName
//           </button>
//           <button onClick={handleChangeName2} className="m-2">
//             ChangeName2
//           </button>
//         </div>
//       </div>
//       <div style={{ marginTop: "1%" }}>
//         <button
//           style={{ color: changeColor, backgroundColor: changeBackgroundColor }}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//         >
//           {changeButtonHover}
//         </button>
//       </div>

//       <Hooks />

//       <GetApiCall />
//     </div>
//   );
// }

// export default App;
