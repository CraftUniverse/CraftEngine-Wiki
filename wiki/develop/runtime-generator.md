# Runtime Generator

[Repository](https://github.com/CraftUniverse/CraftEngine-Runtime-Generator)

The Runtime Generator generates dummy Methods & Classes for any Supported Language, defined by any Supported Language.

It can be used in [**Standalone Mode**](#standalone-mode) and [**Server Mode**](#server-mode).

## Standalone Mode

It takes an input project and converts the project strcuture into an another language.

:::details Supported Arguments

`--language` The programming language to convert to

`--src` The input project root path

`--output` The output path

:::

## Server Mode

The server mode can be enabled with the `--server` argument.

:::details Supported Arguments

`--server` Enable Server Mode

`--port` The port to start the server on

:::

## Example

This example takes a **Java** or a **TypeScript** or a **Python** or a **C**++ file and convert it structure in **C#**. **C#** is calling the methods via the [CraftEngine-SDK](/sdk/introduction), which has the Method Reference e.g. `dev.craftengine.test.runMe;0` - the `;0` says that it is the first method of the file, it is useful for Overloads. The `MethodMapping#runMethod`-Method takes the reference as **SHA-256 Hash** and the parameters as an array of objects. The hashes and the actual references are stored in the [Method Mappings File](/develop/projects/formats/memap).

### Input

::: code-group

```java [TestClass.java]
package dev.craftengine.test;

public class TestClass {
    public void runMe(String test) {
        System.out.println("Hello " + test + "!");
    }

    public static boolean testMe(boolean test) {
        return !test;
    }
}
```

```ts [TestClass.ts]
// namespace: dev.craftengine.test

export class TestClass {
  public runMe(test: string) {
    console.log("Hello " + test + "!");
  }

  public testMe(test: boolean): boolean {
    return !test;
  }
}
```

```py [TestClass.py]
# namespace: dev.craftengine.test

class TestClass:
    def run_me(self, test):
        print(f"Hello {test}!")

    @staticmethod
    def test_me(test):
        return not test
```

```cpp [TestClass.cpp]
#include <iostream>
#include <string>

namespace dev.craftengine.test {
    class TestClass {
    public:
        void runMe(const std::string& test) {
            std::cout << "Hello " << test << "!" << std::endl;
        }

        static bool testMe(bool test) {
            return !test;
        }
    };
}

```

:::

### Output

```c#
namespace dev.craftengine.test;

using dev.craftengine.sdk;

public class TestClass {
    public void RunMe(string test) {
        MethodMapping.RunMethod("eb493d7d72fafdcd94bf1740129055387187edb688b27c0c40dd6ea7a0790fa9", test)
    }

    public static bool TestMe(bool test) {
        var id = await MethodMapping.RunMethod("eaf3ce92d43d5dc77d886aa996f14dffd23647b9c9d5cdad01d68235d42d9ef7", test);
        return (bool) MethodMapping.GetResult(id);
    }
}
```
