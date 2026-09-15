/* CROWNSTONE REALTY — website-only frontend.
   Firebase Web config below is intentionally public-client config.
   NEVER place Firebase Admin SDK/service-account credentials here. */
const FIREBASE_CONFIG = {
  apiKey: "PASTE_FIREBASE_WEB_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT.firebasestorage.app",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

const RECAPTCHA_ENTERPRISE_SITE_KEY = "PASTE_RECAPTCHA_ENTERPRISE_SITE_KEY";
const APP_CHECK_PRODUCTION_HOSTS = new Set(["crownstone-realty.vercel.app"]);

const properties = [
 {id:"cs-001",title:"Palm Jumeirah Residence",location:"Dubai",type:"Villa",transaction:"Buy",price:4850000,bedrooms:5,bathrooms:6,area:"6,450 sq ft",year:2025,featured:true,image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",description:"Demonstration listing for a contemporary waterfront residence with generous entertaining spaces and private outdoor areas.",amenities:["Private pool","Sea view","Smart home","Gated parking","Guest suite","Outdoor kitchen"]},
 {id:"cs-002",title:"Mayfair House",location:"London",type:"Townhouse",transaction:"Buy",price:7350000,bedrooms:5,bathrooms:4,area:"4,180 sq ft",year:2024,featured:true,image:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",description:"Demonstration listing representing an elegant central London townhouse with a quiet, residential character.",amenities:["Private garden","Study","Fireplace","Wine room","Concierge","Secure entry"]},
 {id:"cs-003",title:"Hudson Park Penthouse",location:"New York",type:"Penthouse",transaction:"Rent",price:28500,bedrooms:3,bathrooms:3,area:"2,760 sq ft",year:2026,featured:true,image:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80",description:"Demonstration rental listing with panoramic city outlooks, refined interiors and a highly connected address.",amenities:["City views","Doorman","Fitness suite","Roof terrace","Parking","Resident lounge"]},
 {id:"cs-004",title:"Biscayne Modern",location:"Miami",type:"Villa",transaction:"Buy",price:3290000,bedrooms:4,bathrooms:4,area:"3,920 sq ft",year:2026,featured:false,image:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=78",description:"Demonstration Miami residence balancing indoor-outdoor living, clean architectural lines and entertaining space.",amenities:["Pool","Canal frontage","Summer kitchen","Office","Garage","Covered terrace"]},
 {id:"cs-005",title:"Yorkville Residence",location:"Toronto",type:"Apartment",transaction:"Buy",price:1890000,bedrooms:2,bathrooms:2,area:"1,540 sq ft",year:2025,featured:false,image:"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=80",description:"Demonstration urban residence in a sophisticated setting, with considered finishes and flexible living space.",amenities:["Doorman","Fitness room","Private terrace","Parking","Storage","City outlook"]},
 {id:"cs-006",title:"Harbour Point Estate",location:"Sydney",type:"Estate",transaction:"Buy",price:6900000,bedrooms:5,bathrooms:5,area:"5,120 sq ft",year:2026,featured:true,image:"https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",description:"Demonstration harbour-side estate concept with expansive glazing, landscaped grounds and multiple entertaining zones.",amenities:["Harbour view","Pool","Landscaped grounds","Media room","Gym","Double garage"]},
 {id:"cs-007",title:"Downtown Dubai Sky Home",location:"Dubai",type:"Apartment",transaction:"Rent",price:12500,bedrooms:2,bathrooms:2,area:"1,380 sq ft",year:2025,featured:false,image:"https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80",description:"Demonstration luxury rental apartment with high-floor views and hotel-inspired resident amenities.",amenities:["Skyline view","Pool","Valet","Gym","Residents lounge","Concierge"]},
 {id:"cs-008",title:"Chelsea Garden Flat",location:"London",type:"Apartment",transaction:"Rent",price:9800,bedrooms:3,bathrooms:2,area:"1,620 sq ft",year:2026,featured:false,image:"https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",description:"Demonstration London rental with generous proportions, refined finishes and a private garden setting.",amenities:["Garden","Period details","Study","Bike storage","Security entry","Reception room"]}
];

const locations = [
 {name:"Dubai",count:2,image:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",desc:"Contemporary residences and waterfront living."},
 {name:"London",count:2,image:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",desc:"Classic addresses and modern city residences."},
 {name:"New York",count:1,image:"https://images.unsplash.com/photo-1522083165195-3424ed129620?auto=format&fit=crop&w=1200&q=80",desc:"Distinctive homes across a global capital."},
 {name:"Miami",count:1,image:"https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=1200&q=80",desc:"Waterfront architecture and indoor-outdoor living."},
 {name:"Toronto",count:1,image:"https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=1200&q=80",desc:"Polished urban living in an evolving market."},
 {name:"Sydney",count:1,image:"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d6?auto=format&fit=crop&w=1200&q=80",desc:"Harbour outlooks and exceptional coastal homes."}
];

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const money = n => n >= 1000000 ? `$${(n/1000000).toFixed(n%1000000 ? 2 : 0)}M` : `$${n.toLocaleString("en-US")}`;
const getSaved = () => JSON.parse(localStorage.getItem("crownstone_saved") || "[]");
const setSaved = a => localStorage.setItem("crownstone_saved", JSON.stringify(a));
const getStore = k => JSON.parse(localStorage.getItem(k) || "[]");
const setStore = (k,v) => localStorage.setItem(k, JSON.stringify(v));

let filtered = [...properties];
let currentUser = null;
let auth = null;

function escapeHTML(v){return String(v ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));}
function validEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)}
function validMobile(v){return /^[+()\d\s.-]{7,24}$/.test(v)}
function formDataObject(form){return Object.fromEntries(new FormData(form).entries())}
function showStatus(el,msg,type="error"){el.textContent=msg;el.className=`form-status ${type}`}

function renderProperties(){
  const grid=$("#propertyGrid"); grid.innerHTML="";
  $("#resultCount").textContent=`${filtered.length} ${filtered.length===1?"property":"properties"}`;
  $("#noResults").hidden=filtered.length>0;
  filtered.forEach(p=>{
    const saved=getSaved().includes(p.id);
    const card=document.createElement("article");card.className="property-card";
    card.innerHTML=`<div class="property-image" style="background-image:url('${p.image}')"><span class="property-tag">${p.transaction} · ${p.type}</span><button class="save-btn ${saved?"saved":""}" data-save="${p.id}" aria-label="${saved?"Unsave":"Save"} property">${saved?"♥":"♡"}</button></div>
      <div class="property-body"><h3 class="property-title">${escapeHTML(p.title)}</h3><div class="property-location">${escapeHTML(p.location)}</div>
      <div class="property-meta"><span><b>${p.bedrooms}</b> Beds</span><span><b>${p.bathrooms}</b> Baths</span><span><b>${escapeHTML(p.area)}</b></span></div>
      <div class="property-footer"><span class="price">${money(p.price)}${p.transaction==="Rent"?"/mo":""}</span><button class="view-btn" data-view="${p.id}">View Property ↗</button></div></div>`;
    grid.appendChild(card);
  });
}
function renderLocations(){
  $("#locationGrid").innerHTML=locations.map(l=>`<article class="location-card"><div class="loc-image" style="background-image:url('${l.image}')"></div><div class="loc-content"><h3>${l.name}</h3><p>${l.count} demonstration ${l.count===1?"property":"properties"} · ${l.desc}</p><button data-location="${l.name}">Explore ${l.name} →</button></div></article>`).join("");
}
function applyFilters(){
  const loc=$("#filterLocation").value,type=$("#filterType").value,tx=$("#filterTransaction").value,beds=$("#filterBeds").value,price=$("#filterPrice").value;
  let [min,max]=price?price.split("-").map(Number):[0,Infinity];
  filtered=properties.filter(p=>(!loc||p.location===loc)&&(!type||p.type===type)&&(!tx||p.transaction===tx)&&(!beds||p.bedrooms>=Number(beds))&&p.price>=min&&p.price<=max);
  sortResults();renderProperties();
}
function sortResults(){
  const s=$("#sortSelect").value;
  filtered.sort((a,b)=>s==="low"?a.price-b.price:s==="high"?b.price-a.price:s==="newest"?b.year-a.year:Number(b.featured)-Number(a.featured));
}
function clearFilters(){
  $("#filterLocation").value=$("#filterType").value=$("#filterTransaction").value=$("#filterPrice").value=$("#filterBeds").value="";
  $("#sortSelect").value="featured";filtered=[...properties];renderProperties();
}
function openModal(id){const el=$(id);el.hidden=false;document.body.classList.add("modal-open")}
function closeModals(){$$(".modal-backdrop").forEach(x=>x.hidden=true);document.body.classList.remove("modal-open")}
function openProperty(id){
  const p=properties.find(x=>x.id===id);if(!p)return;
  $("#propertyDetail").innerHTML=`<div class="detail-grid"><div class="detail-gallery" style="background-image:url('${p.image}')"></div><div class="detail-copy"><p class="eyebrow">${p.transaction} · ${p.type}</p><h2 id="modalTitle">${escapeHTML(p.title)}</h2><div class="property-location">${escapeHTML(p.location)}</div><div class="detail-price">${money(p.price)}${p.transaction==="Rent"?"/mo":""}</div><div class="property-meta"><span><b>${p.bedrooms}</b> Beds</span><span><b>${p.bathrooms}</b> Baths</span><span><b>${escapeHTML(p.area)}</b></span></div><p class="detail-desc">${escapeHTML(p.description)}</p><div class="amenities">${p.amenities.map(a=>`<span>✓ ${escapeHTML(a)}</span>`).join("")}</div><p class="detail-desc"><b>Agent information</b><br>Property Advisory Desk<br>Client service by appointment.</p><div class="detail-actions"><button class="btn btn-dark" data-action="viewing" data-property="${p.id}">Schedule Viewing</button><button class="btn btn-gold" data-action="inquiry" data-property="${p.id}">Request Information</button><button class="btn" style="border:1px solid var(--line)" data-save="${p.id}">${getSaved().includes(p.id)?"Unsave":"Save"} Property</button></div></div></div>`;
  openModal("#propertyModal");
}
function openViewing(propertyId=""){
  const p=properties.find(x=>x.id===propertyId);
  $("#formModalContent").innerHTML=`<h2 id="formModalTitle">Schedule a viewing</h2><p class="auth-note">Website-only demonstration. Request data is stored locally on this device.</p><form class="lux-form" id="viewingForm"><label>Full name<input name="name" maxlength="80" required autocomplete="name"></label><label>Email<input name="email" type="email" maxlength="120" required autocomplete="email"></label><label>Mobile<input name="mobile" inputmode="tel" maxlength="24" required></label><label>Preferred date<input name="date" type="date" required></label><label>Preferred time<select name="time" required><option value="">Select a time</option><option>09:00</option><option>11:00</option><option>13:00</option><option>15:00</option><option>17:00</option></select></label><label>Property<input name="property" value="${escapeHTML(p?.title||"Property enquiry")}" maxlength="120" required></label><label>Message<textarea name="message" maxlength="1000" rows="4"></textarea></label><button class="btn btn-dark" type="submit">Request viewing <span>↗</span></button><div class="form-status"></div></form>`;
  openModal("#formModal");
}
function openInquiry(propertyId=""){
  const p=properties.find(x=>x.id===propertyId);
  $("#formModalContent").innerHTML=`<h2 id="formModalTitle">Request information</h2><p class="auth-note">Website-only demonstration. Enquiry data is stored locally on this device.</p><form class="lux-form" id="inquiryForm"><label>Name<input name="name" maxlength="80" required></label><label>Email<input name="email" type="email" maxlength="120" required></label><label>Mobile<input name="mobile" inputmode="tel" maxlength="24" required></label><label>Property<input name="property" value="${escapeHTML(p?.title||"Property enquiry")}" maxlength="120" required></label><label>Message<textarea name="message" maxlength="1000" rows="5" required></textarea></label><button class="btn btn-dark" type="submit">Send enquiry <span>↗</span></button><div class="form-status"></div></form>`;
  openModal("#formModal");
}

function handleLocalForm(form,key,success){
  const data=formDataObject(form),status=form.querySelector(".form-status");
  if(!validEmail(data.email)){showStatus(status,"Please enter a valid email address.");return}
  if(!validMobile(data.mobile)){showStatus(status,"Please enter a valid mobile number.");return}
  if(Object.entries(data).some(([k,v])=>form.querySelector(`[name="${k}"]`)?.required&&!String(v).trim())){showStatus(status,"Please enter all required fields.");return}
  const arr=getStore(key);arr.push({id:crypto.randomUUID?.()||String(Date.now()),...data,createdAt:new Date().toISOString()});setStore(key,arr);
  showStatus(status,success,"success");form.reset();
}
function renderDashboard(tab="overview"){
  const saved=getSaved().map(id=>properties.find(p=>p.id===id)).filter(Boolean), inquiries=getStore("crownstone_inquiries"),viewings=getStore("crownstone_viewings");
  $("#dashboardContent").innerHTML=`<p class="eyebrow">PRIVATE CLIENT AREA</p><h2 id="dashboardTitle" style="font:500 43px var(--serif);margin:0">Welcome${currentUser?.email?`, ${escapeHTML(currentUser.email.split("@")[0])}`:""}</h2>
  <div class="dashboard-nav">${["overview","saved","inquiries","viewings","profile"].map(x=>`<button class="${tab===x?"active":""}" data-dash="${x}">${x[0].toUpperCase()+x.slice(1)}</button>`).join("")}<button data-logout>Logout</button></div>
  <div id="dashBody"></div>`;
  const body=$("#dashBody");
  if(tab==="overview")body.innerHTML=`<div class="dash-grid"><div class="dash-card"><small>Saved properties</small><strong>${saved.length}</strong></div><div class="dash-card"><small>Inquiries</small><strong>${inquiries.length}</strong></div><div class="dash-card"><small>Viewing requests</small><strong>${viewings.length}</strong></div></div><div class="empty-state">Your private activity appears here as you use the website.</div>`;
  if(tab==="saved")body.innerHTML=saved.length?`<div class="dash-list">${saved.map(p=>`<div class="dash-list-item"><span><b>${escapeHTML(p.title)}</b><br>${p.location} · ${money(p.price)}</span><button class="view-btn" data-view="${p.id}">View →</button></div>`).join("")}</div>`:`<div class="empty-state">No saved properties yet. Explore the collection and tap ♡.</div>`;
  if(tab==="inquiries")body.innerHTML=inquiries.length?`<div class="dash-list">${inquiries.map(x=>`<div class="dash-list-item"><span><b>${escapeHTML(x.property||"Property enquiry")}</b><br>${escapeHTML(x.message||"No message")}</span><small>${new Date(x.createdAt).toLocaleDateString()}</small></div>`).join("")}</div>`:`<div class="empty-state">No enquiries yet.</div>`;
  if(tab==="viewings")body.innerHTML=viewings.length?`<div class="dash-list">${viewings.map(x=>`<div class="dash-list-item"><span><b>${escapeHTML(x.property)}</b><br>${escapeHTML(x.date)} · ${escapeHTML(x.time)}</span><small>Requested</small></div>`).join("")}</div>`:`<div class="empty-state">No viewing requests yet.</div>`;
  if(tab==="profile")body.innerHTML=`<div class="dash-card"><small>Authenticated email</small><strong style="font-size:18px">${escapeHTML(currentUser?.email||"")}</strong><p class="auth-note">Authentication is handled by Firebase Authentication. Passwords are never stored by this website.</p></div>`;
  openModal("#dashboardModal");
}

function firebaseReady(){return typeof firebase!=="undefined"&&FIREBASE_CONFIG.apiKey.startsWith("AIza")&&FIREBASE_CONFIG.projectId!=="PASTE_PROJECT_ID"}
function initFirebase(){
  if(!firebaseReady()){console.info("Crownstone: Firebase is not configured. Website demo remains usable; authentication is disabled until the public Firebase web config is added.");return}
  try{
    firebase.initializeApp(FIREBASE_CONFIG);

    if(RECAPTCHA_ENTERPRISE_SITE_KEY !== "PASTE_RECAPTCHA_ENTERPRISE_SITE_KEY" && APP_CHECK_PRODUCTION_HOSTS.has(window.location.hostname) && firebase.appCheck){
      const appCheck=firebase.appCheck();
      appCheck.activate(new firebase.appCheck.ReCaptchaEnterpriseProvider(RECAPTCHA_ENTERPRISE_SITE_KEY),true);
    }

    auth=firebase.auth();
    auth.onAuthStateChanged(user=>{currentUser=user;$("#authBtn").textContent=user?"Dashboard":"Login";$("#mobileAuthBtn").textContent=user?"Dashboard":"Login";})
  }catch(e){console.warn("Firebase initialization failed.");}
}
function authUI(mode="login"){
  $("#authContent").innerHTML=mode==="login"?`<p class="eyebrow">CLIENT ACCESS</p><h2 id="authTitle">Welcome back.</h2><p class="auth-note">${firebaseReady()?"Secure authentication is handled by Firebase.":"Firebase is not configured yet. Add the public web config in js/script.js to enable authentication."}</p><form class="auth-form" id="loginForm"><label>Email<input name="email" type="email" maxlength="120" required autocomplete="email"></label><label>Password<input name="password" type="password" maxlength="128" required autocomplete="current-password"></label><button class="btn btn-dark" type="submit">Login <span>→</span></button><div class="auth-links"><button type="button" data-auth-mode="reset">Forgot password?</button><button type="button" data-auth-mode="signup">Create account</button></div><div class="form-status"></div></form>`:
  `<p class="eyebrow">CLIENT ACCESS</p><h2 id="authTitle">Create your account.</h2><p class="auth-note">Firebase Authentication handles credentials. No password is written to localStorage or this site's database.</p><form class="auth-form" id="signupForm"><label>Email<input name="email" type="email" maxlength="120" required autocomplete="email"></label><label>Password<input name="password" type="password" minlength="8" maxlength="128" required autocomplete="new-password"></label><button class="btn btn-dark" type="submit">Create account <span>→</span></button><div class="auth-links"><button type="button" data-auth-mode="login">Already have an account?</button></div><div class="form-status"></div></form>`;
  $$(".auth-tabs button").forEach(b=>b.classList.toggle("active",b.dataset.authTab===mode));
}
function openAuth(){if(currentUser){renderDashboard();return}authUI("login");openModal("#authModal")}
function firebaseErrorMessage(){return "Invalid email or password. Please try again."}
async function doLogin(form){
  const s=form.querySelector(".form-status"),d=formDataObject(form);
  if(!validEmail(d.email)){showStatus(s,"Please enter a valid email address.");return}
  if(!auth){showStatus(s,"Authentication is not configured yet. Add the Firebase web configuration in js/script.js.");return}
  try{await auth.signInWithEmailAndPassword(d.email,d.password);closeModals();renderDashboard()}catch(e){showStatus(s,firebaseErrorMessage())}
}
async function doSignup(form){
  const s=form.querySelector(".form-status"),d=formDataObject(form);
  if(!validEmail(d.email)){showStatus(s,"Please enter a valid email address.");return}
  if(d.password.length<8){showStatus(s,"Password must be at least 8 characters.");return}
  if(!auth){showStatus(s,"Authentication is not configured yet. Add the Firebase web configuration in js/script.js.");return}
  try{await auth.createUserWithEmailAndPassword(d.email,d.password);closeModals();renderDashboard()}catch(e){showStatus(s,"We could not create the account. Please check your details and try again.")}
}
async function resetPassword(form){
  const s=form.querySelector(".form-status"),d=formDataObject(form);
  if(!validEmail(d.email)){showStatus(s,"Please enter a valid email address.");return}
  if(!auth){showStatus(s,"Authentication is not configured yet. Add the Firebase web configuration in js/script.js.");return}
  try{await auth.sendPasswordResetEmail(d.email);showStatus(s,"If the address is eligible, a password reset email will be sent.","success")}catch(e){showStatus(s,"Please check the email address and try again.")}
}
function authResetUI(){ $("#authContent").innerHTML=`<p class="eyebrow">PASSWORD RESET</p><h2>Reset your password.</h2><p class="auth-note">Enter your email. For privacy, the interface does not reveal whether an account exists.</p><form class="auth-form" id="resetForm"><label>Email<input name="email" type="email" maxlength="120" required autocomplete="email"></label><button class="btn btn-dark" type="submit">Send reset email</button><div class="auth-links"><button type="button" data-auth-mode="login">Back to login</button></div><div class="form-status"></div></form>`}

document.addEventListener("click",e=>{
  const t=e.target.closest("button,a"); if(!t)return;
  if(t.matches("[data-close]")||e.target.classList.contains("modal-backdrop"))closeModals();
  if(t.id==="menuBtn"){const n=$("#mobileNav");n.hidden=!n.hidden;t.setAttribute("aria-expanded",String(!n.hidden))}
  if(t.id==="authBtn"||t.id==="mobileAuthBtn"){if(t.id==="mobileAuthBtn"){$("#mobileNav").hidden=true;$("#menuBtn").setAttribute("aria-expanded","false")}openAuth()}
  if(t.dataset.view)openProperty(t.dataset.view);
  if(t.dataset.save){const a=getSaved(),id=t.dataset.save;setSaved(a.includes(id)?a.filter(x=>x!==id):[...a,id]);renderProperties();if(!$("#dashboardModal").hidden)renderDashboard("saved")}
  if(t.dataset.action==="viewing"){closeModals();openViewing(t.dataset.property||"")}
  if(t.dataset.action==="inquiry"){closeModals();openInquiry(t.dataset.property||"")}
  if(t.dataset.location){$("#filterLocation").value=t.dataset.location;applyFilters();$("#properties").scrollIntoView({behavior:"smooth"})}
  if(t.dataset.dash)renderDashboard(t.dataset.dash);
  if(t.dataset.logout){auth?.signOut();closeModals()}
  if(t.dataset.authTab){authUI(t.dataset.authTab)}
  if(t.dataset.authMode){t.dataset.authMode==="reset"?authResetUI():authUI(t.dataset.authMode)}
  if(t.dataset.info){e.preventDefault();$("#formModalContent").innerHTML=`<h2>${t.dataset.info==="privacy"?"Privacy":"Terms"}</h2><p class="auth-note">This demonstration website does not represent a live brokerage. Forms and saved properties are stored locally on this device. Production privacy, terms, data retention and consent policies must be finalized before deployment.</p>`;openModal("#formModal")}
});
document.addEventListener("submit",e=>{
  const f=e.target;
  if(f.id==="searchForm"){e.preventDefault();applyFilters();$("#properties").scrollIntoView({behavior:"smooth"})}
  if(f.id==="viewingForm"){e.preventDefault();handleLocalForm(f,"crownstone_viewings","Your viewing request has been saved on this device.")}
  if(f.id==="inquiryForm"){e.preventDefault();const d=formDataObject(f);if(!validEmail(d.email)){showStatus(f.querySelector(".form-status"),"Please enter a valid email address.");return}if(!validMobile(d.mobile)){showStatus(f.querySelector(".form-status"),"Please enter a valid mobile number.");return}const a=getStore("crownstone_inquiries");a.push({id:String(Date.now()),...d,createdAt:new Date().toISOString()});setStore("crownstone_inquiries",a);showStatus(f.querySelector(".form-status"),"Your enquiry has been saved on this device.","success");f.reset()}
  if(f.id==="sellForm"){e.preventDefault();handleLocalForm(f,"crownstone_sell_submissions","Your property submission has been saved on this device for demonstration.")}
  if(f.id==="contactForm"){e.preventDefault();handleLocalForm(f,"crownstone_contacts","Your message has been saved on this device for demonstration.")}
  if(f.id==="loginForm"){e.preventDefault();doLogin(f)}
  if(f.id==="signupForm"){e.preventDefault();doSignup(f)}
  if(f.id==="resetForm"){e.preventDefault();resetPassword(f)}
});
$("#sortSelect").addEventListener("change",()=>{sortResults();renderProperties()});
$("#clearFilters").addEventListener("click",clearFilters);$("#clearFilters2").addEventListener("click",clearFilters);
window.addEventListener("scroll",()=>$("#siteHeader").classList.toggle("scrolled",scrollY>20));
$("#year").textContent=new Date().getFullYear();
renderProperties();renderLocations();initFirebase();
