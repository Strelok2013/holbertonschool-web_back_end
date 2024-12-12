export default function appendToEachArrayValue(array, appendString) {
    newArray = [];
    i = 0;

    for (const j of array) {
        newArray[i] = appendString + j;
        i += 1;
    }
  
    return newArray;
  }