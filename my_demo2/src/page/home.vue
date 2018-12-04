<template>
  <div>海参炒面123</div>
</template>
<script>
import { test } from "../fetchData/user"
export default {
  data () {
    return{
      myData: ''
    }
  },
  async created(){
    let val = await test()
    console.log(val)
    // let url = 'http://192.168.4.42:3000/users/userinfo'
    // // console.log(this.$axios)
    // var req = {}
    // req = JSON.stringify(req)
    // this.$axios.post(url, req).then((response) => {
    //     // success
    //     this.myData = response.data.data;
    //     console.log(this.myData);
    //   }, (error) => {
    //     // error
    //     console.log(error)
    //   });
  }
}
</script>

