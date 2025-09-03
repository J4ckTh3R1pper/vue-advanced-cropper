const sass = require('sass-embedded');
const autoprefixer = require('autoprefixer');
const postcss = require('postcss');
const fs = require('fs');

const themes = ['compact', 'classic', 'bubble'];

themes.forEach( async (theme) => {
	const result = await sass.compileAsync(`./src/themes/${theme}.scss`);
	const css = result.css;

	postcss([autoprefixer])
		.process(css)
		.then((result) => {
			result.warnings().forEach((warn) => {
				console.warn(warn.toString());
			});
			fs.writeFileSync(`./dist/theme.${theme}.css`, result.css);
		});

	fs.copyFileSync(`./src/themes/${theme}.scss`, `./dist/theme.${theme}.scss`);
});
fs.copyFileSync(`./src/types.d.ts`, `./dist/types.d.ts`);
