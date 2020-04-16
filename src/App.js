import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name: "taro", age: 20 },
    { name: "hanako", age: 21 },
    { name: "no name", age: 30 },
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};

export default App;
