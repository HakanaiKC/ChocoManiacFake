import { createBrowserHistory } from "history";
import React, { useLayoutEffect, useState } from "react";
import { Router } from "react-router-dom";

// export const history = createBrowserHistory();: Đây là việc tạo ra một đối tượng history mới từ
// createBrowserHistory để quản lý lịch sử duyệt web trong ứng dụng của bạn. createBrowserHistory
// được sử dụng để tạo ra một đối tượng history dựa trên API của trình duyệt.
export const history = createBrowserHistory();

interface HistoryInterface {
  history: typeof history;
  children?: React.ReactNode;
}

export const HistoryRouter: React.FC<HistoryInterface> = ({
  history,
  children,
}) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  //render lại UI cuối cùng
  useLayoutEffect(() => {
    //Khi location thay đổi, listen sẽ gọi hết các hàm listener=>cập nhật lại state
    history.listen(setState);
  }, [history]);

  return (
    <Router navigator={history} {...state}>
      {children}
    </Router>
  );
};
