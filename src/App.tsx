import { ConfigProvider } from "antd";
import { HistoryRouter, history } from "./routes/history";
import { Suspense } from "react";
import RenderRoute from "./routes";
import { useTranslation } from "react-i18next";
import enUS from "antd/locale/en_US";
import viVn from "antd/locale/vi_VN";

const App = () => {
  const { t } = useTranslation("global");
  const changeLocale = () => {
    if (t("common.locale") === "viVn") return viVn;
    else if (t("common.locale") === "enUs") return enUS;
  };
  return (
    //Hỗ trợ cấu hình cho toàn web
    <ConfigProvider locale={changeLocale()} componentSize="large">
      <HistoryRouter history={history}>
        <Suspense fallback={null}>
          <RenderRoute />
        </Suspense>
      </HistoryRouter>
    </ConfigProvider>
  );
};

export default App;
