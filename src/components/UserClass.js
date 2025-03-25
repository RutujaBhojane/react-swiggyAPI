import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
      userInfo: {
        name: "dummy",
        id: "default",
        //avatar_url: "https://dummy-photo.com",
      },
    };

    //console.log(this.props.name1 + " constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name1 + " component Did Mount");
    const data = await fetch("https://api.github.com/users/RutujaBhojane");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    //console.log(json);
  }

  componentDidUpdate() {
    //console.log("component did update");
  }

  componentWillUnmount() {
    //console.log("component Will Unmount");
  }

  render() {
    const { name1 } = this.props;
    const { count, count2 } = this.state;
    const { name, id, avatar_url } = this.state.userInfo;

    //console.log(this.props.name1 + " render");

    return (
      <div className="user-card m-4 p-4 bg-red-100 rounded-lg">
        <img src={avatar_url}></img>
        <h2>Count : {count}</h2>
        <h2>Count2 : {count2}</h2>
        <button
          onClick={() => {
            //Never update state variable directly. eg. this.state.count = this.state.count+1;
            this.setState({
              count: this.state.count + 1, //this.setState() function will update the count variable.
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name : {name1}</h2>
        <h2>Name : {name}</h2>
        <h3>id : {id}</h3>
        <h4>Contact : _rutuja.14_</h4>
      </div>
    );
  }
}

export default UserClass;

/*

---MOUNTING PHASE
1.constructor(dummy data)
2.render(dummy data)
3.<HTML loaded i.e. component loaded on UI with dummy data>
4.component Did Mount
5.API Call
6.<this.setState() - state variable is updated

---UPDATE PHASE
1.render(API DATA)
2.<HTML loaded (NEW API DATA)
3.component Did Update


*/
