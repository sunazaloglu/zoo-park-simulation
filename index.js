const { Animal } = require("./animals"); // Hayvan sınıfı burada
const { avlanma, ureme, sayimYap } = require("./rules");

const animals = [];

// Rastgele konum oluşturma
function randomPos() {
  return Math.floor(Math.random() * 500);
}

// Başlangıç hayvanlarını ekle
function baslangicPopulasyon() {
  // Koyun: 15 erkek + 15 dişi
  //randomPos()'un 2 defa yazılmasının sebebi ilk olan randomPos() x ekseni için random pozisyon oluşturur ikinci yazılan randomPos() ise y ekseninde random pozisyon oluşturmak için yazılmıştır.
  for (let i = 0; i < 15; i++) {
    animals.push(new Animal("koyun", "erkek", randomPos(), randomPos()));
    animals.push(new Animal("koyun", "dişi", randomPos(), randomPos()));
  }

  // İnek: 5 erkek + 5 dişi
  for (let i = 0; i < 5; i++) {
    animals.push(new Animal("inek", "erkek", randomPos(), randomPos()));
    animals.push(new Animal("inek", "dişi", randomPos(), randomPos()));
  }

  // Tavuk: 10
  for (let i = 0; i < 10; i++) {
    animals.push(new Animal("tavuk", null, randomPos(), randomPos()));
  }

  // Horoz: 10
  for (let i = 0; i < 10; i++) {
    animals.push(new Animal("horoz", null, randomPos(), randomPos()));
  }

  // Kurt: 5 erkek + 5 dişi
  for (let i = 0; i < 5; i++) {
    animals.push(new Animal("kurt", "erkek", randomPos(), randomPos()));
    animals.push(new Animal("kurt", "dişi", randomPos(), randomPos()));
  }

  // Aslan: 4 erkek + 4 dişi
  for (let i = 0; i < 4; i++) {
    animals.push(new Animal("aslan", "erkek", randomPos(), randomPos()));
    animals.push(new Animal("aslan", "dişi", randomPos(), randomPos()));
  }

  // Avcı: 1
  animals.push(new Animal("avci", null, randomPos(), randomPos()));
}

// Hayvanları hareket ettir
function moveAnimals() {
  animals.forEach((animal) => animal.move());
}

// Simülasyonu başlat
baslangicPopulasyon();

for (let tur = 1; tur <= 1000; tur++) {
  // Simülasyon 1000 tur çalışır.
  moveAnimals(); //Hayvanlar hareket eder.
  avlanma(animals); // Avcı , hayvanlar avını yakalarsa onu listeden çıkarır.
  ureme(animals); // Aynı türden , farklı cinsiyetten hayvanlar yakınsa üreyip yeni hayvan üretir.

  if (tur % 100 === 0) {
    console.log(`Tur ${tur}: ${animals.length} hayvan`); //Her 100 turda terminale kaç hayvan kaldığı yazılır.
  }
}

sayimYap(animals); //Her türden kaç hayvan kaldığını yazdırır. Bu fonksiyon rules.js içindedir.
