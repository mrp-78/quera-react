import React, { Component } from "react";
import "./Navbar.css";
import { Dropdown } from "react-bootstrap";

class NavBarDesktop extends Component {
  state = {
    leftItems: [
      {
        text: "کلاس ها",
        color: "#000000",
        icon: "university.png",
        width: "90px"
      },
      {
        text: "سوالات",
        color: "#000000",
        icon: "coding.svg",
        width: "90px"
      },
      {
        text: "مسابقات",
        color: "#000000",
        icon: "chocolate.svg",
        width: "100px"
      },
      {
        text: "استخدام",
        color: "#00B5AD",
        icon: "bag.svg",
        width: "90px"
      },
      {
        text: "کالج",
        color: "#E25252",
        icon: "college.svg",
        width: "70px"
      }
    ]
  };
  render() {
    return (
      <nav className="topnav navbar navbar-expand navbar-light bg-light shadow-sm mb-5 bg-white rounded p-0 d-flex flex-row-reverse">
        <a
          class="navbar-brand d-flex flex-row-reverse p-1 ml-1 mouseBackground"
          href="#"
          style={{
            width: "60px",
            height: "60px",
            marginRight: "1px"
            // fontFamily: "Tohoma"
          }}
        >
          <img
            src={require("../assets/quera.svg")}
            style={{ width: "100%", height: "100%" }}
          ></img>
        </a>
        <div
          class="collapse navbar-collapse d-flex flex-row-reverse "
          id="navbarSupportedContent"
        >
          <ul class="nav navbar-nav navbar-right d-flex flex-row-reverse">
            {this.state.leftItems.map(item => (
              <li>
                <a
                  className="nav-link d-flex flex-row-reverse p-1 m-1 mouseBackground"
                  href="#"
                  style={{
                    width: item.width,
                    height: "35px",
                    // fontFamily: "Tohoma",
                    borderRadius: "8px"
                  }}
                >
                  <img
                    src={require("../assets/" + item.icon)}
                    style={{
                      width: "17px",
                      height: "17px",
                      marginTop: "2px",
                      marginLeft: "6px"
                    }}
                  ></img>
                  <div style={{ fontSize: "16px", color: item.color }}>
                    {item.text}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <ul class="nav navbar-nav navbar-left d-flex flex-row">
          <li>
            <Dropdown>
              <Dropdown.Toggle
                className="mouseBackground"
                variant="warning"
                style={{
                  width: "90px",
                  height: "60px",
                  backgroundColor: "white",
                  borderColor: "white",
                  alignContent: "center"
                }}
              >
                <img
                  className="rounded-circle ml-2"
                  src={require("../assets/mrp.png")}
                  style={{
                    width: "45px",
                    height: "45px",
                    objectFit: "contain"
                  }}
                ></img>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <a
                    style={{
                      alignSelf: "right",
                      alignItems: "center",
                      // fontFamily: "Iranian",
                      fontSize: "18px"
                    }}
                    className="d-flex flex-row-reverse"
                  >
                    <img
                      src={require("../assets/user.svg")}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "10px"
                      }}
                    ></img>
                    محمدرضا پاکزادیان
                  </a>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <a
                    style={{
                      alignSelf: "right",
                      alignItems: "center",
                      // fontFamily: "Tahoma",
                      fontSize: "18px"
                    }}
                    className="d-flex flex-row-reverse"
                  >
                    <img
                      src={require("../assets/settings.svg")}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "10px"
                      }}
                    ></img>
                    تنضیمات
                  </a>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <a
                    style={{
                      alignSelf: "right",
                      alignItems: "center",
                      // fontFamily: "Tahoma",
                      fontSize: "18px"
                    }}
                    className="d-flex flex-row-reverse"
                  >
                    <img
                      src={require("../assets/logout.svg")}
                      style={{
                        width: "20px",
                        height: "20px",
                        marginLeft: "10px"
                      }}
                    ></img>
                    خروج
                  </a>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <a
              className="d-flex flex-row-reverse p-1 ml-2 mouseBackground"
              href="#"
              style={{ width: "45px", height: "60px" }}
            >
              <img
                src={require("../assets/bell.svg")}
                style={{
                  width: "25px",
                  height: "25px",
                  objectFit: "contain",
                  marginTop: "12px"
                }}
              ></img>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBarDesktop;
