import { SKUItemImage } from "../types/types";

export const filterByTag = (image:SKUItemImage) => {
  if(image.imageLabel === "Tonos") {
    return true;
  } else {
    return false;
  }
}
