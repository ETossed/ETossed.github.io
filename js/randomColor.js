let colorArr = ["#EF9A9A", "#F48FB1", "#CE93D8", "#B39DDB", "#9FA8DA", "#90CAF9", "#81D4FA", "#80CBC4",
"#A5D6A7", "#C5E1A5", "#FFAB91"];
const highlightColor = colorArr[((new Date()) % 11)];
document.documentElement.style.setProperty("--highlight-color", highlightColor);