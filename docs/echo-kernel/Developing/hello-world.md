---
sidebar_position: 2
---
# Hello, World!

This will be your first program with the Echo kernel.

:::warning
The following commands should be run on Ubuntu/Debian systems only!
:::

Clone the latest version of the Echo kernel with git.

```bash
git clone https://github.com/bit-sync/Echo-kernel.git
```

Now in the ```src``` directory write the following text to main.c

```c title="main.c"
#include "include/io.h"

int main() {
    print("Hello, World!");
}
```

Now to build the kernel.

```bash
bash scripts/build.sh
```

To test, run the ```vm-test.sh``` script.

```bash
bash scripts/vm-test.sh
```

You should get this.

![Echo terminal](echo-booted.png)