import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ToggleInput from "./ToggleInput.vue";

describe("ToggleInput", () => {
  // Test basic rendering
  it("renders correctly with given name", () => {
    const wrapper = mount(ToggleInput, {
      props: {
        name: "Test Toggle",
      },
    });

    // Check container exists
    const container = wrapper.find(".toggle-input-container");
    expect(container.exists()).toBe(true);

    // Check BaseCheckbox is rendered
    const baseCheckbox = wrapper.findComponent({ name: "BaseCheckbox" });
    expect(baseCheckbox.exists()).toBe(true);
  });

  // Test v-model binding
  it("supports v-model binding", async () => {
    const wrapper = mount(ToggleInput, {
      props: {
        name: "Test Checkbox",
        "onUpdate:modelValue": (e: boolean) =>
          wrapper.setProps({ modelValue: e }),
      },
    });

    // Initially unchecked
    expect(wrapper.props("modelValue")).toBe(false);

    // Simulate checking
    await wrapper.find("input").setValue(true);
    expect(wrapper.props("modelValue")).toBe(true);

    // Simulate unchecking
    await wrapper.find("input").setValue(false);
    expect(wrapper.props("modelValue")).toBe(false);
  });

  // Test prop passing
  it("passes name prop to BaseCheckbox", () => {
    const testName = "Custom Checkbox";
    const expectedTestName = "custom-checkbox";
    const wrapper = mount(ToggleInput, {
      props: {
        name: testName,
      },
    });

    const baseCheckbox = wrapper.findComponent({ name: "BaseCheckbox" });
    expect(baseCheckbox.props("name")).toBe(expectedTestName);
  });
});
