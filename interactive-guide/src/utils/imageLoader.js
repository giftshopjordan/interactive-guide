const imageContext = require.context('../images', false, /\.(png|jpe?g|gif)$/);
export const images = imageContext.keys().reduce((acc, path) => {
    const imageName = path.replace('./', '').replace(/\.(png|lpe?g|gif)$/, '');
    acc[imageName] = imageContext(path);
    return acc;
}, {});