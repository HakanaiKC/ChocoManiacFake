import "../layout/index.less";
import {
  Col,
  Dropdown,
  Layout,
  MenuProps,
  Row,
  Select,
  Space,
  Typography,
  FloatButton,
  Divider,
  Flex,
  Button,
  theme,
  Drawer,
  Modal,
  Input,
} from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import ChocoLogo from "../../assets/logo/logo2.svg";
import { Suspense, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Link from "antd/es/typography/Link";
import { Link as LinkRouter } from "react-router-dom";
import { MenuComponentHeader } from "../../components/menuComponent";
import {
  CloseOutlined,
  FacebookFilled,
  InstagramFilled,
  MailFilled,
  MenuOutlined,
  PhoneFilled,
  SearchOutlined,
  ShoppingCartOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { LANGUAGES } from "../../constants/languages/index";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../stores/store";
import { setCurrentLink } from "../../stores/headerSlice";
import daily1 from "../../assets/menu/daily/choco-set.jpg";
import daily2 from "../../assets/menu/daily/chocoOrange-2.jpg";
import daily3 from "../../assets/menu/daily/dark-oreo-2.jpg";
import React from "react";

const LayoutPage = () => {
  const { i18n, t } = useTranslation("global");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { useToken } = theme;
  const { token } = useToken();
  const current = useSelector((state: RootState) => state.header.setCurrent);
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const onClick: MenuProps["onClick"] = (e) => {
    dispatch(setCurrentLink(e.key));
  };

  const onChangeLang = (value: string) => {
    i18n.changeLanguage(value);
    dispatch(setCurrentLink(t("header.home")));
  };

  const productList = [
    {
      key: "1",
      src: daily1,
      name: "basque burnt cheesecake",
      quantity: "2",
      price: 120000,
    },
    {
      key: "2",
      src: daily2,
      name: "choco orange",
      quantity: "1",
      price: 55000,
    },
    { key: "3", src: daily3, name: "dark oreo", quantity: "3", price: 65000 },
  ];

  const items: MenuProps["items"] = productList.map((product) => ({
    key: product.key,
    label: (
      <Flex gap="middle">
        <img src={product.src} width={"60px"} height={"60px"} />
        <Flex gap="middle" vertical style={{ width: "100%" }}>
          <Typography.Text strong style={{ textTransform: "capitalize" }}>
            {product.name}
          </Typography.Text>
          <Typography.Paragraph>
            {product.quantity} x {product.price}₫
          </Typography.Paragraph>
        </Flex>
        <CloseOutlined />
      </Flex>
    ),
  }));

  const contentStyle: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle: React.CSSProperties = {
    boxShadow: "none",
  };

  return (
    <Layout className="layout-page">
      <FloatButton.BackTop
        style={{
          width: 60,
          height: 60,
          backgroundColor: "#f6a56a",
        }}
        icon={<UpOutlined />}
      />
      <Header className="top-header">
        <Row justify={"space-between"}>
          <Col className="top-address" xxl={12} xl={12} md={12}>
            <Space>
              <Paragraph className="top-header-contact">
                <Link href="mailto:chocomaniaccake@gmail.com">
                  <MailFilled /> chocomaniaccake@gmail.com
                </Link>
              </Paragraph>
              <Paragraph className="top-header-contact">
                <Link href="tel:0927519915">
                  <PhoneFilled /> 092 751 99 15
                </Link>
              </Paragraph>
            </Space>
          </Col>
          <Col className="button-hamburger-top" xs={4} sm={4}>
            <Button onClick={() => setisDrawerOpen(true)}>
              <MenuOutlined />
            </Button>
          </Col>
          <Col className="right-col" xxl={12} xl={12} md={12} xs={20} sm={20}>
            <Link
              className="search-responsive"
              onClick={() => setModalOpen(true)}
            >
              <SearchOutlined style={{ fontSize: "1.25em" }} />
            </Link>

            <Dropdown
              placement="bottom"
              arrow
              menu={{ items }}
              dropdownRender={(menu) => (
                <div style={contentStyle}>
                  {React.cloneElement(menu as React.ReactElement, {
                    style: menuStyle,
                  })}
                  <Divider style={{ margin: 0 }} />
                  <Row style={{ padding: 8 }} gutter={10}>
                    <Col xxl={12} xl={12} md={12} xs={24} sm={24}>
                      <LinkRouter
                        to="/cart"
                        onClick={() => dispatch(setCurrentLink(""))}
                      >
                        <Button
                          block
                          style={{
                            backgroundColor: "#4b2d25",
                            color: "#f3ede1",
                            textTransform: "uppercase",
                            fontWeight: "600",
                          }}
                        >
                          {t("cart.viewCart")}
                        </Button>
                      </LinkRouter>
                    </Col>
                    <Col xxl={12} xl={12} md={12} xs={24} sm={24}>
                      <LinkRouter
                        to="/checkout"
                        onClick={() => dispatch(setCurrentLink(""))}
                      >
                        <Button
                          block
                          style={{
                            backgroundColor: "#1b110f",
                            color: "#f3ede1",
                            textTransform: "uppercase",
                            fontWeight: "600",
                          }}
                        >
                          {t("cart.checkout")}
                        </Button>
                      </LinkRouter>
                    </Col>
                  </Row>
                </div>
              )}
            >
              <Link className="cart-icon">
                <ShoppingCartOutlined style={{ fontSize: "1.5em" }} />
                <Typography.Text className="cart-item-number" strong>
                  99+
                </Typography.Text>
              </Link>
            </Dropdown>

            <LinkRouter
              className="login-link"
              to="/login"
              onClick={() => dispatch(setCurrentLink(""))}
            >
              {t("header.login")}
            </LinkRouter>
            <LinkRouter
              className="register-link"
              to="/register"
              onClick={() => dispatch(setCurrentLink(""))}
            >
              {t("header.register")}
            </LinkRouter>
            <Select
              defaultValue={i18n.language}
              style={{ width: "120px" }}
              onChange={onChangeLang}
              options={LANGUAGES.map(({ value, label }) => ({ value, label }))}
            />
          </Col>
        </Row>
      </Header>
      <div className="logo-wrapper">
        <img
          src={ChocoLogo}
          alt="ChocoManiac"
          className="logo"
          onClick={() => {
            dispatch(setCurrentLink(t("header.home"))), navigate("/");
          }}
          style={{ cursor: "pointer" }}
        />
      </div>
      <Header className="layout-header">
        <MenuComponentHeader inLine onClick={onClick} current={current} />
      </Header>

      <Header className="button-hamburger">
        <Button onClick={() => setisDrawerOpen(true)}>
          <MenuOutlined />
        </Button>
      </Header>

      <Drawer
        placement="right"
        onClose={() => setisDrawerOpen(false)}
        open={isDrawerOpen}
        className="menu-hamburger"
      >
        <MenuComponentHeader
          inLine={false}
          onClick={onClick}
          current={current}
        />
      </Drawer>

      <Content className="layout-page-content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Content>
      <Footer className="footer">
        <div className="logo-footer">
          <img src={ChocoLogo} alt="ChocoManiac" className="logo" />
          <p className="footer-des">A tiny space for Chocoholics</p>
        </div>
        <div className="row-footer">
          <Row>
            <Col
              className="gutter-row open-time-order"
              xxl={8}
              xl={8}
              md={24}
              xs={24}
            >
              <div className="open">
                <Title level={3} className="footer-heading">
                  {t("footer.openTimes")}
                </Title>
                <Row className="open-time-row">
                  <Col
                    className="gutter-row left-col"
                    xxl={12}
                    xl={12}
                    md={11}
                    xs={11}
                  >
                    <Paragraph>{t("footer.day")}</Paragraph>
                  </Col>
                  <Col xxl={0} xl={0} md={1} xs={1}></Col>
                  <Col
                    className="gutter-row right-col"
                    xxl={12}
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Paragraph>09:00 - 20:00</Paragraph>
                  </Col>
                </Row>
                <Row className="open-time-row">
                  <Col
                    className="gutter-row left-col"
                    xxl={12}
                    xl={12}
                    md={11}
                    xs={11}
                  >
                    <Paragraph>{t("footer.sunday")}</Paragraph>
                  </Col>
                  <Col xxl={0} xl={0} md={1} xs={1}></Col>
                  <Col
                    className="gutter-row right-col"
                    xxl={12}
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Paragraph>{t("footer.closed")}</Paragraph>
                  </Col>
                </Row>
                <Paragraph className="warn-heading">
                  {t("footer.preOrder")}
                </Paragraph>
              </div>
            </Col>

            <Col
              className="gutter-row about-footer-order"
              xxl={8}
              xl={8}
              md={24}
              xs={24}
              style={{ marginTop: "16px" }}
            >
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

            <Col
              className="gutter-row address-order"
              xxl={8}
              xl={8}
              md={24}
              xs={24}
            >
              <div className="contact">
                <Title level={3} className="footer-heading">
                  {t("footer.contact")}
                </Title>
                <div className="address">
                  <Paragraph>
                    {t("footer.address")}:
                    <Link
                      href="https://maps.app.goo.gl/DW2iqRcpwZ5Znz1K8"
                      target="_blank"
                    >
                      7 Trần Thánh Tông, P. Bạch Đằng, Hai Bà Trưng, Hà Nội
                    </Link>
                  </Paragraph>
                  <Paragraph>
                    Email:
                    <Link href="mailto:chocomaniaccake@gmail.com">
                      chocomaniaccake@gmail.com
                    </Link>
                  </Paragraph>
                  <Paragraph>
                    {t("footer.phone")}:
                    <Link href="tel:0927519915">092 751 99 15</Link>
                  </Paragraph>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="bottom-footer">
          <p>© 2024 CuongLK, All Rights Reserved</p>
        </div>
      </Footer>

      <Modal
        className="modal-search"
        title={
          <Typography.Title level={3} className="modal-header">
            {t("homepage.search")}
          </Typography.Title>
        }
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={[
          <div className="button-modal-group">
            <Button
              key="cancel"
              onClick={() => setModalOpen(false)}
              className="cancelButton"
            >
              {t("common.cancel")}
            </Button>
            ,
            <Button
              key="submit"
              className="searchButton"
              onClick={() => setModalOpen(false)}
            >
              {t("common.search")}
            </Button>
          </div>,
        ]}
      >
        <Input
          size="large"
          placeholder={t("homepage.searchPlaceholder")}
          prefix={<SearchOutlined />}
        />
      </Modal>
    </Layout>
  );
};

export default LayoutPage;
