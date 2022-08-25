import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import ToggleSwitch from "./ToggleSwitch";

describe("ToggleSwitch component tests", () => {
  it("should render APP component with container class", () => {
    const { container } = render(<ToggleSwitch />);
    expect(container.firstChild).toHaveClass("toggle");
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<ToggleSwitch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
