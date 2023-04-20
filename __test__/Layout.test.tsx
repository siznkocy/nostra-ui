import { Navbar } from "@/components/layout/Navbar";
import { navList } from "@/data/NavData";
import { render, screen } from "@testing-library/react";

describe("Navbar", () => {
  describe("<Menu />", () => {
    let name = "shop";

    test("is should be there", () => {
      render(<Navbar />);

      expect(screen.getByText(new RegExp(name, "i"))).toBeInTheDocument();
    });

    // * Using a single nav list to test if
  });
  // test.each(navList)("it should have '$name' link", ({ name }) => {
  //   expect(screen.getByText(new RegExp(name, "i"))).toBeInTheDocument();
  // });
});
