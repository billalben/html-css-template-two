const section=document.querySelector(".our-skills"),spans=document.querySelectorAll(".prog span");window.onscroll=function(){window.scrollY>=section.offsetTop-100&&(spans.forEach(s=>{s.style.width=s.dataset.progress}),spans.forEach(s=>{s.classList.add("active")}))};