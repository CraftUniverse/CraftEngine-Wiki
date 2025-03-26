# Minecraft Assets

The CraftEngine needs the Assets for Minecraft to display the Blocks and Items in the GameViewer. The Assets are stored as Objects, and can be downloaded from the Public CraftUniverse CDN (https://cdn.craftuniverse.net/).

## What are "Objects"?

[Detailed Information (Wikipedia)](https://en.wikipedia.org/wiki/Object_storage)

Instead of saving each file by it's file path, the Assets are stored by its MD5-Hash. This allows the Assets to be stored in a flat directory structure.

Every filename and path are stored in the `index.json` file, it also contains which versions of minecraft this asset is used in. With this we can share assets between different minecraft versions, without redownloading / hosting each asset for each version

### _index.json_ structure

```json
[
    {
        "hash": string,         // MD-5 Hash of file
        "path": string,         // Original filepath
        "length": int,          // File size
        "versions": string[]    // Minecraft Versions
    },
    ...
]
```

:::details _index.json_ URL
https://cdn.craftuniverse.net/CraftEngine/editor/minecraft_assets/index.json
:::

:::info Example
This example shows the [Model file](https://minecraft.wiki/w/Model) for the [Lantern Block](https://minecraft.wiki/w/Lantern)

```json
{
    "hash": "c28fbce50a6baacf9e7e9a618e848872",
    "path": "/assets/minecraft/models/block/lantern.json",
    "length": 112,
    "versions": ["1.21.4"]
},
```

**Download URL:**

https://cdn.craftuniverse.net/CraftEngine/editor/minecraft_assets/c2/c28fbce50a6baacf9e7e9a618e848872
:::

## How to generate the Assets?

To generate the assets we created a small tool that can generate the index.json file and download the assets from the MinecraftAssets Repository. After that it upload it to an S3 Object Storage.

[Github Repository](https://github.com/CraftUniverse/MinecraftAssetUploader)

:::info How to use the tool

1. Download a release from: https://github.com/CraftUniverse/MinecraftAssetUploader/releases
2. Create an empty text file with the name `.env` and paste the following content into it:

   ```text
   S3_BUCKET=<bucket-name>
   S3_PREFIX=<key-prefix>
   S3_ENDPOINT=<endpoint>
   S3_REGION=<region>
   S3_ACCESS_KEY=<access-key>
   S3_SECRET_KEY=<secret-key>
   S3_PATH_STYLE=<true | false>
   ```

3. Open a Terminal in location where the tool is downloaded, and run the following command:
   ```bash
   ./<filename> --version <minecraft version (e.q. 1.21.4)>
   ```

:::
