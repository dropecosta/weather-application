import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Search from "../components/Search/Search";

describe("Search component tests", () => {
  it("should render APP component with container class", () => {
    const { container } = render(<Search />);
    expect(container.firstChild).toHaveClass("search");
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render text content", () => {
    const { getByText } = render(<Search />);
    expect(getByText("Search for city")).toBeInTheDocument();
  });
});
