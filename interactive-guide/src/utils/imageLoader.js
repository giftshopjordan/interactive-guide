const imageModules = import.meta.glob('../images/*.{png,jpg,jpeg,gif}', { eager: true });

export const images = Object.entries(imageModules).reduce((acc, [path, module]) => {
  const name = path
    .split('/')
    .pop()
    .replace(/\.(png|jpe?g|gif)$/, '');
  acc[name] = module.default;
  return acc;
}, {});
