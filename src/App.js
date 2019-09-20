import React from "react";
import { Route, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList";
import Character from "./components/Character";

export default function App() {
  return (
    <main>
      <div>
        <Link to="/">Home</Link>
      </div>
      <CharacterList />
      {/* <Route exact path="/" component={CharacterList} /> */}
      {/* <Route path="/" render={props => <Character {...props} />} /> */}
    </main>
  );
}
