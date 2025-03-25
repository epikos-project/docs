import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(
    {
      title: "Epikos Docs",
      description: "Next Gen Eos Civilization Simulation",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Home", link: "/" },
          { text: "Docs", link: "/introduction/what-is-hyperion" },
        ],

        socialLinks: [
          { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
      },
      base: "/docs",
    },
    {
      documentRootPath: "/docs",
      useTitleFromFrontmatter: true,
      useTitleFromFileHeading: true,
      hyphenToSpace: true,
      capitalizeFirst: true,
    }
  )
);
