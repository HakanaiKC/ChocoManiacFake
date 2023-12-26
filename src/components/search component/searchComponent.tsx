import { useTranslation } from "react-i18next";
import "./search.less";
import { Button, Flex, Input } from "antd";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";

const SearchBar = ({ onClose }: { onClose: any }) => {
  const { t } = useTranslation("global");

  return (
    <div className={`overlay-search`}>
      <CloseOutlined onClick={onClose} className="closed-search" />
      <Flex className="searchBar">
        <Input
          className="input-search"
          placeholder={t("homepage.searchPlaceholder")}
          allowClear
        />
        <Button type="link">
          <SearchOutlined />
        </Button>
      </Flex>
    </div>
  );
};

export default SearchBar;
