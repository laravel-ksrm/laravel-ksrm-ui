<template>
  <div id="Profile">
    <p>This is Profile page</p>
  </div>
  
</template>

<script>
export default {}
</script>
<style scoped>
#Profile{
  background-color: white;
}
</style>
<!-- 
<template>
  <div id="programs">
    <p>This is Programs Page</p>
      <div>
    <b-form-select
      v-model="selected"
      :options="programs"
      class="mb-3"
      value-field="id"
      text-field="name"
      value="Select one option"
      disabled-field="notEnabled"
    ></b-form-select>

    <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        selected: '',
        programs: [
          { id: '1', name: 'UG'},
          { id: '2', name: 'PG'}
        ],
        programs1:[
          {
            programs: 'UG',
            regulations: ['R14','R15','R18','R20'],
            departments: [
              {
                R14 : [
                  { deptId: 'CE', name: 'Civil Engineering'},
          { deptId: 'EEE', name: 'Electrical and Electronics Engineering' },
          { deptId: 'ME', name: 'Mechanical Engineering'},
          { deptId: 'ECE', name:'Electonics and Communication  Engineering'},
          { deptId: 'CSE', name: 'Computer Science and Engineering' }
                ],
                R15 : [
                  { deptId: 'CE', name: 'Civil Engineering'},
          { deptId: 'EEE', name: 'Electrical and Electronics Engineering' },
          { deptId: 'ME', name: 'Mechanical Engineering'},
          { deptId: 'ECE', name:'Electonics and Communication  Engineering'},
          { deptId: 'CSE', name: 'Computer Science and Engineering' }
                ],
                R18 : [
                  { deptId: 'CE', name: 'Civil Engineering'},
          { deptId: 'EEE', name: 'Electrical and Electronics Engineering' },
          { deptId: 'ME', name: 'Mechanical Engineering'},
          { deptId: 'ECE', name:'Electonics and Communication  Engineering'},
          { deptId: 'CSE', name: 'Computer Science and Engineering' }
                ],
                R20 : [
                  { deptId: 'CE', name: 'Civil Engineering'},
          { deptId: 'EEE', name: 'Electrical and Electronics Engineering' },
          { deptId: 'ME', name: 'Mechanical Engineering'},
          { deptId: 'ECE', name:'Electonics and Communication  Engineering'},
          { deptId: 'CSE', name: 'Computer Science and Engineering' }
                ],
              }
            ]
          },
          {
            programs: 'PG',
            regulations: ['R14','R18'],
            departments: [
              {
                R14 : [
                  { deptId: 'CE', name: 'Civil Engineering'},
          { deptId: 'EEE', name: 'Electrical and Electronics Engineering' },
          { deptId: 'ME', name: 'Mechanical Engineering'},
          { deptId: 'ECE', name:'Electonics and Communication  Engineering'},
          { deptId: 'CSE', name: 'Computer Science and Engineering' }
                ],
                R18 : [
                  { deptId: 'CE', name: 'Civil Engineering'},
          { deptId: 'EEE', name: 'Electrical and Electronics Engineering' },
          { deptId: 'ME', name: 'Mechanical Engineering'},
          { deptId: 'ECE', name:'Electonics and Communication  Engineering'},
          { deptId: 'CSE', name: 'Computer Science and Engineering' }
                ]
              }
            ]
          }
        ],
        selectedProgram: null,
        selectedRegulation: null,
        selectedDepartment: null,
        regulations: []
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
-->