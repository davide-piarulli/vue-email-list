const {createApp} = Vue;

createApp({
  data(){
    return {
      title: '',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emailList : [],
    }
  },
  methods: {
    getApi(){
      for (let i = 0; i < 10; i++) {
        axios
          .get(this.apiUrl)
          .then((response) => {
          console.log(response.data);
        })

        
      }

    }

  },
  mounted(){
    this.getApi();
  },
}).mount('#app')