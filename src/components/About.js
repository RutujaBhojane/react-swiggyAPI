import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Rendor");
    return (
      <div>
        <h1>About class Component</h1>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-semibold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Grubify food ordering application</h2>
        <UserClass name1={"First Class"} />
        <UserClass name1={"Second Class"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Grubify food ordering application</h2>

//       <UserClass name={"Rutuja Class"}/>
//     </div>
//   );
// };

export default About;
