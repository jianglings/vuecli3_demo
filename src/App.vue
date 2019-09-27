<template>

<div class="container">
   <app-header></app-header>
   <hr>
   <div class="row">
     <app-server></app-server>
    <app-server-detail></app-server-detail>
    </div>
    <hr>
    <app-footer></app-footer>
</div>
</template>


<script>
// import HelloWorld from './components/HelloWorld.vue'
import server from './components/server/server.vue'
import serverDetail from './components/server/serverDetail.vue'

export default {
  name: 'app',
  components: {
    'app-server':server,
    'app-server-detail':serverDetail,
  }
}
</script>

<style>

</style>
