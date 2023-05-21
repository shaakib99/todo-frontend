import { render } from "@testing-library/react"
import renderer from "react-test-renderer"
import Registration from "../page"

describe("<Registration />", ()=> {
    it("Match Snapshot", ()=> {
        const tree = renderer.create(<Registration />).toJSON()
        expect(tree).toMatchSnapshot();

    })
})