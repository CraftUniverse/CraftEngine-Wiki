# MEMAP

HASH Mappings to the coresponding Methods in the Source Code

---

Filename: `memap.dat`

Serializer: [MessagePack](https://msgpack.org/)

## Format

| Name         | Type                  | Description         |
| ------------ | --------------------- | ------------------- |
| Magic Number | int32                 | `CEmam1` (0xCE3431) |
| Mappings     | [mapping](#mapping)[] | Memory Mappings     |

## Mapping

| Name          | Type    | Description                             |
| ------------- | ------- | --------------------------------------- |
| Logic Server  | int32   | Logic server ID                         |
| Hash          | string  | SHA-256 hash of the Method reference    |
| Expect Return | boolean | `TRUE`, If the method returns something |

---

`MEMAP` = **Method Mappings**
