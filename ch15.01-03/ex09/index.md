## React

_React_ のJSX内の式埋め込みでは、文字列が自動でエスケープされます。
ただし、JavaScriptの埋め込みはエスケープされないので、JavaScriptで動的にHTMLを作る場合、XSSのリスクがあります。
