import { useState } from "react";
import SelectView from "~/components/templates/SelectView";
import GameView from "~/components/templates/GameView";
import ResultView from "~/components/templates/ResultView";
import { ResultType } from "~/types/ResultType";

export const Play = () => {
  const [currentScreen, setCurrentScreen] = useState("select");
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [result, setResult] = useState<ResultType | null>(null);

  const handleTaskSelected = (id: string) => {
    setSelectedTaskId(id);
    setCurrentScreen("game");
  };
  const handleTaskCompleted = (result: ResultType) => {
    setResult(result);
    setCurrentScreen("result");
  };
  const handleSelectingTask = () => {
    setCurrentScreen("select");
  };

  return (
    <div>
      {currentScreen === "select" && (
        <SelectView onTaskSelected={handleTaskSelected} />
      )}
      {currentScreen === "game" && selectedTaskId && (
        <GameView
          taskId={selectedTaskId}
          onTaskCompleted={handleTaskCompleted}
        />
      )}
      {currentScreen === "result" && result && (
        <ResultView
          onRetryTask={handleTaskSelected}
          onSelectTask={handleSelectingTask}
          result={result}
        />
      )}
    </div>
  );
};

export default Play;
