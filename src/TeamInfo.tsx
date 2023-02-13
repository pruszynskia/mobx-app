import { observer } from "mobx-react-lite";
import React from "react";
import { useTeamStore } from "./TeamStore";

function TeamNameInfo() {
  const { teamName, setMascot } = useTeamStore();
  return (
    <>
      <h1 style={{ marginBottom: 1 }}>Team: {teamName}</h1>
      <input
        type="text"
        placeholder="Change mascot"
        onChange={(e) => setMascot(e.target.value)}
        style={{ marginBottom: 8 }}
      />{" "}
    </>
  );
}

export default observer(TeamNameInfo);
