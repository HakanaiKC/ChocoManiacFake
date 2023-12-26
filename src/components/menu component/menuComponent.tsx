import { Menu } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentLink } from "../../stores/headerSlice";

export const MenuComponentHeader = ({
  onClick,
  current,
  inLine,
}: {
  onClick: any;
  current: string;
  inLine: boolean;
}) => {
  const { t } = useTranslation("global");
  const dispatch = useDispatch();

  const menuItems = [
    { key: t("header.home"), path: "/", label: t("header.home") },
    { key: t("header.about"), path: "/about", label: t("header.about") },
    { key: t("header.menu"), path: "/menu", label: t("header.menu") },
    { key: t("header.product"), path: "/products", label: t("header.product") },
    { key: t("header.gallery"), path: "/gallery", label: t("header.gallery") },
    { key: t("header.contact"), path: "/contact", label: t("header.contact") },
    { key: t("header.account"), path: "/account", label: t("header.account") },
  ];

  return (
    <>
      <Menu
        mode={inLine ? "horizontal" : "vertical"}
        onClick={onClick}
        className={`header-menu`}
        defaultSelectedKeys={[t("home")]}
        selectedKeys={[current]}
      >
        {menuItems.map((item) => (
          <Menu.Item key={item.key}>
            <Link to={item.path}>{item.label}</Link>
          </Menu.Item>
        ))}

        <Menu.Item>
          <Link
            className="login-link"
            to="/login"
            onClick={() => dispatch(setCurrentLink(""))}
          >
            {t("header.login")}
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link
            className="register-link"
            to="/register"
            onClick={() => dispatch(setCurrentLink(""))}
          >
            {t("header.register")}
          </Link>
        </Menu.Item>
      </Menu>
    </>
  );
};
