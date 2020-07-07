import React, { Component } from "react";
import "./FirstPage.css";
import { Card, ListGroup, Carousel } from "react-bootstrap";

class FirstPage extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="rcolumn">
            <div
              style={{
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.39)",
                padding: "5px",
              }}
            >
              <Carousel indicators={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("../assets/slide1.jpg")}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={require("../assets/slide2.jpg")}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div class="row2">
              <div class="column2">
                <div
                  class="d-flex flex-row"
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <div
                    class="d-flex flex-row"
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-right",
                    }}
                  >
                    <img
                      src={require("../assets/code-interface-symbol-of-signs.svg")}
                      style={{
                        width: "35px",
                        height: "35px",
                      }}
                    />
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#E25252",
                        margin: "5px",
                        marginRight: "15px",
                        fontFamily: "Tahoma",
                      }}
                    >
                      تمرین کنید
                    </div>
                  </div>
                  <a
                    href="#"
                    style={{
                      fontSize: "12px",
                      flexDirection: "row",
                      justifyContent: "flex-left",
                      marginTop: "15px",
                    }}
                  >
                    همه سوالات
                  </a>
                </div>
                <div
                  style={{
                    borderColor: "#E25252",
                    borderTopWidth: "4px",
                    borderLeftWidth: "0",
                    borderRightWidth: "0",
                    borderBottomWidth: "0",
                    borderStyle: "solid",
                    borderRadius: "10px",
                    marginTop: "5px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    class="list-group-item"
                    style={{
                      borderTopWidth: "0",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: "10px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "15px",
                        fontWeight: "bold",
                        marginBottom: "5px",
                      }}
                    >
                      تعداد سوالات حل شده
                    </div>
                    <div
                      class="d-flex flex-row"
                      style={{ justifyContent: "center" }}
                    >
                      <div style={{ margin: "5px", marginLeft: "20px" }}>
                        <div
                          style={{
                            color: "#f2711c",
                            fontWeight: "bold",
                            fontSize: "30px",
                          }}
                        >
                          34
                        </div>
                        <a href="#" style={{ fontSize: "15px" }}>
                          تکنولوژي
                        </a>
                      </div>
                      <div style={{ margin: "5px", marginLeft: "20px" }}>
                        <div
                          style={{
                            color: "#dc4040",
                            fontWeight: "bold",
                            fontSize: "30px",
                          }}
                        >
                          95
                        </div>
                        <a href="#" style={{ fontSize: "15px" }}>
                          مسابقه
                        </a>
                      </div>
                      <div style={{ margin: "5px", marginLeft: "20px" }}>
                        <div
                          style={{
                            color: "#25c257",
                            fontWeight: "bold",
                            fontSize: "30px",
                          }}
                        >
                          41
                        </div>
                        <a href="#" style={{ fontSize: "15px" }}>
                          دانشگاهی
                        </a>
                      </div>
                      <div style={{ margin: "5px" }}>
                        <div
                          style={{
                            color: "#00B5AD",
                            fontWeight: "bold",
                            fontSize: "30px",
                          }}
                        >
                          0
                        </div>
                        <a href="#" style={{ fontSize: "15px" }}>
                          المپیاد
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="list-group-item"
                  style={{
                    borderTopWidth: "0",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "10px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "15px",
                      marginBottom: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    سوالات پیشنهادی
                  </div>

                  <div
                    class="d-flex flex-row"
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      paddingTop: "10px",
                    }}
                  >
                    <a
                      href="#"
                      class="d-flex flex-row"
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-right",
                        fontSize: "15px",
                      }}
                    >
                      مسئله آب
                    </a>
                    <div
                      class="d-flex flex-row"
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-right",
                        fontSize: "15px",
                      }}
                    >
                      آسان
                    </div>
                    <div
                      class="d-flex flex-row"
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-right",
                        fontSize: "15px",
                      }}
                    >
                      475 حل
                    </div>
                  </div>
                  <hr
                    class="dolid"
                    style={{ margin: "10px", padding: "0" }}
                  ></hr>
                  <div
                    class="d-flex flex-row"
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <a
                      href="#"
                      class="d-flex flex-row"
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-right",
                        fontSize: "15px",
                      }}
                    >
                      ترامپ لین
                    </a>
                    <div
                      class="d-flex flex-row"
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-right",
                        fontSize: "15px",
                      }}
                    >
                      متوسط
                    </div>
                    <div
                      class="d-flex flex-row"
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-right",
                        fontSize: "15px",
                      }}
                    >
                      125 حل
                    </div>
                  </div>
                  <hr
                    class="dolid"
                    style={{ margin: "10px", padding: "0" }}
                  ></hr>
                  <div
                    class="d-flex flex-row"
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                    }}
                  >
                    <a
                      href="#"
                      class="d-flex flex-row"
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-right",
                        fontSize: "15px",
                      }}
                    >
                      جوراب ها
                    </a>
                    <div
                      class="d-flex flex-row"
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-right",
                        fontSize: "15px",
                      }}
                    >
                      سخت
                    </div>
                    <div
                      class="d-flex flex-row"
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-right",
                        fontSize: "15px",
                      }}
                    >
                      26 حل
                    </div>
                  </div>
                </div>
              </div>
              <div class="column2">
                <div
                  class="d-flex flex-row"
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "5px",
                  }}
                >
                  <div
                    class="d-flex flex-row"
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-right",
                    }}
                  >
                    <img
                      src={require("../assets/university-building.svg")}
                      style={{
                        width: "35px",
                        height: "35px",
                      }}
                    />
                    <div
                      style={{
                        fontWeight: "bold",
                        color: "#00B5AD",
                        margin: "5px",
                        marginRight: "15px",
                      }}
                    >
                      آخرین کلاس های من
                    </div>
                  </div>
                  <a
                    href="#"
                    style={{
                      fontSize: "12px",
                      flexDirection: "row",
                      justifyContent: "flex-left",
                      marginTop: "15px",
                    }}
                  >
                    همه کلاس ها
                  </a>
                </div>
                <div
                  style={{
                    borderColor: "#00B5AD",
                    borderTopWidth: "4px",
                    borderLeftWidth: "0",
                    borderRightWidth: "0",
                    borderBottomWidth: "0",
                    borderStyle: "solid",
                    borderRadius: "10px",
                    marginTop: "5px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    class="list-group-item d-flex flex-row"
                    style={{
                      borderTopWidth: "0",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: "10px 20px",
                    }}
                  >
                    <div
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-right",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      <a href="#">طراحی الگوریتم ها</a>
                      <div style={{ color: "gray", fontSize: "12px" }}>
                        دکتر رامک قوامی زاده
                      </div>
                    </div>
                    <div style={{ fontSize: "12px" }}>
                      آخرین تمرین:{" "}
                      <div>
                        <a href="3">تمرین دوم</a>
                      </div>
                    </div>
                    <div
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-left",
                        fontSize: "15px",
                        fontSize: "12px",
                      }}
                    >
                      <div>72 عضو</div>
                      <div>بهار 98-99</div>
                    </div>
                  </div>
                  <div
                    class="list-group-item d-flex flex-row"
                    style={{
                      borderTopWidth: "0",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: "10px 20px",
                    }}
                  >
                    <div
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-right",
                        fontSize: "15px",
                        fontWeight: "bold",
                      }}
                    >
                      <a href="#">ساختمان داده ها</a>
                      <div style={{ color: "gray", fontSize: "12px" }}>
                        دکتر ابراهیمی مقدم
                      </div>
                    </div>
                    <div style={{ fontSize: "12px" }}>
                      آخرین تمرین:{" "}
                      <div>
                        <a href="3">پروژه پایانی</a>
                      </div>
                    </div>
                    <div
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-left",
                        fontSize: "15px",
                        fontSize: "12px",
                      }}
                    >
                      <div>41 عضو</div>
                      <div>پاییز 98-99</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="lcolumn">
            <Card style={{ marginBottom: "10px" }}>
              <Card.Body>
                <Card.Title style={{ fontWeight: "bold" }}>
                  پروفایل تخصصی شما
                </Card.Title>
                <Card.Text>
                  پروفایل شما در صورت تمایل در اختیار برترین شرکت‌های فعال در
                  حوزه IT قرار خواهد گرفت تا برای استخدام با شما تماس بگیرند.
                </Card.Text>
                <button type="button" class="btn btn-primary">
                  تکمیل پروفایل
                </button>
              </Card.Body>
            </Card>
            <Card style={{ marginBottom: "10px" }}>
              <Card.Header style={{ fontWeight: "bold" }}>
                آخرین مطالب بلاگ
              </Card.Header>
              <ListGroup variant="flush" style={{ textAlign: "right" }}>
                <ListGroup.Item>
                  <a href="#" style={{ fontWeight: "bold" }}>
                    چالش Diff Code
                  </a>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "15px", marginTop: "5px" }}
                  >
                    17 فروردین 1399 ساعت 11:49
                  </Card.Subtitle>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#" style={{ fontWeight: "bold" }}>
                    مسابقه code with me
                  </a>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "15px", marginTop: "5px" }}
                  >
                    21 اسفند 1398 ساعت 14:06
                  </Card.Subtitle>
                </ListGroup.Item>
              </ListGroup>
            </Card>
            <Card>
              <Card.Header style={{ fontWeight: "bold" }}>
                فرصت های شغلی
              </Card.Header>
              <ListGroup variant="flush" style={{ textAlign: "right" }}>
                <ListGroup.Item>
                  <a href="#" style={{ fontWeight: "bold" }}>
                    برنامه نویس اندروید و وب
                  </a>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "15px", marginTop: "5px" }}
                  >
                    گروه فناوری آیتک
                  </Card.Subtitle>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#" style={{ fontWeight: "bold" }}>
                    senior react native developer
                  </a>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "15px", marginTop: "5px" }}
                  >
                    ایده پرداز عصر ویدا
                  </Card.Subtitle>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#" style={{ fontWeight: "bold" }}>
                    senior front end developer
                  </a>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "15px", marginTop: "5px" }}
                  >
                    ایده پرداز عصر ویدا
                  </Card.Subtitle>
                </ListGroup.Item>
                <ListGroup.Item>
                  <a href="#" style={{ fontWeight: "bold" }}>
                    senior php developer
                  </a>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ fontSize: "15px", marginTop: "5px" }}
                  >
                    ایده پرداز عصر ویدا
                  </Card.Subtitle>
                </ListGroup.Item>
              </ListGroup>
              <Card.Footer>
                <a href="#" style={{ fontSize: "15px" }}>
                  مشاهده همه
                </a>
              </Card.Footer>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
