const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),r=document.querySelector("body");let o=0;function d(t,e,r){t.hasAttribute(r)?(t.removeAttribute(r),e.setAttribute(r,r)):(t.setAttribute(r,r),e.removeAttribute(r))}0===o&&e.setAttribute("disabled","disabled"),t.addEventListener("click",(function(){o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),d(t,e,"disabled")})),e.addEventListener("click",(function(){clearInterval(o),d(t,e,"disabled")}));
//# sourceMappingURL=01-color-switcher.8efae7cb.js.map