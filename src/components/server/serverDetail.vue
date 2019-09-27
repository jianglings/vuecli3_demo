<template>
  <div class="col-xs-12 col-sm-6">
       <ul class="list-group">
            <li class="list-group-item" v-for="index in 5" :key="index" > 服务器#未启动</li>
        </ul>
    <!-- <p>服务器没有启动</p> -->
  </div>
</template>

<script>
export default {};
</script>


<style scoped>

div {
  border: 1px solid #ccc;
  text-align: center;
}
</style>