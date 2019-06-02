import test from "ava";
import glob from "glob";
import sass from "sass";
import path from "path";

let root = path.join(__dirname, "..");
let files = glob.sync(`${root}/**/*.scss`);

test("Files found", t => {
    t.assert(files.length > 0);
});

files.forEach(
    file =>
    {
        test(`Compiling: ${path.relative(root, file)}`, t => {
            t.notThrows(
                () => sass.renderSync({file}),
                file
            );
        });
    }
);
