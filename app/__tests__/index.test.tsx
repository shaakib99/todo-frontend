import { render, screen } from "@testing-library/react";
import Home from "../page";


describe("Test root page component", () => {
  it("Renders Left title", () => {
    render(<Home />);
    const leftText = screen.getByRole("paragraph", {
        name: /Get Your Daily Work Done/i
    })

    expect(leftText).toBeInTheDocument();
  });
});
