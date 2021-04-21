<template>
  <div id="programs">
    <p>This is Programs Page</p>
      <div>
    <b-form-select
      v-model="selected"
      :options="programs"
      class="mb-3"
      value-field="sname"
      text-field="name"
      disabled-field="notEnabled"
    ></b-form-select>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
    <div>
    <b-form-select
      v-model="selected1"
      :options="regulations"
      class="mb-3"
      value-field="departments"
      text-field="regId"
      disabled-field="notEnabled"
    ></b-form-select>

    <div class="mt-3">Selected: <strong>{{ selected1 }}</strong></div>
  </div>
    <b-form-select v-model="selected1" :options="programs.regulations" class="mb-6">
      <!-- This slot appears above the options from 'options' prop -->
      <template #second>
        <b-form-select-option :value="null" disabled>-- Please select an Department --</b-form-select-option>
      </template>
    </b-form-select>
    <div class="mt-3">Selected: <strong>{{ selected1 }}</strong></div>

  </div>
</template>

<script>
export default {
    data() {
      return {
        selected: '',
        selected1: '',
        programs: [
          { sname: 'UG', name:'Under Graduate'},
          { sname: 'PG',name: 'Post Graduate'}
        ],
        regulations: [
              { regId: 'R14', 
                  departments: [
                                    { deptId: 'EEE', name: 'Electrical and Electronics Engineering' },
                                    { deptId: 'ME', name: 'Mechanical Engineering'},
                                    { deptId: 'ECE', name:'Electonics and Communication  Engineering'},
                                    { deptId: 'CSE', name: 'Computer Science and Engineering' }
                  ]},
              { regId: 'R15'},
              { regId: 'R18'},
              { regId: 'R20'}],
        selectedProgram: null,
        selectedRegulation: null,
        selectedDepartment: null,
    }
  }
}
</script>
<style>
#programs{
  background-color: white;
}
#selection{
  padding-left: 25px;
  width: 350px;
}
</style>