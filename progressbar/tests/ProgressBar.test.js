import { render } from "@testing-library/react";
import ProgressBar from "@/components/ProgressBar";

test("renders progress bar correctly", () => {
  const { container } = render(<ProgressBar progress={50} status="loading" />);
  expect(container.firstChild).toBeInTheDocument();
});
