import test from "ava";
import glob from "glob";
import fs from "fs";
import path from "path";

let root = path.join(__dirname, "..");


test("All individual mixin files are imported in mixins.scss", t => {
    let mixinFiles = glob.sync(`${root}/mixins/*.scss`)
        .map(filePath => filePath.replace(/^.*(mixins\/.*?)\.scss$/, '$1'))
        .sort();

    let imports = fs.readFileSync(`${root}/mixins.scss`, "utf-8")
        .match(/@import "(.*?)"/g)
        .map(entry => entry.replace(/^.*"(mixins\/.*?)".*?$/, '$1'))
        .sort();

    t.truthy(0 < mixinFiles.length, "Ensure that there are mixins");

    mixinFiles.forEach(
        (file, index) => {
            t.is(file, imports[index], `mixins.scss contains import for '${file}'`);
        }
    );
});
