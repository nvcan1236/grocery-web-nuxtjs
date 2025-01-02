export type Product = {
  id: number;
  name: string;
  url: string;
  avatar: string;
  unit: string;
};

export const getRandomProduct = () => {
  const i = Math.floor(Math.random() * products.length);

  return products[i];
};

export const products = [
  {
    id: 175933,
    name: "Thùng 30 gói mì 3 Miền tôm hùm 65g",
    url: "/mi/mi-3-mien-vi-tom-hum-goi-65g-thung-30",
    avatar:
      "https://cdn.tgdd.vn/Products/Images/2565/175933/bhx/thung-30-goi-mi-3-mien-tom-hum-65g-202306160838587082.jpg",
    unit: "Thùng",
  },
  {
    id: 86006,
    name: "Thùng 30 gói mì gà sợi phở Gấu Đỏ 63g",
    url: "/mi/mi-gau-do-vi-ga-soi-pho-goi-64g-thung-30-goi",
    avatar:
      "https://cdn.tgdd.vn/Products/Images/2565/86006/bhx/thung-30-goi-mi-ga-soi-pho-gau-do-63g-202405281629053778.jpg",
    unit: "Thùng",
  },
  {
    id: 320754,
    name: "Thùng 20 gói mì Koreno Up tôm chua cay 67g",
    url: "/mi/thung-20-goi-mi-koreno-up-tom-chua-cay-67g",
    avatar:
      "https://cdn.tgdd.vn/Products/Images/2565/320754/bhx/thung-20-goi-mi-koreno-up-tom-chua-cay-67g-202401071921599634.jpg",
    unit: "Thùng",
  },
  {
    id: 85974,
    name: "Thùng 30 gói mì Gấu Đỏ bò bít tết 63g",
    url: "/mi/thung-30-goi-mi-gau-do-bo-bit-tet-63g",
    avatar:
      "https://cdn.tgdd.vn/Products/Images/2565/85974/bhx/thung-30-goi-mi-gau-do-bo-bit-tet-63g-202407121539315408.jpg",
    unit: "Thùng",
  },
  {
    id: 333743,
    name: "Táo Gala Ba Lan 18kg",
    url: "/trai-cay-tuoi-ngon/tao-gala-ba-lan-thung-18kg",
    avatar:
      "https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/8788/333743/bhx/frame-61945_202412281100411904.jpg",
    unit: "Thùng",
  },
  {
    id: 223418,
    name: "Bưởi da xanh",
    url: "/trai-cay-tuoi-ngon/buoi-da-xanh-loai-2-1kg",
    avatar:
      "https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/8788/223418/bhx/733077_202412181029295274.jpg",
    unit: "Kg",
  },
  {
    id: 333075,
    name: "Táo Gala Pháp 2.5kg",
    url: "/trai-cay-tuoi-ngon/tao-gala-phap-thung-25kg",
    avatar:
      "https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/8788/333075/bhx/frame-61932_202412251018306739.jpg",
    unit: "Thùng",
  },
  {
    id: 230440,
    name: "Cải bẹ dún",
    url: "/rau-sach/cai-be-dun-500g",
    avatar:
      "https://cdn.tgdd.vn/Products/Images/8820/230440/bhx/cai-be-dun-202403291332350628.jpg",
    unit: "Kg",
  },
  {
    id: 309146,
    name: "Rau ngót khoảng 250g",
    url: "/rau-sach/rau-ngot-250gr",
    avatar:
      "https://cdn.tgdd.vn/Products/Images/8820/309146/bhx/rau-ngot-khoang-250g-202405061512314179.jpg",
    unit: "Gói",
  },
  {
    id: 333454,
    name: "Xà lách xoong ta 250g",
    url: "/rau-sach/xa-lach-xoong-250g",
    avatar:
      "https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/8820/333454/bhx/199386052_202412250904071976.jpg",
    unit: "Gói",
  },
  {
    id: 325723,
    name: "Xà lách ta 300g",
    url: "/rau-sach/xa-lach-ta-300g",
    avatar:
      "https://cdn.tgdd.vn/Products/Images/8820/325723/bhx/xa-lach-ta-300g-202405101612314940.jpg",
    unit: "Gói",
  },
  {
    id: 325487,
    name: "Rau tần ô",
    url: "/rau-sach/rau-tan-o-bo",
    avatar:
      "https://cdn.tgdd.vn/Products/Images/8820/325487/bhx/rau-tan-o-khoang-250g-clone-202405071602092642.jpg",
    unit: "Bó 500gr",
  },
  {
    id: 314539,
    name: "Sườn non heo nhập khẩu Đức túi 1kg",
    url: "/thit-heo/suon-non-heo-nhap-khau-dong-lanh-300g",
    avatar:
      "https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/8781/314539/bhx/frame-61871-min_202411141359247790.jpg",
    unit: "Túi",
  },
  {
    id: 232939,
    name: "Xương heo có thịt C.P 500g",
    url: "/thit-heo/xuong-heo-co-thit-tui-500g",
    avatar:
      "https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/8781/232939/bhx/cdntgddvnproductsimages8781233789bhxxuong-heo-co-thit-202405241058233109_202411012206380184.jpg",
    unit: "Túi",
  },
  {
    id: 249012,
    name: "Chân giò heo nhập khẩu Đức túi 500g",
    url: "/thit-heo/chan-gio-heo-nhap-khau-dong-lanh-tui-500g",
    avatar:
      "https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/8781/249012/bhx/frame-618763_202412300939539895.jpg",
    unit: "Túi",
  },
];
