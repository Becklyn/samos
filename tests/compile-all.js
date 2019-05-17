import test from "ava";
import glob from "glob";
import sass from "sass";


test.cb("Compile all files", t => {
    glob(
        __dirname + "/../{mixins/**/,}*.scss",
        (err, files) =>
        {
            if (err)
            {
                t.fail();
                return;
            }

            t.assert(files.length > 0);

            files.forEach( file => {
                // compilation must not fail with errors or deprecations
                t.notThrows(
                    () => sass.renderSync({file}),
                    file
                );
            });

            t.end();
        }
    );
});

