import { createElement, render } from "nervjs";
import styled from "styled-components";
import { withState, withHandlers, defaultProps } from "recompose";
import { compose, pipe, prop, path } from "ramda";

const enhance = compose(
  defaultProps({ defaultName: "CodeSandBox" }),
  withState("name", "setName", prop("defaultName")),
  withHandlers({
    updateName: ({ setName }) => pipe(path(["target", "value"]), setName)
  })
);

const Hello = enhance(({ name, updateName }) => (
  <div>
    <h1>Hello {name}!</h1>
    <input type="text" value={name} onChange={updateName} />
  </div>
));

const AppWrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
`;

const App = () => (
  <AppWrapper>
    <Hello />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </AppWrapper>
);

render(<App />, document.getElementById("root"));
