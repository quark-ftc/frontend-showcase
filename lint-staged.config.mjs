const processFiles = (fileNames) => {
  const eslintOnlySuffixes = [
    'js',
    'mjs',
    'cjs',
    'ts',
    'mts',
    'cts',
    'jsx',
    'tsx',
  ];
  const eslintOnlyFileNames = fileNames.filter((fileName) =>
    eslintOnlySuffixes.some((suffix) => fileName.endsWith(suffix)),
  );

  return [
    `pnpm exec eslint ${eslintOnlyFileNames.join(' ')}`,
    `pnpm exec prettier -w ${fileNames.join(' ')}`,
  ];
};

export default {
  // 匹配 apps 目录下所有子包中的源文件
  'apps/*/src/**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue,css,scss,less,yaml,md,mdx}':
    processFiles,
  // 匹配 apps 目录下所有子包的 storybook 配置文件
  'apps/*/.storybook/**/*.{js,ts}': processFiles,
  // 匹配根目录下的配置文件
  './*.{js,mjs,cjs,ts,mts,cts,jsx,tsx,vue,css,scss,less,yaml,md,mdx}':
    processFiles,
};
