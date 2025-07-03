const xlsx = require("xlsx");
const fs = require("fs");

// Load the Excel file
const workbook = xlsx.readFile("./TN_Engineering_Colleges.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);

// Sample course options
const courses = ["B.Tech", "M.Tech", "MBA", "MCA"];

// 30 realistic college-style logos (SVG/PNG)
const logos = [
  "https://upload.wikimedia.org/wikipedia/en/2/23/Anna_University_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/b/bc/VIT_University_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/7/7f/SRM_Institute_of_Science_and_Technology_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/5/5c/PSG_College_of_Technology_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/9/9e/SASTRA_University_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/2/2c/Sona_College_of_Technology_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/f/f4/Kalasalingam_University_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/1/1b/Bannari_Amman_Institute_of_Technology_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/c/cb/Karunya_University_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/d/dc/Hindustan_University_logo.svg",
  "https://upload.wikimedia.org/wikipedia/en/f/fc/NIT_Trichy_Logo.png",
  "https://upload.wikimedia.org/wikipedia/en/e/e7/Vellore_Institute_of_Technology_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/2/21/Coimbatore_Institute_of_Technology_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/7/70/Thiagarajar_College_of_Engineering_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/a/a1/Kongu_Engineering_College_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/f/f9/Velammal_Engineering_College_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/b/b7/Meenakshi_Sundararajan_Engineering_College_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/c/c9/Vel_Tech_University_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/0/03/SSN_College_of_Engineering_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/4/48/Rajalakshmi_Engineering_College_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/5/59/Saveetha_Engineering_College_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/1/1c/SRM_University_Logo.png",
  "https://upload.wikimedia.org/wikipedia/en/d/d5/Sri_Sairam_Engineering_College_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/7/71/Pavai_College_of_Technology_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/f/f5/Jeppiaar_Engineering_College_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/3/30/Velalar_College_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/3/3d/Alpha_College_of_Engineering_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/b/bd/Rajalakshmi_Institute_of_Technology_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/f/f7/Einstein_Engineering_College_logo.png",
  "https://upload.wikimedia.org/wikipedia/en/9/90/Vivekananda_College_of_Technology_logo.png"
];

// 30 high-quality Unsplash-style college campus images
const images = [
  "https://images.unsplash.com/photo-1556767576-cfba1f1f76d4",
  "https://images.unsplash.com/photo-1603575448363-b9ef3c9f2767",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  "https://images.unsplash.com/photo-1532619187608-e5375cab36f1",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
  "https://images.unsplash.com/photo-1506784365847-bbad939e9335",
  "https://images.unsplash.com/photo-1562774053-701939374585",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  "https://images.unsplash.com/photo-1574695407618-172d7c5bcdaf",
  "https://images.unsplash.com/photo-1613471869394-1aa28579fbd4",
  "https://images.unsplash.com/photo-1598373182133-1d4e2c8f3f03",
  "https://images.unsplash.com/photo-1581090700227-1e37b1904182",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  "https://images.unsplash.com/photo-1616529732165-3774c64f172b",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
  "https://images.unsplash.com/photo-1542224566-00c1d5f5de9d",
  "https://images.unsplash.com/photo-1614850523494-4e7cc60b3d45",
  "https://images.unsplash.com/photo-1603575359564-e9139d46972e",
  "https://images.unsplash.com/photo-1573497019164-cc59b09f8ac5",
  "https://images.unsplash.com/photo-1603575408887-8df9d160963f",
  "https://images.unsplash.com/photo-1623428451255-68e8e8f8ed12",
  "https://images.unsplash.com/photo-1603575378917-5a60d62ef6d5",
  "https://images.unsplash.com/photo-1516257982-c7d4d63cf625",
  "https://images.unsplash.com/photo-1502824081272-bbd3cbf535ef",
  "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
  "https://images.unsplash.com/photo-1603575398675-d5a12d0dfd1a",
  "https://images.unsplash.com/photo-1613472216352-2f5e18116c08",
  "https://images.unsplash.com/photo-1589998059171-9c9d1b99f9dc",
  "https://images.unsplash.com/photo-1555617803-3b8701e2d53d"
];

// Format the data
const formatted = data
  .filter(item => item["College Name"])
  .map(item => ({
    name: String(item["College Name"]).trim(),
    district: String(item["Affiliation"] || "").trim(),
    type: "Engineering",
    rating: +(Math.random() * (4.9 - 3.5) + 3.5).toFixed(1),
    established: Math.floor(Math.random() * (2015 - 1980 + 1)) + 1980,
    courses,
    logo: logos[Math.floor(Math.random() * logos.length)],
    image: images[Math.floor(Math.random() * images.length)],
    popularCourse: "Computer Science Engineering"
  }));

// Format to JS-like style (no quotes on keys)
const jsFormattedString = JSON.stringify(formatted, null, 2).replace(/"(\w+)"\s*:/g, "$1:");

// Save to JS file
fs.writeFileSync("tn_engineering_colleges.js", `const colleges = ${jsFormattedString};\n\nexport default colleges;`);

console.log("✅ tn_engineering_colleges.js created with 30 custom logos and images!");
