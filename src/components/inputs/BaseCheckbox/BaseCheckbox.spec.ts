import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import BaseCheckbox from "./BaseCheckbox.vue";

describe("BaseCheckbox", () => {
  // Test basic rendering
  it("renders correctly with given name", () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        name: "Test Checkbox",
      },
    });

    // Check input exists
    const input = wrapper.find("input");
    expect(input.exists()).toBe(true);

    // Verify input type
    expect(input.attributes("type")).toBe("checkbox");
  });

  // Test name transformation
  it("transforms checkbox name correctly", () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        name: "Test Checkbox",
      },
    });

    const input = wrapper.find("input");

    // Check id and name attributes
    expect(input.attributes("id")).toBe("test-checkbox");
    expect(input.attributes("name")).toBe("test-checkbox");
  });

  // Test v-model binding
  it("supports v-model binding", async () => {
    const wrapper = mount(BaseCheckbox, {
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

  // Test various name transformations
  it.each([
    ["Simple Name", "simple-name"],
    ["Complex Name", "complex-name"],
    ["Special@Name", "special-name"],
    ["Hyphen-ated Name", "hyphen-ated-name"],
    ["Underscore_Name", "underscore-name"],
    ["Mixed Case Name", "mixed-case-name"],
  ])("transforms name correctly", (originalName, expectedName) => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        name: originalName,
      },
    });

    const input = wrapper.find("input");
    expect(input.attributes("id")).toBe(expectedName);
    expect(input.attributes("name")).toBe(expectedName);
  });

  // Additional test for case sensitivity and special character handling
  it("handles various edge cases in name transformation", () => {
    const testCases = [
      { input: "USER Name", expected: "user-name" },
      { input: "user@example.com", expected: "user-example-com" },
      { input: "NAME WITH SPACES", expected: "name-with-spaces" },
    ];

    testCases.forEach(({ input, expected }) => {
      const wrapper = mount(BaseCheckbox, {
        props: {
          name: input,
        },
      });

      const checkbox = wrapper.find("input");
      expect(checkbox.attributes("id")).toBe(expected);
      expect(checkbox.attributes("name")).toBe(expected);
    });
  });
});
