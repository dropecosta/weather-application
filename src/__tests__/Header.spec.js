import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Header from "../components/Header/Header";

describe("Header component tests", () => {
  it("should render APP component with container class", () => {
    const { container } = render(<Header />);
    expect(container.firstChild).toHaveClass("header");
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render text content", () => {
    const { getByText } = render(<Header />);
    expect(getByText("Weather APP")).toBeInTheDocument();
  });
});
