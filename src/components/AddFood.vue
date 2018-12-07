<template>
  <div class="container">
    <br>
    <h2>Add Food</h2>
    <hr>

    <form>
      <div class="form-group">
        <label>Name</label>
        <input type="text" class="form-control" v-validate="'required'" v-model="item.name" name="name"  placeholder="Enter Food Name" autofocus>
        <span v-show="errors.has('name')" class="text-danger">{{ errors.first('name') }}</span>
      </div>

      <div class="form-group">
        <label>Price</label>
        <input type="number" class="form-control" v-validate="'required'" v-model="item.price" name="price"  placeholder="Enter Food Price">
        <span v-show="errors.has('price')" class="text-danger">{{ errors.first('price') }}</span>
      </div>

      <div>
        <button v-show="item.name && item.price" type="submit" class="btn btn-primary">Add Food</button>
      </div>

    </form>
  </div>
</template>


<script>

  export default {

    data(){
      return{

        item:{
          name:'',
          price:0
        }

      }
    }

  }
</script>