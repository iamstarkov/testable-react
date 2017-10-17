const reduceClasses = (acc, curr) => ({ ...acc, [curr]: curr });
const mockClasses = styles => Object.keys(styles).reduce(reduceClasses, {});

export default mockClasses;
