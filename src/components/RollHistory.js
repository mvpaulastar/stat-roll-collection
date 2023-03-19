import "./RollHistory.css";
import useFetch from "./useFetch";

const RollHistory = () => {
  const {
    data: rollHistory,
    isPending,
    error,
  } = useFetch("http://localhost:5000/statBlocks");
  console.log(rollHistory);
  return (
    <div className="history">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {rollHistory && (
        <ul className="stat-history">
          {rollHistory.map((statBlock) => (
            <li key={statBlock.id}>
              {formattedStatBlock(statBlock.newStatBlock)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function formattedStatBlock(statBlock) {
  return (
    <div>
      {statBlock.map((stat) => (
        <span>{stat}</span>
      ))}
    </div>
  );
}

export default RollHistory;
