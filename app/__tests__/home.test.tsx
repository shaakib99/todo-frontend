import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Home from "../page";

afterEach(() => {
  cleanup();
});

describe("<Home />", () => {
  it("Match Snapshot", () => {
    render(<Home />);
    const homeSnapshot = renderer.create(<Home />).toJSON();
    expect(homeSnapshot).toMatchSnapshot();
  });
});
