import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Forecast from "../components/Forecast/Forecast";

describe("Forecast component tests", () => {
  it("should render APP component with container class", () => {
    const { container } = render(<Forecast />);
    expect(container.firstChild).toHaveClass("title-container");
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<Forecast />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render text content", () => {
    const { getByText } = render(<Forecast />);
    expect(getByText("Daily forecast")).toBeInTheDocument();
  });
});
