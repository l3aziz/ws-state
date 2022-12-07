import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    Person: {
      fullName: "Mohamed aziz gtari",
      bio: "Teaching You the Art Of Coding",
      imgSrc:
        "https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/300379143_3262941180654988_9104706331710546147_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JBnneSg5gEoAX-xmDGj&_nc_ht=scontent.ftun15-1.fna&oh=00_AfDc0162-WTCKOQBAimKxSdSeWzl3rJxa8WTrKFWFtSgqA&oe=6393E38C",
      profession: "DM for App & Web Development",
    },
    show: true,
    timer: 0,
  };

  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }
  render() {
    return (
      <div>
        {this.state.show && (
          <>
            <h1 style={{ color: "red" }}>{this.state.Person.fullName}</h1>
            <h2>{this.state.Person.bio}</h2>
            <img
              src={this.state.Person.imgSrc}
              alt="Aziz"
              style={{ width: "30%", borderRadius: "100%" }}
            ></img>
            <h2>{this.state.Person.profession}</h2>

            <h2> {this.state.timer}</h2>
            <br></br>
          </>
        )}
      </div>
    );
  }
}
