

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <!-- Image and text -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Food App
  </a>

</nav>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li class="nav-item">
          <router-link  class="nav-link" Home to="/home">Home</router-link>
      </li>

      <li class="nav-item">
        <router-link  class="nav-link" Add Food to="/add-food">Add Food</router-link>
      </li>

      <li class="nav-item">
          <router-link class="nav-link" Food Basket to="/food-list">Food Basket</router-link>
      </li>
      
    
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

</template>

<script>
    
</script>