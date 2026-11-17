import"./deepChat-CbphIp_C.js";import{d as r,f as o,o as a,at as p,m as s}from"./index-BHQ7BApy.js";const l=r({__name:"Group",setup(n){const e=s();return o(()=>{e.value.demo={response:t=>({text:"仅演示，如需AI服务，请参考 https://deepchat.dev/docs/connect"})}}),(t,m)=>(a(),p("deep-chat",{ref_key:"chatRef",ref:e,auxiliaryStyle:`\r
    .deep-chat-top-message .message-bubble {\r
        border-top-left-radius: 5px !important;\r
        border-top-right-radius: 5px !important;\r
    }\r
    .deep-chat-middle-message .message-bubble {\r
        margin-top: 0px;\r
    }\r
    .deep-chat-bottom-message .message-bubble {\r
        margin-top: 0px;\r
        border-bottom-left-radius: 5px !important;\r
        border-bottom-right-radius: 5px !important;\r
    }\r
    .deep-chat-top-message.deep-chat-bottom-message .message-bubble {\r
      margin-top: 10px;\r
    }`,messageStyles:{default:{shared:{bubble:{borderRadius:"0px"}}}},textInput:{placeholder:{text:"发送消息"}},history:[{text:"组1",role:"group1"},{text:"组2-1",role:"group2"},{text:"组2-2",role:"group2"},{text:"组2-3",role:"group2"},{text:"组3-1",role:"group3"},{text:"组3-2",role:"group3"}],demo:!0},null,512))}});export{l as _};
