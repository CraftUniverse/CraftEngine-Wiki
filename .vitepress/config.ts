import { defineConfig } from "vitepress";
import fsp from "fs/promises";
import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CraftEngine Wiki",
  description: "The Offical wiki of the CraftEngine",
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      "meta",
      {
        name: "google-site-verification",
        content: "XbIuHO2H8UxzRgxUoxgjPN1SUYbNxR37qfu4ok33bus",
      },
    ],
    ["link", { rel: "icon", href: "/icons/favicon-96x96.png" }],
    ["link", { rel: "shortcut icon", href: "/icons/favicon.ico" }],
    ["link", { rel: "shortcut icon", href: "/icons/favicon.ico" }],
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Develop the CraftEngine", link: "/develop/introduction" },
      { text: "SDK", link: "/sdk/introduction" },
    ],

    sidebar: {
      "/sdk/": [
        {
          text: "SDK",
          base: "/sdk",
          items: [
            {
              text: "Introduction",
              link: "/introduction",
            },
          ],
        },
      ],
      "/develop/": [
        {
          text: "Develop the CraftEngine",
          base: "/develop",
          items: [
            {
              text: "Introduction",
              link: "/introduction",
            },
            {
              text: "Editor IPC Protocol",
              link: "/editor-ipc",
            },
            {
              text: "Code Generator",
              link: "/code-generator",
            },
            {
              text: "Servers",
              collapsed: true,
              link: "/",
              base: "/develop/servers",
              items: [
                {
                  text: "Runtime Server",
                  link: "/runtime-server",
                },
                {
                  text: "Logic Servers",
                  link: "/logic-servers",
                },
              ],
            },
            {
              text: "Exported Projects",
              link: "/",
              collapsed: true,
              base: "/develop/projects",
              items: [
                {
                  text: "Layout",
                  link: "/layout",
                },
                {
                  text: "File Formats",
                  link: "/",
                  base: "/develop/projects/formats",
                  items: [
                    {
                      text: "Game Config",
                      link: "/gameconfig",
                    },
                    {
                      text: "MEMAP",
                      link: "/memap",
                    },
                    {
                      text: "LGCSRVCF",
                      link: "/lgcsrvcf",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/CraftUniverse" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>earth</title><path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13A1,1 0 0,0 14,12H8V10H10A1,1 0 0,0 11,9V7H13A2,2 0 0,0 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16A2,2 0 0,0 11,18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>',
        },
        link: "https://craftengine.dev",
      },
      { icon: "x", link: "https://x.com/CU_CraftEngine" },
    ],

    footer: {
      message:
        'Released under the <a href="/licence">CC BY-SA 4.0</a> License.',
      copyright: "Copyright © 2025-present CraftUniverse",
    },

    editLink: {
      pattern:
        "https://github.com/CraftUniverse/CraftEngine-Wiki/edit/master/:path",
      text: "Edit this page on GitHub",
    },
    search: {
      provider: "local",
    },
    logo: "/icons/favicon-96x96.png",
    externalLinkIcon: true,

    lastUpdated: {
      formatOptions: {
        hour12: false,
        forceLocale: true,
        dateStyle: "long",
        timeStyle: "short",
      },
    },
  },

  rewrites: {
    "wiki/sdk/:page": "sdk/:page",
    "wiki/develop/:page": "develop/:page",
    "wiki/develop/servers/:page": "develop/servers/:page",
    "wiki/develop/projects/:page": "develop/projects/:page",
    "wiki/develop/projects/formats/:page": "develop/projects/formats/:page",
  },

  markdown: {
    image: {
      lazyLoading: true,
    },
  },

  sitemap: {
    hostname: "https://wiki.craftengine.dev",
  },

  // Copy the Icons to the "dist" folder
  async buildEnd(siteConfig) {
    const srcDir = path.join(__dirname, "..", "icons");
    const distDir = path.join(siteConfig.outDir, "icons");

    await fsp.cp(srcDir, distDir, { recursive: true });
  },
});
