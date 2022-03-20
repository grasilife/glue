import path from 'path';
import { glob, fsExtra } from '@umijs/utils';

const Dir = path.join(__dirname, '../packages/glue-components/src');

(async () => {
  glob(`${Dir}/**/*.md`, {}, (error, files) => {
    if (!error) {
      files.forEach(file => {
        fsExtra.removeSync(file);
      });
    }
  })
})();
