const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let n=null;function o(t,e,r){t.hasAttribute(r)?(t.removeAttribute(r),e.setAttribute(r,r)):(t.setAttribute(r,r),e.removeAttribute(r))}null===n&&e.setAttribute("disabled","disabled"),t.addEventListener("click",(function(){n=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),o(t,e,"disabled")})),e.addEventListener("click",(function(){clearInterval(n),o(t,e,"disabled")}));
//# sourceMappingURL=01-color-switcher.5bed8d2d.js.map