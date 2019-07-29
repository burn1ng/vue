new Vue({
  el: "#exercise4",
  data: {
    width: 200,
    timer: null,
    attachHighlight: false,
    userCssClass: "",
    usePredefinedCss: "",
    userInlineCss: "",
    progressTimer: null,
    progress: 0
  },
  computed: {
    effectClasses: function() {
      if (this.timer) {
        return {
          highlight: this.attachHighlight,
          shrink: !this.attachHighlight
        };
      } else {
        return {
          highlight: false,
          shrink: false
        };
      }
    },
    inlineCss: function() {
      return {
        color: "red",
        backgroundColor: "green"
      };
    },
    progressStyles: function() {
      return {
        backgroundColor: "purple",
        width: this.progress * 5 + "px"
      };
    }
  },
  methods: {
    btnText: function(timer) {
      return timer ? "Stop effect" : "Start Efect";
    },
    startEffect: function() {
      let v = this;

      if (this.timer) {
        clearInterval(this.timer);
        return (this.timer = null);
      }

      this.timer = setInterval(function() {
        v.attachHighlight = !v.attachHighlight;
      }, 500);
    },
    startProgress: function() {
      let v = this;

      if (this.progressTimer) {
        this.stopProgress();
      } else {
        this.progressTimer = setInterval(function() {
          if (v.progress !== 100) {
            v.progress += 10;
          } else {
            v.stopProgress();
          }
        }, 500);
      }
    },
    stopProgress: function() {
      clearInterval(this.progressTimer);
      this.progressTimer = null;
      this.progress = 0;
    }
  }
});

new Vue({
  el: "#styling",
  data: {
    attachRed: false,
    color: "green",
    width: 100
  },
  computed: {
    myStyles: function() {
      return {
        backgroundColor: this.color,
        width: this.width + "px"
      };
    },
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  }
});

new Vue({
  el: "#exercise3",
  data: {
    value: 0
  },
  computed: {
    result: function() {
      return this.value >= 37 ? "done" : this.value;
    }
  },
  watch: {
    value: function(value) {
      var vm = this;

      setTimeout(function() {
        vm.value = 0;
      }, 5000);
    }
  }
});

new Vue({
  el: "#app_counter",
  data: {
    counter: 0,
    secondCounter: 0
  },
  computed: {
    output: function() {
      console.log("Computed property");
      return this.counter > 5 ? `Greater than 5` : `Smaller than 5`;
    }
  },
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
        vm.counter = 0;
      }, 4000);
    }
  },
  methods: {
    result(number = 5) {
      console.log("Method");
      return this.counter > number
        ? `Greater than ${number}`
        : `Smaller than ${number}`;
    }
  }
});

new Vue({
  el: "#binding",
  data: {
    name: "Andrei"
  }
});

new Vue({
  el: "#exercise2",
  data: {
    value: ""
  },
  methods: {
    alert: function() {
      alert("Alert!");
    },
    storeKey: function(e) {
      this.value = e.target.value;
    }
  }
});

new Vue({
  el: "#button_container",
  data: {
    counter: 0,
    click_target: "",
    x: 0,
    y: 0
  },
  methods: {
    increase: function(step, e) {
      this.counter += step;
      this.click_target = `x: ${e.clientX}, y: ${e.clientY}`;
    },
    updateCoordinates: function(e, x = e.clientX, y = e.clientY) {
      this.x = x;
      this.y = y;
    },
    alertMe: function() {
      alert("Alert!");
    }
  }
});

new Vue({
  el: "#exercise1",
  data: {
    name: "Andrei Dushkou",
    age: 26
  },
  methods: {
    getMultipliedAge: function(multiplier) {
      return this.age * multiplier;
    },
    getRandom() {
      return Math.random();
    },
    getImage() {
      return "http://lorempixel.com/100/100/";
    }
  }
});

new Vue({
  el: "#app",
  data: {
    title: "Hello world from data!",
    link: "http://google.com",
    finishedLink: '<a  href="http://yandex.ru">Yandex</a>'
  },
  methods: {
    sayHello: function() {
      this.title = "Hello";
      return this.title;
    },
    changeTitle: function(e) {
      this.title = e.target.value;
    },
    getLink: function() {
      return this.link;
    }
  }
});
