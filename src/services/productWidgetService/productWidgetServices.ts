import axios from "axios";

import { type WidgetList } from "@/types/productWidgets/types";

export const getProductWidgets = async () => {
  const url =
    "https://b795b019-1f84-41f4-93a3-a702d686c75a.mock.pstmn.io/product-widgets";
  try {
    const { data }: WidgetList = await axios.get(url);
    if (data && data.length) {
      const widgetList = data;
      return widgetList;
    } else {
      throw "Error: unable to get product widgets";
    }
  } catch (error) {
    return error;
  }
};

export const getProductWidgetTooltipContent = () => {
  // mocking a service that would return the tooltip content
  const tooltipLink = {
    href: "#",
    text: "View Public Profile",
  };
  const tooltipText = `This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.`;
  return { tooltipLink, tooltipText };
};
