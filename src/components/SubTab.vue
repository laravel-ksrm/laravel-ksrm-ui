<template>
    <div class="mt-4">
        <p>lhadkjfh</p>
        <div class="flex items-center">
            <label for="branch" class="w-32">Subject</label>
            <div class="relative" v-if="subjects.length > 0">
                <b-form-select v-if="subjects.length>1" v-model="selectedDept" class="mb-3" disabled-field="notEnabled" :options="subjects" value-field="id" text-field="name"><template v-slot:first><b-form-select-option :value= null disabled selected>Please select a Specialization</b-form-select-option></template></b-form-select>
            <p v-else class="pt-1 text-light ">Not Found</p>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            <div v-else>
                <span>Not found</span>
            </div>
        </div>
    </div>
    
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
        }
    },
    created(){
        axios.get(`http://127.0.0.1:8000/api/subject`)
        .then(responce => this.subjects = responce.data)
        .catch(responce => console.log(responce.console.error()))
    }
    
}
</script>
<style>

</style>