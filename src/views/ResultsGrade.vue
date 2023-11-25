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
            v-model="item.points"
            type="number"
            class="width-320 mb-20"
            @input="countNumber"
            :max="10"
            :min="1"
          />
        </div>

      </div>

      <div v-if="active" class="default__descr" :style="{background: '#fff', padding: '24px', gap: '20px'}"> 
        Бал : {{ sum }}
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
      countNumber(value) {

        this.sum = this.sum + (+value.data);
        console.log('value.srcElement._value', )
      },
      saveSettings() {
        this.active = true;
        console.log('sum', this.sum);
        
        // Здесь вы можете использовать totalPoints как угодно, например, сохранить его в хранилище Vuex или вывести на экран.
      },
    },
  data() {
    return {
      gradesData: null,
      sum: 0,
      active: null,
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
