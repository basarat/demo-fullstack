module.exports = function (grunt) {
    "use strict";

    var commonFiles = "common/**/*.ts";
    var serverFiles = ["server/**/*.ts", commonFiles];
    var clientFiles = ["client/**/*.ts", commonFiles];

    grunt.initConfig({
        ts: {

            options: {
                sourceMap: false,
                comments: false,               // same as !removeComments. [true | false (default)]
                target: 'es5',                 // target javascript language. [es3 (default) | es5]
                module: 'amd',                 // target javascript module style. [amd (default) | commonjs]                
                declaration: false,            // generate a declaration .d.ts file for every output js file. [true | false (default)]
            },

            server: {
                fast: true,
                src: serverFiles,
                outDir: '../fullstack',
                watch: '.',
                options: {
                    module: 'commonjs',
                },
            },

            client: {
                fast: true,
                src: clientFiles,
                outDir: '../fullstack/public/js',
                watch: '.',
                options: {
                    module: 'amd',
                },
            },

        },

        concurrent: {
            options: {
                logConcurrentOutput: true,
            },
            fullstack: ['ts:server', 'ts:client'],
        }

    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-concurrent');

    grunt.registerTask("default", ["concurrent"]);
};