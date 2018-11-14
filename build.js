const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const pathToBuild = path.resolve(__dirname, 'packages', 'build');
fs.exists(pathToBuild, function(buildFolderExists) {
  let performBuild = true;
  if (buildFolderExists) {
    exec(`rm -rf ${pathToBuild}`, function(err) {
      if (err) {
        console.log(`Could not Remove build Folder, Error: ${err.message}`);
        performBuild = false;
      }
    });
    if (!performBuild) return;
  }
  exec(
    'cd packages/frontend && yarn build && mv build ../build && cd ../..',
    (err) => {
      if (err) {
        console.log(err.message);
        process.exit(1);
      }
    },
  );
});
