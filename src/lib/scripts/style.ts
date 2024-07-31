export function replaceFrValue(initialFrValues: number[], replaceIndex: number, totalHeight: number, replaceHeight: number) {
    // Calculate the total number of initial fractions
    const totalInitialFr = initialFrValues.reduce((acc, val) => acc + val, 0);

    // Calculate the pixel height of one fraction unit
    const pixelPerFr = totalHeight / totalInitialFr;

    // Calculate the new fraction value for the replaceHeight
    const newFrValue = replaceHeight / pixelPerFr;

    // Find and replace the specified fr value with the new fraction value
    const updatedFrValues = initialFrValues.map((val, index) => {
        if (index === replaceIndex) {
            return newFrValue;
        }
        return val;
    });

    // Calculate the remaining fraction units after replacing the specified fr value
    const remainingFr = totalInitialFr - initialFrValues[replaceIndex];

    // Adjust the other fraction values to account for the new fraction value
    const adjustedFrValues = updatedFrValues.map((val, index) => {
        if (index !== replaceIndex) {
            return (val / remainingFr) * (totalInitialFr - newFrValue);
        }
        return val;
    });

    // Return the updated grid-template-rows value as a string
    return adjustedFrValues.map(val => `${val}fr`).join(' ');
}
