// 1. solution with method
// new Vue({
//    el:"#app",
//    data: {
//       emails: [],
//       numberOfEmails: 10
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
//       for(var i=0; i< this.numberOfEmails; i++){
//          this.getEmail();
//       }
//    }
//
// })


// 2. solution with just for loop
// new Vue({
//    el:"#app",
//    data: {
//       emails: [],
//       numberOfEmails: 10
// },
//    methods: {
//
//    },
//    mounted: function() {
//       // fullfill email list
//       for (var i = 0; i < this.numberOfEmails; i++) {
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
      emails: [],
      numberOfEmails: 10
   },
   methods: {

   },
   mounted: function() {
      let promises = [];
      for (i = 0; i < this.numberOfEmails; i++) {
        promises.push(
           axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        );
      }

      Promise.all(promises).then(response => {
         response.forEach(item => this.emails.push(item.data.response));
      })

   }
})
