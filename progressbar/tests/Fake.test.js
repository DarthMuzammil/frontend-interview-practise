import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ApiRequestSimulator from "@/components/Fake";

test("simulates API request and updates UI", async () => {
  render(<ApiRequestSimulator />);
  
  // Start API request
  fireEvent.click(screen.getByText("Start API Request"));

  // Expect loading text
  expect(screen.getByText("Loading...")).toBeInTheDocument();

  // Wait for success or failure
  await waitFor(() => {
    expect(
      screen.getByText(/Success ✅|Failed ❌/)
    ).toBeInTheDocument();
  });
});
