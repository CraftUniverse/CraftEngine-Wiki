---
layout: doc
outline: false
---

# LGCSRVCF

Configuration of the Logic Servers

---

Filename: `lgcsrvcf.dat`

Serializer: [MessagePack](https://msgpack.org/)

## Format

| Name         | Type                | Description         |
| ------------ | ------------------- | ------------------- |
| Magic Number | int32               | `CElgs1` (0xCE1631) |
| Servers      | [server](#server)[] | Logic Servers       |

## Server

| Name        | Type   | Description                         |
| ----------- | ------ | ----------------------------------- |
| SDK Version | int32  | The SDK version of the Logic Server |
| Hash        | string | The SHA-512 HASH of the Executable  |

---

`LGC SRV CF` = **Logic Server Configuration**
