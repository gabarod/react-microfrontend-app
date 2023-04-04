export const bemClassNames = (blockName, elementNames = []) => {
  return elementNames.reduce((acc, elementName) => {
    const className = `${blockName}__${elementName}`;
    return {
      ...acc,
      [elementName]: `.${className}`,
    };
  }, {});
};
