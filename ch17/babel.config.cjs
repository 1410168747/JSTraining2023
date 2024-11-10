module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    node: "current", // Node.jsの現在のバージョンをターゲットに
                },
            },
        ],
    ],
};