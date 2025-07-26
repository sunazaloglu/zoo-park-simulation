//Bu constructor metodunu, her hayvan oluşturulduğunda çalışabilmesi için yazdım. Parametreler type, gender, x, y
class Animal {
  constructor(type, gender, x, y) {
    this.type = type;
    this.gender = gender;
    this.x = x;
    this.y = y;
    this.id = `${Math.random().toString(36).substring(2)}-${Date.now()}`;
    //toString(36) sayıyı harf ve rakam içeren bir formata çevirirken, substring(2) bu ifadenin başındaki "0." kısmını temizler.
    //Aynı anda doğan hayvanlarda bile ID’ler farklı olur çünkü hem rastgele hem de zaman bilgisi içerir.
  }
  //Hareket Methodu
  //0 ile 3 arasında rastgele bir sayı üretir.
  //0: sağa, 1: sola, 2: aşağı, 3: yukarı olarak.


  
  move() {
    const direction = Math.floor(Math.random() * 4);

    // Hayvan türüne göre adım sayısı belirlenir.
    const adimSayisi =
      {
        koyun: 2,
        inek: 2,
        tavuk: 1,
        horoz: 1,
        kurt: 3,
        aslan: 4,
        avci: 1,
      }[this.type] || 1; // Tür bilinmezse 1 birim hareket eder

    //Yön Kontrolü
    switch (direction) {
      case 0: // sağa hareket
        this.x = Math.min(499, this.x + adimSayisi);
        break;
      case 1: // sola hareket
        this.x = Math.max(0, this.x - adimSayisi);
        break;
      case 2: // aşağı hareket
        this.y = Math.min(499, this.y + adimSayisi);
        break;
      case 3: // yukarı hareket
        this.y = Math.max(0, this.y - adimSayisi);
        break;
    }
    //Math.min(499, ...) ve Math.max(0, ...) ile hayvanın alan dışına çıkması engellenir (0–499 arası sınır).
  }

  //Mesafe Hesabı
  distanceTo(other) {
    return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2);
  }
  //Bu, iki hayvan arasındaki mesafeyi hesaplar.
  //this (kendisi) ile other (başka hayvan) arasındaki uzaklığı verir.
  //Bu fonksiyon rules.js içinde üreme ve avlanma mesafesi için kullanılır.
}

module.exports = { Animal };
//Bu satır sayesinde, bu dosyada tanımlı Animal sınıfı diğer dosyalarda kullanılabilir (index.js ve rules.js).
