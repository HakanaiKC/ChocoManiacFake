import "./index.less";
import { Typography, Space } from "antd";
import logo from "../../assets/logo/logo2.svg";
import { useTranslation } from "react-i18next";

const AboutUsComponent = () => {
  const { t } = useTranslation("global");
  return (
    <div className="about-us">
      <div className="about-title">
        <Typography.Title level={2}>{t("header.about")}</Typography.Title>
      </div>

      <Space direction="vertical" className="about-wrapper">
        <img src={logo} alt="ChocoManiacFake" />
        <Typography.Title level={3}>ChocoManiacFake</Typography.Title>
        <Typography.Text>
          Chocomaniac (est.2020) được sinh ra từ một chiếc chủ đam mê chocolate
          rất nhiều.
        </Typography.Text>
        <Typography.Text>Ở đây Tớ bán đồ ngọt làm từ chocolate</Typography.Text>
        <Typography.Text>
          Hãy đến với Tớ để thảo mãn cơn "nghiện" chocolate bằng cả trái tim nhé
        </Typography.Text>
        <Typography.Text italic>
          "The Treats for Your Happiness"
        </Typography.Text>
      </Space>
    </div>
  );
};

export default AboutUsComponent;
