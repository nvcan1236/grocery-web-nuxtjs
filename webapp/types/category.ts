export interface SubCategory
  extends Omit<Category, "childrens" | "labelImage"> {
  imgUrl: string;
  parentId: string;
}

export interface Category {
  childrens: SubCategory[];
  id: string;
  name: string;
  icon: string;
  url: string;
  totalProductInCate: number;
  labelImage: string;
  isOnlineLabelImage: boolean;
  path: string;
  percentDiscount: number;
  menuType: number;
  htmlAttributes: string;
  isActiveOnView: boolean;
  isActive: boolean;
}
