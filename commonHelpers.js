import{i as c,s as u}from"./assets/vendor-8ce50246.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",m="42512017-1bddfdd3afd2851258a10c68c";function y(n,r=9){return fetch(`${f}?key=${m}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${r}`).then(s=>s.json())}const d=document.querySelector('button[type="submit"]'),i=document.querySelector(".images-list"),g=document.querySelector(".js-form"),h=document.querySelector('input[name="js-input"]'),l=document.querySelector(".loader");l.style.display="none";g.addEventListener("submit",_);function _(n){n.preventDefault(),l.style.display="block";const r=n.currentTarget.elements["js-input"].value;r?y(r).then(s=>{s.total===0?c.show({message:"Sorry, there are no images matching your search query. Please try again!"}):(i.innerHTML="",i.insertAdjacentHTML("beforeend",b(s.hits)))}).catch(s=>console.log(s)).finally(()=>{l.style.display="none"}):(d.disabled=!0,c.show({message:"Please, enter the value!"}))}function b(n){return n.map(({webformatURL:r,largeImageURL:s,tags:o,likes:e,views:t,comments:a,downloads:p})=>`<li class="gallery__item">
        <div class="gallery__card">
          <a href="${s}" class="gallery-card__link"
            ><img src="${r}" alt="${o}" class="gallery-card__image"
          /></a>
          <div class="gallery-card__description">
            <p class="gallery-card__text">Likes <span>${e}</span></p>
            <p class="gallery-card__text">Views <span>${t}</span></p>
            <p class="gallery-card__text">Comments <span>${a}</span></p>
            <p class="gallery-card__text">Downloads <span>${p}</span></p>
          </div>
        </div>
      </li>`).join("")}h.addEventListener("input",function(){d.disabled=!1});i.addEventListener("click",function(n){n.preventDefault(),new u("a",{captionsData:"alt",captionDelay:250}),u.open()});
//# sourceMappingURL=commonHelpers.js.map
