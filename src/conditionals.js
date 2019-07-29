new Vue({
  el: "#exercise5",
  data: {
    show: false,
    array: ["Max", "Anna", "Chris", "Manu"],
    myObject: {
      title: "Lord of the Rings",
      author: "J.R.R. Tolkiens",
      books: "3"
    },
    testData: {
      name: "TESTOBJECT",
      id: 10,
      data: [1.67, 1.33, 0.98, 2.21]
    }
  }
});

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
