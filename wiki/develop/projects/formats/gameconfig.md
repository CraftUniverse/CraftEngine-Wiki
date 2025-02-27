# Game Config

Filename: `gameConfig.dat`

Serializer: [MessagePack](https://msgpack.org/)

## Format

| Name            | Type                              | Description                                                            |
| --------------- | --------------------------------- | ---------------------------------------------------------------------- |
| Maigc Number    | int32                             | `CEgc1` (0xCE6C1)                                                      |
| Project Name    | string                            | The Name of the project                                                |
| Project Version | string                            | The User specified Version of the Project                              |
| Project Build   | int64                             | The Auto-Generated build-number of the Project                         |
| Project Authors | [projecAuthor](#project-author)[] | An Array with the Authors of the Project                               |
| Game Version    | string                            | The Version of Minecraft (e.q. 1.21.4)                                 |
| Game Protocol   | int32                             | The Protocol Version of Minecraft (e.q. 769)                           |
| Max Players     | int32                             | The maximal amount of Players on the Server                            |
| Server Icon     | string                            | The Favicon of the Server for the Serverlist (base64 png - max. 64x64) |
| Logic Servers   | int32                             | The amount of the Logic Servers (Mainly used for Ports)                |

## Project Author

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| Name    | string |             |
| Website | string |             |
| E-Mail  | string |             |

---

Read the Specification at the [Project-Layout Repository](https://github.com/CraftUniverse/CraftEngine-ProjectLayout/blob/master/gameConfig.txt)
