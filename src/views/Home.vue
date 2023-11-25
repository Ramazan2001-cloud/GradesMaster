<template>
  <div class="main">
      <div class="main-content border-rounded">
          <div class="default__title mb-15">Добро пожаловать в</div>
          <div class="default__title mb-15">Grade Master </div>
          <div class="default__descr mb-15">Платформа для грейдации, тестирования, обучения и развития сотрудников</div>
          <RouterLink to="/settings-grade" class="main-button">
            ПЕРЕЙТИ
          </RouterLink>
      </div>
  </div>
</template>

<script scoped>
  export default {
      name: 'HomePage'
  }
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/images/main.jpeg');
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-content {
  background-color: #6e5773;
  width: 450px;
  color: #fff;
  padding: 30px;
  text-align: center;
} 
.main-button {
  background-color: #fff;
  color: #6e5773;
  padding: 10px;
  text-decoration: none;
  border-radius: 10px;
  display: block;
}
</style>