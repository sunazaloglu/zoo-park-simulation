# ZOO PARK HAYVAN SİMÜLASYONU #

## Proje Hakkında

Bu proje, DIATICS firmasının staj programı kapsamında geliştirilmiş bir JavaScript simülasyonudur. Amaç, çeşitli hayvan türlerinin 2D bir alanda 1000 adım boyunca hareket, avlanma ve üreme gibi etkileşimlerini gözlemleyerek popülasyon değişimini analiz etmektir.


## Nasıl Çalıştırılır?
	1. Bu projenin çalışması için bilgisayarınızda Node.js kurulu olmalıdır. https://nodejs.org/en/download
    Node.js yüklü değilse, yukarıdaki bağlantıdan indirip yükleyebilirsiniz.

    2. Proje klasörünü bilgisayarınıza indirin veya klonlayın.
   
    3. Kurulumdan sonra ilk kontrol: 
       Kurulumun başarılı olduğunu doğrulamak için terminale şu komutları yazın:
       node -v
       npm -v
       Bu komutlar Node.js ve npm'in sürümlerini gösteriyorsa kurulum doğrulanmış ve gerçekleşmiş demektir.

	4. Terminal veya komut satırını açarak proje klasörüne geçin:
    cd zoo-park

    5. Simülasyonu başlatmak için şu komutu girin:
    node index.js

    6.	Sonuçları gözlemleyin:
        Terminalde :
	        •	Her adımda hayvanların rastgele hareketleri,
	        •	Avlanma veya üreme durumları,
	        •	Ve her 100 adımda popülasyon durumu gösterilir.
        Simülasyon 1000 adım sonunda tüm türlerin kalan sayısını raporlar.

# HAYVAN TÜRLERİ

    | Tür   | Sayı                    | Cinsiyet | Özellik                    |
    | ----- | ----------------------- | -------- | -------------------------- |
    | Koyun | 30 (15 dişi + 15 erkek) | Var      | Avlanır, Ürer              |
    | İnek  | 10 (5 dişi + 5 erkek)   | Var      | Avlanır, Ürer              |
    | Tavuk | 10                      | Yok      | Avlanır                    |
    | Horoz | 10                      | Yok      | Avlanır                    |
    | Kurt  | 10 (5 dişi + 5 erkek)   | Var      | Avcı, Ürer                 |
    | Aslan | 8  (4 dişi + 4 erkek)   | Var      | Avcı, Ürer                 |
    | Avcı  | 1                       | Yok      | Tüm hayvanları avlayabilir |


    Hayvanların:
        •	Cinsiyeti vardır (erkek/dişi),
        •	Koordinatları vardır (x, y),
        •	Hareket yeteneği vardır. Fakat her bir hayvanın hareket birimi farklıdır;
            Koyun 2 birim,
            Kurt 3 birim,
            İnek 2 birim,
            Tavuk 1 birim,
            Horoz 1 birim,
            Aslan 4 birim,
            Avcı 1 birim,
        rastgele şekilde yukarı, aşağı, sağa veya sola hareket etmektedir ve alanın dışına çıkamamaktadır.
        •	Her hayvanın türü ve benzersiz bir ID’si bulunur.

## AVLANMA KURALLARI

    Etçil hayvanlar olan aslan ve kurt, belirli bir menzil içindeki bazı hayvanları avlayabilir.

    -Kurt, 4 birim mesafe içinde yer alan koyun, tavuk ve horozu avlar.

    -Aslan, 5 birim mesafe içinde yer alan inek ve koyunu avlar.

    -Avcı, 8 birim içindeki tüm hayvan türlerini avlayabilir.

    Avlanabilecek Hayvanlar:
    Aslan → koyun, inek

    Kurt → koyun, tavuk, horoz

    Avcı → tüm hayvan türleri

    Bu kurallar, etçil hayvanların ve avcının av davranışlarını kontrol eder ve oyun içi dengeyi sağlamak amacıyla belirlenmiştir.


## Üreme Kuralları

    - Aynı türden ve farklı cinsiyetten 2 hayvan 3 birim içinde buluşursa üreme olur.
    - Tavuk/horoz ve avcı üreyemez.
    - Yeni doğan hayvan, rastgele cinsiyetle doğar.

## Kullanılan Teknolojiler

    - JavaScript
    - Node.js (çalıştırmak için terminal ortamı)

## PROJE DOSYA YAPISI

    zoo-park/
        │
        ├── index.js       → Simülasyonu başlatan ana dosya.  
        ├── animals.js     → Animal sınıfı ve hareket/mesafe hesaplaması.  
        ├── rules.js       → Avlanma ve üreme kurallarını içeren modül  
        └── README.md      → Proje açıklaması.


## Dosya Açıklamaları

    index.js → 1000 tur boyunca simülasyonu çalıştırır. Her 100 turda durumu yazdırır.

    animals.js → Hayvan türleri, konumları ve sayıları burada tutulur.

    rules.js → Üreme ve avlanma kurallarını içerir. Kurallara göre animals.js verilerini günceller.


## Simülasyon Akışı

    1. Başlangıçta sabit sayıda hayvan vardır.

    2. Her tur:

        -Hayvanlar hareket eder

        -Kurallar (avlanma/üreme) çalıştırılır

    3. Her 100 turda toplam hayvan sayısı yazdırılır
    4. 1000. tur sonunda her türün kalan sayısı listelenir.


    Örnek Çıktı:

    Tur 100: 78 hayvan
    Tur 200: 77 hayvan
    Tur 300: 77 hayvan
    Tur 400: 76 hayvan
    Tur 500: 75 hayvan
    ...
    1000 adım sonunda hayvan sayıları:
    { koyun: 30, inek: 10, tavuk: 10, horoz: 10, kurt: 9, aslan: 5 }


## İletişim
Geliştirici: Su Naz Aloğlu
Email    : sualoglu0@gmail.com
LinkedIn : https://www.linkedin.com/in/su-naz-alo%C4%9Flu/
GitHub   : https://github.com/sunazaloglu

----------------------------------------------------------------------------------

# ZOO PARK ANIMAL SIMULATION #

## About the Project

    This project is a JavaScript-based simulation developed as part of the DIATICS internship program. The aim is to observe the interactions—such as movement, hunting, and reproduction—of various animal species on a 2D grid over 1000 steps, in order to analyze changes in population.


## How to Run?

    1.Make sure Node.js is installed on your system: https://nodejs.org/en/download
    If not, download and install it from the link above.

    2.Download or clone the project folder to your computer.

    3.After installation, open your terminal and check the versions:

        node -v  
        npm -v

    If the versions are printed, the installation is successful.

    4.Navigate to the project folder:

        cd zoo-park

    5.Start the simulation with the command:

        node index.js

    6.Observe the output in the terminal:

        Each step prints animals’ random movements.

        Displays hunting or reproduction events.

        Every 100 steps, current population statistics are shown.

        After 1000 steps, the final count of each species is reported.

## ANIMAL TYPES

    | Species | Count                    | Gender | Feature                  |
    | ------- | ------------------------ | ------ | ------------------------ |
    | Sheep   | 30 (15 female + 15 male) | Yes    | Can be hunted, can breed |
    | Cow     | 10 (5 female + 5 male)   | Yes    | Can be hunted, can breed |
    | Chicken | 10                       | No     | Can be hunted            |
    | Rooster | 10                       | No     | Can be hunted            |
    | Wolf    | 10 (5 female + 5 male)   | Yes    | Predator, can breed      |
    | Lion    | 8  (4 female + 4 male)   | Yes    | Predator, can breed      |
    | Hunter  | 1                        | No     | Can hunt all species     |

## Animal Attributes:

  All animals have:

    -Gender (if applicable),

    -Coordinates (x, y),

    -Movement ability (each species has a different step size),

    | Species | Step Size |
    | ------- | --------- |
    | Sheep   | 2         |
    |         |           |
    | Cow     | 2         |
    |         |           |
    | Chicken | 1         |
    |         |           |
    | Rooster | 1         |
    |         |           |
    | Wolf    | 3         |
    |         |           |
    | Lion    | 4         |
    |         |           |
    | Hunter  | 1         |

    Each animal moves randomly in one of four directions (up, down, left, or right) and cannot move outside the grid. Each animal has a unique ID.

## HUNTING RULES

    Carnivores like lions and wolves can hunt certain animals within a specific range:

        Wolf: Hunts sheep, chickens, and roosters within a 4-unit range.

        Lion: Hunts cows and sheep within a 5-unit range.

        Hunter: Can hunt all animals within an 8-unit range.

    Summary of hunting targets:

        Lion → sheep, cow

        Wolf → sheep, chicken, rooster

        Hunter → all species

    These rules control predator and hunter behavior to maintain balance in the simulation.


## BREEDING RULES

    -Two animals of the same species and opposite genders can reproduce if they are within 3 units of each other.

    -Chickens, roosters, and hunters cannot reproduce.

    -Newborn animals are assigned a random gender.

## TECHNOLOGIES USED

    -JavaScript

    -Node.js (runs in the terminal)

## PROJECT STRUCTURE

    zoo-park/
    │
    ├── index.js       → Main file to run the simulation  
    ├── animals.js     → Manages animal creation and movement  
    ├── rules.js       → Handles breeding and hunting rules  
    └── README.md      → Project description  


## FILE DESCRIPTIONS

    index.js → Runs the simulation for 1000 rounds. Prints status every 100 rounds.

    animals.js → Contains animal types, positions, and counts.

    rules.js → Applies reproduction and hunting rules. Updates the animals data accordingly.

##Simulation Flow

    1.The simulation starts with a fixed number of animals.

    2.Each round:

        Animals move randomly

        Rules are applied (hunting and reproduction)

    3.Every 100 steps, the current population is printed.

    4.After 1000 steps, final counts for each species are displayed.


    Sample Output:

        Step 100: 78 animals
        Step 200: 77 animals
        Step 300: 77 animals
        Step 400: 76 animals
        Step 500: 75 animals
        ...
        After 1000 steps, final animal counts:
        { sheep: 30, cow: 10, chicken: 10, rooster: 10, wolf: 9, lion: 5 }


## Contact
Developer: Su Naz Aloğlu
Email    : sualoglu0@gmail.com
LinkedIn : https://www.linkedin.com/in/su-naz-alo%C4%9Flu/
GitHub   : https://github.com/sunazaloglu

