import { fileURLToPath, URL } from 'node:url'

import path from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from "unplugin-icons/vite";
import AutoImport from "unplugin-auto-import/vite";
import IconsResolver from "unplugin-icons/resolver";
import { NaiveUiResolver, VueUseComponentsResolver, VueUseDirectiveResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Icons({
      compiler: "vue3",
      autoInstall: true
    }),
    Components({
      dirs: ["./src/**"],
      resolvers: [IconsResolver(), NaiveUiResolver(), VueUseComponentsResolver(), VueUseDirectiveResolver()],
      types: [
        {
          from: "vue-router",
          names: ["RouterLink", "RouterView"]
        }
      ],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: true
    }),
    AutoImport({
      resolvers: [
        IconsResolver({ prefix: "Icon" }),
        NaiveUiResolver(),
        VueUseComponentsResolver(),
        VueUseDirectiveResolver()
      ],
      dts: true
    })
  ],
  server: {
    host: true,
    port: 5173
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
