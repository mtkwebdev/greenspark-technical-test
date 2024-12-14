import { setActivePinia, createPinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useProductWidgetsStore } from "./productWidgetsStore";
import * as productWidgetServices from "@/services/productWidgetService/productWidgetServices";
import { WidgetList } from "@/types/productWidgets/types";
// Mock data for testing
const mockWidgetList: WidgetList = [
  {
    id: 1,
    type: "carbon",
    amount: 100,
    action: "offsets",
    active: false,
    linked: false,
    selectedColor: "blue",
  },
  {
    id: 2,
    type: "trees",
    amount: 50,
    action: "plants",
    active: false,
    linked: false,
    selectedColor: "green",
  },
];

const mockTooltipLink = { href: "https://example.com", text: "Learn More" };
const mockTooltipText = "Widget Tooltip";

describe("Product Widgets Store", () => {
  let store: ReturnType<typeof useProductWidgetsStore>;

  beforeEach(() => {
    // Create a fresh Pinia instance for each test
    setActivePinia(createPinia());
    store = useProductWidgetsStore();
  });

  describe("State", () => {
    it("should have initial empty state", () => {
      expect(store.widgetList).toEqual([]);
      expect(store.tooltipLink).toEqual({ href: "", text: "" });
      expect(store.tooltipText).toBe("");
    });
  });

  describe("Getters", () => {
    it("productWidgetsListData should return empty array when no widgets", () => {
      expect(store.productWidgetsListData).toEqual([]);
    });

    it("productWidgetsListData should return widgets with tooltip content", () => {
      store.widgetList = mockWidgetList;
      store.tooltipLink = mockTooltipLink;
      store.tooltipText = mockTooltipText;

      const result = store.productWidgetsListData;

      expect(result).toHaveLength(2);
      result.forEach((widget) => {
        expect(widget).toHaveProperty("tooltipLink", mockTooltipLink);
        expect(widget).toHaveProperty("tooltipText", mockTooltipText);
      });
    });
  });
});
