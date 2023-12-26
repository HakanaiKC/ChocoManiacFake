import { useTranslation } from "react-i18next";
import MansoryComponent from "../../components/masonry component/masonryComponent";
import { Typography } from "antd";

const itemsDaily = [
  {
    src: () => import("../../assets/menu/daily/choco-set.jpg"),
    name: "basque burnt cheesecake",
    price: "62k/pc",
    additional: "120k/set",
  },
  {
    src: () => import("../../assets/menu/daily/chocoOrange-2.jpg"),
    name: "choco orange",
    price: "55k/2pcs",
  },
  {
    src: () => import("../../assets/menu/daily/dark-oreo-2.jpg"),
    name: "dark oreo",
    price: "65k/box",
  },
  {
    src: () => import("../../assets/menu/daily/double-chocolate.jpg"),
    name: "double chocolate cup",
    price: "50k/2pcs",
  },
  {
    src: () => import("../../assets/menu/daily/tiramisu-cup-1.jpg"),
    name: "chocomisu",
    price: "55k",
  },
  {
    src: () => import("../../assets/menu/daily/red-velvet-roll-2.jpg"),
    name: "red & roll",
    price: "65k/box",
  },
  {
    src: () => import("../../assets/menu/daily/brownie-2.jpg"),
    name: "cheese brownies",
    price: "75k/box",
    additional: "150g - 180g",
  },
  {
    src: () => import("../../assets/menu/daily/daily-cup-red-velvet.png"),
    name: "red velvet",
    price: "55k",
  },
];

const itemsChristmas = [
  {
    src: () => import("../../assets/menu/christmas/giang-sinh-1.jpg"),
    name: "Christmas Tree",
  },
  {
    src: () => import("../../assets/menu/christmas/giang-sinh-2.jpg"),
    name: "Deer Friend",
  },
  {
    src: () => import("../../assets/menu/christmas/special-2.jpg"),
    name: "Bûche de Noël",
  },
  {
    src: () => import("../../assets/menu/christmas/giang-sinh-3.jpg"),
    name: "santa hat",
  },
  {
    src: () => import("../../assets/menu/christmas/giang-sinh-4.jpg"),
    name: "noel special 2022",
  },
  {
    src: () => import("../../assets/menu/christmas/red-velvet-4.jpg"),
    name: "red velvet",
  },
];

const itemsValentine = [
  {
    src: () => import("../../assets/menu/valentine/valentine (1).jpg"),
    name: "valentine secial 1",
  },
  {
    src: () => import("../../assets/menu/valentine/valentine (2).jpg"),
    name: "valentine special 2",
  },
  {
    src: () => import("../../assets/menu/valentine/valentine (3).jpg"),
    name: "valentine special 3",
  },
];

const itemsOrder = [
  {
    src: () => import("../../assets/menu/sinh-nhat/birthday-1.1.jpg"),
  },
  {
    src: () => import("../../assets/menu/sinh-nhat/birthday-2.1.jpg"),
  },
  {
    src: () => import("../../assets/menu/sinh-nhat/bobacake.jpg"),
    name: "boba milk tea",
  },
  {
    src: () => import("../../assets/menu/order/chocomisu-2.jpg"),
    name: "chocomisu",
  },
  {
    src: () => import("../../assets/menu/order/order-1.jpg"),
  },
  {
    src: () => import("../../assets/menu/order/order-2.jpg"),
  },
  {
    src: () => import("../../assets/menu/order/order-3.jpg"),
  },
  {
    src: () => import("../../assets/menu/order/order-4.jpg"),
  },
  {
    src: () => import("../../assets/menu/order/order-5.jpg"),
  },
  {
    src: () => import("../../assets/menu/order/order-6.jpg"),
  },
  {
    src: () => import("../../assets/menu/order/strawberry-cake (3).jpg"),
  },
  {
    src: () => import("../../assets/menu/order/tiramisu-bday-1.jpg"),
  },
  {
    src: () => import("../../assets/menu/order/tiramisu-bento-2.jpg"),
    name: "tiramisu bento",
  },
  {
    src: () => import("../../assets/menu/sinh-nhat/three-layers-2.jpg"),
    name: "tripple chocolate",
  },
];

const Gallery = () => {
  const { t } = useTranslation("global");
  return (
    <>
      <div className="gallery-wrapper" style={{ padding: "30px" }}>
        <Typography.Title
          level={2}
          style={{
            textAlign: "center",
            fontFamily: "Great Vibes",
            letterSpacing: "5px",
            fontSize: "3.75em",
            textTransform: "capitalize",
          }}
        >
          {t("homepage.dailyCake")}
        </Typography.Title>
        <MansoryComponent
          items={itemsDaily}
          column={{ 425: 1, 640: 2, 768: 2, 1024: 3, 1280: 4 }}
        />
      </div>

      <div className="gallery-wrapper" style={{ padding: "30px" }}>
        <Typography.Title
          level={2}
          style={{
            textAlign: "center",
            fontFamily: "Great Vibes",
            letterSpacing: "5px",
            fontSize: "3.75em",
            textTransform: "capitalize",
          }}
        >
          {t("common.christmas")}
        </Typography.Title>
        <MansoryComponent
          items={itemsChristmas}
          column={{ 425: 1, 640: 2, 768: 2, 1024: 3, 1280: 4 }}
        />
      </div>

      <div className="gallery-wrapper" style={{ padding: "30px" }}>
        <Typography.Title
          level={2}
          style={{
            textAlign: "center",
            fontFamily: "Great Vibes",
            letterSpacing: "5px",
            fontSize: "3.75em",
            textTransform: "capitalize",
          }}
        >
          {t("homepage.valentine")}
        </Typography.Title>
        <MansoryComponent
          items={itemsValentine}
          column={{ 425: 1, 640: 2, 768: 2, 1024: 3, 1280: 3 }}
        />
      </div>

      <div className="gallery-wrapper" style={{ padding: "30px" }}>
        <Typography.Title
          level={2}
          style={{
            textAlign: "center",
            fontFamily: "Great Vibes",
            letterSpacing: "5px",
            fontSize: "3.75em",
            textTransform: "capitalize",
          }}
        >
          {t("homepage.order")}
        </Typography.Title>
        <MansoryComponent
          items={itemsOrder}
          column={{ 425: 1, 640: 2, 768: 3, 1024: 4, 1280: 5 }}
        />
      </div>
    </>
  );
};

export default Gallery;
