let docRoot=document.documentElement;function getNewMediaMatches(){return{mobile:window.matchMedia("(max-width: 689px)").matches,tablet:window.matchMedia("(min-width: 690px) and (max-width:999px)").matches,desktop:window.matchMedia("(min-width: 1000px) and (max-width:1299px)").matches,desktop_wide:window.matchMedia("(min-width: 1300px)").matches}}function isMediaClassChanged(){let latestMediaMatches=getNewMediaMatches();if(currentMediaMatches["mobile"]!=latestMediaMatches["mobile"]||currentMediaMatches["tablet"]!=latestMediaMatches["tablet"]||currentMediaMatches["desktop"]!=latestMediaMatches["desktop"]||currentMediaMatches["desktop_wide"]!=latestMediaMatches["desktop_wide"]){currentMediaMatches=getNewMediaMatches();return true}return false}function setRootCssByMedia(elementsArray,mediaClass){if(elementsArray.length==0||!mediaClass){return}for(element of elementsArray){if(element=="super-heading"||element=="h1"||element=="h2"||element=="h3"||element=="h4"||element=="h5"||element=="h6"||element=="paragraph"){docRoot.style.setProperty("--multiplier-font-size-"+element+"-current","var(--multiplier-font-size-"+element+"-"+mediaClass+")")}}}function updateTypeScaling(){let elementsArray=["super-heading","h1","h2","h3","h4","h5","h6","paragraph"];if(currentMediaMatches["mobile"]){setRootCssByMedia(elementsArray,"mobile")}else if(currentMediaMatches["tablet"]){setRootCssByMedia(elementsArray,"tablet")}else if(currentMediaMatches["desktop"]){setRootCssByMedia(elementsArray,"desktop")}else{setRootCssByMedia(elementsArray,"desktop-wide")}}function checkAndUpdateTypeScaling(){let mediaClassIsChanged=isMediaClassChanged();if(mediaClassIsChanged==false){return}updateTypeScaling()}function turnOnRwdTypography(bool){if(bool==false){return}updateTypeScaling();window.addEventListener("resize",checkAndUpdateTypeScaling)}let currentMediaMatches=getNewMediaMatches();turnOnRwdTypography(true);($=>$(()=>{$("a").each(()=>true).not('a:has(img), a[href^="/"], a[href^="#"], a[href^="https://qtbipoc.design"], a[href^="https://staging"], a[href^="mailto"], a[href^="tel"], #footer-custom .nectar_icon a, #wpadminbar *').attr("rel","external")}))(jQuery);($=>$(()=>{const memberBioParagraphs=document.querySelectorAll(".directory-result-member-bio span");const contentObserver=new ResizeObserver(entries=>{for(let entry of entries){entry.target.classList[entry.target.scrollHeight>entry.contentRect.height?"add":"remove"]("truncated");console.log(entry)}});const flagTruncatedContent=function(el,flagName){el.target.classList[el.target.scrollHeight>el.contentRect.height?"add":"remove"](flagName)};memberBioParagraphs.forEach(span=>{contentObserver.observe(span);flagTruncatedContent(span,"hasTruncation")})}))(jQuery);console.log("Footer Loaded");jQuery(function($){$('a[href="#login"]').click(function(e){e.preventDefault();$(".learndash-wrapper-login-modal").addClass("ld-modal-open").removeClass("ld-modal-closed");return false})});console.log("Main Loaded");function changeSubmenuLabel(label){var newLabel;if(label){newLabel=label}else{newLabel="Sections"}var menuLinkEl=document.querySelector(".submenu-organized-by-sections .page-submenu a.mobile-menu-link");if(!menuLinkEl){return}menuLinkEl.innerHTML=menuLinkEl.innerHTML.replace("Menu",newLabel)}(function($){$(".wpb_row").ready(function(){changeSubmenuLabel()})})(jQuery);"use strict";($=>$(()=>{$(".wpb_row .planetContainer").closest(".wpb_row:not(.inner_row)").css("z-index","-100")}))(jQuery);