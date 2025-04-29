module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: ['react-native-reanimated/plugin'], // 애니메이션 기능 react-native-reanimated 사용을 위한 필수 플러그인 추가
    };
};
