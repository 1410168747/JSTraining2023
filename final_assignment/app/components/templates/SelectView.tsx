import SecondaryCard from "~/components/atoms/SecondaryCard";
import tasks from "~/data/tasks.json"; // tasks.jsonをインポート
import { TaskDescription } from "../molecules/TaskLabel";

interface SelectViewProps {
  onTaskSelected: (id: string) => void;
}

export const SelectView = ({ onTaskSelected: onSelectTask }: SelectViewProps) => {
  const loaderData = tasks.tasks;

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          overflowY: "auto",
        }}
      >
        {loaderData.map((e) => (
          <div key={e.id} onClick={() => onSelectTask(e.id)}>
            <SecondaryCard>
              <TaskDescription title={e.name} description={e.description} />
            </SecondaryCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectView;
