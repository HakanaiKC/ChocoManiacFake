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
import video1 from "../../assets/slides/1.mp4";
import video2 from "../../assets/slides/2.mp4";
import video3 from "../../assets/slides/3.mp4";
import video4 from "../../assets/slides/4.mp4";
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
import MansoryComponent from "../../components/masonryComponent";

const HomePage: React.FC = () => {
  const { t } = useTranslation("global");
  const [form] = Form.useForm();

  return (
    <>
      <div className="slide" style={{ margin: "auto" }}>
        <Carousel autoplay draggable pauseOnHover autoplaySpeed={9000}>
          <video src={video2} autoPlay loop muted />
          <video src={video1} autoPlay loop muted />
          <video src={video3} autoPlay loop muted />
          <video src={video4} autoPlay loop muted />
        </Carousel>
      </div>
      <div className="homepage-wrapper daily">
        <div className="homepage-title">
          <Typography.Title level={2}>
            {t("homepage.dailyCake")}
          </Typography.Title>
          <Typography.Title level={4}>{t("footer.preOrder")}</Typography.Title>
          <MansoryComponent />
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
          <Typography.Title level={2}>{t("header.contact")}</Typography.Title>
          <Form form={form} layout="vertical" autoComplete="on">
            <Row
              justify="space-between"
              align="top"
              gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            >
              <Space></Space>
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
                    { required: true, message: t("form.notEmpty") },
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
