const path = require("path");

function getDefaultDestination(crxFilePath) {
    const extname = path.extname(crxFilePath);
    const basename = path.basename(crxFilePath, extname);
    const dirname = path.dirname(crxFilePath);
    return path.resolve(dirname, basename);
}

module.exports = getDefaultDestination;
