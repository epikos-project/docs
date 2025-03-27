import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(
    {
      title: "EpOikoS Docs",
      description: "Next Gen EOS Civilization Simulation",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Home", link: "/" },
          { text: "Docs", link: "/introduction/what-is-epoikos" },
        ],

        socialLinks: [
          { icon: "github", link: "https://github.com/epoikos-project" },
        ],
      },
      base: "/docs",
    },
    {
      documentRootPath: "/docs",
      useTitleFromFrontmatter: true,
      useTitleFromFileHeading: true,
      sortMenusByFrontmatterOrder: true,
      hyphenToSpace: true,
      capitalizeFirst: true,
    }
  )
);
