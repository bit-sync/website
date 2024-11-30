"use strict";(self.webpackChunkbit_sync_web=self.webpackChunkbit_sync_web||[]).push([[2505],{3885:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>d});var r=i(4848),s=i(8453);const c={sidebar_position:4},l="Standard Library",t={id:"echo-kernel/components/library",title:"Standard Library",description:"The Echo Kernel standard library (lib namespace) provides essential utility functions for string manipulation, memory operations, character handling, and time management. It implements common functionality typically found in standard C libraries, adapted specifically for the kernel environment.",source:"@site/docs/echo-kernel/components/library.mdx",sourceDirName:"echo-kernel/components",slug:"/echo-kernel/components/library",permalink:"/docs/echo-kernel/components/library",draft:!1,unlisted:!1,editUrl:"https://github.com/bit-sync/website/blob/main/docs/echo-kernel/components/library.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Bootloader",permalink:"/docs/echo-kernel/components/bootloader"},next:{title:"API Reference",permalink:"/docs/echo-kernel/api-reference"}},o={},d=[{value:"Categories",id:"categories",level:2},{value:"Time Functions",id:"time-functions",level:3},{value:"String Operations",id:"string-operations",level:3},{value:"Memory Management",id:"memory-management",level:3},{value:"Character Handling",id:"character-handling",level:3},{value:"Conversion Utilities",id:"conversion-utilities",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Time Functions",id:"time-functions-1",level:3},{value:"<code>void sleep(uint32_t milliseconds)</code>",id:"void-sleepuint32_t-milliseconds",level:4},{value:"String Functions",id:"string-functions",level:3},{value:"<code>size_t strlen(const char* str)</code>",id:"size_t-strlenconst-char-str",level:4},{value:"<code>int strcmp(const char* str1, const char* str2)</code>",id:"int-strcmpconst-char-str1-const-char-str2",level:4},{value:"<code>char* strcpy(char* dest, const char* src)</code>",id:"char-strcpychar-dest-const-char-src",level:4},{value:"<code>char* strncpy(char* dest, const char* src, size_t n)</code>",id:"char-strncpychar-dest-const-char-src-size_t-n",level:4},{value:"<code>char* strcat(char* dest, const char* src)</code>",id:"char-strcatchar-dest-const-char-src",level:4},{value:"<code>char* strncat(char* dest, const char* src, size_t n)</code>",id:"char-strncatchar-dest-const-char-src-size_t-n",level:4},{value:"<code>const char* strchr(const char* str, int ch)</code>",id:"const-char-strchrconst-char-str-int-ch",level:4},{value:"Memory Functions",id:"memory-functions",level:3},{value:"<code>void* memcpy(void* dest, const void* src, size_t n)</code>",id:"void-memcpyvoid-dest-const-void-src-size_t-n",level:4},{value:"<code>void* memset(void* ptr, int value, size_t n)</code>",id:"void-memsetvoid-ptr-int-value-size_t-n",level:4},{value:"<code>int memcmp(const void* ptr1, const void* ptr2, size_t n)</code>",id:"int-memcmpconst-void-ptr1-const-void-ptr2-size_t-n",level:4},{value:"Conversion Functions",id:"conversion-functions",level:3},{value:"<code>int atoi(const char* str)</code>",id:"int-atoiconst-char-str",level:4},{value:"<code>char* itoa(int value, char* str, int base)</code>",id:"char-itoaint-value-char-str-int-base",level:4},{value:"Character Functions",id:"character-functions",level:3},{value:"<code>bool isdigit(char c)</code>",id:"bool-isdigitchar-c",level:4},{value:"<code>bool isalpha(char c)</code>",id:"bool-isalphachar-c",level:4},{value:"<code>bool isalnum(char c)</code>",id:"bool-isalnumchar-c",level:4},{value:"<code>bool islower(char c)</code>",id:"bool-islowerchar-c",level:4},{value:"<code>bool isupper(char c)</code>",id:"bool-isupperchar-c",level:4},{value:"<code>char tolower(char c)</code>",id:"char-tolowerchar-c",level:4},{value:"<code>char toupper(char c)</code>",id:"char-toupperchar-c",level:4},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Memory Safety",id:"memory-safety",level:3},{value:"Performance",id:"performance",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"String Manipulation",id:"string-manipulation",level:3},{value:"Memory Operations",id:"memory-operations",level:3},{value:"Number Conversion",id:"number-conversion",level:3},{value:"Character Processing",id:"character-processing",level:3},{value:"Timing",id:"timing",level:3},{value:"Limitations",id:"limitations",level:2},{value:"Best Practices",id:"best-practices",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"standard-library",children:"Standard Library"})}),"\n",(0,r.jsxs)(n.p,{children:["The Echo Kernel standard library (",(0,r.jsx)(n.code,{children:"lib"})," namespace) provides essential utility functions for string manipulation, memory operations, character handling, and time management. It implements common functionality typically found in standard C libraries, adapted specifically for the kernel environment."]}),"\n",(0,r.jsx)(n.h2,{id:"categories",children:"Categories"}),"\n",(0,r.jsx)(n.h3,{id:"time-functions",children:"Time Functions"}),"\n",(0,r.jsx)(n.h3,{id:"string-operations",children:"String Operations"}),"\n",(0,r.jsx)(n.h3,{id:"memory-management",children:"Memory Management"}),"\n",(0,r.jsx)(n.h3,{id:"character-handling",children:"Character Handling"}),"\n",(0,r.jsx)(n.h3,{id:"conversion-utilities",children:"Conversion Utilities"}),"\n",(0,r.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,r.jsx)(n.h3,{id:"time-functions-1",children:"Time Functions"}),"\n",(0,r.jsx)(n.h4,{id:"void-sleepuint32_t-milliseconds",children:(0,r.jsx)(n.code,{children:"void sleep(uint32_t milliseconds)"})}),"\n",(0,r.jsx)(n.p,{children:"Implements a delay function using CPU cycle counting."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Features:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Uses RDTSC (Read Time-Stamp Counter)"}),"\n",(0,r.jsx)(n.li,{children:"Assumes ~2GHz CPU frequency"}),"\n",(0,r.jsx)(n.li,{children:"Millisecond precision"}),"\n",(0,r.jsx)(n.li,{children:"CPU-friendly implementation"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"string-functions",children:"String Functions"}),"\n",(0,r.jsx)(n.h4,{id:"size_t-strlenconst-char-str",children:(0,r.jsx)(n.code,{children:"size_t strlen(const char* str)"})}),"\n",(0,r.jsx)(n.p,{children:"Returns the length of a null-terminated string."}),"\n",(0,r.jsx)(n.h4,{id:"int-strcmpconst-char-str1-const-char-str2",children:(0,r.jsx)(n.code,{children:"int strcmp(const char* str1, const char* str2)"})}),"\n",(0,r.jsx)(n.p,{children:"Compares two strings lexicographically."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Returns 0 if equal"}),"\n",(0,r.jsx)(n.li,{children:"Negative if str1 < str2"}),"\n",(0,r.jsx)(n.li,{children:"Positive if str1 > str2"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"char-strcpychar-dest-const-char-src",children:(0,r.jsx)(n.code,{children:"char* strcpy(char* dest, const char* src)"})}),"\n",(0,r.jsx)(n.p,{children:"Copies string from src to dest."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Includes null terminator"}),"\n",(0,r.jsx)(n.li,{children:"Returns original dest pointer"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"char-strncpychar-dest-const-char-src-size_t-n",children:(0,r.jsx)(n.code,{children:"char* strncpy(char* dest, const char* src, size_t n)"})}),"\n",(0,r.jsx)(n.p,{children:"Copies up to n characters."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Pads with nulls if needed"}),"\n",(0,r.jsx)(n.li,{children:"No null-termination if src > n"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"char-strcatchar-dest-const-char-src",children:(0,r.jsx)(n.code,{children:"char* strcat(char* dest, const char* src)"})}),"\n",(0,r.jsx)(n.p,{children:"Concatenates strings."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Appends src to dest"}),"\n",(0,r.jsx)(n.li,{children:"Returns original dest pointer"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"char-strncatchar-dest-const-char-src-size_t-n",children:(0,r.jsx)(n.code,{children:"char* strncat(char* dest, const char* src, size_t n)"})}),"\n",(0,r.jsx)(n.p,{children:"Concatenates n characters."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Null-terminates result"}),"\n",(0,r.jsx)(n.li,{children:"Returns original dest pointer"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"const-char-strchrconst-char-str-int-ch",children:(0,r.jsx)(n.code,{children:"const char* strchr(const char* str, int ch)"})}),"\n",(0,r.jsx)(n.p,{children:"Finds character in string."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Returns pointer to character"}),"\n",(0,r.jsx)(n.li,{children:"Returns nullptr if not found"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"memory-functions",children:"Memory Functions"}),"\n",(0,r.jsx)(n.h4,{id:"void-memcpyvoid-dest-const-void-src-size_t-n",children:(0,r.jsx)(n.code,{children:"void* memcpy(void* dest, const void* src, size_t n)"})}),"\n",(0,r.jsx)(n.p,{children:"Copies memory regions."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Handles overlap correctly"}),"\n",(0,r.jsx)(n.li,{children:"Copies n bytes"}),"\n",(0,r.jsx)(n.li,{children:"Returns dest pointer"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"void-memsetvoid-ptr-int-value-size_t-n",children:(0,r.jsx)(n.code,{children:"void* memset(void* ptr, int value, size_t n)"})}),"\n",(0,r.jsx)(n.p,{children:"Fills memory with value."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Sets n bytes to value"}),"\n",(0,r.jsx)(n.li,{children:"Returns ptr"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"int-memcmpconst-void-ptr1-const-void-ptr2-size_t-n",children:(0,r.jsx)(n.code,{children:"int memcmp(const void* ptr1, const void* ptr2, size_t n)"})}),"\n",(0,r.jsx)(n.p,{children:"Compares memory regions."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Returns 0 if identical"}),"\n",(0,r.jsx)(n.li,{children:"Returns difference otherwise"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"conversion-functions",children:"Conversion Functions"}),"\n",(0,r.jsx)(n.h4,{id:"int-atoiconst-char-str",children:(0,r.jsx)(n.code,{children:"int atoi(const char* str)"})}),"\n",(0,r.jsxs)(n.p,{children:["Converts string to integer.\n",(0,r.jsx)(n.strong,{children:"Features:"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Handles negative numbers"}),"\n",(0,r.jsx)(n.li,{children:"Skips whitespace"}),"\n",(0,r.jsx)(n.li,{children:"Stops at non-digits"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"char-itoaint-value-char-str-int-base",children:(0,r.jsx)(n.code,{children:"char* itoa(int value, char* str, int base)"})}),"\n",(0,r.jsxs)(n.p,{children:["Converts integer to string.\n",(0,r.jsx)(n.strong,{children:"Features:"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Supports bases 2-36"}),"\n",(0,r.jsx)(n.li,{children:"Handles negative numbers"}),"\n",(0,r.jsx)(n.li,{children:"Returns result string"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"character-functions",children:"Character Functions"}),"\n",(0,r.jsx)(n.h4,{id:"bool-isdigitchar-c",children:(0,r.jsx)(n.code,{children:"bool isdigit(char c)"})}),"\n",(0,r.jsx)(n.p,{children:"Checks for decimal digit."}),"\n",(0,r.jsx)(n.h4,{id:"bool-isalphachar-c",children:(0,r.jsx)(n.code,{children:"bool isalpha(char c)"})}),"\n",(0,r.jsx)(n.p,{children:"Checks for alphabetic character."}),"\n",(0,r.jsx)(n.h4,{id:"bool-isalnumchar-c",children:(0,r.jsx)(n.code,{children:"bool isalnum(char c)"})}),"\n",(0,r.jsx)(n.p,{children:"Checks for alphanumeric character."}),"\n",(0,r.jsx)(n.h4,{id:"bool-islowerchar-c",children:(0,r.jsx)(n.code,{children:"bool islower(char c)"})}),"\n",(0,r.jsx)(n.p,{children:"Checks for lowercase letter."}),"\n",(0,r.jsx)(n.h4,{id:"bool-isupperchar-c",children:(0,r.jsx)(n.code,{children:"bool isupper(char c)"})}),"\n",(0,r.jsx)(n.p,{children:"Checks for uppercase letter."}),"\n",(0,r.jsx)(n.h4,{id:"char-tolowerchar-c",children:(0,r.jsx)(n.code,{children:"char tolower(char c)"})}),"\n",(0,r.jsx)(n.p,{children:"Converts to lowercase."}),"\n",(0,r.jsx)(n.h4,{id:"char-toupperchar-c",children:(0,r.jsx)(n.code,{children:"char toupper(char c)"})}),"\n",(0,r.jsx)(n.p,{children:"Converts to uppercase."}),"\n",(0,r.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,r.jsx)(n.h3,{id:"memory-safety",children:"Memory Safety"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No dynamic allocation"}),"\n",(0,r.jsx)(n.li,{children:"Boundary checking"}),"\n",(0,r.jsx)(n.li,{children:"Null pointer handling"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Optimized implementations"}),"\n",(0,r.jsx)(n.li,{children:"Minimal CPU usage"}),"\n",(0,r.jsx)(n.li,{children:"Direct memory access"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Input validation"}),"\n",(0,r.jsx)(n.li,{children:"Safe string operations"}),"\n",(0,r.jsx)(n.li,{children:"Overflow prevention"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,r.jsx)(n.h3,{id:"string-manipulation",children:"String Manipulation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'char buffer[100];\nlib::strcpy(buffer, "Hello");\nlib::strcat(buffer, " World");\nsize_t length = lib::strlen(buffer);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"memory-operations",children:"Memory Operations"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'char source[10] = "Test";\nchar dest[10];\nlib::memcpy(dest, source, 5);\nlib::memset(dest, 0, 10);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"number-conversion",children:"Number Conversion"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:'int number = lib::atoi("123");\nchar str[20];\nlib::itoa(number, str, 10);\n'})}),"\n",(0,r.jsx)(n.h3,{id:"character-processing",children:"Character Processing"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"char c = 'A';\nif (lib::isalpha(c)) {\n    c = lib::tolower(c);\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"timing",children:"Timing"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cpp",children:"// Wait for 1 second\nlib::sleep(1000);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Functionality"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No floating-point support"}),"\n",(0,r.jsx)(n.li,{children:"Limited error handling"}),"\n",(0,r.jsx)(n.li,{children:"No locale support"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Memory"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No dynamic allocation"}),"\n",(0,r.jsx)(n.li,{children:"Fixed buffer sizes"}),"\n",(0,r.jsx)(n.li,{children:"No memory protection"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Time"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Simple sleep implementation"}),"\n",(0,r.jsx)(n.li,{children:"Fixed CPU frequency assumption"}),"\n",(0,r.jsx)(n.li,{children:"No high-precision timing"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Thread Safety"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"No synchronization"}),"\n",(0,r.jsx)(n.li,{children:"Not thread-safe"}),"\n",(0,r.jsx)(n.li,{children:"No atomic operations"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"String Operations"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Always check buffer sizes"}),"\n",(0,r.jsx)(n.li,{children:"Use strncpy over strcpy"}),"\n",(0,r.jsx)(n.li,{children:"Ensure null termination"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Memory Operations"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Verify memory boundaries"}),"\n",(0,r.jsx)(n.li,{children:"Check for overlap"}),"\n",(0,r.jsx)(n.li,{children:"Use appropriate buffer sizes"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Error Handling"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check return values"}),"\n",(0,r.jsx)(n.li,{children:"Validate input parameters"}),"\n",(0,r.jsx)(n.li,{children:"Handle edge cases"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Performance"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use appropriate functions"}),"\n",(0,r.jsx)(n.li,{children:"Avoid unnecessary copies"}),"\n",(0,r.jsx)(n.li,{children:"Consider buffer sizes"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var r=i(6540);const s={},c=r.createContext(s);function l(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);