import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Menu, Modal, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./modalSearch.less";

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
  const [modalOpen, setModalOpen] = useState(false);
  const menuItems = [
    { key: t("header.home"), path: "/", label: t("header.home") },
    { key: t("header.about"), path: "/about", label: t("header.about") },
    { key: t("header.menu"), path: "/menu", label: t("header.menu") },
    { key: t("header.product"), path: "/products", label: t("header.product") },
    { key: t("header.gallery"), path: "/gallery", label: t("header.gallery") },
    { key: t("header.contact"), path: "/contact", label: t("header.contact") },
    { key: t("header.account"), path: "/account", label: t("header.account") },
    {
      key: "search",
      onClick: () => setModalOpen(true),
      icon: <SearchOutlined style={{ fontSize: "20px" }} />,
    },
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
          <Menu.Item key={item.key} onClick={item.onClick}>
            {item.path ? <Link to={item.path}>{item.label}</Link> : item.icon}
          </Menu.Item>
        ))}
      </Menu>
      <Modal
        className="modal-search"
        title={
          <Typography.Title level={3} className="modal-header">
            {t("homepage.search")}
          </Typography.Title>
        }
        centered
        open={modalOpen}
        onCancel={() => setModalOpen(false)}
        footer={[
          <div className="button-modal-group">
            <Button
              key="cancel"
              onClick={() => setModalOpen(false)}
              className="cancelButton"
            >
              {t("common.cancel")}
            </Button>
            ,
            <Button
              key="submit"
              className="searchButton"
              onClick={() => setModalOpen(false)}
            >
              {t("common.search")}
            </Button>
          </div>,
        ]}
      >
        <Input
          size="large"
          placeholder={t("homepage.searchPlaceholder")}
          prefix={<SearchOutlined />}
        />
      </Modal>
      ;
    </>
  );
};
