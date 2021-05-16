const INITIAL_STATE = {
      sections: [
        {
          title: "menswear",
          imageUrl: "https://i.ibb.co/7GD4fLP/mens.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
        {
          title: "womenswear",
          imageUrl: "https://i.ibb.co/8jBJrr3/home-women-1.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/PYNRFkw/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/Tm0bpM8/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "footwear",
          imageUrl: "https://i.ibb.co/vzrgc5F/footwear.png",
          id: 3,
          linkUrl: "shop/sneakers",
        }
      ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      default:
          return state;
  }
};

export default directoryReducer;