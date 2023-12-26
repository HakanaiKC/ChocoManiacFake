import "./masonry.less";
import { Typography, Space } from "antd";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Masonry, { Columns } from "react-layout-masonry";
import { Link } from "react-router-dom";

export interface MansoryProps {
  src: () => Promise<typeof import("*.jpg")>;
  name?: string;
  price?: string;
  additional?: string;
}

const MansoryComponent = ({
  items,
  column,
}: {
  items: MansoryProps[];
  column: Columns | undefined;
}) => {
  const [images, setImages] = useState<string[]>([]);
  const { t } = useTranslation("global");

  useEffect(() => {
    // Load all images asynchronously
    Promise.all(
      items.map((item) => item.src().then((module) => module.default))
    )
      .then((loadedImages) => setImages(loadedImages))
      .catch((error) => console.error("Error loading images:", error));
  }, [items]);

  return (
    <Masonry columns={column} gap={16} style={{ marginTop: "50px" }}>
      {images.map((src, index) => (
        <div className="product-img" key={index}>
          <Link to={`/products`}>
            <img src={src} alt={items[index].name} />
          </Link>
          {items[index].name && (
            <div className="product-info">
              <Typography.Text>{items[index].name}</Typography.Text>
            </div>
          )}
          {items[index].price && (
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
          )}
          <div className="product-cart">
            <Link to={``} className="hover-underline-animate">
              <Typography.Text>{t("cart.add")}</Typography.Text>
            </Link>
          </div>
        </div>
      ))}
    </Masonry>
  );
};

export default MansoryComponent;
