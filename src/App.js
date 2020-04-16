import React from "react";

const App = () => {
  const profiles = [
    { name: "taro", age: 20 },
    { name: "hanako", age: 21 },
    { name: "jiro" },
  ];
  return (
    <div>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />;
      })}
    </div>
  );
};

const User = (props) => {
  return (
    <div>
      Hi, I'm {props.name}, and {props.age} years old!
    </div>
  );
};

User.defaultProps = {
  age: 1,
};

export default App;
