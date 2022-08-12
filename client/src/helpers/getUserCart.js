export const getUserCart = async (user, func) => {
  fetch(`http://localhost:8000/current-cart/${user}`)
    .then((res) => res.json())
    .then((json) => {
      func(json);
    });
};
