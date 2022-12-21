let colorArr = ["#EF9A9A", "#F48FB1", "#CE93D8", "#B39DDB", "#9FA8DA", "#90CAF9", "#81D4FA", "#80CBC4",
"#A5D6A7", "#C5E1A5", "#E6EE9C", "#FFE082", "#FFCC80", "#FFAB91"];
console.log(colorArr.length)
const highlightColor = colorArr[((new Date()) % 15)];

document.documentElement.style.setProperty("--highlight-color", highlightColor);

