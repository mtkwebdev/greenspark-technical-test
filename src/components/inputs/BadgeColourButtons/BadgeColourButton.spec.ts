import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BadgeColourButton from "./BadgeColourButton.vue";
import { COLOURS } from "@/enums/colours";
import { type WidgetSelectedColor } from "@/types/productWidgets/types";

describe("BadgeColourButton", () => {
  // Test default rendering
  it("renders correctly with default props", () => {
    const wrapper = mount(BadgeColourButton, {
      props: {
        isSelected: false,
        colour: "blue",
      },
    });

    // Check button exists
    expect(wrapper.exists()).toBe(true);

    // Check base classes
    expect(wrapper.classes()).toContain("colour-button");
    expect(wrapper.classes()).not.toContain("selected");
  });

  // Test selected state
  it("applies selected class when isSelected is true", () => {
    const wrapper = mount(BadgeColourButton, {
      props: {
        isSelected: true,
        colour: "blue",
      },
    });

    // Check selected class is applied
    expect(wrapper.classes()).toContain("selected");
  });

  // Test background color computation
  it("sets correct background color based on colour prop", () => {
    const wrapper = mount(BadgeColourButton, {
      props: {
        isSelected: false,
        colour: "green",
      },
    });

    // Check inline style for background color
    const style = wrapper.attributes("style");
    expect(style).toBe("background-color: var(--bg-green);");
  });

  // Test click event emission
  it("emits click event when button is clicked", async () => {
    const wrapper = mount(BadgeColourButton, {
      props: {
        isSelected: false,
        colour: "blue",
      },
    });

    // Trigger click and check event
    await wrapper.trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
    expect(wrapper.emitted("click")?.length).toBe(1);
  });

  // Test different colour variations
  const colours: Array<WidgetSelectedColor> = [...COLOURS];

  it.each(colours)("renders correctly for colours", (colour) => {
    const wrapper = mount(BadgeColourButton, {
      props: {
        isSelected: false,
        colour: colour,
      },
    });

    const style = wrapper.attributes("style");
    expect(style).toBe(`background-color: var(--bg-${colour});`);
  });

  // Test selected and unselected states toggle
  it("toggles selected state correctly", async () => {
    const wrapper = mount(BadgeColourButton, {
      props: {
        isSelected: false,
        colour: "green",
      },
    });

    // Initial state
    expect(wrapper.classes()).not.toContain("selected");

    // Remount with selected state
    await wrapper.setProps({ isSelected: true });
    expect(wrapper.classes()).toContain("selected");
  });
});
