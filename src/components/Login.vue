
<template>
  <div class="container">
      <h2>Sign In</h2>
  
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" v-model="email"  placeholder="Enter email">
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="text" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Password">
      </div>

      <button @click="login" class="btn btn-primary">Sign In</button>

     <p>You Don't Have an Account ? <router-link to="/SignUp">Create Now</router-link></p>
   
  </div>
</template>

<script>

import  firebase from 'firebase';
import 'firebase/auth';

export default {
  name: "login",
  data() {
    return {
      email:'',
      password:''
    };
  },
  methods: {
      login: function () {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
            (user) => {
              this.$router.replace('Home')
            },
            (err) => {
              alert('Oops' + err.message)
            }
          );
      }
  }
};
</script>

