---
layout: doc
outline: false
---

# Game Config

Filename: `gameConfig.dat`

Serializer: [`MessagePack`](https://msgpack.org/)

Compression: [`LZMA`](https://en.wikipedia.org/wiki/LZMA)

## Format

| Name                 | Type                               | Description                                                                                                              |
| -------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Magic Number         | int32                              | `CEgc1` (0xCE6C1)                                                                                                        |
| Project ID           | string                             | The ID of the project                                                                                                    |
| Project Name         | string                             | The Name of the project                                                                                                  |
| Project Version      | string                             | The User specified Version of the Project                                                                                |
| Project Build        | uint32                             | The Auto-Generated build-number of the Project                                                                           |
| Project Authors      | [projectAuthor](#project-author)[] | An Array with the Authors of the Project                                                                                 |
| Runtime Version      | uint32                             | The build id of the CraftEngine Runtime                                                                                  |
| Game Version         | string                             | The Version of Minecraft (e.q. 1.21.5)                                                                                   |
| Game Protocol        | uint32                             | The Protocol Version of Minecraft (e.q. 770)                                                                             |
| Max Players          | int32                              | The maximal amount of Players on the Server                                                                              |
| Download Server Icon | boolean                            | If `true` the `Server Icon` is getting downloaded from the specified URL                                                 |
| Icon Fetch Interval  | int32                              | The Interval in Minutes for the Server Icon to be fetched. **Only present if `Download Server Icon` is `true`**          |
| Server Icon          | string                             | The Favicon of the Server for the Serverlist (`base64` png image (64x64) or `URL`, if `Download Server Icon` is enabled) |

## Project Author

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| Name    | string |             |
| Website | string |             |
| E-Mail  | string |             |
