import "./masonry.less";
import { Typography, Space } from "antd";
import Masonry from "react-layout-masonry";
import { Link } from "react-router-dom";
import daily1 from "../assets/menu/daily/choco-set.jpg";
import daily2 from "../assets/menu/daily/chocoOrange-2.jpg";
import daily3 from "../assets/menu/daily/dark-oreo-2.jpg";
import daily4 from "../assets/menu/daily/double-chocolate.jpg";
import daily5 from "../assets/menu/daily/tiramisu-cup-1.jpg";
import daily6 from "../assets/menu/daily/red-velvet-roll-2.jpg";
import daily7 from "../assets/menu/daily/brownie-2.jpg";
import daily8 from "../assets/menu/daily/daily-cup-red-velvet.png";

const MansoryComponent = () => {
  const items = [
    {
      src: daily1,
      name: "basque burnt cheesecake",
      price: "62k/pc",
      additional: "120k/set",
    },
    { src: daily2, name: "choco orange", price: "55k/2pcs" },
    { src: daily3, name: "dark oreo", price: "65k/box" },
    { src: daily4, name: "double chocolate cup", price: "50k/2pcs" },
    { src: daily5, name: "chocomisu", price: "55k" },
    { src: daily6, name: "red & roll", price: "65k/box" },
    {
      src: daily7,
      name: "cheese brownies",
      price: "75k/box",
      additional: "150g - 180g",
    },
    { src: daily8, name: "red velvet", price: "55k" },
  ];

  return (
    <Masonry
      columns={{ 425: 1, 640: 2, 768: 2, 1024: 3, 1280: 4 }}
      gap={16}
      style={{ marginTop: "50px" }}
    >
      {items.map((item, index) => (
        <div className="product-img" key={index}>
          <Link to={`/products`}>
            <img src={item.src} alt={item.name} />
            <div className="product-info">
              <Typography.Text>{item.name}</Typography.Text>
            </div>
            <div className="product-price">
              <Space direction="vertical">
                <Typography.Text italic>{item.price}</Typography.Text>
                {item.additional && (
                  <Typography.Text strong>{item.additional}</Typography.Text>
                )}
              </Space>
            </div>
          </Link>
        </div>
      ))}
    </Masonry>
  );
};

export default MansoryComponent;
