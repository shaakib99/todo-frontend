import renderer from "react-test-renderer";
import Login from "../page";

describe("<Login />", () => {
  it("Match Snapshot", () => {
    const tree = renderer.create(<Login />);
    expect(tree).toMatchSnapshot();
  });
});
