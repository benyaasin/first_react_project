// eslint-disable-next-line no-unused-vars
import React from "react";
import MyCard from "../components/MyCard";

const headerArray = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc0vQ-b2rp_H62uyk4SwTIYcewvtOwVsAyIw&s",
    title: "Türkiye Kadın Millî Voleybol Takımı",
    description:
      "Türkiye kadın millî voleybol takımı, Türkiye Voleybol Federasyonu tarafından yönetilen ve Türkiye’yi uluslararası kadın voleybol karşılaşmalarında temsil eden takımdır. 6 Ağustos 2024 tarihi itibarıyla FIVB dünya sıralamasında 3. sırada bulunmaktadır",
  },
];

function Headerx() {
  return (
    <>
      {headerArray.map((feature) => (
        <MyCard
          key={feature.id}
          title={feature.title}
          img={feature.img} className="img-headerx"
          description={feature.description}
        />
      ))}
    </>
  );
}

export default Headerx;
