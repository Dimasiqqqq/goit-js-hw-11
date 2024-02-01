import{S as m,i as f}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const d="/goit-js-hw-11/assets/x-octagon-4a271e8a.svg",l=document.querySelector(".data-select"),u=document.querySelector(".gallery-list"),c=document.querySelector(".loader"),g="42133778-4b8d89235d578f5a93c0f41d5";l.addEventListener("submit",async s=>{s.preventDefault();const o=l.elements.request.value.trim();u.innerHTML="",c.classList.toggle("loader-active");try{const i=new URLSearchParams({key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=await h(i);t.totalHits>0?p(t):n("Sorry, there are no images matching your search query. Please try again!")}catch(i){y(i)}finally{c.classList.toggle("loader-active"),l.reset()}});async function h(s){const o=await fetch(`https://pixabay.com/api/?${s.toString()}`);if(!o.ok)throw new Error(o.status);return o.json()}function p(s){const o=s.hits.map(t=>`<li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
              width="360"
              height="200"
            />
            <ul class="info-list">
              <li class="info-item">
                <h class="item-title">Likes</h>
                <p class="item-content">${t.likes}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Views</h>
                <p class="item-content">${t.views}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Comments</h>
                <p class="item-content">${t.comments}</p>
              </li>
              <li class="info-item">
                <h class="item-title">Downloads</h>
                <p class="item-content">${t.downloads}</p>
              </li>
            </ul>
          </a>
        </li>`).join("");u.insertAdjacentHTML("beforeend",o),new m(".gallery-list a",{captionsData:"alt",captionDelay:250}).refresh()}function n(s){f.error({message:s,messageColor:"#FAFAFB",messageSize:"16",messageLineHeight:"20",position:"topRight",backgroundColor:"#EF4040",iconUrl:d,icon:"fa-regular",iconColor:"#FAFAFB",maxWidth:"500",transitionIn:"bounceInLeft"})}function y(s){s.message.includes("404")?n("Oops! The requested resource was not found."):s.message.includes("500")?n("Oops! Something went wrong on the server. Please try again later."):n("Oops! An unexpected error occurred. Please try again.")}
//# sourceMappingURL=commonHelpers.js.map
