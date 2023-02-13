import React from "react";
import "./App.css";
import Athlete from "./Athlete";
import MoneyForm from "./MoneyForm";
import Roster from "./Roster";
import TeamInfo from "./TeamInfo";
import { TeamStoreProvider } from "./TeamStore";

const lebroneJames = new Athlete("Lebron James", 37, 5_000_000);
const stephCurry = new Athlete("Steph Curry", 34, 4_000_000);

function getPlayersFromBackend(): Athlete[] {
  return [lebroneJames, stephCurry];
}

function App() {
  const players = getPlayersFromBackend();
  return (
    <div className="App">
      <header className="App-header">
        <TeamStoreProvider players={players}>
          <TeamInfo />
          <Roster />
          <MoneyForm />
        </TeamStoreProvider>
      </header>
    </div>
  );
}

export default App;
