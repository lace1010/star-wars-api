// import Films from "../pages/Films";
import Loading from "../components/Loading";
import renderer from "react-test-renderer";
// import callSwapi from "../utils/callSwapi";

// this will test loading page because it doesn't wait for data to load
test("app snapshot test", () => {
  const component = renderer.create(<Loading />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// want to run a snapshot test for each page after data has been loaded...
