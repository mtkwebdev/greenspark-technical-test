import { defineStore } from "pinia";
import {
  getProductWidgets,
  getProductWidgetTooltipContent,
} from "@/services/productWidgetService/productWidgetServices";
import {
  type State,
  type WidgetId,
  type WidgetActive,
  type WidgetSelectedColor,
  type WidgetLinked,
  type WidgetList,
} from "../../types/productWidgets/types";

export const useProductWidgetsStore = defineStore("productWidgetsStore", {
  state: (): State => {
    return {
      widgetList: [],
      tooltipLink: {
        href: "",
        text: "",
      },
      tooltipText: "",
    };
  },
  getters: {
    productWidgetsListData: (state) => {
      if (!state.widgetList.length) {
        return [];
      } else {
        return state.widgetList.map((widget) => {
          return {
            ...widget,
            tooltipLink: state.tooltipLink,
            tooltipText: state.tooltipText,
          };
        });
      }
    },
  },
  actions: {
    async populateWidgetList() {
      try {
        const widgetList: WidgetList = await getProductWidgets();
        if (widgetList.length) {
          this.widgetList = widgetList;
        }
      } catch (error) {
        console.error(error);
      }
    },
    populateWidgetTooltipContent() {
      try {
        const { tooltipLink, tooltipText } = getProductWidgetTooltipContent();
        if (tooltipLink && tooltipText) {
          this.tooltipLink = tooltipLink;
          this.tooltipText = tooltipText;
        }
      } catch (error) {
        console.error(error);
      }
    },
    setActiveWidgetById(id: WidgetId, isActive: WidgetActive) {
      if (!isActive) {
        const i = this.widgetList.findIndex((x) => x.id === id);
        return (this.widgetList[i].active = false);
      } else {
        const updatedWidgetList = this.widgetList.map((widget) => {
          if (widget.id === id && isActive) {
            return { ...widget, active: true };
          } else {
            return { ...widget, active: false };
          }
        });
        this.widgetList = updatedWidgetList;
      }
    },
    setWidgetColourById(id: WidgetId, color: WidgetSelectedColor) {
      const i = this.widgetList.findIndex((x) => x.id === id);
      this.widgetList[i].selectedColor = color;
    },
    setWidgetLinkedById(id: WidgetId, isLinked: WidgetLinked) {
      const i = this.widgetList.findIndex((x) => x.id === id);
      this.widgetList[i].linked = isLinked;
    },
  },
});
