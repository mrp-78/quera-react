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
                padding: "5px"
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
                <h2>Column 1</h2>
                <p>Some text..</p>
              </div>
              <div class="column2">
                <h2>Column 2</h2>
                <p>Some text..</p>
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
