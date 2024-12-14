import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BadgeColourButtons from "./BadgeColourButtons.vue";
import { COLOURS } from "@/enums/colours";
import { type WidgetSelectedColor } from "@/types/productWidgets/types";

describe("BadgeColourButtons", () => {
  // Test default rendering
  it("renders correct number of colour buttons", () => {
    const wrapper = mount(BadgeColourButtons, {
      props: {
        selectedColour: "beige",
      },
    });

    // Check number of buttons matches COLOURS length
    const buttons = wrapper.findAllComponents({ name: "BadgeColourButton" });
    expect(buttons.length).toBe(COLOURS.length);
  });

  // Test selected colour highlighting
  it.each(COLOURS as WidgetSelectedColor[])(
    "correctly highlights when selected",
    (colour) => {
      const wrapper = mount(BadgeColourButtons, {
        props: {
          selectedColour: colour,
        },
      });

      const selectedButtons = wrapper
        .findAll("button")
        .filter((btn) => btn.classes().includes("selected"));

      // Only one button should be selected
      expect(selectedButtons.length).toBe(1);

      // Selected button should match the selectedColour
      const selectedButtonColour = selectedButtons[0].attributes("class");
      expect(selectedButtonColour).toContain(`colour-button`);
      expect(selectedButtonColour).toContain("selected");
    },
  );

  // Test colour selection event emission
  it("emits colourSelected event with correct colour when a button is clicked", async () => {
    const wrapper = mount(BadgeColourButtons, {
      props: {
        selectedColour: "black",
      },
    });

    // Find all colour buttons
    const buttons = wrapper.findAllComponents({ name: "BadgeColourButton" });

    // Click on the blue button
    await buttons
      .find((btn) => btn.props("colour") === "blue")
      ?.trigger("click");

    // Check emitted event
    expect(wrapper.emitted("colourSelected")?.[0]).toEqual(["blue"]);
  });

  // Comprehensive colour rendering test
  it("renders buttons for all available colours", () => {
    const wrapper = mount(BadgeColourButtons, {
      props: {
        selectedColour: "green",
      },
    });

    const renderedColours = wrapper
      .findAllComponents({ name: "BadgeColourButton" })
      .map((btn) => btn.props("colour"));

    // Ensure all colours are represented
    expect(renderedColours).toEqual(expect.arrayContaining(COLOURS));
  });
});
