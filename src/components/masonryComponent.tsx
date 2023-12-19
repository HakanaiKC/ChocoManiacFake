import "./masonry.less";
import { Typography, Space } from "antd";
import { useState, useEffect } from "react";
import Masonry from "react-layout-masonry";
import { Link } from "react-router-dom";

const items = [
  {
    src: () => import("../assets/menu/daily/choco-set.jpg"),
    name: "basque burnt cheesecake",
    price: "62k/pc",
    additional: "120k/set",
  },
  {
    src: () => import("../assets/menu/daily/chocoOrange-2.jpg"),
    name: "choco orange",
    price: "55k/2pcs",
  },
  {
    src: () => import("../assets/menu/daily/dark-oreo-2.jpg"),
    name: "dark oreo",
    price: "65k/box",
  },
  {
    src: () => import("../assets/menu/daily/double-chocolate.jpg"),
    name: "double chocolate cup",
    price: "50k/2pcs",
  },
  {
    src: () => import("../assets/menu/daily/tiramisu-cup-1.jpg"),
    name: "chocomisu",
    price: "55k",
  },
  {
    src: () => import("../assets/menu/daily/red-velvet-roll-2.jpg"),
    name: "red & roll",
    price: "65k/box",
  },
  {
    src: () => import("../assets/menu/daily/brownie-2.jpg"),
    name: "cheese brownies",
    price: "75k/box",
    additional: "150g - 180g",
  },
  {
    src: () => import("../assets/menu/daily/daily-cup-red-velvet.png"),
    name: "red velvet",
    price: "55k",
  },
];

const MansoryComponent = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    // Load all images asynchronously
    Promise.all(
      items.map((item) => item.src().then((module) => module.default))
    )
      .then((loadedImages) => setImages(loadedImages))
      .catch((error) => console.error("Error loading images:", error));
  }, []);

  return (
    <Masonry
      columns={{ 425: 1, 640: 2, 768: 2, 1024: 3, 1280: 4 }}
      gap={16}
      style={{ marginTop: "50px" }}
    >
      {images.map((src, index) => (
        <div className="product-img" key={index}>
          <Link to={`/products`}>
            <img src={src} alt={items[index].name} />
            <div className="product-info">
              <Typography.Text>{items[index].name}</Typography.Text>
            </div>
            <div className="product-price">
              <Space direction="vertical">
                <Typography.Text italic>{items[index].price}</Typography.Text>
                {items[index].additional && (
                  <Typography.Text strong>
                    {items[index].additional}
                  </Typography.Text>
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
