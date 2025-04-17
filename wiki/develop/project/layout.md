# Project Layout

This is the layout of how the [Editor](/develop/editor/) structs the project.

```
root
├── .cache²
│   └── build³
├── config.dat
└── .gitignore
```

² Ignored by the `.gitignore`

³ Has the Data-Driven Files from the Compiler [Read More about the Exported Project](/develop/exported_project/layout)

::: info
Data-Driven files are for example [gameConfig.dat](/develop/exported_project/formats/gameconfig).

Files like the [Logic servers](/develop/servers/logic-servers) and the [Runtime Server](/develop/servers/runtime-server) are not included in this case. The [Logic servers](/develop/servers/logic-servers) are run by the Language JIT. And the [Runtime Server](/develop/servers/runtime-server) is stored at:

**Windows** - `%appdata%/CraftEngine/Runtimes/<version>.jar`
:::

---

Read more about the File Formats in the [File Formats](/develop/project/formats/) section.
