// Describes a product widget with its settings.
// The id of the product widget, incremental integer
export type WidgetId = number;
// The type of impact
export type WidgetType = "carbon" | "plastic bottles" | "trees";
// The amount of impact
export type WidgetAmount = number;
// The action which corresponds to an impact type
export type WidgetAction = "collects" | "plants" | "offsets";
// Describes if the widget (badge) is active
export type WidgetActive = boolean;
// Describes if the widget is linked to the public profile
export type WidgetLinked = boolean;
// Describes the current color of the widget
export type WidgetSelectedColor =
  | "white"
  | "black"
  | "blue"
  | "green"
  | "beige";

type WidgetData = {
  id: WidgetId;
  type: WidgetType;
  amount: WidgetAmount;
  action: WidgetAction;
  active: WidgetActive;
  linked: WidgetLinked;
  selectedColor: WidgetSelectedColor;
};

export type WidgetList = Array<WidgetData>;

export type TooltipLink = {
  href: string;
  text: string;
};

export type TooltipText = string;

export interface State {
  widgetList: WidgetList;
  tooltipLink: TooltipLink;
  tooltipText: TooltipText;
}

export interface ProductWidgetSettingsProps {
  id: WidgetId;
  linked: WidgetLinked;
  selectedColor: WidgetSelectedColor;
  active: WidgetActive;
  tooltipLink: TooltipLink;
  tooltipText: TooltipText;
}
