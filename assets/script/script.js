const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "",
      apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
      emailList: [],
    };
  },
  methods: {
    getApi() {
      for (let i = 0; i < 10; i++) {
        axios.get(this.apiUrl).then((res) => {
          console.log(res.data);
          this.emailList.push(res.data.response);
        })
        .catch( (err) => {
          console.log(err);
        })
      }
      console.log(this.emailList);
    },
  },
  mounted() {
    this.getApi();
  },
}).mount("#app");
