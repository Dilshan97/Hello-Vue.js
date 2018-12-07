
<template>
  <div class="container">
      <h2>Sign Up</h2>

      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" placeholder="Enter email">
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="text" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Password">
      </div>

      <button @click="signUp" class="btn btn-primary">Sign Up</button>

      <p>Go back to <router-link to="/">Login</router-link></p>

  </div>
</template>

<script>

import  firebase from 'firebase';
import 'firebase/auth';

export default {
  name: "signup",
  data() {
    return {
      email:'',
      password:''
    };
  },
  methods: {
    signUp: function(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        (user) => {
          // this.$router.replace('home')
          alert('user created')
        },
        (err) => {
          alert('Oops' + err.message)
        }
      );
    }
  }
};
</script>

