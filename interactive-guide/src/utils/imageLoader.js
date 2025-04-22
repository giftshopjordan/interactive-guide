let imageContext;
try {
    imageContext = require.context('../images', false, /\.(png|jpe?g|gif)$/);
} catch (e) {
    imageContext = { keys: () => [], resolve: () => {} };
}

export const images = imageContext.keys().reduce((acc, path) => {
    const imageName = path.replace('./', '').replace(/\.(png|jpe?g|gif)$/, '');
    acc[imageName] = imageContext(path);
    return acc;
}, {});