# Logic Servers

A logic Server is a server that is responsible for running the game logic. It is responsible for handling all the game rules and interactions between players and the game itself.

## Config File

[**File Specification...**](/develop/projects/formats/lgcsrvcf)

The config just stores some Information mostly for verificatiom, and the amount of **Logic Servers**.

## Startup

The **Logic Server** is started and managed by the [Runtime Server](/develop/servers/runtime-server). The **Runtime Server** then connects to the **Logic Server** via an TCP Socket.

## Start Arguments

`--port` - The Port the Logic Server should listen on.

## Entrypoint

On the compilation of the **Logic Servers** an entrypoint get's injected. The entrypoint is the Default Entrypoint for the Specific Language, which runs the `run` function from the **CraftEngine SDK**.

### Entrypoint Example in Java: <Badge type="warning" text="Not Final" />

::: tip Note
Entrypoint of the SDK is not final, and may change in the future.
:::

```java
import dev.craftengine.sdk;

public class Main {
    public static void main(String[] args) {
        LogicServer.run(args); // pass arguments directly?
    }
}

```
