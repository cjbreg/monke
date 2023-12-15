module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    extensions: [
                        '.js',
                        '.jsx',
                        '.ts',
                        '.tsx',
                        '.android.js',
                        '.android.tsx',
                        '.ios.js',
                        '.ios.tsx',
                        '.mjs',
                    ],
                    root: './',
                    alias: {
                        '@': './src',
                        '@ui': './src/ui',
                        '@components': './src/components',
                    },
                },
            ],
            // Required for expo-router
            'expo-router/babel',
        ],
    };
};
