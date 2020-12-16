// 1. solution with method
// new Vue({
//    el:"#app",
//    data: {
//       emails: []
//    },
//    methods: {
//       getEmail() {
//          var self = this;
//          axios
//          .get('https://flynn.boolean.careers/exercises/api/random/mail')
//          .then(function(response) {
//             self.emails.push(response.data.response);
//          })
//       }
//    },
//    mounted: function() {
//       // fullfill email list
//       for(var i=0; i< 10; i++){
//          this.getEmail();
//       }
//    }
//
// })


// 2. solution with just for loop
// new Vue({
//    el:"#app",
//    data: {
//       emails: []
//    },
//    methods: {
//
//    },
//    mounted: function() {
//       // fullfill email list
//       for (var i = 0; i < 10; i++) {
//          axios
//          .get('https://flynn.boolean.careers/exercises/api/random/mail')
//          .then(response => {
//             this.emails.push(response.data.response);
//          })
//       }
//    }
// })

// 3. solution with just for loop
new Vue({
   el:"#app",
   data: {
      emails: []
   },
   methods: {

   },
   mounted: function() {
      let promises = [];
      for (i = 0; i < 10; i++) {
        promises.push(
           axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        );
      }

      Promise.all(promises).then(response => {
         response.forEach(item => this.emails.push(item.data.response));
      })

   }
})
