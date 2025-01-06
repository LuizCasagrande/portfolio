const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  const target = './src/environments/environment.ts';

  const envFile = `
    export const environment = {
      githubToken: '${process.env['GITHUB_TOKEN']}',
    };
  `;

  writeFile(target, envFile, (err: any) => {
    if (err) {
      throw err;
    } else {
      console.log(`Angular environment.ts file generated correctly at ${target}`);
    }
  });
};

setEnv();
