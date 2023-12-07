import { Col, Layout, MenuProps, Row } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import DarkChocoLogo from "../../assets/logo/logo1.svg";
import ChocoLogo from "../../assets/logo/logo2.svg";
import "../layout/index.less";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "antd/es/typography/Link";
import { MenuComponentHeader } from "./menuComponent";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";

const LayoutPage = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout className="layout-page">
      <div className="logo">
        <img src={DarkChocoLogo} alt="ChocoManiac" style={{ width: "150px" }} />
      </div>
      <Header className="layout-header">
        <MenuComponentHeader
          mode="horizontal"
          onClick={onClick}
          current={current}
        />
      </Header>
      <Content className="layout-page-content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Content>
      <Footer className="footer">
        <div className="logo-footer">
          <img src={ChocoLogo} alt="ChocoManiac" style={{ width: "150px" }} />
          <p className="footer-des">A tiny space for Chocoholics</p>
        </div>
        <div className="row-footer">
          <Row>
            <Col className="gutter-row" span={8}>
              <div className="open">
                <Title level={3} className="footer-heading">
                  Open times
                </Title>
                <Row className="open-time-row">
                  <Col className="gutter-row" span={12}>
                    <Paragraph>T2, T3, T4, T7:</Paragraph>
                    <Paragraph>T5, T6:</Paragraph>
                    <Paragraph>Chủ Nhật:</Paragraph>
                  </Col>
                  <Col className="gutter-row" span={12}>
                    <Paragraph>09:00 - 17:00</Paragraph>
                    <Paragraph>09:00 - 20:00</Paragraph>
                    <Paragraph>CLOSED</Paragraph>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col className="gutter-row" span={8} style={{ marginTop: "16px" }}>
              <div className="about">
                <Paragraph className="about-footer">
                  Don't be shy if you are too Choco-NUTS
                </Paragraph>
                <div className="icon-social">
                  <Link href="https://www.facebook.com/profile.php?id=100064071968092">
                    <FacebookFilled />
                  </Link>
                  <Link href="https://www.instagram.com/chocomaniac.cake">
                    <InstagramFilled />
                  </Link>
                </div>
              </div>
            </Col>
            <Col className="gutter-row" span={8}>
              <div className="contact">
                <Title level={3} className="footer-heading">
                  Contact
                </Title>
                <div className="address">
                  <Paragraph>
                    Address:
                    <Link
                      href="https://maps.app.goo.gl/WgdrSftUupZSdXfe7"
                      target="_blank"
                    >
                      Hai Bà Trưng, Hà Nội
                    </Link>
                  </Paragraph>
                  <Paragraph>
                    Email:
                    <Link href="mailto:chocomaniaccake@gmail.com">
                      chocomaniaccake@gmail.com
                    </Link>
                  </Paragraph>
                  <Paragraph>
                    Phone:
                    <Link href="tel:0927519915">092 751 99 15</Link>
                  </Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-footer">
          <p>© 2024 Le Kim Cuong, All Rights Reserved</p>
        </div>
      </Footer>
    </Layout>
  );
};

export default LayoutPage;
