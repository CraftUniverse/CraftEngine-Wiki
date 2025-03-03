# Editor IPC Protocol

The **CraftEngine Editor** uses [WebSockets](https://en.wikipedia.org/wiki/WebSocket) to communicate between the **Editor-Backend** and the **Editor-Frontend**.

## Auth (Register)

`[Backend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"type":  "register",
"role": "backend",
"value": {
    "is_main": boolean
}
```

**Response:**

```typescript
"role": "server",
"type": "response;register",
"value": {
    "success": boolean
}
```

---

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"type": "register",
"role": "frontend",
"value": {
    "is_main": boolean
}
```

**Response:**

```typescript
"role": "server",
"type": "response;register",
"value": {
    "success": boolean
}
```

## Window Management

Creates a new Window

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "window:create",
"value": {
    "port": number;
    "file": string;
    "id": string;
    "is_dev": boolean;
    "is_main": boolean;
    "version": string;
    "height": number;
    "width": number;
    "fixed": boolean;
    "on_top": boolean;
    "maximize": boolean;
    "language": string;
    "ask_before_exit": boolean;
    "borderless": boolean;
    "preloaded": boolean;
}
```

**Response:**

```typescript
"role": "server",
"type": "response;window:create",
"value": {
    "success": boolean,
    "window_id": string
}
```

---

Updates a window with given ID

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "window:update",
"value": {
    "port": number;
    "file": string;
    "id": string;
    "is_dev": boolean;
    "is_main": boolean;
    "version": string;
    "height": number;
    "width": number;
    "fixed": boolean;
    "on_top": boolean;
    "maximize": boolean;
    "language": string;
    "ask_before_exit": boolean;
    "borderless": boolean;
    "preloaded": boolean;
}
```

**Response:**

```typescript
"role": "server",
"type": "response;window:update",
"value": {
    "success": boolean
}
```

## Projects

Creates a new Project

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "projects:create",
"value": {
    "name": string,
    "version": string,
    "path": string,
    "languages": Language[]
}
```

**Response:**

```typescript
"role": "server",
"type": "response;projects:create",
"value": {
    "success": boolean
}
```

---

Opens a Project

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "projects:open",
"value": "<Project Path>"
```

**Response:**

```typescript
"role": "server",
"type": "response;projects:open",
"value": {
    "success": boolean
}
```

---

Lists Projects

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "projects:list",
```

**Response:**

```typescript
"role": "server",
"type": "response;projects:list",
"value": {
    "success": true,
    "projects": {
        "name": string,
        "path": string,
        "version": string
    }[]
}
```

## Minecraft

Launches a Minecraft Instance

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "minecraft:launch"
```

**Response:**

```typescript
"role": "server",
"type": "response;minecraft:launch",
"value": {
    "success": boolean
}
```

## Notifications

Sends an inital Notification

`[Server] -> [Frontend]`

**Request:**

```typescript
"role": "server",
"type": "notification:init",
"value": {
    "id": string,
    "title": string,
    "message": string,
}
```

---

Updates a Notification

`[Server] -> [Frontend]`

**Request:**

```typescript
"role": "server",
"type": "notification:update",
"value": {
    "id": string,
    "title": string,
    "message": string,
    "progress": number
}
```

---

Deletes a Notification

`[Server] -> [Frontend]`

**Request:**

```typescript
"role": "server",
"type": "notification:delete",
"value": {
    "id": string
}
```

## Startup

Singales that the window that it is ready

`[Frontend] -> [Server]`

**Request:**

```typescript
"role": "frontend",
"type": "startup:ready"
```

**Response:**

```typescript
"role": "server",
"type": "response;startup:ready",
"value": {
    "success": boolean
}
```

---

Updates Startup Values

`[Server] -> [Frontend]`

**Request:**

```typescript
"role": "server",
"type": "startup:update",
"value": {
    "message": string,
    "progress": number
}
```

---

Finishes Startup

`[Server] -> [Frontend]`

**Request:**

```typescript
"role": "server",
"type": "startup:finish"
```

## Assets

Get Assets Configuration

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "assets:fetch:config"
```

**Response:**

```typescript
"role": "server",
"type": "response;assets:fetch:config",
"value": {
    "success": boolean,
    "filetypes": {
        "extension": string,
        "type": "folder" | "file",
        "basename": string
    }[]
}
```

---

Fetching Assets

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "assets:fetch:files",
"value": {
    "path": string
}
```

**Response:**

```typescript
"role": "server",
"type": "response;assets:fetch:files",
"value": {
    "success": boolean,
    "files": {
        "id": string,
        "name": string,
        "thumbnail": null | string,
        "type": "folder" | "file",
        "path": "path"
    }[]
}
```

---

Fetching Folder Structure

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "assets:fetch:folders"
```

**Response:**

```typescript
"role": "server",
"type": "response;assets:fetch:files",
"value": {
    "success": boolean,
    "folders": Folder[]
}
```

---

Rename File / Folder

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "assets:rename",
"value": {
    "path": string,
    "name": string
}
```

**Response:**

```typescript
"role": "server",
"type": "response;assets:rename",
"value": {
    "success": boolean
}
```

---

Delete File / Folder

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "assets:delete",
"value": {
    "path": string
}
```

**Response:**

```typescript
"role": "server",
"type": "response;assets:delete",
"value": {
    "success": boolean
}
```

---

Create new Item

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "assets:new",
"value": {
    "id": string,
    "name": string,
}
```

**Response:**

```typescript
"role": "server",
"type": "response;assets:new",
"value": {
    "success": boolean,
    "path": string
}
```

---

#### Folder

```typescript
{
    "id": string,
    "title": string,
    "path": string,
    "children": Folder[]
}
```

## Worlds

Getting a GameWorld

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "world:load",
"value": {
    "path": string
}
```

**Response:**

```typescript
"role": "server",
"type": "response;world:load",
"value": {
    "success": boolean,
    "world": any
}
```

## Panel

Getting Settings for a Specific panel

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "panel:settings:get",
"value": {
    "id": string
}
```

**Response:**

```typescript
"role": "server",
"type": "response;panel:settings:get",
"value": {
    "success": boolean,
    "settings": any
}
```

---

Set Setting for a Specific panel

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "panel:settings:set",
"value": {
    "id": string,
    "settings": any
}
```

**Response:**

```typescript
"role": "server",
"type": "response;panel:settings:set",
"value": {
    "success": boolean
}
```

## Misc

Returns Global Config

`[Frontend] -> [Server]`

**Request:**

```typescript
"requester": "<ID>",
"role": "frontend",
"type": "global:config:get"
```

**Response:**

```typescript
"role": "server",
"type": "response;global:config:get",
"value": {
    "success": boolean,
    "config": {
        "language": string (i18n)
    }
}
```

## Legend

Path are relativ from the `root` directory of the [CraftEngine-Editor Repository](https://github.com/CraftUniverse/CraftEngine-Editor)

- [Frontend](https://github.com/CraftUniverse/CraftEngine-Frontend) = `frontend/`
- Backend = `src/window/window.go` (CraftEngineWindow)
- [Server](https://github.com/CraftUniverse/CraftEngine-Editor) = `src/` (CraftEngine)
