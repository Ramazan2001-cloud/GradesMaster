<template>
  <a-layout class="container">
    <TheHeader />
    <div class="results-content border-rounded">
      <div :style="{ background: '#fff', padding: '24px', height: 'auto'}">
        <div class="default__title mb-20">Компания</div>
        <a-input
          @pressEnter="pressEnter"
          class="width-320"
        />  
      </div>
      <div :style="{ background: '#fff', padding: '24px', height: 'auto'}">
        <div class="default__title mb-20">ФИО</div>
        <a-input
          @pressEnter="pressEnter"
          class="width-320"
        />  
      </div>
      <div :style="{ background: '#fff', padding: '24px', height: 'auto'}">
        <div class="default__title mb-20">Специальность</div>
        <a-input
          @pressEnter="pressEnter"
          class="width-320"
        />    
      </div>


      <div class="grades-list grades-list" v-if="gradesData?.specialization?.list?.length" :style="{background: '#fff', padding: '24px', gap: '20px'}">

        <div class="default__title mb-20">
          {{ gradesData?.specialization?.name }}
        </div>

        <div class="default__descr" v-for="item of gradesData?.specialization?.list" :key="item.id">
          <div class="default__descr mb-20">
            {{  item.name }}
          </div>
          <a-input
            class="width-320 mb-20"
          />
        </div>

      </div>

      <div :style="{ background: '#fff', padding: '24px', height: 'auto'}">
        <a-button  @click="saveSettings" :style="{marginLeft: '10px',}">
            Сохранить
        </a-button>
      </div>

    </div>
  </a-layout>
</template>

<script scoped>
  import TheHeader from '@/components/TheHeader.vue';
  import { mapGetters } from 'vuex';

  export default {
    name: 'ResultsGrade',
    components: {
      TheHeader,
    },
    methods: {
      ...mapGetters('getGradesSettings'),
  },
  data() {
    return {
         gradesData: null,
      }
    },
    watch: {
      
    },
    mounted() {
      console.log('getGradesSettings', this.getGradesSettings);
      this.gradesData = JSON.parse(localStorage.getItem('datagrades'));
      console.log(this.gradesData);
    }
  }
</script>

<style lang="scss" scoped>
.results-content {
  padding: 20px;
  background-color: #fff;
  margin-bottom: 20px;
}

.ant-input {
  font-size: 18px;
}
.ant-input:hover {
  border: 1px solid #6e5773 !important;
}

.item {
  border: 1px solid #6e5773;
  border-radius: 4px;
  padding: 5px;
}

.grades-list {
  height: 400px;
  overflow-y: scroll;
}

</style>
