<template>
    <div>
    <!-- <header>Header</header> -->
    <div class="admin-layout-content">
    <!-- sidebar  -->
 <Sidebar />
 <div class="content">
   <header>Header</header>
  <router-view/>

 </div>
    <!-- route -->
    </div>

    </div>
</template>

<script setup>

import Sidebar from '../AdminDashboard/components//SIdeBar.vue'

</script>

<style  scoped>

.admin-layout-content{
    display: flex;
height: 100vh;


}
.content{
    background:papayawhip;
    flex:1 1 0;



}
</style>