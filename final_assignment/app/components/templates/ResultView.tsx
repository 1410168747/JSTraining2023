import { ResultType } from "~/types/ResultType";

interface ResultViewProps {
  result: ResultType;
  onRetryTask: (id: string) => void;
  onSelectTask: () => void;
}

export const ResultView = ({
  result,
  onRetryTask: onSelectTask,
  onSelectTask: onHoge,
}: ResultViewProps) => {
  const { typo, elapsedTime } = result;
  return (
    <div>
      <p>きろく</p>
      <p>タイム</p>
      <p>{elapsedTime}</p>
      <p>まちがった入力</p>
      {typo && typo.size > 0 ? (
        <div>
          {Array.from(typo).map(([key, value]) => (
            <div key={key}>
              {`${key}: ${Array.from(value.actuals).join(",")}`}
            </div>
          ))}
        </div>
      ) : (
        <div>なし</div>
      )}
      <button onClick={onHoge}>問題を選ぶ</button>
      <button onClick={() => onSelectTask(result.id)}>もう一度挑戦する</button>
    </div>
  );
};
export default ResultView;
