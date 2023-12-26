import "./breadcrumb.less";
import { FC } from "react";
import { Breadcrumb, Space, Typography } from "antd";
import img from "../../assets/breadcrumb/breadcrumb-1.png";

export interface PageTitleProps {
  title: string;
  item: any;
}

const PageTitle: FC<PageTitleProps> = (props) => {
  const { title, item } = props;

  return (
    <div
      className="breadcrumb-wrapper"
      style={{ backgroundImage: `url(${img})` }}
    >
      <Space className="breadcrumb-content" size="small" direction="vertical">
        <Typography.Title
          style={{
            fontSize: "3em",
            fontWeight: "700",
            color: "#1b110f",
            letterSpacing: ".12em",
            textTransform: "capitalize",
            fontFamily: "Great Vibes",
          }}
          level={1}
        >
          {title}
        </Typography.Title>
        {item != null && (
          <Breadcrumb style={{ fontSize: "1.25em" }} items={item} />
        )}
      </Space>
    </div>
  );
};

export default PageTitle;
