import "./index.less";
import { Col, Row, Typography, Image, Flex } from "antd";
import img1 from "../../assets/about/ingredient.jpg";
import img12 from "../../assets/about/delicious-chocolate-arrangement.jpg";
import img11 from "../../assets/about/ingredients-cake.jpg";
import img13 from "../../assets/about/dark-chocolate-truffles-close-up.jpg";
import img2 from "../../assets/about/valentine-1.jpg";
import img22 from "../../assets/about/valentine-2.jpg";
import img23 from "../../assets/about/valentine-3.jpg";
import img21 from "../../assets/about/chocolate-box-foreground.jpg";
import img3 from "../../assets/about/chocolate-cakes.jpg";
import img31 from "../../assets/about/red-velvet.jpg";
import img32 from "../../assets/about/happy-birthday-cake-table.jpg";
import img33 from "../../assets/about/chritsmas.jpg";
import video from "../../assets/about/video.mp4";
import imgRandom from "../../assets/about/randomimg.jpg";
import AboutUsComponent from "../../components/about component/aboutUsComponent";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation("global");
  return (
    <div className="about-us-page">
      <div className="background"></div>
      <div className="content">
        <AboutUsComponent />
        <div className="specialities">
          <Row>
            <Col
              xxl={8}
              xl={8}
              lg={8}
              md={8}
              sm={24}
              style={{ textAlign: "center" }}
            >
              <Image.PreviewGroup items={[img11, img12, img13]}>
                <Image src={img1} width={"90%"} />
              </Image.PreviewGroup>

              <Typography.Title level={3}>Chocolate Type</Typography.Title>
              <Typography.Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua ut
                enim ad
              </Typography.Paragraph>
            </Col>
            <Col
              xxl={8}
              xl={8}
              lg={8}
              md={8}
              sm={24}
              style={{ textAlign: "center" }}
            >
              <Image.PreviewGroup items={[img21, img22, img23]}>
                <Image src={img2} width={"90%"} />
              </Image.PreviewGroup>
              <Typography.Title level={3}>Special Gifts</Typography.Title>
              <Typography.Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua ut
                enim ad
              </Typography.Paragraph>
            </Col>
            <Col
              xxl={8}
              xl={8}
              lg={8}
              md={8}
              sm={24}
              style={{ textAlign: "center" }}
            >
              <Image.PreviewGroup items={[img31, img32, img33]}>
                <Image src={img3} width={"90%"} />
              </Image.PreviewGroup>
              <Typography.Title level={3}>Celebration</Typography.Title>
              <Typography.Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt utlabore et dolore magna aliqua ut
                enim ad
              </Typography.Paragraph>
            </Col>
          </Row>
        </div>

        <div className="random-vid">
          <video src={video} loop autoPlay muted playsInline width={"100%"} />
        </div>

        <div className="open-time">
          <Row align={"middle"} justify={"center"} className="open-time-row">
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={24}
              className="open-time-img"
            >
              <img src={imgRandom} alt="random image" width={"100%"} />
            </Col>
            <Col
              xxl={12}
              xl={12}
              lg={12}
              md={12}
              sm={24}
              className="open-time-content"
            >
              <Typography.Paragraph>CHOCOMANIACFAKE</Typography.Paragraph>
              <Typography.Title level={2}>
                {t("footer.openTimes")}
              </Typography.Title>
              <Typography.Paragraph>
                {t("footer.preOrder")}
              </Typography.Paragraph>

              <Flex justify="space-between" className="row">
                <Typography.Paragraph className="day">
                  {t("footer.day")}
                </Typography.Paragraph>
                <Typography.Paragraph className="time">
                  09:00 - 20:00
                </Typography.Paragraph>
              </Flex>
              <Flex justify="space-between" className="row">
                <Typography.Paragraph className="day">
                  {t("footer.sunday")}
                </Typography.Paragraph>
                <Typography.Paragraph className="time">
                  {t("footer.closed")}
                </Typography.Paragraph>
              </Flex>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
