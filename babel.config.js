module.exports = function(api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'react-native-reanimated/plugin',
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
                        '@helpers': './src/helpers',
                        '@providers': './src/providers',
                        '@hooks': './src/hooks',
                    },
                },
            ],
            // Required for expo-router
            'expo-router/babel',
        ],
    };
};
