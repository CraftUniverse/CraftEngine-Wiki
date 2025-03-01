# Game Config

Filename: `gameConfig.dat`

Serializer: [MessagePack](https://msgpack.org/)

## Format

| Name                 | Type                               | Description                                                                                   |
| -------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------- |
| Magic Number         | int32                              | `CEgc1` (0xCE6C1)                                                                             |
| Project Name         | string                             | The Name of the project                                                                       |
| Project Version      | string                             | The User specified Version of the Project                                                     |
| Project Build        | int64                              | The Auto-Generated build-number of the Project                                                |
| Project Authors      | [projectAuthor](#project-author)[] | An Array with the Authors of the Project                                                      |
| Game Version         | string                             | The Version of Minecraft (e.q. 1.21.4)                                                        |
| Game Protocol        | int32                              | The Protocol Version of Minecraft (e.q. 769)                                                  |
| Max Players          | int32                              | The maximal amount of Players on the Server                                                   |
| Download Server Icon | boolean                            | If `TRUE` the `Server Icon` is getting downloaded from a specified URL                        |
| Icon Fetch Interval  | int32                              | The Interval in Minutes for the Server Icon to be fetched `Only present if the Above is TRUE` |
| Server Icon          | string                             | The Favicon of the Server for the Serverlist (base64-png or URL)                              |

## Project Author

| Name    | Type   | Description |
| ------- | ------ | ----------- |
| Name    | string |             |
| Website | string |             |
| E-Mail  | string |             |
