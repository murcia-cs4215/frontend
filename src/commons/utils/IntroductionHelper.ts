import { Links } from './Constants';

const MAIN_INTRODUCTION = `
Welcome to the OContract playground!

The language [_OContract_](${'https://github.com/murcia-cs4215/ocontract'}) is an adaptation of the language [_OCaml_](${'https://ocaml.org/'}) that also supports contract-based assertions. `;

const HOTKEYS_INTRODUCTION = `

In the editor on the left, you can use the [_Ace keyboard shortcuts_](${Links.aceHotkeys}) 
and also the [_Source Academy keyboard shortcuts_](${Links.sourceHotkeys}).

`;

export const generateSourceIntroduction = () => {
  return MAIN_INTRODUCTION + HOTKEYS_INTRODUCTION;
};
