import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import htmlPlugin from 'vite-plugin-html-config'
import { htmlPluginOptions } from './config'

// eslintPlugin({ cache: false, }),

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 9009 },
  // server: {
	// 	proxy: {
	// 		'/api': 'http://localhost:6006',
  //    changeOrigin: true,
  //    secure: false,
	// 	}
	// },
  resolve: {
		alias: [{
			find: '@',
			replacement: (
        resolve(__dirname, 'src')
      ),
		}],
  },
  plugins: [
		react(),
    tsConfigPaths(),
		htmlPlugin(htmlPluginOptions),
  ],
})
