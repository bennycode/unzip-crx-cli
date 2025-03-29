const path = require("path");
const unzip = require("./index");
const getDefaultDestination = require("./getDefaultDestination");

const crxFile = process.argv[2];
const outputDir = process.argv[3]; // Optional

if (!crxFile) {
    console.error("❌ Please provide the path to the CRX file as a parameter.");
    process.exit(1);
}

const resolvedCrxPath = path.resolve(crxFile);
const resolvedOutputDir = outputDir
    ? path.resolve(outputDir)
    : getDefaultDestination(resolvedCrxPath);

unzip(resolvedCrxPath, resolvedOutputDir)
    .then((destination) => {
        console.log("✅ Successfully unzipped your CRX file.");
        console.log(`📂 Extracted to: ${resolvedOutputDir}`);
    })
    .catch((err) => {
        console.error("❌ Failed to unzip CRX file:", err);
    });
