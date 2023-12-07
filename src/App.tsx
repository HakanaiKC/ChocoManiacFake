import { ConfigProvider } from "antd";
import viVN from "antd/lib/locale/vi_VN";
import { HistoryRouter, history } from "./routes/history";
import { Suspense } from "react";
import RenderRoute from "./routes";

const App = () => {
  return (
    //Hỗ trợ cấu hình cho toàn web
    <ConfigProvider locale={viVN} componentSize="large">
      <HistoryRouter history={history}>
        <Suspense fallback={null}>
          <RenderRoute />
        </Suspense>
      </HistoryRouter>
    </ConfigProvider>
  );
};

export default App;
