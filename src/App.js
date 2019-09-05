import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "김치",
    image:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fpostfiles12.naver.net%2F20150812_267%2Fbbtreecorp_1439341990481E7n1n_PNG%2FOPENAS_1461378.png%3Ftype%3Dw1&f=1",
    rating: 5
  },
  {
    id: 2,
    name: "깍두기",
    image:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimage.ec21.com%2Fimage%2Fosewoo%2Fkoimg_GC00134546_CA00134567%2F%25EA%25B9%258D%25EB%2591%2590%25EA%25B8%25B0.jpg&f=1",
    rating: 4.9
  },
  {
    id: 3,
    name: "삼겹살",
    image:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Ffoodkoreaguide.com%2Fwp-content%2Fuploads%2F2016%2F03%2FFood-Korea-Guide-Aged-Pork-Belly-%25EC%2588%2599%25EC%2584%25B1%25EC%2582%25BC%25EA%25B2%25B9%25EC%2582%25B4.jpg&f=1",
    rating: 4
  },
  {
    id: 4,
    name: "김밥",
    image:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fimg.ezmember.co.kr%2Fcache%2Fboard%2F2013%2F02%2F05%2Fa55c338bfc81b9348c4177502ae93263.jpg&f=1",
    rating: 3
  },
  {
    id: 5,
    name: "보리굴비",
    image:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Frecipe.ezmember.co.kr%2Fcache%2Frecipe%2F2015%2F05%2F19%2F8d132efa82a50aca8c9765ec5829bc3a1.jpg&f=1",
    rating: 3.7
  },
  {
    id: 6,
    name: "간장게장",
    image:
      "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F11%2F15%2F09%2F46%2Fkorean-food-1825766_960_720.jpg&f=1",
    rating: 3.8
  },
  {
    id: 7,
    name: "삼계탕",
    image:
      "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fcfile7.uf.tistory.com%2Fimage%2F253D994056F778481C275F&f=1",
    rating: 5
  }
];

/*
function randerFood(dish) {
  //console.log(dish);
  return <Food name={dish.name} picture={dish.image} />;
}
*/

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I Like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} width="150" />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired, // 필수 이름, 문자열
  picture: PropTypes.string.isRequired, // 필수 이미지 URL
  rating: PropTypes.number.isRequired // 필수 숫자
};

function App() {
  return (
    <div className="App">
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
