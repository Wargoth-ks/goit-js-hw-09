!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),d=document.body.style;t.addEventListener("click",(function(){t.disabled=!0,timerId=setInterval((function(){d.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),console.log("Button disabled",t.disabled)}),1e3)})),e.addEventListener("click",(function(){clearInterval(timerId),t.disabled=!1,console.log("Button disabled",t.disabled)}))}();
//# sourceMappingURL=01-color-switcher.53c28723.js.map
