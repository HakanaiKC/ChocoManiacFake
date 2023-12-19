import { ConfigProvider, Spin } from "antd";
import { HistoryRouter, history } from "./routes/history";
import { Suspense } from "react";
import RenderRoute from "./routes";
import { useTranslation } from "react-i18next";
import enUS from "antd/locale/en_US";
import viVn from "antd/locale/vi_VN";
import jaJp from "antd/locale/ja_JP";
import koKr from "antd/locale/ko_KR";
import { ClimbingBoxLoader } from "react-spinners";

const App = () => {
  const { t } = useTranslation("global");
  const changeLocale = () => {
    if (t("common.locale") === "viVn") return viVn;
    else if (t("common.locale") === "enUs") return enUS;
    else if (t("common.locale") === "jaJp") return jaJp;
    else if (t("common.locale") === "koKr") return koKr;
  };
  return (
    //Hỗ trợ cấu hình cho toàn web
    <ConfigProvider locale={changeLocale()} componentSize="large">
      <HistoryRouter history={history}>
        <Suspense
          fallback={
            <Spin
              size="large"
              fullscreen
              indicator={
                <ClimbingBoxLoader color="#f6a56a" style={{ fontSize: 50 }} />
              }
              style={{ backgroundColor: "#4b2d25" }}
            />
          }
        >
          <RenderRoute />
        </Suspense>
      </HistoryRouter>
    </ConfigProvider>
  );
};

export default App;
