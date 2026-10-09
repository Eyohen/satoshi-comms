/* Satoshi Comms site: shared behaviour. */
(function(){
"use strict";

/* Sample brands, from the Before/After Mockup Workflow spreadsheet (Before Style, After Direction, Content Blocks).
   The mini renders are stand-ins until real screenshots (SHOT-Bxx / SHOT-Axx) replace them. */
var BRANDS = {
  kneaded:{name:"The Kneaded Crumb",cat:"food",catLabel:"Food",place:"Lagos, Nigeria",lang:"EN",n:"01",
    before:{bg:"#FFFFFF",text:"#333333",brand:"#8B4513",band:"#F5EBDD",hf:"Georgia,serif",bf:"Arial,sans-serif",h:"Welcome to Kneaded Crumb",sub:"Fresh baked goods daily",btn:"Order Now",links:["Home","Menu","About","Contact"]},
    after:{bg:"#FFF9F1",text:"#2B1D14",head:"#A34A17",main:"#A34A17",onMain:"#FFFFFF",accent:"#F2C14E",band:"#F6E7D3",hf:"'Fraunces',Georgia,serif",bf:"'Nunito Sans',sans-serif",h:"Good bread brings Lagos together",sub:"We bake cookies and croissants in small batches every morning. Then we show you how to make them at home.",b1:"See the Menu",b2:"Book a Class",links:["Menu","Classes","Visit"]},
    changes:["The headline names the city and what they bake instead of saying Welcome","The menu becomes photo cards with real prices","Reviews carry names and specific details"]},
  etoile:{name:"Maison Etoile",cat:"fashion",catLabel:"Fashion",place:"Paris, France",lang:"FR",n:"02",
    before:{bg:"#FFFFFF",text:"#212121",brand:"#AD1457",band:"#FCE4EC",hf:"'Times New Roman',serif",bf:"Verdana,sans-serif",h:"Bienvenue chez Maison Etoile",sub:"Vêtements de qualité pour femmes",btn:"Voir la Boutique",links:["Accueil","Boutique","Contact"],boxed:true},
    after:{bg:"#FFFFFF",text:"#1A1A1A",head:"#1A1A1A",main:"#1A1A1A",onMain:"#FFFFFF",accent:"#E9C9C3",band:"#F7F1EE",hf:"'Bodoni Moda',serif",bf:"'Jost',sans-serif",h:"Des pièces qui font tourner les têtes",sub:"Une mode féminine en petites séries, dessinée et cousue à Paris.",b1:"Découvrir la collection",b2:"Réserver un essayage",links:["Collection","Atelier","Essayage"]},
    changes:["Pink on every heading gives way to black type and one soft rose accent","Framed boxes become an open editorial layout","The price table becomes a shoppable collection"]},
  shoes:{name:"Shoes With Me",cat:"fashion",catLabel:"Fashion",place:"Houston, USA",lang:"EN",n:"03",
    before:{bg:"#FFFFFF",text:"#333333",brand:"#1F3A5F",band:"#F2F2F2",hf:"'Arial Black',Arial,sans-serif",bf:"Arial,sans-serif",h:"Welcome to Shoes With Me",sub:"Shoe and bag repair",btn:"Contact Us",btnBg:"#D4A017",btnText:"#1A1A1A",bar:"#1F3A5F",links:["Home","Services","Contact"]},
    after:{bg:"#FBF8F3",text:"#2A2420",head:"#6B3E26",main:"#6B3E26",onMain:"#FFFFFF",accent:"#C9A227",band:"#EFE7DB",hf:"'DM Serif Display',serif",bf:"'Lato',sans-serif",h:"Your shoes deserve another chapter",sub:"Careful repairs for the shoes, bags and leather goods you love.",b1:"Book a Repair",b2:"See Our Services",links:["Repairs","Pricing","Visit"]},
    changes:["A promise led headline replaces a plain welcome","Each repair service gets its own photo and short description","A clear Book a Repair button on every screen"]},
  forno:{name:"O' Forno di Napoli",cat:"food",catLabel:"Food",place:"Naples, Italy",lang:"IT",n:"05",
    before:{bg:"#FFFFFF",text:"#222222",brand:"#B22222",band:"#FFF5E1",hf:"'Palatino Linotype',Palatino,serif",bf:"Arial,sans-serif",h:"Benvenuti da O' Forno di Napoli",sub:"Pizzeria a Napoli",btn:"Contattaci",stripe:true,links:["Home","Menu","Contatti"]},
    after:{bg:"#FFF8EE",text:"#231A14",head:"#C8102E",main:"#C8102E",onMain:"#FFFFFF",accent:"#2E7D32",band:"#FBE9D5",hf:"'Abril Fatface',serif",bf:"'Karla',sans-serif",h:"Na bella pizza, come piace a noi",sub:"Pizza napoletana vera, con ingredienti semplici e il sapore di casa.",b1:"Scopri il menu",links:["Menu","Forno","Prenota"]},
    changes:["The Italian flag stripe is replaced by colours taken from the food itself","Dishes are grouped with photos instead of one long list","Booking a table is one tap away"]},
  evasion:{name:"Maison Évasion Voyages",cat:"travel",catLabel:"Travel",place:"France",lang:"FR",n:"06",
    before:{bg:"#FFFFFF",text:"#333333",brand:"#0369A1",band:"#E8F4FA",hf:"Montserrat,Arial,sans-serif",bf:"'Open Sans',Arial,sans-serif",h:"Bienvenue chez Maison Évasion Voyages",sub:"Agence de voyages",btn:"Nous contacter",darkPhoto:true,links:["Accueil","Voyages","Contact"]},
    after:{bg:"#F8FAFB",text:"#1D2B36",head:"#1F5F7A",main:"#1F5F7A",onMain:"#FFFFFF",accent:"#E8B04B",band:"#EAF1F4",hf:"'Marcellus',serif",bf:"'Nunito',sans-serif",h:"Votre prochain voyage commence en douceur",sub:"Des voyages pensés pour vous, de la première idée jusqu'au retour à la maison.",b1:"Découvrir nos destinations",links:["Destinations","Carnet","Contact"]},
    changes:["A generic beach banner becomes real people enjoying real places","Four icon boxes become destination postcards with prices","Reviews name the trip and the traveller"]},
  camille:{name:"Camille Moreau",cat:"photo",catLabel:"Photography",place:"Lyon, France",lang:"FR",n:"07",
    before:{bg:"#FFFFFF",text:"#333333",brand:"#555555",band:"#F5F5F5",hf:"Raleway,Arial,sans-serif",bf:"'Open Sans',Arial,sans-serif",h:"Bienvenue sur le site de Camille Moreau",sub:"Photographe à Lyon",btn:"Me contacter",caps:true,links:["ACCUEIL","GALERIE","CONTACT"]},
    after:{bg:"#FFFFFF",text:"#2B2B2B",head:"#7A5C45",main:"#7A5C45",onMain:"#FFFFFF",accent:"#E8DCCB",band:"#F6F1EA",hf:"'Cormorant Garamond',serif",bf:"'Mulish',sans-serif",h:"Des photos qui vous ressemblent vraiment",sub:"Photographe de mariage et de famille à Lyon, je vous suis partout où votre histoire m'emmène.",b1:"Découvrir mon univers",links:["Mariages","Familles","Contact"]},
    changes:["A cramped grid of small squares becomes large photos that tell a story","Grey on grey becomes warm, luminous tones","The process is explained in four friendly steps"]},
  lotus:{name:"LOTUS WOK",cat:"food",catLabel:"Food",place:"Cologne, Germany",lang:"DE",n:"08",
    before:{bg:"#FFFDF5",text:"#222222",brand:"#C62828",band:"#FFF3CD",hf:"Tahoma,sans-serif",bf:"Tahoma,sans-serif",h:"Willkommen bei LOTUS WOK",sub:"Chinesisches Restaurant in Köln",btn:"Kontakt",bar:"#C62828",barLine:"#F9A825",phone:"Tel. 0221 555 0123",links:["Start","Speisekarte","Kontakt"]},
    after:{bg:"#FFFFFF",text:"#1C1C1C",head:"#B91C1C",main:"#B91C1C",onMain:"#FFFFFF",accent:"#F4B400",band:"#FFF4E0",hf:"'Bricolage Grotesque',sans-serif",bf:"'DM Sans',sans-serif",h:"Frische chinesische Küche, jeden Tag",sub:"Knusprig, würzig und heiß aus dem Wok. Zum Mitnehmen oder bei uns vor Ort.",b1:"Jetzt bestellen",links:["Speisekarte","Abholung","Kontakt"]},
    changes:["The phone number repeated everywhere becomes one clear Order now button","Dish names get photos and short descriptions","Ordering online replaces call to order"]}
};
var ORDER=["kneaded","etoile","shoes","forno","evasion","camille","lotus"];

/* Real screenshots, where we have them, replace the coded stand-in renders below.
   Each brand can have more than one real page; visitors switch pages with the Page control on the card. */
var REAL_SHOTS={
  shoes:{pages:[{label:"Home",before:"shoes-before.jpg",after:"shoes-after.jpg"}]},
  camille:{pages:[
    {label:"Accueil",before:"ba/camille-before.jpg",after:"ba/camille-after.jpg"},
    {label:"Mariages",before:"ba/camille-p2-before.jpg",after:"ba/camille-p2-after.jpg"}
  ]},
  evasion:{pages:[
    {label:"Accueil",before:"ba/evasion-before.jpg",after:"ba/evasion-after.jpg"},
    {label:"Destinations",before:"ba/evasion-p2-before.jpg",after:"ba/evasion-p2-after.jpg"}
  ]},
  lotus:{pages:[
    {label:"Startseite",before:"ba/lotus-before.jpg",after:"ba/lotus-after.jpg"},
    {label:"Speisekarte",before:"ba/lotus-p2-before.jpg",after:"ba/lotus-p2-after.jpg"}
  ]},
  forno:{pages:[
    {label:"Home",before:"ba/forno-before.jpg",after:"ba/forno-after.jpg"},
    {label:"Menu",before:"ba/forno-p2-before.jpg",after:"ba/forno-p2-after.jpg"}
  ]},
  kneaded:{pages:[{label:"Home",after:"ba/kneaded-after.jpg"}]},
  etoile:{pages:[{label:"Accueil",after:"ba/etoile-after.jpg"}]}
};
var MOBILE_SHOTS={
  kneaded:"ba/kneaded-mobile.jpg",
  etoile:"ba/etoile-mobile.jpg",
  forno:"ba/forno-mobile.jpg"
};
function mobileVisual(key){
  var src=MOBILE_SHOTS[key];
  if(src) return "<img src='"+src+"' alt='' loading=\"lazy\">";
  return "<figure class=\"slot slot--shot\" data-slot=\"SHOT-01\" style=\"margin:0;height:100%\"><span class=\"slot__code\"><span>SHOT-01</span></span><figcaption class=\"slot__desc\">Mobile screenshot coming soon</figcaption></figure>";
}
function pageData(key,idx){
  var r=REAL_SHOTS[key];
  if(r&&r.pages&&r.pages[idx||0]) return r.pages[idx||0];
  return null;
}
function beforeVisual(key,idx){
  var p=pageData(key,idx);
  if(p&&p.before) return "<img src='"+p.before+"' alt='"+esc(BRANDS[key].name)+", Before "+esc(p.label||"homepage")+"' loading='lazy'>";
  return miniBefore(null,key);
}
function afterVisual(key,idx){
  var p=pageData(key,idx);
  if(p&&p.after) return "<img src='"+p.after+"' alt='"+esc(BRANDS[key].name)+", After "+esc(p.label||"homepage")+"' loading='lazy'>";
  return miniAfter(key);
}

function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];});}

function miniBefore(b,key){
  var s=BRANDS[key].before;
  var navBg=s.bar||s.bg, navText=s.bar?"#FFFFFF":s.brand;
  var links=s.links.map(function(l){return "<span>"+esc(l)+"</span>";}).join("");
  var tel=s.phone?"<span style='font-weight:700'>"+esc(s.phone)+"</span>":"";
  var stripe=s.stripe?"<div style='height:.6cqw;background:linear-gradient(90deg,#228B22 33%,#FFFFFF 33% 66%,#B22222 66%)'></div>":"";
  var line=s.barLine?"<div style='height:.5cqw;background:"+s.barLine+"'></div>":"";
  var photo=s.darkPhoto
    ?"<div class='mini__photo' style='background:linear-gradient(135deg,#4a4a4a,#7a7a7a)'>stock photo</div>"
    :"<div class='mini__photo'>stock photo</div>";
  var box=s.boxed?"border:.12cqw solid #D0D0D0;margin:1.2cqw 3cqw;":"";
  var up=s.caps?"letter-spacing:.3cqw;":"";
  return "<div class='mini mini--before' style='background:"+s.bg+";color:"+s.text+";font-family:"+s.bf+"'>"+
    "<div class='mini__nav' style='background:"+navBg+";color:"+navText+"'><span class='mini__brand' style='font-family:"+s.hf+"'>"+esc(BRANDS[key].name)+"</span><span class='mini__links' style='"+up+"'>"+links+tel+"</span></div>"+stripe+line+
    "<div class='mini__hero' style='"+box+"'><div style='width:100%'>"+photo+
      "<p class='mini__h' style='font-family:"+s.hf+";color:"+s.brand+"'>"+esc(s.h)+"</p>"+
      "<p class='mini__sub'>"+esc(s.sub)+"</p>"+
      "<div class='mini__btns' style='justify-content:center'><span class='mini__btn' style='background:"+(s.btnBg||s.brand)+";color:"+(s.btnText||"#fff")+"'>"+esc(s.btn)+"</span></div></div></div>"+
    "<div class='mini__cards' style='background:"+s.band+"'><div class='mini__card' style='background:#fff'></div><div class='mini__card' style='background:#fff'></div><div class='mini__card' style='background:#fff'></div></div>"+
  "</div>";
}
function miniAfter(key){
  var s=BRANDS[key].after;
  var links=s.links.map(function(l){return "<span>"+esc(l)+"</span>";}).join("");
  var b2=s.b2?"<span class='mini__btn' style='border-color:"+s.main+";color:"+s.main+"'>"+esc(s.b2)+"</span>":"";
  var img="linear-gradient(150deg,"+s.band+" 0%,"+s.accent+" 120%)";
  return "<div class='mini mini--after' style='background:"+s.bg+";color:"+s.text+";font-family:"+s.bf+"'>"+
    "<div class='mini__nav'><span class='mini__brand' style='font-family:"+s.hf+";color:"+s.head+"'>"+esc(BRANDS[key].name)+"</span><span class='mini__links'>"+links+"</span><span class='mini__cta' style='background:"+s.main+";color:"+s.onMain+"'>"+esc(s.b1)+"</span></div>"+
    "<div class='mini__hero'><div><p class='mini__h' style='font-family:"+s.hf+";color:"+s.head+"'>"+esc(s.h)+"</p><p class='mini__sub'>"+esc(s.sub)+"</p><div class='mini__btns'><span class='mini__btn' style='background:"+s.main+";color:"+s.onMain+"'>"+esc(s.b1)+"</span>"+b2+"</div></div>"+
      "<div class='mini__img' data-note='hero photo' style='background:"+img+";color:"+s.text+"'></div></div>"+
    "<div class='mini__cards'><div class='mini__card' style='background:"+s.band+"'></div><div class='mini__card' style='background:"+s.band+"'></div><div class='mini__card' style='background:"+s.band+"'></div></div>"+
  "</div>";
}

/* Static mini (hero browser) */
document.querySelectorAll("[data-mini]").forEach(function(host){
  var key=host.getAttribute("data-mini");
  host.innerHTML=host.getAttribute("data-state")==="before"?beforeVisual(key):afterVisual(key);
});
document.querySelectorAll("[data-mini-phone]").forEach(function(host){
  host.innerHTML=mobileVisual(host.getAttribute("data-mini-phone"));
});

/* Sample cards */
var PINS=[[92,34],[80,88],[93,62]];
function card(key,feature){
  var b=BRANDS[key];
  var pins=PINS.map(function(p,i){return "<span class='ba__pin' data-pin='"+(i+1)+"' style='left:"+p[0]+"%;top:"+p[1]+"%'>"+(i+1)+"</span>";}).join("");
  var changes=b.changes.map(function(c,i){return "<li data-pin='"+(i+1)+"'><span>"+(i+1)+"</span>"+esc(c)+"</li>";}).join("");
  var id="ba-"+key+(feature?"-f":"");
  var p0=pageData(key,0);
  var pages=(REAL_SHOTS[key]&&REAL_SHOTS[key].pages)||[];
  var pager=pages.length>1?("<div class='ba__pages' role='tablist' aria-label='Pages for "+esc(b.name)+"'>"+
    pages.map(function(pg,i){return "<button type='button' data-page='"+i+"' aria-pressed='"+(i===0?"true":"false")+"'>"+esc(pg.label)+"</button>";}).join("")+
    "</div>"):"";
  return "<article class='ba-card"+(feature?" ba-card--feature":"")+"' data-cat='"+b.cat+"' data-lang='"+b.lang+"' data-key='"+key+"' data-page='0'>"+
    "<div class='ba' style='--pos:50%'>"+
      "<div class='ba__base mini-host'"+((p0&&p0.before)?"":" data-shot='SHOT-B"+b.n+" (Before screenshot)'")+">"+beforeVisual(key,0)+"</div>"+
      "<div class='ba__layer ba__layer--after'><div class='mini-host' style='height:100%'"+((p0&&p0.after)?"":" data-shot='SHOT-A"+b.n+" (After screenshot)'")+">"+afterVisual(key,0)+"</div>"+pins+"</div>"+
      "<span class='ba__tag ba__tag--before'>Before</span><span class='ba__tag ba__tag--after'>After</span>"+
      pager+
      "<input class='ba__range' id='"+id+"' type='range' min='0' max='100' value='50' aria-label='Drag to compare Before and After for "+esc(b.name)+"'>"+
      "<span class='ba__handle' aria-hidden='true'></span>"+
    "</div>"+
    "<div class='ba-card__body'>"+
      "<div class='ba-card__meta'><span class='chip-sample'>Sample</span><b>"+b.n+" / "+b.catLabel+"</b><span>"+esc(b.place)+" · "+b.lang+"</span></div>"+
      "<h3>"+esc(b.name)+"</h3>"+
      "<ol class='changes' aria-label='What changed'>"+changes+"</ol>"+
      "<div class='snap'><button type='button' data-snap='100'>Show Before</button><button type='button' data-snap='0'>Show After</button></div>"+
    "</div></article>";
}
document.querySelectorAll("[data-ba-list]").forEach(function(list){
  var keys=list.getAttribute("data-ba-list").split(",");
  var featured=list.getAttribute("data-feature");
  list.innerHTML=keys.map(function(k){return card(k.trim(),k.trim()===featured);}).join("");
});

/* Slider behaviour */
document.querySelectorAll(".ba-card").forEach(function(c){
  var ba=c.querySelector(".ba"), r=c.querySelector(".ba__range");
  function set(v){ba.style.setProperty("--pos",v+"%");r.value=v;}
  r.addEventListener("input",function(){set(r.value);});
  c.querySelectorAll("[data-snap]").forEach(function(btn){btn.addEventListener("click",function(){set(btn.getAttribute("data-snap"));});});
  c.querySelectorAll(".changes li").forEach(function(li){
    var pin=c.querySelector(".ba__pin[data-pin='"+li.getAttribute("data-pin")+"']");
    li.addEventListener("mouseenter",function(){pin.classList.add("is-on");});
    li.addEventListener("mouseleave",function(){pin.classList.remove("is-on");});
  });
  var pager=c.querySelector(".ba__pages");
  if(pager){
    var key=c.getAttribute("data-key");
    var beforeHost=c.querySelector(".ba__base"), afterHost=c.querySelector(".ba__layer--after .mini-host");
    pager.addEventListener("click",function(e){
      var btn=e.target.closest("button"); if(!btn) return;
      var idx=+btn.getAttribute("data-page");
      c.setAttribute("data-page",idx);
      pager.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",x===btn?"true":"false");});
      var p=pageData(key,idx);
      beforeHost.innerHTML=beforeVisual(key,idx);
      afterHost.innerHTML=afterVisual(key,idx);
      if(p&&p.before) beforeHost.removeAttribute("data-shot"); else beforeHost.setAttribute("data-shot","SHOT-B"+BRANDS[key].n+" (Before screenshot)");
      if(p&&p.after) afterHost.removeAttribute("data-shot"); else afterHost.setAttribute("data-shot","SHOT-A"+BRANDS[key].n+" (After screenshot)");
    });
  }
});

/* Filters: industry and language combine */
document.querySelectorAll("[data-filter-for]").forEach(function(bar){
  var list=document.getElementById(bar.getAttribute("data-filter-for"));
  bar.addEventListener("click",function(e){
    var b=e.target.closest("button"); if(!b) return;
    bar.querySelectorAll("button").forEach(function(x){x.setAttribute("aria-pressed",x===b?"true":"false");});
    var cat="all",lang="all";
    document.querySelectorAll("[data-filter-for='"+list.id+"']").forEach(function(g){
      var on=g.querySelector("[aria-pressed='true']"); if(!on) return;
      if(g.getAttribute("data-filter-kind")==="lang") lang=on.getAttribute("data-filter"); else cat=on.getAttribute("data-filter");
    });
    list.querySelectorAll(".ba-card").forEach(function(c){
      c.hidden=!((cat==="all"||c.getAttribute("data-cat")===cat)&&(lang==="all"||c.getAttribute("data-lang")===lang));
    });
  });
});

/* Sample reel under the hero */
document.querySelectorAll("[data-reel]").forEach(function(track){
  var keys=track.getAttribute("data-reel").split(",");
  function items(hidden){return keys.map(function(k){var b=BRANDS[k];
    return "<a class='reel__item' href='work.html#samples'"+(hidden?" aria-hidden='true' tabindex='-1'":"")+"><div class='browser'><div class='mini-host'>"+afterVisual(k)+"</div></div>"+
      "<div class='reel__cap'><span class='reel__lang'>"+b.lang+"</span><b>"+esc(b.name)+"</b><span>"+esc(b.place)+"</span></div></a>";}).join("");}
  track.innerHTML="<div class='reel__row'>"+items(false)+items(true)+"</div>";
});

/* Hero language switcher */
var sw=document.querySelector(".langsw");
if(sw){
  var host=document.getElementById("hero-mini"), phone=document.getElementById("hero-phone"), url=document.getElementById("hero-url"), btns=[].slice.call(sw.querySelectorAll("button")), idx=0, timer=null;
  function show(i){idx=i;var b=btns[i];btns.forEach(function(x){x.setAttribute("aria-selected",x===b?"true":"false");});
    host.classList.add("is-swapping");
    if(phone) phone.classList.add("is-swapping");
    setTimeout(function(){var key=b.getAttribute("data-lang-show");host.innerHTML=afterVisual(key);if(phone){phone.innerHTML=mobileVisual(key);phone.classList.remove("is-swapping");}url.textContent=b.getAttribute("data-url");host.classList.remove("is-swapping");},180);}
  btns.forEach(function(b,i){b.addEventListener("click",function(){show(i);if(timer){clearInterval(timer);timer=null;}});});
  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){timer=setInterval(function(){show((idx+1)%btns.length);},3800);}
}

/* Tabs (Pamper And Fun views) */
document.querySelectorAll("[role='tablist']").forEach(function(tl){
  var tabs=tl.querySelectorAll("[role='tab']");
  tabs.forEach(function(t){t.addEventListener("click",function(){
    tabs.forEach(function(x){var on=x===t;x.setAttribute("aria-selected",on);document.getElementById(x.getAttribute("aria-controls")).hidden=!on;});
  });});
});

/* Header */
var hdr=document.querySelector(".site-header");
function onScroll(){if(hdr) hdr.classList.toggle("is-scrolled",window.scrollY>8);}
window.addEventListener("scroll",onScroll,{passive:true});onScroll();
var mb=document.querySelector(".hdr__menu"), mn=document.getElementById("mnav");
if(mb&&mn){mb.addEventListener("click",function(){var open=mn.hidden;mn.hidden=!open;mb.setAttribute("aria-expanded",open);mb.textContent=open?"Close":"Menu";});}

/* Contact form: submits to Formspree (see action= on the form) without leaving the page. */
var form=document.getElementById("project-form");
if(form){form.addEventListener("submit",function(e){
  e.preventDefault();
  var done=document.getElementById("form-done"), fail=document.getElementById("form-error");
  var btn=form.querySelector("button[type=submit]"); var btnTxt=btn?btn.textContent:"";
  if(btn){btn.disabled=true;btn.textContent="Sending…";}
  if(fail)fail.hidden=true;
  fetch(form.action,{method:"POST",body:new FormData(form),headers:{"Accept":"application/json"}})
    .then(function(r){
      if(r.ok){
        form.hidden=true;
        done.hidden=false;
        done.scrollIntoView({behavior:"smooth",block:"nearest"});
      } else { throw new Error("submit failed"); }
    })
    .catch(function(){
      if(fail){fail.hidden=false;fail.scrollIntoView({behavior:"smooth",block:"nearest"});}
      if(btn){btn.disabled=false;btn.textContent=btnTxt;}
    });
});}
})();
