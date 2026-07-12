import { readFile } from "node:fs/promises";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const appHtml = fileURLToPath(new URL("./app.html", import.meta.url));

function devAppFallback() {
  return {
    name: "dev-app-html-fallback",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url?.split("?")[0] || "/";
        const isAppRoute =
          req.method === "GET" &&
          (url === "/" ||
            url === "/app.html" ||
            url === "/resume" ||
            url === "/resume/" ||
            url.startsWith("/project/"));

        if (!isAppRoute) {
          next();
          return;
        }

        try {
          const html = await readFile(appHtml, "utf8");
          const transformedHtml = await server.transformIndexHtml(url, html);
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.end(transformedHtml);
        } catch (error) {
          next(error);
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [devAppFallback(), vue()],
  base: "/",
  publicDir: false,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "app",
    rollupOptions: {
      input: appHtml,
    },
  },
});