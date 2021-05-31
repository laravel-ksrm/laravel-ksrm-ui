<template>
  <div id="batchmates">
    <p> {{ new Date().getFullYear()- joinedyear }} Year {{ branch }} Students List </p>
    <div class="table">
      <b-input-group id="search-bar">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
    <b-table
      id="my-table"
      striped hover
      :bordered="bordered"
      :items="studentDetails"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      show-empty
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      sort-icon-right
      :filter="filter"
      :filter-included-fields="filterOn"
      responsive="sm"
    ></b-table>
  <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="right"
    ></b-pagination>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods:{
    
  },
  data()
   {
     axios.get(`http://127.0.0.1:8000/api/students/1/1/`)
    .then(response =>this.studentDetails = response.data)
  .catch(error => console.log(error));
    return {
      sortBy: 'regdno',
        sortDesc: false,
        filter: null,
        studentDetails: [],
        specialization_id:1,
        regulation_id:1,
        bordered: true,
        joinedyear: 2019,
        branch: null,
        perPage: 9,
        currentPage: 1,
        fields: [
          { key: 'regdno' },
          { key: 'surname',sortable: true },
          { key: 'given_name'},
          { key: 'email',sortable: true },
          { key: 'phone'},
          { key: 'gender'},
          { key: 'join_year'}
        ],
      }
    },
    computed: {
      rows() {
        return this.studentDetails.length
      }
    }
}
</script>
<style>
#batchmates{
  padding-top: 2px;
  background-color: white;
}

.table{
  width: 100%;
}
#my-table{
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
}
#search-bar{
  width: 40%;
  margin-right: 30%;
  margin-left: 30%;
  margin-bottom: 20px;
}
</style>