import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import CurrentWeather from "../components/CurrentWeather/CurrentWeather";

describe("CurrentWeather component tests", () => {
  it("should render APP component with container class", () => {
    const { container } = render(<CurrentWeather />);
    expect(container.firstChild).toHaveClass("weather");
  });

  it("should match the snapshot", () => {
    const tree = renderer.create(<CurrentWeather />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render text content", () => {
    const { container, getByText } = render(<CurrentWeather />);
    expect(getByText("Feels like")).toBeInTheDocument();
    expect(getByText("Wind")).toBeInTheDocument();
    expect(getByText("Humidity")).toBeInTheDocument();
  });
});
