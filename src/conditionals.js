new Vue({
  el: "#loop",
  data: {
    ingridients: ["meat", "fruit", "cookies"],
    persons: [
      {
        name: "Max",
        age: 27,
        color: "red"
      },
      {
        name: "Anna",
        age: "N/A",
        color: "blue"
      }
    ]
  }
});

new Vue({
  el: "#app",
  data: {
    show: false
  }
});
