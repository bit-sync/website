"use strict";(self.webpackChunkbit_sync_web=self.webpackChunkbit_sync_web||[]).push([[2837],{4466:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"echo-kernel/api-reference","title":"API Reference","description":"Complete API reference for all Echo Kernel components and subsystems.","source":"@site/docs/echo-kernel/api-reference.mdx","sourceDirName":"echo-kernel","slug":"/echo-kernel/api-reference","permalink":"/docs/echo-kernel/api-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/bit-sync/website/blob/main/docs/echo-kernel/api-reference.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Eshell","permalink":"/docs/echo-kernel/components/eshell"},"next":{"title":"Port I/O System","permalink":"/docs/echo-kernel/System/port-io"}}');var i=s(4848),c=s(8453);const l={sidebar_position:3},t="API Reference",d={},o=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Kernel Core",id:"kernel-core",level:2},{value:"Namespace: <code>kernel</code>",id:"namespace-kernel",level:3},{value:"Functions",id:"functions",level:4},{value:"Namespace: <code>kernel::eshell</code>",id:"namespace-kerneleshell",level:3},{value:"Functions",id:"functions-1",level:4},{value:"Hardware I/O",id:"hardware-io",level:2},{value:"Namespace: <code>ports</code>",id:"namespace-ports",level:3},{value:"Constants",id:"constants",level:4},{value:"Functions",id:"functions-2",level:4},{value:"Display System",id:"display-system",level:2},{value:"Namespace: <code>display</code>",id:"namespace-display",level:3},{value:"Constants",id:"constants-1",level:4},{value:"Functions",id:"functions-3",level:4},{value:"Keyboard System",id:"keyboard-system",level:2},{value:"Namespace: <code>keyboard</code>",id:"namespace-keyboard",level:3},{value:"Functions",id:"functions-4",level:4},{value:"Library Functions",id:"library-functions",level:2},{value:"Namespace: <code>lib</code>",id:"namespace-lib",level:3},{value:"Functions",id:"functions-5",level:4},{value:"Bootloader",id:"bootloader",level:2},{value:"Functions",id:"functions-6",level:3},{value:"<code>void boot(void)</code>",id:"void-bootvoid",level:4},{value:"Standard Library",id:"standard-library",level:2},{value:"String Functions",id:"string-functions",level:3},{value:"<code>size_t strlen(const char* str)</code>",id:"size_t-strlenconst-char-str",level:4},{value:"<code>int strcmp(const char* str1, const char* str2)</code>",id:"int-strcmpconst-char-str1-const-char-str2",level:4},{value:"<code>char* strcpy(char* dest, const char* src)</code>",id:"char-strcpychar-dest-const-char-src",level:4},{value:"<code>char* strncpy(char* dest, const char* src, size_t n)</code>",id:"char-strncpychar-dest-const-char-src-size_t-n",level:4},{value:"<code>char* strcat(char* dest, const char* src)</code>",id:"char-strcatchar-dest-const-char-src",level:4},{value:"<code>char* strncat(char* dest, const char* src, size_t n)</code>",id:"char-strncatchar-dest-const-char-src-size_t-n",level:4},{value:"<code>const char* strchr(const char* str, int ch)</code>",id:"const-char-strchrconst-char-str-int-ch",level:4},{value:"Memory Functions",id:"memory-functions",level:3},{value:"<code>void* memcpy(void* dest, const void* src, size_t n)</code>",id:"void-memcpyvoid-dest-const-void-src-size_t-n",level:4},{value:"<code>void* memset(void* ptr, int value, size_t n)</code>",id:"void-memsetvoid-ptr-int-value-size_t-n",level:4},{value:"<code>int memcmp(const void* ptr1, const void* ptr2, size_t n)</code>",id:"int-memcmpconst-void-ptr1-const-void-ptr2-size_t-n",level:4},{value:"Character Functions",id:"character-functions",level:3},{value:"<code>bool isdigit(char c)</code>",id:"bool-isdigitchar-c",level:4},{value:"<code>bool isalpha(char c)</code>",id:"bool-isalphachar-c",level:4},{value:"<code>bool isalnum(char c)</code>",id:"bool-isalnumchar-c",level:4},{value:"<code>bool islower(char c)</code>",id:"bool-islowerchar-c",level:4},{value:"<code>bool isupper(char c)</code>",id:"bool-isupperchar-c",level:4},{value:"<code>char tolower(char c)</code>",id:"char-tolowerchar-c",level:4},{value:"<code>char toupper(char c)</code>",id:"char-toupperchar-c",level:4},{value:"Time Functions",id:"time-functions",level:3},{value:"<code>void sleep(uint32_t milliseconds)</code>",id:"void-sleepuint32_t-milliseconds",level:4},{value:"Conversion Functions",id:"conversion-functions",level:3},{value:"<code>int atoi(const char* str)</code>",id:"int-atoiconst-char-str",level:4},{value:"<code>char* itoa(int value, char* str, int base)</code>",id:"char-itoaint-value-char-str-int-base",level:4},{value:"Hardware Ports",id:"hardware-ports",level:2},{value:"Memory Map",id:"memory-map",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"Usage Notes",id:"usage-notes",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"api-reference",children:"API Reference"})}),"\n",(0,i.jsx)(n.p,{children:"Complete API reference for all Echo Kernel components and subsystems."}),"\n",(0,i.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#kernel-core",children:"Kernel Core"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#hardware-io",children:"Hardware I/O"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#display-system",children:"Display System"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#keyboard-system",children:"Keyboard System"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#library-functions",children:"Library Functions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#bootloader",children:"Bootloader"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#standard-library",children:"Standard Library"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#string-functions",children:"String Functions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#memory-functions",children:"Memory Functions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#character-functions",children:"Character Functions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#time-functions",children:"Time Functions"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#conversion-functions",children:"Conversion Functions"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"kernel-core",children:"Kernel Core"}),"\n",(0,i.jsxs)(n.h3,{id:"namespace-kernel",children:["Namespace: ",(0,i.jsx)(n.code,{children:"kernel"})]}),"\n",(0,i.jsx)(n.p,{children:"Core kernel functionality and system control."}),"\n",(0,i.jsx)(n.h4,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void main(void)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Kernel entry point. Initializes system and starts the shell."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void shutdown(void)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Safely shuts down the system using multiple methods:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"QEMU ACPI shutdown"}),"\n",(0,i.jsx)(n.li,{children:"APM shutdown"}),"\n",(0,i.jsx)(n.li,{children:"Standard ACPI shutdown"}),"\n",(0,i.jsx)(n.li,{children:"Keyboard controller reset"}),"\n",(0,i.jsx)(n.li,{children:"CPU halt as fallback"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void sleep(int ms)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Delays execution for specified milliseconds using CPU busy-wait."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"ms"}),": Milliseconds to sleep"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"namespace-kerneleshell",children:["Namespace: ",(0,i.jsx)(n.code,{children:"kernel::eshell"})]}),"\n",(0,i.jsx)(n.p,{children:"Shell interface implementation."}),"\n",(0,i.jsx)(n.h4,{id:"functions-1",children:"Functions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void start_eshell(void)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Initializes and starts the shell interface."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void loop(void)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Main shell loop that processes user input and executes commands."}),"\n",(0,i.jsx)(n.h2,{id:"hardware-io",children:"Hardware I/O"}),"\n",(0,i.jsxs)(n.h3,{id:"namespace-ports",children:["Namespace: ",(0,i.jsx)(n.code,{children:"ports"})]}),"\n",(0,i.jsx)(n.p,{children:"Port-based hardware I/O operations."}),"\n",(0,i.jsx)(n.h4,{id:"constants",children:"Constants"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"static constexpr uint16_t QEMU_SHUTDOWN_PORT = 0xB004\n"})}),"\n",(0,i.jsx)(n.p,{children:"QEMU-specific ACPI shutdown port."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"static constexpr uint16_t APM_SHUTDOWN_PORT = 0x604\n"})}),"\n",(0,i.jsx)(n.p,{children:"Advanced Power Management port."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"static constexpr uint16_t ACPI_SHUTDOWN_PORT = 0x4004\n"})}),"\n",(0,i.jsx)(n.p,{children:"Standard ACPI shutdown port."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"static constexpr uint16_t KBC_RESET_PORT = 0x64\n"})}),"\n",(0,i.jsx)(n.p,{children:"Keyboard controller reset port."}),"\n",(0,i.jsx)(n.h4,{id:"functions-2",children:"Functions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"static inline void outb(uint16_t port, uint8_t value)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Writes an 8-bit value to a port."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"port"}),": Port address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"value"}),": 8-bit value to write"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"static inline uint8_t inb(uint16_t port)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Reads an 8-bit value from a port."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"port"}),": Port address"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," Value read from port"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"static inline void outw(uint16_t port, uint16_t value)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Writes a 16-bit value to a port."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"port"}),": Port address"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"value"}),": 16-bit value to write"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"static inline uint16_t inw(uint16_t port)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Reads a 16-bit value from a port."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"port"}),": Port address"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," Value read from port"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"display-system",children:"Display System"}),"\n",(0,i.jsxs)(n.h3,{id:"namespace-display",children:["Namespace: ",(0,i.jsx)(n.code,{children:"display"})]}),"\n",(0,i.jsx)(n.p,{children:"Screen output and text display functionality."}),"\n",(0,i.jsx)(n.h4,{id:"constants-1",children:"Constants"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"// Color Constants\nconst uint8_t CL_BLACK = 0\nconst uint8_t CL_BLUE = 1\nconst uint8_t CL_GREEN = 2\nconst uint8_t CL_CYAN = 3\nconst uint8_t CL_RED = 4\nconst uint8_t CL_MAGENTA = 5\nconst uint8_t CL_BROWN = 6\nconst uint8_t CL_LIGHT_GREY = 7\nconst uint8_t CL_DARK_GREY = 8\nconst uint8_t CL_LIGHT_BLUE = 9\nconst uint8_t CL_LIGHT_GREEN = 10\nconst uint8_t CL_LIGHT_CYAN = 11\nconst uint8_t CL_LIGHT_RED = 12\nconst uint8_t CL_LIGHT_MAGENTA = 13\nconst uint8_t CL_LIGHT_BROWN = 14\nconst uint8_t CL_WHITE = 15\n"})}),"\n",(0,i.jsx)(n.h4,{id:"functions-3",children:"Functions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void clear_screen(void)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Clears the screen and resets cursor position."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void print(const char* str)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Prints a string to the screen."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"}),": String to print"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void printc(const char* str, uint8_t color)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Prints a colored string to the screen."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"}),": String to print"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"color"}),": Color value from constants"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void print_newline(void)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Moves cursor to the next line."}),"\n",(0,i.jsx)(n.h2,{id:"keyboard-system",children:"Keyboard System"}),"\n",(0,i.jsxs)(n.h3,{id:"namespace-keyboard",children:["Namespace: ",(0,i.jsx)(n.code,{children:"keyboard"})]}),"\n",(0,i.jsx)(n.p,{children:"Keyboard input handling."}),"\n",(0,i.jsx)(n.h4,{id:"functions-4",children:"Functions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"char* get_input(const char* prefix)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Gets a line of input from the keyboard."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"prefix"}),": String to display before input"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," Input string"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"library-functions",children:"Library Functions"}),"\n",(0,i.jsxs)(n.h3,{id:"namespace-lib",children:["Namespace: ",(0,i.jsx)(n.code,{children:"lib"})]}),"\n",(0,i.jsx)(n.p,{children:"Common utility functions."}),"\n",(0,i.jsx)(n.h4,{id:"functions-5",children:"Functions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"int strlen(const char* str)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Returns the length of a string."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"}),": Input string"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," String length"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"int strcmp(const char* str1, const char* str2)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Compares two strings."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str1"}),": First string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str2"}),": Second string"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns:"})," 0 if equal, non-zero if different"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void memcpy(void* dest, const void* src, int count)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Copies memory from source to destination."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dest"}),": Destination pointer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"src"}),": Source pointer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"count"}),": Number of bytes to copy"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"void memset(void* dest, char val, int count)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Sets memory to a specific value."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dest"}),": Destination pointer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"val"}),": Value to set"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"count"}),": Number of bytes to set"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bootloader",children:"Bootloader"}),"\n",(0,i.jsx)(n.h3,{id:"functions-6",children:"Functions"}),"\n",(0,i.jsx)(n.h4,{id:"void-bootvoid",children:(0,i.jsx)(n.code,{children:"void boot(void)"})}),"\n",(0,i.jsx)(n.p,{children:"Main boot sequence function."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Initializes IDT"}),"\n",(0,i.jsx)(n.li,{children:"Sets up display"}),"\n",(0,i.jsx)(n.li,{children:"Launches kernel"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"standard-library",children:"Standard Library"}),"\n",(0,i.jsx)(n.h3,{id:"string-functions",children:"String Functions"}),"\n",(0,i.jsx)(n.h4,{id:"size_t-strlenconst-char-str",children:(0,i.jsx)(n.code,{children:"size_t strlen(const char* str)"})}),"\n",(0,i.jsx)(n.p,{children:"Returns string length."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),": ",(0,i.jsx)(n.code,{children:"str"})," - Input string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": Number of characters before null terminator"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"int-strcmpconst-char-str1-const-char-str2",children:(0,i.jsx)(n.code,{children:"int strcmp(const char* str1, const char* str2)"})}),"\n",(0,i.jsx)(n.p,{children:"Compares two strings."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"0"})," if equal"]}),"\n",(0,i.jsx)(n.li,{children:"Negative value if str1 is less than str2"}),"\n",(0,i.jsx)(n.li,{children:"Positive value if str1 is greater than str2"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"char-strcpychar-dest-const-char-src",children:(0,i.jsx)(n.code,{children:"char* strcpy(char* dest, const char* src)"})}),"\n",(0,i.jsx)(n.p,{children:"Copies string including null terminator."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": Pointer to dest"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"char-strncpychar-dest-const-char-src-size_t-n",children:(0,i.jsx)(n.code,{children:"char* strncpy(char* dest, const char* src, size_t n)"})}),"\n",(0,i.jsx)(n.p,{children:"Copies up to n characters."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": Pointer to dest"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"char-strcatchar-dest-const-char-src",children:(0,i.jsx)(n.code,{children:"char* strcat(char* dest, const char* src)"})}),"\n",(0,i.jsx)(n.p,{children:"Concatenates strings."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": Pointer to dest"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"char-strncatchar-dest-const-char-src-size_t-n",children:(0,i.jsx)(n.code,{children:"char* strncat(char* dest, const char* src, size_t n)"})}),"\n",(0,i.jsx)(n.p,{children:"Concatenates up to n characters."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": Pointer to dest"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"const-char-strchrconst-char-str-int-ch",children:(0,i.jsx)(n.code,{children:"const char* strchr(const char* str, int ch)"})}),"\n",(0,i.jsx)(n.p,{children:"Finds first occurrence of character."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": Pointer to character or nullptr"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"memory-functions",children:"Memory Functions"}),"\n",(0,i.jsx)(n.h4,{id:"void-memcpyvoid-dest-const-void-src-size_t-n",children:(0,i.jsx)(n.code,{children:"void* memcpy(void* dest, const void* src, size_t n)"})}),"\n",(0,i.jsx)(n.p,{children:"Copies n bytes between memory regions."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": Pointer to dest"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"void-memsetvoid-ptr-int-value-size_t-n",children:(0,i.jsx)(n.code,{children:"void* memset(void* ptr, int value, size_t n)"})}),"\n",(0,i.jsx)(n.p,{children:"Fills memory with specified value."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": Pointer to ptr"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"int-memcmpconst-void-ptr1-const-void-ptr2-size_t-n",children:(0,i.jsx)(n.code,{children:"int memcmp(const void* ptr1, const void* ptr2, size_t n)"})}),"\n",(0,i.jsx)(n.p,{children:"Compares memory regions."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": ",(0,i.jsx)(n.code,{children:"0"})," if equal, difference otherwise"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"character-functions",children:"Character Functions"}),"\n",(0,i.jsx)(n.h4,{id:"bool-isdigitchar-c",children:(0,i.jsx)(n.code,{children:"bool isdigit(char c)"})}),"\n",(0,i.jsx)(n.p,{children:"Checks if character is digit (0-9)."}),"\n",(0,i.jsx)(n.h4,{id:"bool-isalphachar-c",children:(0,i.jsx)(n.code,{children:"bool isalpha(char c)"})}),"\n",(0,i.jsx)(n.p,{children:"Checks if character is letter (a-z, A-Z)."}),"\n",(0,i.jsx)(n.h4,{id:"bool-isalnumchar-c",children:(0,i.jsx)(n.code,{children:"bool isalnum(char c)"})}),"\n",(0,i.jsx)(n.p,{children:"Checks if character is alphanumeric."}),"\n",(0,i.jsx)(n.h4,{id:"bool-islowerchar-c",children:(0,i.jsx)(n.code,{children:"bool islower(char c)"})}),"\n",(0,i.jsx)(n.p,{children:"Checks if character is lowercase."}),"\n",(0,i.jsx)(n.h4,{id:"bool-isupperchar-c",children:(0,i.jsx)(n.code,{children:"bool isupper(char c)"})}),"\n",(0,i.jsx)(n.p,{children:"Checks if character is uppercase."}),"\n",(0,i.jsx)(n.h4,{id:"char-tolowerchar-c",children:(0,i.jsx)(n.code,{children:"char tolower(char c)"})}),"\n",(0,i.jsx)(n.p,{children:"Converts to lowercase."}),"\n",(0,i.jsx)(n.h4,{id:"char-toupperchar-c",children:(0,i.jsx)(n.code,{children:"char toupper(char c)"})}),"\n",(0,i.jsx)(n.p,{children:"Converts to uppercase."}),"\n",(0,i.jsx)(n.h3,{id:"time-functions",children:"Time Functions"}),"\n",(0,i.jsx)(n.h4,{id:"void-sleepuint32_t-milliseconds",children:(0,i.jsx)(n.code,{children:"void sleep(uint32_t milliseconds)"})}),"\n",(0,i.jsx)(n.p,{children:"Delays execution."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),": ",(0,i.jsx)(n.code,{children:"milliseconds"})," - Delay duration"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"conversion-functions",children:"Conversion Functions"}),"\n",(0,i.jsx)(n.h4,{id:"int-atoiconst-char-str",children:(0,i.jsx)(n.code,{children:"int atoi(const char* str)"})}),"\n",(0,i.jsx)(n.p,{children:"Converts string to integer."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),": ",(0,i.jsx)(n.code,{children:"str"})," - Number string"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": Integer value"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"char-itoaint-value-char-str-int-base",children:(0,i.jsx)(n.code,{children:"char* itoa(int value, char* str, int base)"})}),"\n",(0,i.jsx)(n.p,{children:"Converts integer to string."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Parameters"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"value"})," - Number to convert"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"})," - Output buffer"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"base"})," - Number base (2-36)"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),": Pointer to str"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hardware-ports",children:"Hardware Ports"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Port"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0x60"})}),(0,i.jsx)(n.td,{children:"Keyboard Data Port"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0x64"})}),(0,i.jsx)(n.td,{children:"Keyboard Status Port"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0xb8000"})}),(0,i.jsx)(n.td,{children:"Video Memory Base"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"memory-map",children:"Memory Map"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Address"}),(0,i.jsx)(n.th,{children:"Usage"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0xb8000"})}),(0,i.jsx)(n.td,{children:"Video Memory Start"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"0xb8000 + SCREENSIZE"})}),(0,i.jsx)(n.td,{children:"Video Memory End"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,i.jsx)(n.p,{children:"Most functions return one of these types:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Boolean: ",(0,i.jsx)(n.code,{children:"true"})," for success, ",(0,i.jsx)(n.code,{children:"false"})," for failure"]}),"\n",(0,i.jsxs)(n.li,{children:["Pointers: ",(0,i.jsx)(n.code,{children:"nullptr"})," for failure"]}),"\n",(0,i.jsxs)(n.li,{children:["Integers: ",(0,i.jsx)(n.code,{children:"0"})," for success, non-zero for specific errors"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage-notes",children:"Usage Notes"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Display Functions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Always check screen boundaries"}),"\n",(0,i.jsx)(n.li,{children:"Handle scrolling automatically"}),"\n",(0,i.jsx)(n.li,{children:"Color attributes combine foreground and background (using bit shift)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Keyboard Functions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Initialize IDT before using keyboard"}),"\n",(0,i.jsx)(n.li,{children:"Check input buffer limits"}),"\n",(0,i.jsx)(n.li,{children:"Handle input termination (Enter key)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Memory Functions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Verify buffer sizes"}),"\n",(0,i.jsx)(n.li,{children:"Check for overlap in memcpy"}),"\n",(0,i.jsx)(n.li,{children:"Ensure proper alignment"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"String Functions"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ensure destination buffers are large enough"}),"\n",(0,i.jsx)(n.li,{children:"Always check for null terminators"}),"\n",(0,i.jsx)(n.li,{children:"Use n-variants for better safety"}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>t});var r=s(6540);const i={},c=r.createContext(i);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);