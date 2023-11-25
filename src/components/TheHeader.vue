<template>
    <a-layout-header class="container border-rounded"> 
      <ul class="d-flex gap-15">
        <li class="default__item">
          <div class="default__title">
            GRADE MASTER - logo
          </div>
        </li>
        <li class="default__item">
          <router-link to="/settings-grade" class="default__link default__descr">
            настройка компетенции
          </router-link>
        </li>
        <li class="default__item">
          <router-link to="/results-grade" class="default__link default__descr">
            результат
          </router-link>
        </li>
        <li class="default__item">
          <router-link to="/grades" class="default__link default__descr">
            грейды
          </router-link>
        </li>
      </ul>
    </a-layout-header>
</template>

<script scoped> 
  export default {
    components: {
         
    }
  }
</script>

<style lang="scss" scoped>
.ant-layout-header {
  margin: 20px 0;
  background-color: #fff;
}
</style>