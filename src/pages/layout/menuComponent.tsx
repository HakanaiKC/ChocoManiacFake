import { Menu } from "antd";

type MenuItemType = {
  label: string;
  key: string;
  link: string; // Thêm thuộc tính link
};

const items: MenuItemType[] = [
  {
    label: "Home",
    key: "home",
    link: "/",
  },
  {
    label: "about us",
    key: "about",
    link: "/about",
  },
  {
    label: "menu",
    key: "menu",
    link: "/menu",
  },
  {
    label: "shop",
    key: "shop",
    link: "/products/list",
  },
  {
    label: "gallery",
    key: "gallery",
    link: "/gallery",
  },
  {
    label: "contact",
    key: "contact",
    link: "/contact",
  },
  {
    label: "account",
    key: "account",
    link: "/account",
  },
];

export const MenuComponentHeader = ({
  mode,
  onClick,
  current,
}: {
  mode: any;
  onClick: any;
  current: any;
}) => {
  return (
    <Menu
      onClick={onClick}
      mode={mode}
      className={`header-menu`}
      defaultSelectedKeys={["home"]}
      selectedKeys={[current]}
    >
      {items.map((item) => (
        <Menu.Item key={item.key}>
          <a href={item.link}>{item.label}</a>
        </Menu.Item>
      ))}
    </Menu>
  );
};
