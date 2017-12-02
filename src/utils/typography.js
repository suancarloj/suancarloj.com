import Typography from 'typography';
import CodePlugin from 'typography-plugin-code';
import moragaTheme from 'typography-theme-moraga';

moragaTheme.plugins = [
  new CodePlugin(),
];

const typography = new Typography(moragaTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles();
}

export default typography;