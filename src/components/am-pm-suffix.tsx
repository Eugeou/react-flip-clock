import { StaticCard } from "./static-card";

export const AmPmSuffix = ({
  value,
}: {
  value: string;
}) => {
  return (
    <div className="flipUnitContainer am-pm-container">
      <StaticCard position={"upperCard"} digit={value} />
      <StaticCard position={"lowerCard"} digit={value} />
    </div>
  );
};
