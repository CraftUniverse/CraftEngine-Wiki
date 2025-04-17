---
layout: doc
outline: false
---

# Config

Configuration of the project

---

Filename: `config.dat`

Serializer: [MessagePack](https://msgpack.org/)

## Format

| Name            | Type                               | Description                                  |
| --------------- | ---------------------------------- | -------------------------------------------- |
| Magic Number    | int32                              | `CEpc1` (0xCE9C1)                            |
| Project Name    | string                             | The Name of the project                      |
| Project Version | string                             | The User specified Version of the Project    |
| Project Authors | [projectAuthor](#project-author)[] | An Array with the Authors of the Project     |
| Game Version    | string                             | The Version of Minecraft (e.q. 1.21.4)       |
| Game Protocol   | int32                              | The Protocol Version of Minecraft (e.q. 769) |

## Project Author

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| Name    | string |             |
| Website | string |             |
| E-Mail  | string |             |
