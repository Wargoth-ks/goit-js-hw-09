!function(){var t,e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=document.body.style;e.addEventListener("click",(function(){e.disabled=!0,t=setInterval((function(){o.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),console.log("Button disabled",e.disabled)}),1e3)})),n.addEventListener("click",(function(){clearInterval(t),e.disabled=!1,console.log("Button disabled",e.disabled)}))}();
//# sourceMappingURL=01-color-switcher.ed10bf81.js.map
