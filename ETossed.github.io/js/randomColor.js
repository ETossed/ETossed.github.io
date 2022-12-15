let colorArr = ["#D50000", "#C51162", "#AA00FF", "#6200EA", "#304FFE", "#2962FF", "#0091EA", "#00B8D4", "#00BFA5",
"#00C853", "#64DD17", "#41C300", "#AEEA00", "#FFD600", "#FF6D00", "#DD2C00"];
const highlightColor = colorArr[((new Date()) % 16)];

document.documentElement.style.setProperty("--highlight-color", highlightColor);

