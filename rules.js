const { Animal } = require("./animals");

// Avlanma kuralları
const avKurallari = {
  kurt: {
    mesafe: 4,
    avlar: ["koyun", "tavuk", "horoz"],
  },
  aslan: {
    mesafe: 5,
    avlar: ["koyun", "inek"],
  },
  avci: {
    mesafe: 8,
    avlar: ["koyun", "tavuk", "horoz", "kurt", "aslan", "inek"],
  },
};

function avlanma(animals) {
  //Yeni bir liste oluşturulur. Avlanan hayvanlar bu listeye alınmaz.
  const yeniListe = [];
  //Tüm hayvanlar sırayla kontrol edilir
  for (let i = 0; i < animals.length; i++) {
    const avci = animals[i];
    const kural = avKurallari[avci.type];
    //Bu hayvan bir avcı mı diye bakılır

    //Eğer avcı değilse listeye olduğu gibi eklenir
    if (!kural) {
      yeniListe.push(avci);
      continue;
    }

    // Avcıysa, diğer tüm hayvanlar ile olan mesafesi kontrol edilir
    let avlandi = false;
    for (let j = 0; j < animals.length; j++) {
      const av = animals[j];
      if (i === j) continue;
      //Kendisiyle kıyaslanmaz (aynı hayvan olmasın diye i === j kontrolü yaptım)

      //Eğer listedeki hayvan, avlanabilir türden biriyse ve yeterince yakınsa,
      if (kural.avlar.includes(av.type)) {
        const mesafe = avci.distanceTo(av);
        if (mesafe <= kural.mesafe) {
          avlandi = true;
          break;
        }
      }
    }
    //Avcı hayvan bu kurbanı avlar (yani kurban listeye eklenmez)
    //avlandi = true olduğunda dış döngüden çıkar.

    //Eğer avlayacak biri yoksa hayvan hayatta kalır
    if (!avlandi) yeniListe.push(avci);
  }

  //Liste güncellenir (sadece hayatta kalanlar kalır)
  animals.length = 0;
  animals.push(...yeniListe);
}
// Üreme Fonksiyonu
function ureme(animals) {
  const yeniHayvanlar = [];
  const kontrolEdilen = new Set();
  //Yeni doğan hayvanlar için ayrı bir liste oluşturulur.
  //Aynı hayvanın birden fazla kez çiftleşmesini engellemek için kontrolEdilen kümesi tutulur

  //Tüm hayvanlar sırayla taranır (a1 ilk hayvan)
  for (let i = 0; i < animals.length; i++) {
    const a1 = animals[i];

    //Eğer bu tür üreyemezse veya zaten kullanılmışsa atlanır
    if (!["koyun", "inek", "kurt", "aslan"].includes(a1.type)) continue;
    if (kontrolEdilen.has(a1.id)) continue;

    //İkinci eş aranır
    for (let j = i + 1; j < animals.length; j++) {
      const a2 = animals[j];
      if (a1.type !== a2.type) continue;
      if (a1.gender === a2.gender) continue;
      if (kontrolEdilen.has(a2.id)) continue;
      //Aynı türden ve zıt cinsiyetten olmalı
      
      // Eğer mesafeleri 3 birimden küçükse doğum olur
      const mesafe = a1.distanceTo(a2);
      if (mesafe <= 3) {
        const yeniCinsiyet = Math.random() < 0.5 ? "erkek" : "dişi";
        const yeniX = Math.floor((a1.x + a2.x) / 2);
        const yeniY = Math.floor((a1.y + a2.y) / 2);
        yeniHayvanlar.push(new Animal(a1.type, yeniCinsiyet, yeniX, yeniY));
        //Yeni hayvan doğar: Ortak konumda, rastgele cinsiyette

        //Ebeveynler bir daha kullanılamasın diye ;
        kontrolEdilen.add(a1.id);
        kontrolEdilen.add(a2.id);
        break;
      }
    }
  }

  return animals.concat(yeniHayvanlar);
  //Yeni hayvanlar ana listeye eklenir.
}

//Sayım Fonksiyonu
function sayimYap(animals) {
  const sayilar = {};
  animals.forEach((a) => {
    sayilar[a.type] = (sayilar[a.type] || 0) + 1;
  });

  console.log("1000 adım sonunda hayvan sayıları:");
  console.log(sayilar);
  //Hayvan türlerine göre bir sayaç nesnesi oluşturur
}

//Dışa Aktarma
module.exports = { avlanma, ureme, sayimYap };
//Bu üç fonksiyon, index.js tarafından kullanılmak üzere dışa aktarılır.