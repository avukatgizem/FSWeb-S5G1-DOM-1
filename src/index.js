const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const links = document.querySelectorAll("a");

const linkNames = ["Ürünler", "Vizyon", "Özellikler", "Hakkımızda", "İletişim"];
for (let i = 0; i < linkNames.length; i++) {
	links[i].textContent = linkNames[i];
}

const logoImage = document.querySelector("#logo-img");
logoImage.setAttribute("src", "http://localhost:9000/img/logo.png");


const button = document.querySelector("button");
button.textContent = "Baslayin";
const ctaTitle = document.querySelector("h1");
ctaTitle.textContent = "BU DOM MUKEMMEL";

const ctaImage = document.querySelector("#cta-img");
ctaImage.setAttribute("src", "http://localhost:9000/img/cta.png");


const middleImage = document.querySelector("#middle-img");

middleImage.setAttribute("src", "http://localhost:9000/img/accent.png");

const middleH4 = ["OZELLIKLER", "HAKKINDA", "SERVISLER", "URUNLER", "VIZYON"];

const h4 = document.querySelectorAll(".text-content h4");

for (let i = 0; i < h4.length; i++) {
	h4[i].textContent = middleH4[i];
}

const middleP = [
	"Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	"Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis",
	"Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	"Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
	"Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
];

const p = document.querySelectorAll(".text-content p");

for (let i = 0; i < p.length; i++) {
	p[i].textContent = middleP[i];
}

const footerA = document.querySelector("footer a");
footerA.classList.add("bold");
footerA.textContent = "Copyright Bir Şirket Sitesi 2022";

const contactText = [
	"100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",

	"+90 (123) 456-7899",

	"satis@birsirketsitesi.com.tr",
];

const contantP = document.querySelectorAll(".contact p");

for (let i = 0; i < contantP.length; i++) {
	contantP[i].textContent = contactText[i];
}
const contantH4 = document.querySelector(".contact h4");
contantH4.textContent = "Iletisim";

