import "./App.scss";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Channel from "./pages/Channel/Channel";
import Video from "./pages/Video/Video";

function App() {
  return (
    <div className="app">
      <div className="render-pages">
        
        <Switch>

          <Route path="/video">
            <Video />
          </Route>

          <Route path="/channel">
            <Channel />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

      </div>
    </div>
  );
}

export default App;
