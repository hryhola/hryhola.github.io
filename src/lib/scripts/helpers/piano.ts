import { deviate } from "./number";

export const shouldRenderBlackKey = (whiteKeyIndex: number) => {
    const positionInOctave = whiteKeyIndex % 7;

    const blackKeyPositions = [0, 1, 3, 4, 5];

    return blackKeyPositions.includes(positionInOctave);
}

export const getKeyWidth = (keyIndex: number, skillsLength: number) => {
    const mid = skillsLength / 2;

    // Calculate the quadratic distance from the middle point
    const distanceFromMid = Math.abs(keyIndex - mid);

    // Normalize the distance (scale it between 0 and 1)
    const normalizedDistance = distanceFromMid / mid;

    // Calculate kw: if distance is 0, kw should be 0; if distance is max (1), kw should be 100
    const keyWidth = 100 * (1 - Math.pow(normalizedDistance, 2));

    return deviate(100 - keyWidth / 1.15, 0);
}

export const whiteKeyIndexToNoteName = (whiteKeyIndex: number) => {
    // The sequence of white keys in an octave
    const whiteKeys = ['c', 'd', 'e', 'f', 'g', 'a', 'b'];

    // Calculate the octave and position within the octave
    let octave = Math.floor(whiteKeyIndex / 7) + 1; // Octave number, starting from 1

    let positionInOctave = whiteKeyIndex % 7; // Position within the octave

    // Get the note name
    let noteName = whiteKeys[positionInOctave];

    // Combine note name with octave number
    return octave + '-' + noteName;
}

export const getNoteFile = (note: string) =>'piano/mp3/' + note + '.mp3'

export const getKeyFile = (key: number) => getNoteFile(whiteKeyIndexToNoteName(key))
