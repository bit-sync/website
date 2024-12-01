"use strict";(self.webpackChunkbit_sync_web=self.webpackChunkbit_sync_web||[]).push([[6888],{7295:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"echo-kernel/components/keyboard","title":"Keyboard System","description":"The keyboard system manages keyboard input through interrupt handling and provides a high-level interface for getting user input. It handles raw keyboard events, scancode translation, and input buffering.","source":"@site/docs/echo-kernel/components/keyboard.mdx","sourceDirName":"echo-kernel/components","slug":"/echo-kernel/components/keyboard","permalink":"/docs/echo-kernel/components/keyboard","draft":false,"unlisted":false,"editUrl":"https://github.com/bit-sync/website/blob/main/docs/echo-kernel/components/keyboard.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Display System","permalink":"/docs/echo-kernel/components/display"},"next":{"title":"Bootloader","permalink":"/docs/echo-kernel/components/bootloader"}}');var l=i(4848),t=i(8453);const s={sidebar_position:2},d="Keyboard System",o={},a=[{value:"Features",id:"features",level:2},{value:"Hardware Interface",id:"hardware-interface",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Initialization",id:"initialization",level:3},{value:"<code>bool idt_init(void)</code>",id:"bool-idt_initvoid",level:4},{value:"<code>void kb_init(void)</code>",id:"void-kb_initvoid",level:4},{value:"Input Functions",id:"input-functions",level:3},{value:"<code>char* get_input(const char* prompt = nullptr)</code>",id:"char-get_inputconst-char-prompt--nullptr",level:4},{value:"Control Functions",id:"control-functions",level:3},{value:"<code>void kb_disable(void)</code>",id:"void-kb_disablevoid",level:4},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Keyboard Map",id:"keyboard-map",level:3},{value:"Interrupt Handling",id:"interrupt-handling",level:3},{value:"Input Buffer",id:"input-buffer",level:3},{value:"Usage Examples",id:"usage-examples",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"keyboard-system",children:"Keyboard System"})}),"\n",(0,l.jsx)(n.p,{children:"The keyboard system manages keyboard input through interrupt handling and provides a high-level interface for getting user input. It handles raw keyboard events, scancode translation, and input buffering."}),"\n",(0,l.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Interrupt-based keyboard handling"}),"\n",(0,l.jsx)(n.li,{children:"US QWERTY keyboard mapping"}),"\n",(0,l.jsx)(n.li,{children:"Input buffering with backspace support"}),"\n",(0,l.jsxs)(n.li,{children:["Python-style ",(0,l.jsx)(n.code,{children:"input()"})," functionality"]}),"\n",(0,l.jsx)(n.li,{children:"Configurable input buffer size"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"hardware-interface",children:"Hardware Interface"}),"\n",(0,l.jsx)(n.p,{children:"The keyboard controller interfaces with:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Keyboard Data Port: ",(0,l.jsx)(n.code,{children:"0x60"})]}),"\n",(0,l.jsxs)(n.li,{children:["Keyboard Status Port: ",(0,l.jsx)(n.code,{children:"0x64"})]}),"\n",(0,l.jsx)(n.li,{children:"Interrupt Request Line: IRQ1"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,l.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,l.jsx)(n.h4,{id:"bool-idt_initvoid",children:(0,l.jsx)(n.code,{children:"bool idt_init(void)"})}),"\n",(0,l.jsx)(n.p,{children:"Initializes the Interrupt Descriptor Table (IDT) for keyboard handling."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Features:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Sets up keyboard interrupt handler (IRQ1)"}),"\n",(0,l.jsx)(n.li,{children:"Configures the Programmable Interrupt Controller (PIC)"}),"\n",(0,l.jsxs)(n.li,{children:["Returns ",(0,l.jsx)(n.code,{children:"true"})," when initialization is successful"]}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"void-kb_initvoid",children:(0,l.jsx)(n.code,{children:"void kb_init(void)"})}),"\n",(0,l.jsx)(n.p,{children:"Enables keyboard interrupts."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Features:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Enables IRQ1 (keyboard interrupt)"}),"\n",(0,l.jsxs)(n.li,{children:["Should be called after ",(0,l.jsx)(n.code,{children:"idt_init()"})]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"input-functions",children:"Input Functions"}),"\n",(0,l.jsx)(n.h4,{id:"char-get_inputconst-char-prompt--nullptr",children:(0,l.jsx)(n.code,{children:"char* get_input(const char* prompt = nullptr)"})}),"\n",(0,l.jsxs)(n.p,{children:["Gets a line of input from the keyboard, similar to Python's ",(0,l.jsx)(n.code,{children:"input()"})," function."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameters:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"prompt"}),": Optional string to display before getting input"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Features:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Blocks until Enter key is pressed"}),"\n",(0,l.jsx)(n.li,{children:"Supports backspace for editing"}),"\n",(0,l.jsxs)(n.li,{children:["Input is limited to ",(0,l.jsx)(n.code,{children:"MAX_INPUT_LENGTH"})," characters (256 by default)"]}),"\n",(0,l.jsx)(n.li,{children:"Returns null-terminated string containing the user's input"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"control-functions",children:"Control Functions"}),"\n",(0,l.jsx)(n.h4,{id:"void-kb_disablevoid",children:(0,l.jsx)(n.code,{children:"void kb_disable(void)"})}),"\n",(0,l.jsx)(n.p,{children:"Disables keyboard interrupts."}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Features:"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Disables all interrupts on the primary PIC"}),"\n",(0,l.jsx)(n.li,{children:"Useful for system shutdown or when keyboard input needs to be temporarily disabled"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,l.jsx)(n.h3,{id:"keyboard-map",children:"Keyboard Map"}),"\n",(0,l.jsx)(n.p,{children:"The system uses a US QWERTY keyboard map that translates scan codes to ASCII characters:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Letters (a-z)"}),"\n",(0,l.jsx)(n.li,{children:"Numbers (0-9)"}),"\n",(0,l.jsx)(n.li,{children:"Special characters (-, =, [, ], etc.)"}),"\n",(0,l.jsx)(n.li,{children:"Control keys (backspace, tab, enter)"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"interrupt-handling",children:"Interrupt Handling"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"IDT Configuration"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Uses IDT entry 0x21 for keyboard interrupt"}),"\n",(0,l.jsx)(n.li,{children:"Sets up interrupt gate with proper privileges"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"PIC Configuration"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Programs the 8259 PIC"}),"\n",(0,l.jsx)(n.li,{children:"Enables only keyboard interrupts (IRQ1)"}),"\n",(0,l.jsx)(n.li,{children:"Handles interrupt acknowledgment"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Input Processing"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Reads scan code from keyboard port"}),"\n",(0,l.jsx)(n.li,{children:"Translates scan code to ASCII"}),"\n",(0,l.jsx)(n.li,{children:"Handles special keys"}),"\n",(0,l.jsx)(n.li,{children:"Updates input buffer"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"input-buffer",children:"Input Buffer"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Static buffer with 256-character capacity"}),"\n",(0,l.jsx)(n.li,{children:"Maintains current position and input state"}),"\n",(0,l.jsx)(n.li,{children:"Handles backspace by moving position backward"}),"\n",(0,l.jsx)(n.li,{children:"Automatically null-terminates strings"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"usage-examples",children:"Usage Examples"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-cpp",children:'// Initialize keyboard system\nif (!keyboard::idt_init()) {\n    display::print("Keyboard initialization failed\\n");\n    return;\n}\n\n// Get input with a prompt\nchar* name = keyboard::get_input("Enter your name: ");\n\n// Get input without a prompt\nchar* command = keyboard::get_input();\n\n// Disable keyboard when done\nkeyboard::kb_disable();\n'})}),"\n",(0,l.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"US QWERTY layout only"}),"\n",(0,l.jsxs)(n.li,{children:["No support for:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Function keys (F1-F12)"}),"\n",(0,l.jsx)(n.li,{children:"Modifier keys (Shift, Ctrl, Alt)"}),"\n",(0,l.jsx)(n.li,{children:"Special keys (Insert, Delete, etc.)"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"Fixed input buffer size (256 characters)"}),"\n",(0,l.jsx)(n.li,{children:"Blocking input only (no non-blocking mode)"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,l.jsx)(n.p,{children:"The keyboard system includes basic error handling:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Initialization failure detection"}),"\n",(0,l.jsx)(n.li,{children:"Buffer overflow prevention"}),"\n",(0,l.jsx)(n.li,{children:"Invalid scan code filtering"}),"\n",(0,l.jsx)(n.li,{children:"Basic input validation"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Standard PS/2 keyboard controller"}),"\n",(0,l.jsx)(n.li,{children:"Intel 8259 PIC"}),"\n",(0,l.jsx)(n.li,{children:"x86 processor with interrupt support"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>d});var r=i(6540);const l={},t=r.createContext(l);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);