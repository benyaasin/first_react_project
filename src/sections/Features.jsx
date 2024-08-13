// eslint-disable-next-line no-unused-vars
import React from "react";
import MyCard from "../components/MyCard";

const featuresArray = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmApFfsxsUrvk4HZAB5f86HBWupbeNTtowg&sttps://images.bursadabugun.com/haber/2024/08/08/1736936-cansu-ozbay-kimdir-cansu-ozbay-kac-yasinda-cansu-ozbay-hangi-takimda-oynuyor-66b4df3452344.jpg",
    title: "Cansu Özbay",
    description:
      "Genç yaşına rağmen yüksek oyun zekası ve hızlı pas dağılımı ile dikkat çeker. Milli takımın oyun kurucusudur.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTQfI6aBNaG2XgSEOI6M2AzFSrM-PUW92fBw&s",
    title: "Melissa Vargas",
    description: "Vargas, milli takım ve kulüp düzeyinde birçok uluslararası başarıya imza atmıştır. 2023 yılında Türkiye A Milli Kadın Voleybol Takımı ile Avrupa Şampiyonu olmuş ve turnuvanın en değerli oyuncusu (MVP) seçilmiştir.",
  },
  {
    id: 3,
    img: "https://image.hurimg.com/i/hurriyet/75/750x422/66697245cc089e8a57775b27.jpg",
    title: "Zehra Güneş",
    description: "Genç yaşına rağmen önemli bir kariyere sahip olan Zehra, özellikle blok ve hücumdaki başarısıyla bilinir. Uzun boyu ve atletik yapısı ile takımın önemli bir parçasıdır.",
  },
  {
    id: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnhs2T6vWFDfgKomYfVZhADO6F9zwprn9Rg&s",
    title: "Eda Erdem",
    description: "Takım kaptanı olan Eda, hem ulusal hem de uluslararası alanda en tanınmış Türk voleybolcularından biridir. Blok yetenekleri ve liderliği ile ön plana çıkar.",
  },
  {
    id: 5,
    img: "https://voleybolunsesi.com/uploadk33/2024/06/GP3crL8XkAAQgAg-1.jpg",
    title: "Hande Baladın",
    description: "Takım kaptanı olan Eda, hem ulusal hem de uluslararası alanda en tanınmış Türk voleybolcularından biridir. Blok yetenekleri ve liderliği ile ön plana çıkar.",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd04Cst57rDg3Xmv76-W6fRj-AZEI_et3eaQ&s",
    title: "Gizem Örge",
    description: "Genç yaşına rağmen başarılı bir kariyere sahip olan Gizem, hem kulüp hem de milli takım seviyesinde önemli performanslar sergilemiştir. Eczacıbaşı Dynavit'te oynamaktadır ve kulüp düzeyinde birçok başarıya imza atmıştır.",
  },
];

function Features() {
  return (
    <>
      {featuresArray.map((feature) => (
        <MyCard
          key={feature.id}
          title={feature.title}
          img={feature.img}
          description={feature.description}
        />
      ))}
    </>
  );
}

export default Features;
