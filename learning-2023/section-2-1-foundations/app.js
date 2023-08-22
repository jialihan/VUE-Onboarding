// Vue.createApp({
//   data() {
//     return {
//       firstName: "Jelly",
//       lastName: "Test"
//     };
//   }
// }).mount("#app");

// Vue.createApp({
//   data() {
//     return {
//       firstName: "Jelly2",
//       lastName: "Test2"
//     };
//   }
// }).mount(".app2");

// common practice: visual model
const vm = Vue.createApp({
  data() {
    return {
      firstName: "Jelly",
      middleName: "",
      lastName: "Test",
      url: "https://www.google.com",
      raw_url:
        '<a href="https://www.google.com" target="_blank">Google page</a>',
      age: 20
    };
  },
  methods: {
    // define functions for our application
    // getFullName() {
    //   console.log("full name updated");
    //   // not recommend to use arrow functions, due to the proxies in VUE, since we are using the "this."
    //   return `${this.firstName} ${
    //     this.middleName
    //   } ${this.lastName.toUpperCase()}`;
    // },
    add() {
      this.age++;
    },
    updateLastName(msg, event) {
      event.preventDefault();
      // console.log("message: ", msg);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      // if(event.key === 'Enter') {

      // }
      this.middleName = event.target.value;
    }
  },
  computed: {
    getFullName() {
      console.log("computed: full name updated");
      // not recommend to use arrow functions, due to the proxies in VUE, since we are using the "this."
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    }
  },
  watch: {
    age(newVal, oldVal) {
      // could be async
      setTimeout(() => {
        this.age = 18;
      }, 3000);
      console.log("new value: " + newVal, "oldValue: " + oldVal);
    }
  }
}).mount("#app");

// setTimeout(() => {
//   // vm.data.firstName = "Alice"; // equal to vm.firstName
//   vm.firstName = "Alice"; // vue proxies
// }, 2000);
