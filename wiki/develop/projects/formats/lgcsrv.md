---
layout: doc
outline: false
---

# LGCSRV

Configuration of the Logic Servers

---

Filename: `lgcsrv_(id).dat`

Serializer: [MessagePack](https://msgpack.org/)

## Format

| Name         | Type   | Description                         |
| ------------ | ------ | ----------------------------------- |
| Magic Number | int32  | `CElgs1` (0xCE1631)                 |
| Port Offset  | int32  | The port offset starting at 0       |
| SDK Version  | int32  | The SDK version of the Logic Server |
| Hash         | string | The SHA-512 HASH of the Executable  |

---

`LGCSRV` = **Logic Server**

Read the Specification at the [Project-Layout Repository](<https://github.com/CraftUniverse/CraftEngine-ProjectLayout/blob/master/logic/lgcsrv_(id).txt>)
