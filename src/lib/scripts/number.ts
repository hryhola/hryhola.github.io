export const deviate = (value: number, percentage: number): number => {
    // Calculate the maximum deviation
    const maxDeviation = value * percentage

    // Generate a random number between -maxDeviation and +maxDeviation
    const randomDeviation = Math.random() * (2 * maxDeviation) - maxDeviation

    // Return the value with the random deviation
    return value + randomDeviation
}
