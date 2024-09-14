---
sidebar_position: 3
---

# Make a Basic C program

We will make a simple c program and compile it with gcc.

Create a file called ```helloworld.c```.

Open notepad or any other text editor and open ```helloworld.c```.

Now input following text and save the file.

```c title="helloworld.c"
#include <stdio.h>

int main() {
    printf("Hello, World!");
}
```

To compile run, run the following command in powershell (In same dir as helloworld.c).

```powershell
gcc helloworld.c -o helloworld.exe
```

Run your program by running ```.\helloworld.exe```.

Thanks for following this quick tutorial 

