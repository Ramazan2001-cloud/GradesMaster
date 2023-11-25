<template>
  <a-layout class="container">
    <TheHeader />
    <a-layout-content>
      <div :style="{ background: '#fff', padding: '24px'}">
        <div class="default__title mb-20">Выберите спец. сотрудника</div>
        <a-select
          ref="select"
          v-model:value="value1"
          @focus="focus"
          @change="handleChange"
          class="width-320"
        >
          <a-select-option value="Front-end разработчик">Front-end разработчик</a-select-option>
          <a-select-option value="Back-end разработчик">Back-end разработчик</a-select-option>
          <a-select-option value="QA - специалист">QA - специалист</a-select-option>
          <a-select-option value="UX/UI дизайнер">UX/UI дизайнер</a-select-option>
          <a-select-option value="Менеджер по продажам">Менеджер по продажам</a-select-option>
          <a-select-option value="Data аналитик">Data аналитик</a-select-option>
          <a-select-option value="Менеджер по логистике">Менеджер по логистике</a-select-option>
        </a-select>
      </div>

      <div v-if="all_skills.length" :style="{ background: '#fff', padding: '24px', height: 'auto'}">
        <div class="default__title mb-20">Компетенции :</div>
        <ul class="spec-list">
          <li v-for="item of all_skills" :key="item.id" class="spec-item default__descr">
            {{ item.name }}
            <a-button @click="removeSkill(item)" type="danger" size="small">
              <DeleteOutlined />
            </a-button>
          </li>
        </ul>
      </div>  

      <div :style="{ background: '#fff', padding: '24px'}">
        <div class="default__title mb-20">Категория расчета</div>
        <a-select
          ref="select"
          v-model:value="value2"
          @focus="focus"
          @change="handleSelectChange"
          class="width-320"
        >
          <a-select-option value="Средний балл">Средний балл</a-select-option>
          <a-select-option value="Взвешенный средний балл">Взвешенный средний балл</a-select-option>
          <a-select-option value="Метод процентов">Метод процентов</a-select-option>
        </a-select>
      </div>

      <div :style="{ background: '#fff', padding: '24px', height: 'auto'}">
        <div class="default__title mb-20">Добавить компетенцию:</div>
        <a-input
          @pressEnter="pressEnter"
          class="width-320"
        />

        <a-button :style="{marginLeft: '10px',}">
          <PlusOutlined />
        </a-button>

      </div>

      <div :style="{ background: '#fff', padding: '24px', height: 'auto'}">
        <a-button  @click="saveSettings" :style="{marginLeft: '10px',}">
          Сохранить
        </a-button>
      </div>

    </a-layout-content>
  </a-layout>
</template>

<script scoped>
// eslint-disable-next-line vue/no-unused-components
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons-vue';
import TheHeader from '@/components/TheHeader.vue';
import { skills } from '@/data/skills';

import { mapActions } from 'vuex';

export default {
  name: 'SettingsGrade',
  data() {
    return {
      specialization: '',
      competence: skills,
      all_skills: [],

      gradesSettings: { // нужно просто добавить этот обьект при клике на осхранить !!!!
        specialization: {
          name: '',
          list: [],
        },
        category_calculation: ''
      },
    }
  },
  components: {
    TheHeader,
    DeleteOutlined,
    PlusOutlined,
  },

  watch: {
    all_skills(value) {
      this.gradesSettings.specialization.list = value;
    },

  },
  methods: {
    ...mapActions('addGrades', ['addGrades']),
    handleChange(value) {
      this.specialization = value;
      this.competence.filter(item => {
        if (item.name === value) {
          this.gradesSettings.specialization.name = value;
          // this.gradesSettings.specialization.list = item.skills;
          this.all_skills = item.skills;
        }
      });
    },

    handleSelhandleSelectChangeectChange(value) {
      this.category_calculation = value
    },

    pressEnter(value) {
      this.competence.filter(item => {
        if (item.name === this.specialization) {
          this.all_skills.push({id: 23, name: value.srcElement._value, category: 'soft-skills',});
        }
      });
    },

    removeSkill(skill) {
      const index = this.all_skills.indexOf(skill);
      if (index !== -1) {
        this.all_skills.splice(index, 1);
      }
    },

    
    saveSettings() {
      this.addGrades(this.gradesSettings);
    },
  }
}
</script>

<style>
.ant-layout-content {
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 20px;
}

.ant-select-selector:hover, .ant-select-selector:focus-within {
  border: 1px solid #6e5773 !important;
}

.ant-input {
  font-size: 18px;
}


/* .ant-select-focused.ant-select:not(.ant-select-customize-input) .ant-select-selector {
  border-color: #6e5773;
  box-shadow: 0 0 0 2px rgba(110, 87, 115, 0.2);
} */

.spec-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.spec-item {
  
}

</style>
