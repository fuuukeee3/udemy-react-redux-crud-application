import React from "react";

// function App() {
//   return (
//     <div>
//       <label htmlFor="bar">bar</label>
//       <input
//         type="text"
//         onChange={() => {
//           console.log("Hi!");
//         }}
//       />
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
    </div>
  );
};

const Cat = () => {
  return <div>Meow!</div>;
};

export default App;
