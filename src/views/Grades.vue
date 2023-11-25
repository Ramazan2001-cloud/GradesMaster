<template>
  <a-layout class="container">
    <TheHeader />
    <div class="grades border-rounded">
      <div class="default__title">Грейды сотрудников</div>
    </div>  
  </a-layout>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
  export default {
    name: 'GradesPage',
    components: {
      TheHeader,
    }
  }
</script>

<style lang="scss" scoped>
.grades{
  background-color: #fff;
  padding: 20px;
}
</style>