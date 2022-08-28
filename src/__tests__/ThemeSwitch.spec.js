import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import ThemeSwitch from "../components/ThemeSwitch/ThemeSwitch";

describe("ThemeSwitch component tests", () => {
  it("should render APP component with container class", () => {
    const { container } = render(<ThemeSwitch />);
    expect(container.firstChild).toHaveClass("switch-checkbox");
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<ThemeSwitch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
