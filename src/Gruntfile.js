module.exports = function (grunt) {
    "use strict";

    var commonFiles = "common/**/*.ts";
    var serverFiles = ["server/**/*.ts", commonFiles];
    var clientFiles = ["client/**/*.ts", commonFiles];

    grunt.initConfig({

        watch:{
            server: {
                files: serverFiles,
                tasks: ['ts:server'],
            },
            client: {
                files: clientFiles,
                tasks: ['ts:client'],
            }
        },

        ts: {

            options: {
                sourceMap: false,
                comments: false,               // same as !removeComments. [true | false (default)]
                target: 'es5',                 // target javascript language. [es3 (default) | es5]
                module: 'amd',                 // target javascript module style. [amd (default) | commonjs]                
                declaration: false,            // generate a declaration .d.ts file for every output js file. [true | false (default)]
                fast: true,
            },

            server: {                
                src: serverFiles,
                outDir: '../fullstack',
                baseDir: '.',
                options: {
                    module: 'commonjs',
                },
            },

            client: {                
                src: clientFiles,
                outDir: '../fullstack/server/public/js',
                baseDir: '.',
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
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("default", ["ts","watch"]);
};