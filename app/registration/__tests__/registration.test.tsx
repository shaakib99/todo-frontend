import renderer from "react-test-renderer";
import Registration from "../page";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

describe("<Registration />", () => {
  it("Match Snapshot", () => {
    const tree = renderer.create(<Registration />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
