import { cleanup, render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "../page";

afterEach(() => {
  cleanup();
});

describe("Test root page component", () => {
  it("Renders Left title", () => {
    render(<Home />);
    const homeSnapshot = renderer.create(<Home />).toJSON();
    expect(homeSnapshot).toMatchSnapshot();
  });
});
