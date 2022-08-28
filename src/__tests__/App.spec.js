import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";

describe("App component tests", () => {
  it("should render APP component with container class", () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveClass("app");
  });

  it("should match the snapshot", () => {
    const tree = renderer
      .create(<App />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
    