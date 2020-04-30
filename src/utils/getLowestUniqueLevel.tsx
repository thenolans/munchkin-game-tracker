export default (levels: number[]) => {
  const min = Math.min(...levels);
  const minLevelLength = levels.filter((level) => min === level).length;
  return minLevelLength === 1 ? min : null;
};
