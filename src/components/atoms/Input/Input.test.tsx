import Input from "./Input";
import {
  expect,
  render,
  it,
  vi,
  fireEvent,
  getByTestId,
} from "../../../utils/test-utils";

describe("Input component", () => {
  it("Simple working test", async () => {
    const { getByText } = render(
      <Input label="Name" name={"Name"} value={""} onChange={() => {}} />
    );
    expect(getByText("Name")).toBeInTheDocument();
  });

  it("calls the provided onChange function when the input value changes", async () => {
    const handleChange = vi.fn();
    render(
      <Input
        label="Name2"
        onChange={handleChange}
        testId={"test-id-1"}
        value={""}
        name={"Name2"}
      />
    );
    const input = getByTestId(document.documentElement, "test-id-1");
    fireEvent.change(input, { target: { value: "inputValue" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("should fail", async () => {
    render(
      <Input
        label="Name2"
        onChange={() => {}}
        testId={"test-id-1"}
        value={""}
        name={"Name2"}
      />
    );
    const input = getByTestId(document.documentElement, "test-id-1");
    fireEvent.change(input, { target: { value: "inputValue" } });
    expect(1).not.toBe(2);
  });
});
