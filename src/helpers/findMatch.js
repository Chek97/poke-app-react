import { keyData } from "../utils/searchData"

export const findWords = (value) => {
    let matchData = [];
    for (const key of keyData) {
        if(key.includes(value)){
            matchData.push(key);
        }
    }
    return matchData;
}