import { numberCoins } from "../utils/numberOfCoins.js";
import {
  listOfObjectsFromTable,
  randomRangeSelection,
} from "../utils/helpers.js";
import { gems10, gems50 } from "../tables/gems.js";
import { art25 } from "../tables/artObjects.js";
import { magicItemsA } from "../tables/magicItemsA.js";
import { magicItemsB } from "../tables/magicItemsB.js";
import { magicItemsC } from "../tables/magicItemsC.js";
import { magicItemsF } from "../tables/magicItemsF.js";
import { magicItemsG } from "../tables/magicItemsG.js";
import { randomWholeNumber } from "../utils/helpers.js";

export function treasureE() {
  const treasure = {
    CP: numberCoins(6, 6, 100),
    SP: numberCoins(3, 6, 100),
    GP: numberCoins(2, 6, 10),
  };

  const n = randomWholeNumber(100);
  if (n <= 6) {
    // nothing
  } else if (n <= 16) {
    treasure["10 gp gems"] = listOfObjectsFromTable(2, 6, gems10);
  } else if (n <= 26) {
    treasure["25 gp art objects"] = listOfObjectsFromTable(2, 4, art25);
  } else if (n <= 36) {
    treasure["50 gp gems"] = listOfObjectsFromTable(2, 6, gems50);
  } else if (n <= 44) {
    treasure["10 gp gems"] = listOfObjectsFromTable(2, 6, gems10);
    treasure["Magic items"] = listOfObjectsFromTable(1, 6, magicItemsA);
  } else if (n <= 52) {
    treasure["25 gp art objects"] = listOfObjectsFromTable(2, 4, art25);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 6, magicItemsA);
  } else if (n <= 60) {
    treasure["50 gp gems"] = listOfObjectsFromTable(2, 6, gems50);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 6, magicItemsA);
  } else if (n <= 65) {
    treasure["10 gp gems"] = listOfObjectsFromTable(2, 6, gems10);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 4, magicItemsB);
  } else if (n <= 70) {
    treasure["25 gp art objects"] = listOfObjectsFromTable(2, 4, art25);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 4, magicItemsB);
  } else if (n <= 75) {
    treasure["50 gp gems"] = listOfObjectsFromTable(2, 6, gems50);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 4, magicItemsB);
  } else if (n <= 78) {
    treasure["10 gp gems"] = listOfObjectsFromTable(2, 6, gems10);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 4, magicItemsC);
  } else if (n <= 80) {
    treasure["25 gp art objects"] = listOfObjectsFromTable(2, 6, art25);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 4, magicItemsC);
  } else if (n <= 85) {
    treasure["50 gp gems"] = listOfObjectsFromTable(2, 6, gems50);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 4, magicItemsC);
  } else if (n <= 92) {
    treasure["25 gp art objects"] = listOfObjectsFromTable(2, 4, art25);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 4, magicItemsF);
  } else if (n <= 97) {
    treasure["50 gp gems"] = listOfObjectsFromTable(2, 6, gems50);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 4, magicItemsF);
  } else if (n <= 99) {
    treasure["25 gp art objects"] = listOfObjectsFromTable(2, 4, art25);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 1, magicItemsG);
  } else if (n <= 100) {
    treasure["50 gp gems"] = listOfObjectsFromTable(2, 6, gems50);
    treasure["Magic Items"] = listOfObjectsFromTable(1, 1, magicItemsG);
  }

  return treasure;
}

const randomSellable = randomRangeSelection([
  [[1, 6]],
  () => ({}),
  [
    [7, 16],
    [37, 44],
    [61, 65],
    [76, 78],
  ],
  () => ({ "10 gp gems": listOfObjectsFromTable(2, 6, gems10) }),
  [
    [17, 26],
    [45, 52],
    [66, 70],
    [79, 89],
    [86, 92],
    [98, 99],
  ],
  () => ({ "25 gp art objects": listOfObjectsFromTable(2, 4, art25) }),
  () => ({ "50 gp gems": listOfObjectsFromTable(2, 6, gems50) }),
]);
