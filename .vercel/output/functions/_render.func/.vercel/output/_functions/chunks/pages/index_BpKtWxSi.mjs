import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, u as unescapeHTML, j as Fragment, h as addAttribute, k as renderHead, l as renderSlot } from '../astro_Q067Pq48.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { $ as $$Image } from './generic_OLyqarnz.mjs';

const $$Astro$d = createAstro();
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate`${maybeRenderHead()}<button class="themeToggle"> <svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path> <path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path> </svg> </button>`;
}, "I:/proyects/my-page-astro/src/components/ThemeIcon.astro", void 0);

const $$Astro$c = createAstro();
const $$LangIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$LangIcon;
  return renderTemplate`${maybeRenderHead()}<button id="langToggle" class="langToggle"> <span class="text-es">EN</span> <span class="text-en">ES</span> </button>`;
}, "I:/proyects/my-page-astro/src/components/LangIcon.astro", void 0);

const localExitSvg = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\r\n    viewBox=\"0 0 52.001 52.001\" xml:space=\"preserve\">\r\n    <g>\r\n    <g>\r\n    <path d=\"M47.743,41.758L33.955,26.001l13.788-15.758c2.343-2.344,2.343-6.143,0-8.486\r\n        c-2.345-2.343-6.144-2.342-8.486,0.001L26,16.91L12.743,1.758C10.4-0.584,6.602-0.585,4.257,1.757\r\n        c-2.343,2.344-2.343,6.143,0,8.486l13.788,15.758L4.257,41.758c-2.343,2.343-2.343,6.142-0.001,8.485\r\n        c2.344,2.344,6.143,2.344,8.487,0L26,35.091l13.257,15.152c2.345,2.344,6.144,2.344,8.487,0\r\n        C50.086,47.9,50.086,44.101,47.743,41.758z\"/>\r\n    </g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>\r\n</svg>";

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$b = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<div class="menu-lateral"> <div class="menu-lateral-background" id="background-close"></div> <div class="menu-lateral-container"> <div class="menu-lateral-exit" id="close-menu-btn"> ', ' </div> <ul class="nav-bar"> <li class="menu-lateral-item"><a href="#tab1">Inicio</a></li> <li class="menu-lateral-item"><a href="#tab2">Acerca</a></li> <li class="menu-lateral-item"><a href="#tab3">Contacto</a></li> ', " ", ' </ul> </div> </div> <header class="header-mobile"> <div class="header-menu"> <svg id="open-menu-btn" enable-background="new 0 0 32 32" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M26,16c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,14,26,14.896,26,16z" id="XMLID_314_"></path><path d="M26,8c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,6,26,6.896,26,8z"></path><path d="M26,24c0,1.104-0.896,2-2,2H8c-1.104,0-2-0.896-2-2s0.896-2,2-2h16C25.104,22,26,22.896,26,24z"></path></svg> </div> </header> <header class="header desktop"> <div class="nav"> <a class="header-logo-desktop" href="#">\nMR\n</a> <ul class="nav-bar"> <li class="nav-item"><a href="#tab1">Inicio</a></li> <li class="nav-item"><a href="#tab2">Acerca</a></li> <li class="nav-item"><a href="#tab3">Contacto</a></li> ', " ", ` </ul> </div> </header> <script type="module">

    const changeTheme = (theme) =>{
        if (theme === 'light') {
            document.body.classList.remove('theme--dark');
            document.querySelectorAll('.sun').forEach(el => el.style.display = 'none')
            document.querySelectorAll('.moon').forEach(el => el.style.display = 'inherit')
        } else {
            document.body.classList.add('theme--dark');
            document.querySelectorAll('.moon').forEach(el => el.style.display = 'none')
            document.querySelectorAll('.sun').forEach(el => el.style.display = 'inherit')
        }
    }

    const theme = (() => {
      if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme');
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'theme--dark';
      }
      return 'light';
    })();
  
    changeTheme(theme)
  
    localStorage.setItem('theme', theme);
  
    const handleToggleClick = () => {
      const body = document.body;
      body.classList.toggle('theme--dark', !body.classList.contains('theme--dark'));
  
      const isDark = body.classList.contains('theme--dark');
      const theme = isDark ? 'theme--dark' : 'light'
      localStorage.setItem('theme', theme);

      changeTheme(theme)
  
      $('.menu-lateral').css('left', '-100%');
      $('body').css('overflow', 'auto');
    }
  
    const btnsTheme = document.querySelectorAll('.themeToggle');
  
    // Agrega un evento de clic a cada elemento
    btnsTheme.forEach(function(elemento) {
        elemento.addEventListener('click', handleToggleClick);
    });
<\/script> <script type="module">

    const hideHtml = (langToDelete) =>{
      if(!langToDelete){
        userLanguage = navigator.language || navigator.userLanguage;
        langToDelete =  (userLanguage && userLanguage.startsWith('en')) ? 'es' : 'en'
      }
      
      const elementsWithLang = document.querySelectorAll("[lang]");
      elementsWithLang.forEach((element) => {
              if (element.getAttribute("lang") === langToDelete) {
                  element.style.display = 'none';
              }
              if (element.getAttribute("lang") !== langToDelete) {
                  element.style.display = 'inherit';
              }
          });
  
      localStorage.setItem('mr_lang', langToDelete)
      toggleLangBtns(langToDelete)
    }
  
    const toggleLangBtns = (lang) =>{
      if(lang == 'es'){
        document.querySelectorAll('.text-en').forEach(el => el.style.display = 'none')
        document.querySelectorAll('.text-es').forEach(el => el.style.display = 'inherit')
      }else{
        document.querySelectorAll('.text-es').forEach(el => el.style.display = 'none')
        document.querySelectorAll('.text-en').forEach(el => el.style.display = 'inherit')
      }
    }
  
    const getLang = () =>{
      if (typeof localStorage !== 'undefined' && localStorage.getItem('mr_lang')) {
        return localStorage.getItem('mr_lang');
      }
      return false;
    }
  
    const handleToggleLangClick = () => {
      const lang = getLang() == 'es' ? 'en' : 'es'
      hideHtml(lang)
      $('.menu-lateral').css('left', '-100%');
      $('body').css('overflow', 'auto');
    }
  
    hideHtml(getLang())
    const btnsLang = document.querySelectorAll('.langToggle');

    btnsLang.forEach(function(elemento) {
        elemento.addEventListener('click', handleToggleLangClick);
    });
  <\/script>`])), maybeRenderHead(), renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(localExitSvg)}` }), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), renderComponent($$result, "LangIcon", $$LangIcon, {}), renderComponent($$result, "ThemeIcon", $$ThemeIcon, {}), renderComponent($$result, "LangIcon", $$LangIcon, {}));
}, "I:/proyects/my-page-astro/src/components/structure/Header.astro", void 0);

const $$Astro$a = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Footer;
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" id="tab3"> <div class="container footer-redes"> <div class="footer-redes-item"> <a href="https://www.linkedin.com/in/mariano-romero-abadie/" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 7.5 5 C 6.132813 5 5 6.132813 5 7.5 L 5 24.5 C 5 25.867188 6.132813 27 7.5 27 L 24.5 27 C 25.867188 27 27 25.867188 27 24.5 L 27 7.5 C 27 6.132813 25.867188 5 24.5 5 Z M 7.5 7 L 24.5 7 C 24.785156 7 25 7.214844 25 7.5 L 25 24.5 C 25 24.785156 24.785156 25 24.5 25 L 7.5 25 C 7.214844 25 7 24.785156 7 24.5 L 7 7.5 C 7 7.214844 7.214844 7 7.5 7 Z M 10.4375 8.71875 C 9.488281 8.71875 8.71875 9.488281 8.71875 10.4375 C 8.71875 11.386719 9.488281 12.15625 10.4375 12.15625 C 11.386719 12.15625 12.15625 11.386719 12.15625 10.4375 C 12.15625 9.488281 11.386719 8.71875 10.4375 8.71875 Z M 19.46875 13.28125 C 18.035156 13.28125 17.082031 14.066406 16.6875 14.8125 L 16.625 14.8125 L 16.625 13.5 L 13.8125 13.5 L 13.8125 23 L 16.75 23 L 16.75 18.3125 C 16.75 17.074219 16.996094 15.875 18.53125 15.875 C 20.042969 15.875 20.0625 17.273438 20.0625 18.375 L 20.0625 23 L 23 23 L 23 17.78125 C 23 15.226563 22.457031 13.28125 19.46875 13.28125 Z M 9 13.5 L 9 23 L 11.96875 23 L 11.96875 13.5 Z"></path></svg> </a> </div> <div class="footer-redes-item"> <a href="https://github.com/Romero67" target="_blank"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px" fill-rule="evenodd"><path fill-rule="evenodd" d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"></path></svg> </a> </div> <div class="footer-redes-item"> <a href="mailto:marianoromeroabadie@gmail.com"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 6 7.03125 C 5.691406 7.03125 5.402344 7.089844 5.125 7.175781 L 8.039063 9.03125 L 23.960938 9.03125 L 26.875 7.175781 C 26.597656 7.089844 26.308594 7.03125 26 7.03125 Z M 4.113281 7.71875 C 3.4375 8.269531 3 9.097656 3 10.03125 L 3 23.03125 C 3 24.683594 4.347656 26.03125 6 26.03125 L 26 26.03125 C 27.652344 26.03125 29 24.683594 29 23.03125 L 29 10.03125 C 29 9.097656 28.5625 8.269531 27.886719 7.71875 L 16 15.28125 Z M 6 12.445313 L 16 18.8125 L 26 12.445313 L 26 24.03125 L 6 24.03125 Z"></path></svg> </a> </div> </div> <div class="footer-info">
© ${year} - Mariano Romero
</div> </footer>`;
}, "I:/proyects/my-page-astro/src/components/structure/Footer.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$9 = createAstro();
const $$Js = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Js;
  return renderTemplate(_a$1 || (_a$1 = __template$1([`<script async src="https://www.googletagmanager.com/gtag/js?id=G-QJ5D9R881W"><\/script> <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QJ5D9R881W');
<\/script> <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"><\/script>`])));
}, "I:/proyects/my-page-astro/src/components/structure/Js.astro", void 0);

const $$Astro$8 = createAstro();
const $$Metas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Metas;
  const { pageTitle, pageDescription } = Astro2.props;
  return renderTemplate`<meta charset="utf-8"><link rel="icon" type="image/png" href="/favicon.png"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta property="og:image" content="/favicon.png"><meta name="twitter:image" content="/favicon.png"><meta property="og:url" content="http://marianoromero.ar"><meta property="og:site_name" content="Mariano Romero"><meta name="twitter:title"${addAttribute(pageTitle, "content")}><meta property="og:type" content="website"><meta name="robots"${addAttribute("none", "content")}><meta name="author" content="Mariano Romero"><meta name="publisher" content="Mariano Romero"><link rel="canonical" href="http://marianoromero.ar"><meta property="og:description"${addAttribute(pageDescription, "content")}><meta name="description"${addAttribute(pageDescription, "content")}><meta property="description"${addAttribute(pageDescription, "content")}><meta name="twitter:description"${addAttribute(pageDescription, "content")}><title>${pageTitle}</title>`;
}, "I:/proyects/my-page-astro/src/components/structure/Metas.astro", void 0);

const $$Astro$7 = createAstro();
const $$Css = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Css;
  Astro2.props;
  return renderTemplate``;
}, "I:/proyects/my-page-astro/src/components/structure/Css.astro", void 0);

const $$Astro$6 = createAstro();
const $$Fonts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Fonts;
  return renderTemplate`<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;700&family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">`;
}, "I:/proyects/my-page-astro/src/components/structure/Fonts.astro", void 0);

const $$Astro$5 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle, pageDescription, page } = Astro2.props;
  return renderTemplate`<html> <head>${renderComponent($$result, "Fonts", $$Fonts, {})}${renderComponent($$result, "Metas", $$Metas, { "pageTitle": pageTitle, "pageDescription": pageDescription })}${renderComponent($$result, "Css", $$Css, { "page": page })}${renderComponent($$result, "Js", $$Js, {})}${renderHead()}</head> <body class="theme"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "I:/proyects/my-page-astro/src/layouts/BaseLayout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Separate = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Separate;
  return renderTemplate`${maybeRenderHead()}<div class="container"> <div class="division-section"></div> </div>`;
}, "I:/proyects/my-page-astro/src/components/Separate.astro", void 0);

const $$Astro$3 = createAstro();
const $$ExperienceItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const { title, subtitle, description, lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="experience-item"${addAttribute(lang, "lang")}> <div class="experience-head"> <div class="experience-cont-title"> <h2 class="experience-title"${addAttribute(lang, "lang")}>${title}</h2> <span class="experience-subtitle"${addAttribute(lang, "lang")}>${subtitle}</span> </div> </div> <div class="experience-info"> <div class="experience-line"></div> <p class="experience-p"${addAttribute(lang, "lang")}> ${description} </p> </div> </div>`;
}, "I:/proyects/my-page-astro/src/components/ExperienceItem.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProyectItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProyectItem;
  const { url, img, imgAlt, title, description, lang } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="cont-proyects-link"${addAttribute(url, "href")} target="_blank"${addAttribute(lang, "lang")}> <div class="cont-proyects-item"> <div class="cont-proyects-item-img"> ${renderComponent($$result, "Image", $$Image, { "src": img, "alt": imgAlt })} </div> <div class="cont-proyects-item-body"> <div class="cont-proyects-item-body-title"${addAttribute(lang, "lang")}>${title}</div> <div class="cont-proyects-item-body-text"${addAttribute(lang, "lang")}>${description}</div> </div> </div> </a>`;
}, "I:/proyects/my-page-astro/src/components/ProyectItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$TechSliderItem = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TechSliderItem;
  const { img, imgAlt, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="tech-slider-item"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(img)}` })} <span>${title}</span> </div> </div>`;
}, "I:/proyects/my-page-astro/src/components/TechSliderItem.astro", void 0);

const localWikiImg = new Proxy({"src":"/_astro/wikicat.BXlqe7ep.png","width":466,"height":411,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "I:/proyects/my-page-astro/src/images/wikicat.png";
							}
							
							return target[name];
						}
					});

const localFutbolImg = new Proxy({"src":"/_astro/appfutbol.MnwkexMQ.png","width":1691,"height":865,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "I:/proyects/my-page-astro/src/images/appfutbol.png";
							}
							
							return target[name];
						}
					});

const localDragImg = new Proxy({"src":"/_astro/upload.DpYn_r1-.png","width":605,"height":657,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "I:/proyects/my-page-astro/src/images/upload.png";
							}
							
							return target[name];
						}
					});

const localHtmlSvg = "<svg\r\nxmlns=\"http://www.w3.org/2000/svg\"\r\nviewBox=\"0 0 32 32\"\r\nwidth=\"64px\"\r\nheight=\"64px\"\r\n><title>HTML</title><path\r\n    d=\"M 5.21875 4 L 5.3125 5.09375 L 7.0625 24.875 L 7.125 25.5625 L 7.78125 25.75 L 15.71875 27.96875 L 15.96875 28.03125 L 16.25 27.96875 L 24.1875 25.78125 L 24.84375 25.59375 L 24.90625 24.90625 L 26.6875 5.09375 L 26.78125 4.03125 L 25.6875 4.03125 L 6.3125 4 Z M 7.40625 6 L 24.59375 6.03125 L 22.96875 24.03125 L 16 25.96875 L 9 24.03125 Z M 9.8125 9 L 10.46875 16.46875 L 19.03125 16.46875 L 18.75 19.6875 L 16 20.4375 L 15.96875 20.4375 L 13.21875 19.6875 L 13.0625 17.625 L 10.5625 17.625 L 10.90625 21.59375 L 15.96875 23 L 16 23 L 21.0625 21.59375 L 21.75 14 L 12.71875 14 L 12.5 11.46875 L 21.96875 11.46875 L 22.1875 9 Z\"\r\n></path>\r\n</svg>";

const localCssSvg = "<svg\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    viewBox=\"0 0 32 32\"\r\n    width=\"64px\"\r\n    height=\"64px\"\r\n    ><title>CSS</title><path\r\n        d=\"M 6 4 L 8 25 L 16 28 L 24 25 L 26 4 L 6 4 z M 9.3320312 7 L 22.652344 7 L 22.390625 10 L 16.695312 13 L 19.121094 13 L 22 13 L 22.123047 13 L 21.611328 19.007812 L 21.630859 19 L 21.355469 22 L 16 24 L 10.634766 22 L 10.304688 18 L 13.326172 18 L 13.482422 20.033203 L 16 20.904297 L 18.521484 20.050781 L 18.867188 16 L 10.130859 16 L 9.8730469 13 L 15.783203 10 L 9.609375 10 L 9.3320312 7 z\"\r\n    ></path></svg\r\n>";

const localJsSvg = "<svg\r\n    class=\"icon icon-tabler icon-tabler-brand-javascript\"\r\n    fill=\"#000080\"\r\n    height=\"24\"\r\n    stroke=\"#000080\"\r\n    stroke-linecap=\"round\"\r\n    stroke-linejoin=\"round\"\r\n    stroke-width=\"2\"\r\n    viewBox=\"0 0 24 24\"\r\n    width=\"24\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    ><title>Javascript</title><path\r\n        d=\"M0 0h24v24H0z\"\r\n        fill=\"none\"\r\n        stroke=\"none\"></path><path\r\n        d=\"M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z\"></path><path\r\n        d=\"M7.5 8h3v8l-2 -1\"></path><path\r\n        d=\"M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5\"\r\n    ></path></svg\r\n>";

const localSassSvg = "<svg\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    viewBox=\"0 0 32 32\"\r\n    width=\"64px\"\r\n    height=\"64px\"\r\n    ><title>Sass</title><path\r\n        d=\"M27.534,17.792c-1.118,0.006-2.086,0.274-2.898,0.674c-0.297-0.592-0.597-1.114-0.648-1.501\tc-0.059-0.452-0.127-0.722-0.056-1.261c0.071-0.539,0.383-1.302,0.378-1.359c-0.005-0.057-0.07-0.332-0.715-0.336\tc-0.645-0.005-1.196,0.124-1.261,0.294c-0.065,0.17-0.189,0.553-0.266,0.953c-0.113,0.585-1.287,2.67-1.954,3.761\tc-0.218-0.426-0.403-0.801-0.442-1.098c-0.059-0.452-0.127-0.722-0.056-1.261c0.071-0.539,0.383-1.302,0.378-1.359\tc-0.005-0.057-0.07-0.332-0.715-0.336c-0.645-0.005-1.196,0.124-1.261,0.294c-0.065,0.17-0.134,0.568-0.266,0.953\tc-0.132,0.385-1.693,3.863-2.102,4.765c-0.208,0.459-0.39,0.828-0.518,1.08c0-0.001-0.001-0.001-0.001-0.001\ts-0.008,0.017-0.021,0.045c-0.11,0.215-0.175,0.333-0.175,0.333s0.001,0.002,0.002,0.004c-0.087,0.158-0.18,0.304-0.226,0.304\tc-0.032,0-0.097-0.419,0.014-0.995c0.232-1.207,0.79-3.088,0.785-3.153c-0.003-0.033,0.104-0.361-0.364-0.533\tc-0.455-0.167-0.617,0.111-0.659,0.112c-0.04,0.001-0.07,0.098-0.07,0.098s0.507-2.116-0.967-2.116\tc-0.921,0-2.198,1.008-2.827,1.922c-0.397,0.217-1.246,0.68-2.148,1.175c-0.346,0.19-0.699,0.384-1.034,0.569\tc-0.023-0.025-0.045-0.05-0.069-0.075c-1.787-1.907-5.091-3.255-4.951-5.819c0.051-0.932,0.375-3.386,6.348-6.362\tc4.893-2.438,8.81-1.767,9.487-0.28c0.967,2.124-2.094,6.073-7.175,6.642c-1.936,0.217-2.955-0.533-3.209-0.813\tc-0.267-0.294-0.307-0.307-0.406-0.252c-0.162,0.09-0.059,0.35,0,0.504c0.152,0.395,0.774,1.095,1.836,1.443\tc0.934,0.306,3.207,0.475,5.956-0.589c3.079-1.191,5.483-4.504,4.777-7.273c-0.718-2.816-5.388-3.742-9.808-2.172\tC7.597,5.708,4.749,7.175,2.702,9.09c-2.434,2.277-2.823,4.259-2.663,5.087c0.568,2.942,4.624,4.858,6.248,6.278\tc-0.08,0.044-0.155,0.086-0.224,0.123c-0.814,0.403-3.905,2.021-4.679,3.73c-0.877,1.939,0.14,3.33,0.813,3.517\tc2.086,0.58,4.226-0.464,5.376-2.179c1.15-1.715,1.009-3.948,0.482-4.968c-0.007-0.013-0.014-0.025-0.021-0.038\tc0.21-0.124,0.425-0.251,0.637-0.376c0.414-0.243,0.821-0.47,1.174-0.662c-0.197,0.541-0.342,1.19-0.417,2.127\tc-0.088,1.101,0.363,2.523,0.953,3.083c0.26,0.246,0.573,0.252,0.771,0.252c0.687,0,1-0.571,1.345-1.247\tc0.423-0.829,0.799-1.794,0.799-1.794s-0.471,2.606,0.813,2.606c0.468,0,0.939-0.607,1.148-0.916\tc0.001,0.003,0.001,0.005,0.001,0.005s0.012-0.02,0.036-0.061c0.049-0.074,0.076-0.122,0.076-0.122s0.001-0.005,0.002-0.013\tc0.188-0.327,0.605-1.071,1.231-2.299c0.808-1.586,1.583-3.573,1.583-3.573s0.072,0.486,0.308,1.289\tc0.139,0.473,0.434,0.995,0.667,1.496c-0.187,0.26-0.303,0.41-0.303,0.41s0.001,0.003,0.003,0.008\tc-0.15,0.199-0.318,0.414-0.494,0.623c-0.638,0.76-1.398,1.627-1.499,1.878c-0.12,0.295-0.092,0.512,0.14,0.687\tc0.169,0.128,0.47,0.147,0.785,0.126c0.573-0.039,0.977-0.181,1.176-0.267c0.31-0.11,0.671-0.282,1.011-0.531\tc0.626-0.46,1.003-1.118,0.967-1.99c-0.02-0.48-0.173-0.957-0.367-1.406c0.057-0.082,0.114-0.164,0.171-0.247\tc0.987-1.442,1.752-3.027,1.752-3.027s0.072,0.486,0.308,1.289c0.12,0.407,0.355,0.85,0.567,1.285\tc-0.928,0.754-1.503,1.629-1.703,2.204c-0.369,1.063-0.08,1.544,0.462,1.654c0.246,0.05,0.593-0.063,0.854-0.173\tc0.325-0.108,0.715-0.287,1.08-0.555c0.626-0.46,1.227-1.104,1.191-1.976c-0.017-0.397-0.124-0.791-0.27-1.169\tc0.786-0.328,1.804-0.51,3.101-0.358c2.782,0.325,3.327,2.062,3.223,2.789c-0.104,0.727-0.688,1.127-0.883,1.247\tc-0.195,0.121-0.255,0.163-0.238,0.252c0.024,0.13,0.114,0.125,0.28,0.097c0.229-0.039,1.461-0.591,1.513-1.933\tC32.057,19.648,30.425,17.777,27.534,17.792z M6.093,25.021c-0.921,1.005-2.209,1.385-2.761,1.065\tc-0.596-0.346-0.36-1.825,0.771-2.892c0.689-0.65,1.579-1.249,2.169-1.618c0.134-0.081,0.332-0.2,0.571-0.343\tc0.04-0.023,0.062-0.035,0.062-0.035l-0.001-0.001c0.046-0.028,0.094-0.056,0.143-0.085C7.459,22.629,7.06,23.966,6.093,25.021z M12.805,20.457c-0.321,0.782-0.993,2.784-1.401,2.677c-0.351-0.092-0.565-1.614-0.07-3.111c0.249-0.754,0.781-1.654,1.093-2.004\tc0.503-0.563,1.057-0.747,1.191-0.518C13.789,17.791,13.006,19.967,12.805,20.457z M18.351,23.103\tc-0.136,0.071-0.261,0.116-0.319,0.081c-0.043-0.025,0.056-0.119,0.056-0.119s0.694-0.746,0.967-1.086\tc0.159-0.198,0.343-0.432,0.544-0.695c0.002,0.026,0.003,0.052,0.003,0.078C19.599,22.257,18.736,22.861,18.351,23.103z M22.623,22.13c-0.101-0.072-0.085-0.306,0.249-1.033c0.131-0.286,0.43-0.766,0.95-1.225c0.06,0.189,0.097,0.37,0.096,0.539\tC23.911,21.535,23.108,21.955,22.623,22.13z\"\r\n    ></path></svg\r\n>";

const localMongodbSvg = "<svg\r\n    role=\"img\"\r\n    viewBox=\"0 0 24 24\"\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    ><title>MongoDB</title><path\r\n        d=\"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z\"\r\n    ></path></svg\r\n>";

const localNodejsSvg = "<svg\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    viewBox=\"0 0 32 32\"\r\n    width=\"64px\"\r\n    height=\"64px\"\r\n    ><title>Nodejs</title><path\r\n        d=\"M 21.300781 6 C 21.143781 6 21 6.1257812 21 6.3007812 L 21 11.796875 L 19.753906 11.070312 C 19.675906 11.024313 19.588 11.001953 19.5 11.001953 C 19.412 11.001953 19.324094 11.024312 19.246094 11.070312 L 16.251953 12.816406 C 16.095953 12.906406 16 13.072953 16 13.251953 L 16 16.748047 C 16 16.928047 16.095953 17.093594 16.251953 17.183594 L 19.246094 18.929688 C 19.324094 18.975687 19.412 18.998047 19.5 18.998047 C 19.588 18.998047 19.675906 18.975688 19.753906 18.929688 L 22.748047 17.183594 C 22.904047 17.093594 23 16.927047 23 16.748047 L 23 15 L 23 13.251953 L 23 7.2304688 C 23 7.0524688 22.904953 6.8888281 22.751953 6.7988281 L 21.449219 6.0410156 C 21.400219 6.0130156 21.350781 6 21.300781 6 z M 11.5 11.001953 C 11.41225 11.001953 11.324594 11.024813 11.246094 11.070312 L 8.2519531 12.816406 C 8.0959531 12.906406 8 13.072953 8 13.251953 L 8 16.748047 C 8 16.928047 8.0959531 17.093594 8.2519531 17.183594 L 11.246094 18.929688 C 11.403094 19.020688 11.596906 19.020688 11.753906 18.929688 L 14.748047 17.183594 C 14.904047 17.093594 15 16.927047 15 16.748047 L 15 13.251953 C 15 13.071953 14.904047 12.906406 14.748047 12.816406 L 11.753906 11.070312 C 11.675406 11.024812 11.58775 11.001953 11.5 11.001953 z M 27.5 11.001953 C 27.412 11.001953 27.324094 11.024312 27.246094 11.070312 L 24.251953 12.816406 C 24.095953 12.906406 24 13.072953 24 13.251953 L 24 16.748047 C 24 16.928047 24.095953 17.093594 24.251953 17.183594 L 27.15625 18.939453 C 27.31225 19.034453 27.508016 19.035359 27.666016 18.943359 L 29.09375 18.113281 C 29.24175 18.028281 29.24275 17.813562 29.09375 17.726562 L 26 15.904297 L 26 14.109375 L 27.5 13.236328 L 29 14.109375 L 29 15.359375 C 29 15.526375 29.140375 15.552094 29.234375 15.496094 C 29.612375 15.274094 30.751953 14.613281 30.751953 14.613281 C 30.904953 14.524281 31 14.359641 31 14.181641 L 31 13.251953 C 31 13.071953 30.904047 12.906406 30.748047 12.816406 L 27.753906 11.070312 C 27.674906 11.024313 27.588 11.001953 27.5 11.001953 z M 3.5 11.003906 C 3.412 11.003906 3.3240937 11.026266 3.2460938 11.072266 L 0.25195312 12.816406 C 0.095953125 12.907406 0 13.073906 0 13.253906 L 0 17.716797 C 0 17.934797 0.23582812 18.069938 0.42382812 17.960938 L 1.7519531 17.1875 C 1.9049531 17.0975 2 16.933859 2 16.755859 L 2 14.113281 L 3.5 13.238281 L 5 14.113281 L 5 16.755859 C 5 16.933859 5.0950469 17.0975 5.2480469 17.1875 L 6.5761719 17.960938 C 6.7641719 18.070938 7 17.934797 7 17.716797 L 7 13.253906 C 7 13.073906 6.9040469 12.907406 6.7480469 12.816406 L 3.7539062 11.072266 C 3.6759063 11.026266 3.588 11.003906 3.5 11.003906 z M 19.5 13.236328 L 21 14.111328 L 21 15 L 21 15.888672 L 19.5 16.763672 L 18 15.888672 L 18 14.111328 L 19.5 13.236328 z M 27.5 14.003906 L 26.642578 14.503906 L 26.642578 15.501953 L 27.5 16 L 28.357422 15.501953 L 28.357422 14.503906 L 27.5 14.003906 z M 15.40625 17.998047 C 15.303375 17.998047 15.199375 18.023219 15.109375 18.074219 L 12.296875 19.699219 C 12.111875 19.801219 12 20.001938 12 20.210938 L 12 23.457031 C 12 23.666031 12.116875 23.86275 12.296875 23.96875 L 13.037109 24.390625 C 13.392109 24.565625 13.522594 24.566406 13.683594 24.566406 C 14.213594 24.566406 14.515625 24.249453 14.515625 23.689453 L 14.515625 20.482422 C 14.515625 20.433422 14.477594 20.398438 14.433594 20.398438 L 14.078125 20.398438 C 14.029125 20.398438 13.994141 20.438422 13.994141 20.482422 L 13.994141 23.689453 C 13.994141 23.932453 13.737359 24.181656 13.318359 23.972656 L 12.548828 23.529297 C 12.523828 23.514297 12.505859 23.484078 12.505859 23.455078 L 12.505859 20.208984 C 12.505859 20.179984 12.519828 20.145859 12.548828 20.130859 L 15.361328 18.509766 C 15.391328 18.494766 15.425219 18.494766 15.449219 18.509766 L 18.263672 20.130859 C 18.292672 20.145859 18.306641 20.174984 18.306641 20.208984 L 18.306641 23.455078 C 18.306641 23.489078 18.287672 23.518203 18.263672 23.533203 L 15.449219 25.160156 C 15.424219 25.175156 15.385328 25.175156 15.361328 25.160156 L 14.642578 24.732422 C 14.623578 24.722422 14.593219 24.716562 14.574219 24.726562 C 14.375219 24.843563 14.335391 24.858875 14.150391 24.921875 C 14.101391 24.936875 14.034781 24.966922 14.175781 25.044922 L 15.109375 25.599609 C 15.202375 25.648609 15.30425 25.677734 15.40625 25.677734 C 15.51325 25.677734 15.617219 25.648703 15.699219 25.595703 L 18.511719 23.96875 C 18.696719 23.86675 18.808594 23.666031 18.808594 23.457031 L 18.808594 20.210938 C 18.808594 20.001938 18.691719 19.806219 18.511719 19.699219 L 15.699219 18.074219 C 15.611719 18.023219 15.509125 17.998047 15.40625 17.998047 z M 19.792969 19.496094 C 19.505969 19.496094 19.253906 19.728156 19.253906 20.035156 C 19.253906 20.332156 19.495969 20.576172 19.792969 20.576172 C 20.089969 20.576172 20.332031 20.332156 20.332031 20.035156 C 20.332031 19.728156 20.084969 19.491094 19.792969 19.496094 z M 19.787109 19.582031 C 20.041109 19.582031 20.246094 19.782156 20.246094 20.035156 C 20.246094 20.283156 20.040109 20.488141 19.787109 20.494141 C 19.538109 20.494141 19.335938 20.288156 19.335938 20.035156 C 19.335938 19.782156 19.539109 19.582031 19.787109 19.582031 z M 19.589844 19.728516 L 19.589844 20.335938 L 19.705078 20.335938 L 19.705078 20.09375 L 19.8125 20.09375 C 19.8565 20.09375 19.866953 20.112484 19.876953 20.146484 C 19.876953 20.151484 19.895391 20.308891 19.900391 20.337891 L 20.025391 20.337891 C 20.011391 20.308891 20.001094 20.225781 19.996094 20.175781 C 19.982094 20.097781 19.977531 20.044062 19.894531 20.039062 C 19.938531 20.024063 20.011719 20.000672 20.011719 19.888672 C 20.011719 19.727672 19.871828 19.728516 19.798828 19.728516 L 19.589844 19.728516 z M 19.705078 19.826172 L 19.802734 19.826172 C 19.832734 19.826172 19.890625 19.825203 19.890625 19.908203 C 19.890625 19.942203 19.875875 19.997094 19.796875 19.996094 L 19.705078 19.996094 L 19.705078 19.826172 z M 16.160156 20.322266 C 15.357156 20.322266 14.880859 20.664516 14.880859 21.228516 C 14.880859 21.846516 15.357953 22.011844 16.126953 22.089844 C 17.046953 22.181844 17.119141 22.314141 17.119141 22.494141 C 17.119141 22.810141 16.865484 22.941406 16.271484 22.941406 C 15.526484 22.941406 15.362594 22.756719 15.308594 22.386719 C 15.303594 22.347719 15.268609 22.318359 15.224609 22.318359 L 14.859375 22.318359 C 14.815375 22.318359 14.777344 22.353344 14.777344 22.402344 C 14.777344 22.874344 15.034625 23.439453 16.265625 23.439453 C 17.168625 23.438453 17.679688 23.088609 17.679688 22.474609 C 17.679688 21.866609 17.270297 21.704891 16.404297 21.587891 C 15.528297 21.470891 15.441406 21.412031 15.441406 21.207031 C 15.441406 21.037031 15.513156 20.814453 16.160156 20.814453 C 16.739156 20.814453 16.954969 20.941078 17.042969 21.330078 C 17.052969 21.369078 17.080141 21.392578 17.119141 21.392578 L 17.484375 21.392578 C 17.508375 21.392578 17.528969 21.383141 17.542969 21.369141 C 17.557969 21.350141 17.5675 21.330641 17.5625 21.306641 C 17.5045 20.634641 17.061156 20.322266 16.160156 20.322266 z\"\r\n    ></path></svg\r\n>";

const localGitSvg = "<svg\r\n    xmlns=\"http://www.w3.org/2000/svg\"\r\n    viewBox=\"0 0 32 32\"\r\n    width=\"64px\"\r\n    height=\"64px\"\r\n    ><title>Git</title><path\r\n        d=\"M 16 2 C 15.496094 2 15.003906 2.183594 14.625 2.5625 L 11.8125 5.40625 C 11.660156 5.488281 11.53125 5.605469 11.4375 5.75 L 2.5625 14.625 C 1.804688 15.378906 1.804688 16.617188 2.5625 17.375 L 14.625 29.4375 C 15.382813 30.191406 16.617188 30.191406 17.375 29.4375 L 29.4375 17.375 C 30.195313 16.621094 30.195313 15.382813 29.4375 14.625 L 17.375 2.5625 C 16.996094 2.183594 16.503906 2 16 2 Z M 16 4.03125 L 27.96875 16 L 16 27.96875 L 4.03125 16 L 12.3125 7.71875 L 14.0625 9.46875 C 14.015625 9.636719 14 9.816406 14 10 C 14 10.738281 14.402344 11.371094 15 11.71875 L 15 20.28125 C 14.402344 20.628906 14 21.261719 14 22 C 14 23.105469 14.894531 24 16 24 C 17.105469 24 18 23.105469 18 22 C 18 21.261719 17.597656 20.628906 17 20.28125 L 17 12.4375 L 20.0625 15.5 C 20.019531 15.660156 20 15.828125 20 16 C 20 17.105469 20.894531 18 22 18 C 23.105469 18 24 17.105469 24 16 C 24 14.894531 23.105469 14 22 14 C 21.828125 14 21.660156 14.019531 21.5 14.0625 L 17.9375 10.5 C 17.980469 10.339844 18 10.171875 18 10 C 18 8.894531 17.105469 8 16 8 C 15.816406 8 15.636719 8.015625 15.46875 8.0625 L 13.71875 6.3125 Z\"\r\n    ></path></svg\r\n>";

const items_nav$1 = {
	initation: "Inicio",
	about: "Acerca",
	contact: "Contacto"
};
const page_index$1 = {
	main_job: "Desarrollador Web",
	about: {
		title: "Sobre mí",
		description: "¡Hola! Bienvenido a mi página web. Soy un profesional con 3 años de experiencia sólida trabajando a diario con tecnologías como HTML, CSS, Javascript, Git, Nodejs, Express y MongoDb."
	},
	experience: {
		title: "Mí camino",
		items: [
			{
				title: "Aplay America SA",
				subtitle: "(feb 2022 - actualidad)",
				description: "Programador web. Mejoras y mantenimiento en proyectos orientados a portales de noticias con tecnologías como html,css, sass, js, nodejs, mongodb, handlebars"
			},
			{
				title: "Freelance",
				subtitle: "(feb 2021 - marz 2021)",
				description: "Desarrollo de un sistema para la administración de un gimnasio con tecnologías como C#, windows form, SQL"
			},
			{
				title: "UTN - Argentina",
				subtitle: "(2020 - 2021)",
				description: "Estudios en la Universidad Tecnológica Nacional como Técnico superior en programación"
			}
		]
	},
	proyects: {
		title: "Proyectos",
		subtitle: "Ver código en mi",
		item_wikicat: {
			title: "Wiki Cat",
			description: "Es una wiki-cat hecha en React con conexión a un backend creado hecho con express"
		},
		item_scrapper: {
			title: "Scrapper Tabla",
			description: "Scrapper tabla liga argentina a una web real, hecho con cheerio, express y handlebars"
		},
		item_draganddrop: {
			title: "Drag and Drop",
			description: "Proyecto para arrastar y cargar imagenes, esta hecho con React"
		}
	},
	contact_form: {
		title: "CONTÁCTAME",
		plh_name: "Nombre",
		plh_mail: "E-mail de contacto",
		plh_message: "Mensaje",
		btn_send: "ENVIAR"
	}
};
const esLang = {
	items_nav: items_nav$1,
	page_index: page_index$1
};

const items_nav = {
	initation: "Home",
	about: "About",
	contact: "Contact"
};
const page_index = {
	main_job: "Web Developer",
	about: {
		title: "About Me",
		description: "Hello reader! This is my personal website, where I will be updating about my life. Now, let me tell you about myself. I'm someone who always seeks to push my limits, communicative, cooperative, friendly, and committed. I always try to give my best in every situation, focusing on the solution rather than the problem. I live my life dedicated to inner growth."
	},
	experience: {
		title: "My Journey",
		items: [
			{
				title: "Aplay America SA",
				subtitle: "(Feb 2022 - Present)",
				description: "Web Developer. Enhancements and maintenance in projects focused on news portals with technologies like HTML, CSS, Sass, JavaScript, Node.js, MongoDB, Handlebars."
			},
			{
				title: "Freelance",
				subtitle: "(Feb 2021 - Mar 2021)",
				description: "Development of a system for managing a gym with technologies like C#, Windows Form, SQL."
			},
			{
				title: "UTN - Argentina",
				subtitle: "(2020 - 2021)",
				description: "Studies at the National Technological University as a Higher Technician in Programming."
			}
		]
	},
	proyects: {
		title: "Projects",
		subtitle: "View code on my",
		item_wikicat: {
			title: "Wiki Cat",
			description: "It's a Wiki-Cat made in React with a connection to a backend created using Express."
		},
		item_scrapper: {
			title: "Scrapper Tabla",
			description: "Scrapes Argentina league table to a real web, made with Cheerio, Express, and Handlebars."
		},
		item_draganddrop: {
			title: "Drag and Drop",
			description: "Project for dragging and dropping images, made with React."
		}
	},
	contact_form: {
		title: "CONTACT ME",
		plh_name: "Name",
		plh_mail: "Contact E-mail",
		plh_message: "Message",
		btn_send: "SEND"
	}
};
const enLang = {
	items_nav: items_nav,
	page_index: page_index
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "Mariano Romero - Desarrollador Web", "pageDescription": "Soy Mariano Romero, un apasionado desarrollador web compartiendo proyectos, tutoriales y experiencias. Explora mi p\xE1gina personal y descubre m\xE1s sobre mi trabajo y habilidades. \xA1Bienvenido!", "page": "index" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="main-name" id="tab1"> <div class="main-name-text"> <h1>Mariano Romero</h1> <span class="main-job" lang="es">', '</span> <span class="main-job" lang="en">', '</span> </div> </section> <section class="container about" id="tab2"> <div class="about-info"> <h2 lang="es">', '</h2> <h2 lang="en">', '</h2> <p lang="es">', '</p> <p lang="en">', "</p> </div> </section> ", ' <section class="container experience"> <div class="title experience-title" lang="es"> ', ' </div> <div class="title experience-title" lang="en"> ', " </div> ", " ", " </section> ", ' <section class="container proyects"> <div class="title proyects-title"> <h2 class="title" lang="es">', '</h2> <h2 class="title" lang="en">', '</h2> <span class="sub-title" lang="es">', ' <a href="https://github.com/Romero67" target="_blank">git-hub</a></span> <span class="sub-title" lang="en">', ' <a href="https://github.com/Romero67" target="_blank">git-hub</a></span> </div> <div class="cont-proyects"> ', " ", " ", " ", " ", " ", " </div> </section> ", ' <section class="container technologies"> <div class="tech-slider"> ', " ", " ", " ", " ", " ", " ", " </div> </section> ", ' <div class="container container-form"> <form id="contact-form" class="form-mail"> <input type="hidden" name="contact_number"> <div class="form-mail-title"> <span class="form-mail-title-text" lang="es">', '</span> <span class="form-mail-title-text" lang="en">', '</span> </div> <input type="text"', ' id="form_nombre" name="nombre" lang="es"> <input type="text"', ' id="form_nombre" name="nombre" lang="en"> <input type="text"', ' id="form_mail" name="mail" lang="es"> <input type="text"', ' id="form_mail" name="mail" lang="en"> <div class="form-mail-contador"> <textarea id="form_mensaje" cols="30" rows="10" name="mensaje"', ' lang="es"></textarea> <textarea id="form_mensaje" cols="30" rows="10" name="mensaje"', ' lang="en"></textarea> <span class="form-contador-text"></span> </div> <div class="form-mail-send"> <button type="submit" lang="es">', '</button> <button type="submit" lang="en">', `</button> <span class="form-msj-error"></span> <span class="form-msj-success"></span> </div> </form> </div>  <script>
		let userLanguage = navigator.language || navigator.userLanguage;
		
		let langToDelete = ""

		if (userLanguage.startsWith("es")) {
			langToDelete = 'en'
		} else if (userLanguage.startsWith("en")) {
			langToDelete = 'es'
		} else {
			langToDelete = 'en'
		}

		
	<\/script> `])), maybeRenderHead(), esLang.page_index.main_job, enLang.page_index.main_job, esLang.page_index.about.title, enLang.page_index.about.title, esLang.page_index.about.description, enLang.page_index.about.description, renderComponent($$result2, "Separate", $$Separate, {}), esLang.page_index.experience.title, enLang.page_index.experience.title, esLang.page_index.experience.items.map((el) => renderTemplate`${renderComponent($$result2, "ExperienceItem", $$ExperienceItem, { "title": el.title, "subtitle": el.subtitle, "description": el.description, "lang": "es" })}`), enLang.page_index.experience.items.map((el) => renderTemplate`${renderComponent($$result2, "ExperienceItem", $$ExperienceItem, { "title": el.title, "subtitle": el.subtitle, "description": el.description, "lang": "en" })}`), renderComponent($$result2, "Separate", $$Separate, {}), esLang.page_index.proyects.title, enLang.page_index.proyects.title, esLang.page_index.proyects.subtitle, enLang.page_index.proyects.subtitle, renderComponent($$result2, "ProyectItem", $$ProyectItem, { "url": "https://main--funny-faloodeh-7a01df.netlify.app/", "img": localWikiImg, "imgAlt": "Wiki Cat", "title": esLang.page_index.proyects.item_wikicat.title, "description": esLang.page_index.proyects.item_wikicat.description, "lang": "es" }), renderComponent($$result2, "ProyectItem", $$ProyectItem, { "url": "https://main--funny-faloodeh-7a01df.netlify.app/", "img": localWikiImg, "imgAlt": "Wiki Cat", "title": enLang.page_index.proyects.item_wikicat.title, "description": enLang.page_index.proyects.item_wikicat.description, "lang": "en" }), renderComponent($$result2, "ProyectItem", $$ProyectItem, { "url": "https://app-clasificacion-equipos-argentinos-2.vercel.app/", "img": localFutbolImg, "imgAlt": "App scrapper f\xFAtbol", "title": esLang.page_index.proyects.item_scrapper.title, "description": esLang.page_index.proyects.item_scrapper.description, "lang": "es" }), renderComponent($$result2, "ProyectItem", $$ProyectItem, { "url": "https://app-clasificacion-equipos-argentinos-2.vercel.app/", "img": localFutbolImg, "imgAlt": "App scrapper f\xFAtbol", "title": enLang.page_index.proyects.item_scrapper.title, "description": enLang.page_index.proyects.item_scrapper.description, "lang": "en" }), renderComponent($$result2, "ProyectItem", $$ProyectItem, { "url": "https://bespoke-cat-a77f15.netlify.app/", "img": localDragImg, "imgAlt": "Drag and Drop", "title": esLang.page_index.proyects.item_draganddrop.title, "description": esLang.page_index.proyects.item_draganddrop.description, "lang": "es" }), renderComponent($$result2, "ProyectItem", $$ProyectItem, { "url": "https://bespoke-cat-a77f15.netlify.app/", "img": localDragImg, "imgAlt": "Drag and Drop", "title": enLang.page_index.proyects.item_draganddrop.title, "description": enLang.page_index.proyects.item_draganddrop.description, "lang": "en" }), renderComponent($$result2, "Separate", $$Separate, {}), renderComponent($$result2, "TechSliderItem", $$TechSliderItem, { "img": localHtmlSvg, "imgAlt": "Icon HTML", "title": "HTML" }), renderComponent($$result2, "TechSliderItem", $$TechSliderItem, { "img": localCssSvg, "imgAlt": "Icon CSS", "title": "CSS" }), renderComponent($$result2, "TechSliderItem", $$TechSliderItem, { "img": localJsSvg, "imgAlt": "Icon Javascript", "title": "Javascript" }), renderComponent($$result2, "TechSliderItem", $$TechSliderItem, { "img": localSassSvg, "imgAlt": "Icon Sass", "title": "Sass" }), renderComponent($$result2, "TechSliderItem", $$TechSliderItem, { "img": localMongodbSvg, "imgAlt": "Icon MongoDB", "title": "MongoDB" }), renderComponent($$result2, "TechSliderItem", $$TechSliderItem, { "img": localNodejsSvg, "imgAlt": "Icon Nodejs", "title": "Nodejs" }), renderComponent($$result2, "TechSliderItem", $$TechSliderItem, { "img": localGitSvg, "imgAlt": "Icon GIT", "title": "GIT" }), renderComponent($$result2, "Separate", $$Separate, {}), esLang.page_index.contact_form.title, enLang.page_index.contact_form.title, addAttribute(esLang.page_index.contact_form.plh_name, "placeholder"), addAttribute(enLang.page_index.contact_form.plh_name, "placeholder"), addAttribute(esLang.page_index.contact_form.plh_mail, "placeholder"), addAttribute(enLang.page_index.contact_form.plh_mail, "placeholder"), addAttribute(esLang.page_index.contact_form.plh_message, "placeholder"), addAttribute(enLang.page_index.contact_form.plh_message, "placeholder"), esLang.page_index.contact_form.btn_send, enLang.page_index.contact_form.btn_send) })} <!-- TENGO QUE APLICAR LOS BOTONES EN DESKTOP, MODO CLARO/OSCURO, ES/EN
VERIFICAR QUE TODO ANDE BIEN -->`;
}, "I:/proyects/my-page-astro/src/pages/index.astro", void 0);

const $$file = "I:/proyects/my-page-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
