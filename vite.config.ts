import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve, dirname} from 'path';
import {fileURLToPath} from 'url';
import dts from 'unplugin-dts/vite';
import {promisify} from 'util';
import {exec} from 'child_process';
import Components from 'unplugin-vue-components/vite'

const __dirname = dirname(fileURLToPath(import.meta.url));

const execAsync = promisify(exec)

export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src'),
		},
	},
	build: {
		sourcemap: true,
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: "VueAdvancedCropper",
			fileName: 'vue-advanced-cropper',
			cssFileName: 'style',
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					"vue": 'Vue'
				}
			},
		}
	},
	plugins: [
		vue({
			template: {
				compilerOptions: {
					compatConfig: {
						MODE: 2
					}
				}
			}
		}),
		dts({
			bundleTypes: false,
			tsconfigPath: './tsconfig.build.json',
			processor: 'vue',
			copyDtsFiles: true,
			pathsToAliases: false,
		}),
		Components({
			dirs: ['src/components'],
			extensions: ['vue'],
			dts: 'src/types.d.ts',
		}),
		({
			name: 'post-build',
			async closeBundle() {
				console.log('Executing post build script');
				await execAsync('node ./postBuild.js');
				console.log('Post build script execution complete');
			}
		})
	]
});
