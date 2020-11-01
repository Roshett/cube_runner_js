const fs = require("fs");

const data = JSON.parse(fs.readFileSync("testdata.json", "utf8"));

let level = [];
const EMPTY = true;

for (let index = 0; index < 1000; index++) {
  if (EMPTY) {
    level.push({
      x: -index,
      y: -1,
      z: 0,
    });
  } else {
    if (data.some((item) => index > item && index < item + 4)) {
      level.push({
        x: -index,
        y: -999,
        z: 0,
      });
    } else {
      level.push({
        x: -index,
        y: -1,
        z: 0,
      });
    }
  }
}

fs.writeFileSync(
  "../src/core/levels/neffexrusmors.json",
  JSON.stringify(level, null, "\t")
);
