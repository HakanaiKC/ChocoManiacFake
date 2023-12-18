import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.less";
import err from "../../assets/err/Err.svg";
import { useTranslation } from "react-i18next";

import { useDispatch } from "react-redux";
import { setCurrentLink } from "../../stores/headerSlice";

const ErrorPage: React.FC = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className="error"
      style={{
        textAlign: "center",
        marginTop: "48px",
        padding: "20px",
        backgroundColor: "#f3ede1",
      }}
    >
      <img src={err} alt="Error" />
      <p style={{ fontSize: "30px" }}>{t("errorPage.error404")}</p>
      <Button
        size="large"
        style={{ width: "120px" }}
        onClick={() => {
          dispatch(setCurrentLink(t("header.home"))), navigate("/");
        }}
      >
        {t("header.home")}
      </Button>
    </div>
  );
};

export default ErrorPage;
