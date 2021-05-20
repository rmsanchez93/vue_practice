const app = Vue.createApp({
  data() {
    return {
      num: 0,
      result: "start adding!",
    };
  },
  computed: {
    computedResult() {
      return `${this.num} ${this.result}`;
    },
  },
  methods: {
    add5() {
      this.num += 5;
    },
    add1() {
      this.num += 1;
    },
  },
  watch: {
    num() {
      let num = this.num;
      console.log("when num changes this runs");
      if (num < 37) {
        this.result = "keep going!";
      } else if (num == 37) {
        this.result = "Lo hicimos! We did it!";
      } else {
        this.result = "whoa there!";
      }
    },

    result() {
      console.log("result watch function running");
      if(this.result != 'keep going!' && this.result != 'lets try this again' ){
          console.log('now we want to change this value')
          setTimeout(() => {
            this.num = 0
            this.result = 'lets try this again'
          }, 5000);
      }
    },
  },
}).mount("#assignment");
