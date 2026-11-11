import React from "react";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        userInfo:{
            name: "dummy",
            location: "location"
        }
    };
    console.log("constructor")
  }

  async componentDidMount(){
    const apicall = await fetch("https://api.github.com/users/TMDineshgit")
    const res = await apicall.json()
    console.log(res)
    this.setState({
        userInfo: res
    })
  }

  componentDidUpdate(){
    console.log("after all render completed component did update")
  }

  componentWillUnmount(){
    console.log("component unmount")
  }

  render() {
    console.log("render class component")
    const { name, location, login } = this.state.userInfo
    return (
      <div>
        <h1>User Info</h1>
        <p>Name: {login}</p>
        <p>location: {location}</p>
      </div>
    );
  }
}

export default UserInfo;
