new Vue({
    el: '#binding',
    data: {
        name: 'Andrei'
    }
});

new Vue({
    el: '#exercise2',
    data: {
        value: ''
    },
    methods: {
        alert: function() {
            alert('Alert!');
        },
        storeKey: function(e) {
            this.value = e.target.value;
        }
    }
});

new Vue({
    el: '#button_container',
    data: {
        counter: 0,
        click_target: '',
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
            alert('Alert!');
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