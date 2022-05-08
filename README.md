# Sql-editor-examples

Examples of building sql editor with `monaco-editor`.

---

Commonly, there are two ways of implementing language features in monaco-editor.
  - Directly using `languages.*` API.
  - Building a language server that speaks [`language server protocol`](https://microsoft.github.io/language-server-protocol/)

In the second way, a language server usually has two parts:
  - Language Client
  - Language Server: A language analysis tool running in a separate process.

For more information about language server, see [Language Server Extension Guide](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide).

The examples in this repo will show how to build a language server that supports standard sql language (or maybe also some dialects).

The `Language Server` part will be implemented in two different ways —— **Browser Example** and **Node.js Language Server** 

## Browser-example
Run dev server to run language client for **Browser Example**

This example uses [sqlparser-rs](https://github.com/sqlparser-rs/sqlparser-rs) as SQL Lexer and Parser.

TBD...