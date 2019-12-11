import glob from "glob";
import path from "path";
import fs from "fs";
import sass from "sass";
import test from "ava";


let files = glob.sync(
    path.join(__dirname, "fixtures/*.scss")
);

files.forEach(filePath => {
    let expectedOutput = fs.readFileSync(filePath.replace(/\.scss$/, ".out"), "utf-8");

    let result = sass.renderSync({
        file: filePath
    });
    let out = result.css.toString();

    test(`Test fixture: ${path.basename(filePath)}`, t => {
        t.is(out.trim(), expectedOutput.trim());
    });
});
