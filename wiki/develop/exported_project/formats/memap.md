---
layout: doc
outline: false
---

# MEMAP

HASH Mappings to the coresponding Methods in the Source Code

---

Filename: `memap.dat`

Serializer: [`MessagePack`](https://msgpack.org/)

Compression: [`LZMA`](https://en.wikipedia.org/wiki/LZMA)

## Format

| Name         | Type                  | Description         |
| ------------ | --------------------- | ------------------- |
| Magic Number | int32                 | `CEmam1` (0xCE3431) |
| Mappings     | [mapping](#mapping)[] | Memory Mappings     |

## Mapping

| Name          | Type    | Description                             |
| ------------- | ------- | --------------------------------------- |
| Logic Server  | uint32  | Logic server ID                         |
| Hash          | string  | SHA-256 hash of the Method reference    |
| Expect Return | boolean | `true`, If the method returns something |

---

`MEMAP` = **Method Mappings**
