const { getDefaultConfig } = require('expo/metro-config');
module.exports = (async () => {
    const {
        resolver: { sourceExts, assetExts },
    } = await getDefaultConfig(__dirname);
    return {
        resolver: {
            assetExts: [
                ...assetExts,
                'png',
                'jpg',
                'jpeg',
                'gif',
                'svg',
                'ttf',
                'otf',
                'woff',
                'woff2',
            ],
            sourceExts: [
                ...sourceExts,
                'cjs',
                'jsx',
                'ts',
                'tsx',
                'mjs',
                'md',
                'mdx',
            ],
            
        },
        transformer: {
            assetPlugins: ['expo-asset/tools/hashAssetFiles'],
          },
    };
})();