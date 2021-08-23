const Embed = require('@editorjs/embed');
const Table = require('@editorjs/table');
const List = require('@editorjs/list');
const Warning = require('@editorjs/warning');
const Code = require('@editorjs/code');
const LinkTool = require('@editorjs/link');
const Image = require('@editorjs/image');
const Raw = require('@editorjs/raw');
const Header = require('@editorjs/header');
const Quote = require('@editorjs/quote');
const Marker = require('@editorjs/marker');
const CheckList = require('@editorjs/checklist');
const Delimiter = require('@editorjs/delimiter');
const InlineCode = require('@editorjs/inline-code');
const SimpleImage = require('@editorjs/simple-image');


const EDITOR_TOOLS = {
    embed: Embed,
    table: Table,
    marker: Marker,
    list: List,
    warning: Warning,
    code: Code,
    linkTool: LinkTool,
    image: Image,
    raw: Raw,
    header: Header,
    quote: Quote,
    checklist: CheckList,
    delimiter: Delimiter,
    inlineCode: InlineCode,
    simpleImage: SimpleImage,
};

export default EDITOR_TOOLS;