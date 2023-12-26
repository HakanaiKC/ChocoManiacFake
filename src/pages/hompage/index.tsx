import "./index.less";
import React from "react";
import {
  Carousel,
  Col,
  Row,
  Space,
  Typography,
  Form,
  Button,
  Input,
} from "antd";
import slide1 from "../../assets/slides/1.png";
import slide2 from "../../assets/slides/2.png";
import slide3 from "../../assets/slides/3.png";
import slide4 from "../../assets/slides/4.png";
import giangSinhVid from "../../assets/menu/christmas/giang-sinh-vid.mp4";
import valentineVid from "../../assets/menu/valentine/valentine-video.mp4";
import birthdayVid from "../../assets/menu/sinh-nhat/birthday-vid-1.mp4";
import logo from "../../assets/logo/logo2.svg";
import { useTranslation } from "react-i18next";
import TextArea from "antd/es/input/TextArea";
import {
  emailValidator,
  nameValidator,
  phoneValidator,
} from "../../constants/inputs/contact";
import MansoryComponent from "../../components/masonry component/masonryComponent";

const HomePage: React.FC = () => {
  const { t } = useTranslation("global");
  const [form] = Form.useForm();

  const items = [
    {
      src: () => import("../../assets/menu/daily/choco-set.jpg"),
      name: "basque burnt cheesecake",
      price: "62k/pc",
      additional: "120k/set",
    },
    {
      src: () => import("../../assets/menu/daily/chocoOrange-2.jpg"),
      name: "choco orange",
      price: "55k/2pcs",
    },
    {
      src: () => import("../../assets/menu/daily/dark-oreo-2.jpg"),
      name: "dark oreo",
      price: "65k/box",
    },
    {
      src: () => import("../../assets/menu/daily/double-chocolate.jpg"),
      name: "double chocolate cup",
      price: "50k/2pcs",
    },
    {
      src: () => import("../../assets/menu/daily/tiramisu-cup-1.jpg"),
      name: "chocomisu",
      price: "55k",
    },
    {
      src: () => import("../../assets/menu/daily/red-velvet-roll-2.jpg"),
      name: "red & roll",
      price: "65k/box",
    },
    {
      src: () => import("../../assets/menu/daily/brownie-2.jpg"),
      name: "cheese brownies",
      price: "75k/box",
      additional: "150g - 180g",
    },
    {
      src: () => import("../../assets/menu/daily/daily-cup-red-velvet.png"),
      name: "red velvet",
      price: "55k",
    },
  ];

  return (
    <>
      <div className="slide">
        <Carousel autoplay draggable autoplaySpeed={9000}>
          <img src={slide4} alt="christmas menu" />
          <img src={slide1} alt="daily menu" />
          <img src={slide2} alt="random" />
          <img src={slide3} alt="valentine menu" />
        </Carousel>
      </div>
      <div className="homepage-wrapper daily">
        <div className="homepage-title">
          <Typography.Title level={2}>
            {t("homepage.dailyCake")}
          </Typography.Title>
          <Typography.Title level={4}>{t("footer.preOrder")}</Typography.Title>
          <MansoryComponent
            items={items}
            column={{ 425: 1, 640: 2, 768: 2, 1024: 3, 1280: 4 }}
          />
        </div>
      </div>
      <div className="homepage-wrapper about-us">
        <div className="homepage-title">
          <Typography.Title level={2}>{t("header.about")}</Typography.Title>
        </div>

        <Space direction="vertical" className="about-wrapper">
          <img src={logo} alt="ChocoManiacFake" />
          <Typography.Title level={3}>ChocoManiacFake</Typography.Title>
          <Typography.Text>
            Chocomaniac (est.2020) được sinh ra từ một chiếc chủ đam mê
            chocolate rất nhiều.
          </Typography.Text>
          <Typography.Text>
            Ở đây Tớ bán đồ ngọt làm từ chocolate
          </Typography.Text>
          <Typography.Text>
            Hãy đến với Tớ để thảo mãn cơn "nghiện" chocolate bằng cả trái tim
            nhé
          </Typography.Text>
          <Typography.Text italic>
            "The Treats for Your Happiness"
          </Typography.Text>
        </Space>
      </div>
      <div className="homepage-wrapper special-day">
        <div className="homepage-title">
          <Typography.Title level={2}>
            {t("homepage.holidayPastries")}
          </Typography.Title>
          <Typography.Title level={4}>
            {t("homepage.aboutDes")}
          </Typography.Title>
        </div>
        <div className="holiday-wrapper">
          <div className="holiday-items-wrapper">
            <Typography.Paragraph>{t("common.christmas")}</Typography.Paragraph>
            <video src={giangSinhVid} autoPlay loop muted />
          </div>

          <div className="holiday-items-wrapper">
            <Typography.Paragraph>
              {t("homepage.valentine")}
            </Typography.Paragraph>
            <video src={valentineVid} autoPlay loop muted />
          </div>

          <div className="holiday-items-wrapper">
            <Typography.Paragraph>{t("common.birthday")}</Typography.Paragraph>
            <video src={birthdayVid} autoPlay loop muted />
          </div>
        </div>
      </div>
      <div className="homepage-wrapper contact-hompage">
        <div className="homepage-title">
          <Typography.Title level={2}>{t("homepage.contact")}</Typography.Title>
          <Form form={form} layout="vertical" autoComplete="on">
            <Row
              justify="space-between"
              align="top"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              <Col span={12}>
                <Form.Item
                  name="firstName"
                  label={t("form.firstNameLabel")}
                  rules={[
                    { required: true, message: t("form.notEmpty") },
                    {
                      validator: (_, value) => nameValidator(_, value, t),
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="lastName"
                  label={t("form.lastNameLabel")}
                  rules={[
                    { required: true, message: t("form.notEmpty") },
                    {
                      validator: (_, value) => nameValidator(_, value, t),
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row
              justify="space-between"
              align="top"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              <Col span={12}>
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      validator: (_, value) => emailValidator(_, value, t),
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="phone"
                  label={t("footer.phone")}
                  rules={[
                    { required: true, message: t("form.notEmpty") },
                    { validator: (_, value) => phoneValidator(_, value, t) },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="message"
              label={t("form.messageLabel")}
              rules={[{ required: true, message: t("form.notEmpty") }]}
            >
              <TextArea rows={5} />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" size="large" className="btn-form">
                {t("form.submit")}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default HomePage;
