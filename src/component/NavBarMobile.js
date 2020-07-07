import React, { Component } from "react";
import "./Navbar.css";
import { Dropdown, ListGroup, Accordion, Card, Button } from "react-bootstrap";

class NavBarMobile extends Component {
  state = {
    leftItems: [
      {
        text: "کلاس ها",
        color: "#000000",
        icon: "university.png",
        width: "90px",
      },
      {
        text: "سوالات",
        color: "#000000",
        icon: "coding.svg",
        width: "90px",
      },
      {
        text: "مسابقات",
        color: "#000000",
        icon: "chocolate.svg",
        width: "100px",
      },
      {
        text: "استخدام",
        color: "#00B5AD",
        icon: "bag.svg",
        width: "90px",
      },
      {
        text: "کالج",
        color: "#E25252",
        icon: "college.svg",
        width: "70px",
      },
    ],
  };
  render() {
    return (
      <Accordion>
        <Card>
          <Card.Header
            class="d-flex flex-row-reverse"
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a
              class="d-flex flex-row-reverse p-1 ml-1 mouseBackground"
              href="#"
              style={{
                width: "60px",
                height: "60px",
                marginRight: "1px",
                fontFamily: "Tahoma",
                flexDirection: "row",
                justifyContent: "flex-right",
              }}
            >
              <img
                src={require("../assets/quera.svg")}
                style={{ width: "100%", height: "100%" }}
              ></img>
            </a>
            <ul
              className="nav navbar-nav navbar-left d-flex flex-row-reverse"
              style={{ flexDirection: "row", justifyContent: "flex-left" }}
            >
              <li>
                <a
                  className="d-flex flex-row-reverse p-1 ml-2 mouseBackground"
                  href="#"
                  style={{
                    width: "45px",
                    height: "60px",
                  }}
                >
                  <img
                    src={require("../assets/bell.svg")}
                    style={{
                      width: "25px",
                      height: "25px",
                      objectFit: "contain",
                      marginTop: "12px",
                    }}
                  ></img>
                </a>
              </li>
              <li className="mouseBackground" style={{ height: "60px" }}>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  <img
                    src={require("../assets/open-menu.svg")}
                    style={{ width: "25px", height: "25px" }}
                  ></img>
                </Accordion.Toggle>
              </li>
            </ul>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <ListGroup>
              {this.state.leftItems.map((item) => (
                <ListGroup.Item>
                  <a
                    style={{
                      alignSelf: "right",
                      alignItems: "center",
                      fontFamily: "Tahoma",
                      fontSize: "18px",
                    }}
                    className="d-flex flex-row-reverse"
                  >
                    <img
                      src={require("../assets/" + item.icon)}
                      style={{
                        width: "17px",
                        height: "17px",
                        marginTop: "2px",
                        marginLeft: "6px",
                      }}
                    ></img>
                    <div style={{ fontSize: "16px", color: item.color }}>
                      {item.text}
                    </div>
                  </a>
                </ListGroup.Item>
              ))}
              <ListGroup.Item href="#/action-1">
                <a
                  style={{
                    alignSelf: "right",
                    alignItems: "center",
                    fontFamily: "Tahoma",
                    fontSize: "18px",
                  }}
                  className="d-flex flex-row-reverse"
                >
                  <img
                    src={require("../assets/user.svg")}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                      fontFamily: "Tahoma",
                    }}
                  ></img>
                  محمدرضا پاکزادیان
                </a>
              </ListGroup.Item>
              <ListGroup.Item href="#/action-2">
                <a
                  style={{
                    alignSelf: "right",
                    alignItems: "center",
                    fontFamily: "Tahoma",
                    fontSize: "18px",
                  }}
                  className="d-flex flex-row-reverse"
                >
                  <img
                    src={require("../assets/settings.svg")}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  ></img>
                  تنظیمات
                </a>
              </ListGroup.Item>
              <ListGroup.Item href="#/action-3">
                <a
                  style={{
                    alignSelf: "right",
                    alignItems: "center",
                    fontFamily: "Tahoma",
                    fontSize: "18px",
                  }}
                  className="d-flex flex-row-reverse"
                >
                  <img
                    src={require("../assets/logout.svg")}
                    style={{
                      width: "20px",
                      height: "20px",
                      marginLeft: "10px",
                    }}
                  ></img>
                  خروج
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}

export default NavBarMobile;
