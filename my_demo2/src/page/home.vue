<template>
  <div>海参炒面</div>
</template>
<script>
export default {
  data () {
    return{
      myData: ''
    }
  },
  created(){
    let url = 'http://127.0.0.1:3000/users/regist'
    // console.log(this.$axios)
    var req = {name:'test23',pwd:'123456'}
    req = JSON.stringify(req)
    this.$axios.post(req).then((response) => {
        // success
        this.myData = response.data.data;
        console.log(this.myData);
      }, (error) => {
        // error
        console.log(error)
      });
  }
}
</script>

