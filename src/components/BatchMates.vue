<template>
  <div id="batchmates">
    <p> {{ new Date().getFullYear()- joinedyear }} Year {{ branch }} Students List </p>
    <div class="table">
    <b-table
      id="my-table"
      striped hover
      :bordered="bordered"
      :items="items"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      show-empty
      responsive="true"
    ></b-table>

  </div>
  <b-pagination
      class="pagination"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      align="right"
    ></b-pagination>
  </div>
  
</template>

<script>
export default {
  data() {
      return {
        bordered: true,
        joinedyear: 2019,
        branch: 'Computer Science and Engineering',
        perPage: 10,
        currentPage: 1,
        fields: [
          { key: 'regdno'},
          { key: 'full_name'},
          { key: 'email'}
        ],
        items: [
          {"id":"1","regdno":"189Y1A0101","full_name":"ADDA SREENIVASULU","email":"189y1a0101@ksrmce.ac.in","join_year":"2018","phone":"8317545116","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0101","created_at":null,"updated_at":null},
{"id":"2","regdno":"189Y1A0102","full_name":"ADHIKARI NAVEENKUMAR","email":"189y1a0102@ksrmce.ac.in","join_year":"2018","phone":"8179742439","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0102","created_at":null,"updated_at":null},
{"id":"3","regdno":"189Y1A0103","full_name":"ADIMULAM LEELA KRISHNA YADAV","email":"189y1a0103@ksrmce.ac.in","join_year":"2018","phone":null,"is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0103","created_at":null,"updated_at":null},
{"id":"4","regdno":"189Y1A0104","full_name":"ARIKELA RAGHAVENDRA REDDY","email":"189y1a0104@ksrmce.ac.in","join_year":"2018","phone":"7731053009","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0104","created_at":null,"updated_at":null},
{"id":"5","regdno":"189Y1A0105","full_name":"ATHMAKUR CHANDRA SEKHAR REDDY","email":"189y1a0105@ksrmce.ac.in","join_year":"2018","phone":"9912186991","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0105","created_at":null,"updated_at":null},
{"id":"6","regdno":"189Y1A0106","full_name":"BACHU HIMACHANDRASEKHAR","email":"189y1a0106@ksrmce.ac.in","join_year":"2018","phone":"9849266692","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0106","created_at":null,"updated_at":null},
{"id":"7","regdno":"189Y1A0107","full_name":"BOJJA OHM SWAMI REDDY","email":"189y1a0107@ksrmce.ac.in","join_year":"2018","phone":"9849086942","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0107","created_at":null,"updated_at":null},
{"id":"8","regdno":"189Y1A0108","full_name":"BOKKASAM MAHESWARI","email":"189y1a0108@ksrmce.ac.in","join_year":"2018","phone":"9181327282","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0108","created_at":null,"updated_at":null},
{"id":"9","regdno":"189Y1A0109","full_name":"BOMMIREDDY RAMA CHANDRAREDDY","email":"189y1a0109@ksrmce.ac.in","join_year":"2018","phone":"7993050366","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0109","created_at":null,"updated_at":null},
{"id":"10","regdno":"189Y1A0110","full_name":"BONDUGALLA GHOUSE BASHA","email":"189y1a0110@ksrmce.ac.in","join_year":"2018","phone":"9885459626","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0110","created_at":null,"updated_at":null},
{"id":"11","regdno":"189Y1A0111","full_name":"BURSU VAMSI","email":"189y1a0111@ksrmce.ac.in","join_year":"2018","phone":"9703747339","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0111","created_at":null,"updated_at":null},
{"id":"12","regdno":"189Y1A0112","full_name":"LOKESH KUMAR REDDY BYSANI","email":"189y1a0112@ksrmce.ac.in","join_year":"2018","phone":"8688398947","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0112","created_at":null,"updated_at":null},
{"id":"13","regdno":"189Y1A0113","full_name":"MURALI KRISHNA CHALAM","email":"189y1a0113@ksrmce.ac.in","join_year":"2018","phone":"9182353283","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0113","created_at":null,"updated_at":null},
{"id":"14","regdno":"189Y1A0114","full_name":"CHALLA JITHENDRA REDDY","email":"189y1a0114@ksrmce.ac.in","join_year":"2018","phone":"7013331313","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0114","created_at":null,"updated_at":null},
{"id":"15","regdno":"189Y1A0115","full_name":"CHENNUBOYINA SATISH KUMAR YADAV","email":"189y1a0115@ksrmce.ac.in","join_year":"2018","phone":"7799189747","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0115","created_at":null,"updated_at":null},
{"id":"16","regdno":"189Y1A0116","full_name":"CHERUKURI KHADEER BASHA","email":"189y1a0116@ksrmce.ac.in","join_year":"2018","phone":"7702969202","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0116","created_at":null,"updated_at":null},
{"id":"17","regdno":"189Y1A0117","full_name":"CHILAMAKURU VENKATA MOHAN","email":"189y1a0117@ksrmce.ac.in","join_year":"2018","phone":"7093144003","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0117","created_at":null,"updated_at":null},
{"id":"18","regdno":"189Y1A0118","full_name":"HARISH CHINNAKOTLA","email":"189y1a0118@ksrmce.ac.in","join_year":"2018","phone":"9866578283","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0118","created_at":null,"updated_at":null},
{"id":"19","regdno":"189Y1A0119","full_name":"CHIRASANI SUNEETHA","email":"189y1a0119@ksrmce.ac.in","join_year":"2018","phone":"6305771742","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0119","created_at":null,"updated_at":null},
{"id":"20","regdno":"189Y1A0120","full_name":"CHITTIBOYINA ANILKUMAR","email":"189y1a0120@ksrmce.ac.in","join_year":"2018","phone":"7036541047","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0120","created_at":null,"updated_at":null},
{"id":"21","regdno":"189Y1A0121","full_name":"SAIKANTH DANDU","email":"189y1a0121@ksrmce.ac.in","join_year":"2018","phone":"7993053702","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0121","created_at":null,"updated_at":null},
{"id":"22","regdno":"189Y1A0122","full_name":"DAYYAM GOVARDHAN REDDY","email":"189y1a0122@ksrmce.ac.in","join_year":"2018","phone":"6305566863","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0122","created_at":null,"updated_at":null},
{"id":"23","regdno":"189Y1A0123","full_name":"DERANGULA RAMA MOHAN","email":"189y1a0123@ksrmce.ac.in","join_year":"2018","phone":"7893938303","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0123","created_at":null,"updated_at":null},
{"id":"24","regdno":"189Y1A0124","full_name":"DERANGULA SANTHOSH KUMAR","email":"189y1a0124@ksrmce.ac.in","join_year":"2018","phone":"7993799634","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0124","created_at":null,"updated_at":null},
{"id":"25","regdno":"189Y1A0125","full_name":"DEVARAPALLI SIVASANKAR REDDY","email":"189y1a0125@ksrmce.ac.in","join_year":"2018","phone":"6302286771","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0125","created_at":null,"updated_at":null},
{"id":"26","regdno":"189Y1A0126","full_name":"DUDDEKUNTA VENKATA JITHENDHAR REDDY","email":"189y1a0126@ksrmce.ac.in","join_year":"2018","phone":"9381759079","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0126","created_at":null,"updated_at":null},
{"id":"27","regdno":"189Y1A0127","full_name":"JAYA PRAKASH REDDY DUGGI REDDI","email":"189y1a0127@ksrmce.ac.in","join_year":"2018","phone":"7981778743","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0127","created_at":null,"updated_at":null},
{"id":"28","regdno":"189Y1A0128","full_name":"G Y VENKATA SAINATH REDDY","email":"189y1a0128@ksrmce.ac.in","join_year":"2018","phone":"7799093932","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0128","created_at":null,"updated_at":null},
{"id":"29","regdno":"189Y1A0129","full_name":"ARAVINDA REDDY GADDAM","email":"189y1a0129@ksrmce.ac.in","join_year":"2018","phone":"6304042371","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0129","created_at":null,"updated_at":null},
{"id":"30","regdno":"189Y1A0130","full_name":"GADDAM PREMKUMAR","email":"189y1a0130@ksrmce.ac.in","join_year":"2018","phone":"8500825519","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0130","created_at":null,"updated_at":null},
{"id":"31","regdno":"189Y1A0132","full_name":"GUDDILA LAKSHMI PRASAD REDDY","email":"189y1a0132@ksrmce.ac.in","join_year":"2018","phone":"9133098964","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0132","created_at":null,"updated_at":null},
{"id":"32","regdno":"189Y1A0133","full_name":"GUDURU AJAY KUMAR","email":"189y1a0133@ksrmce.ac.in","join_year":"2018","phone":"7288070620","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0133","created_at":null,"updated_at":null},
{"id":"33","regdno":"189Y1A0134","full_name":"GUNIGARI NITHEESH","email":"189y1a0134@ksrmce.ac.in","join_year":"2018","phone":"7981060893","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0134","created_at":null,"updated_at":null},
{"id":"34","regdno":"189Y1A0135","full_name":"HASTI SREEVENI","email":"189y1a0135@ksrmce.ac.in","join_year":"2018","phone":"9966626253","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0135","created_at":null,"updated_at":null},
{"id":"35","regdno":"189Y1A0136","full_name":"KRISHNA MOHAN REDDY INDLA VENKATA","email":"189y1a0136@ksrmce.ac.in","join_year":"2018","phone":"7013066035","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0136","created_at":null,"updated_at":null},
{"id":"36","regdno":"189Y1A0137","full_name":"JAMALLA GANGARAJU","email":"189y1a0137@ksrmce.ac.in","join_year":"2018","phone":"7660848360","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0137","created_at":null,"updated_at":null},
{"id":"37","regdno":"189Y1A0138","full_name":"JAMBARAPU BALA KISHORE","email":"189y1a0138@ksrmce.ac.in","join_year":"2018","phone":"8616428973","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0138","created_at":null,"updated_at":null},
{"id":"38","regdno":"189Y1A0139","full_name":"JONNAGIRI ARAVINDU","email":"189y1a0139@ksrmce.ac.in","join_year":"2018","phone":"9666607086","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0139","created_at":null,"updated_at":null},
{"id":"39","regdno":"189Y1A0140","full_name":"JYOTHI JAHNAVI","email":"189y1a0140@ksrmce.ac.in","join_year":"2018","phone":"6309547207","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0140","created_at":null,"updated_at":null},
{"id":"40","regdno":"189Y1A0141","full_name":"KAIPU UDAY KUMAR","email":"189y1a0141@ksrmce.ac.in","join_year":"2018","phone":"9502769638","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0141","created_at":null,"updated_at":null},
{"id":"41","regdno":"189Y1A0142","full_name":"KALLURI VENKATA SACHIN REDDY","email":"189y1a0142@ksrmce.ac.in","join_year":"2018","phone":"6301242075","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0142","created_at":null,"updated_at":null},
{"id":"42","regdno":"189Y1A0143","full_name":"SIREESHA  KAMISETTY","email":"189y1a0143@ksrmce.ac.in","join_year":"2018","phone":"7675833489","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0143","created_at":null,"updated_at":null},
{"id":"43","regdno":"189Y1A0144","full_name":"KANNAPU BHANUMANIKANTA REDDY","email":"189y1a0144@ksrmce.ac.in","join_year":"2018","phone":"9160641919","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0144","created_at":null,"updated_at":null},
{"id":"44","regdno":"189Y1A0145","full_name":"SAI MALLIKARJUNA REDDY KARNATI","email":"189y1a0145@ksrmce.ac.in","join_year":"2018","phone":"9618825467","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0145","created_at":null,"updated_at":null},
{"id":"45","regdno":"189Y1A0146","full_name":"KAVETI GOVARDHAN","email":"189y1a0146@ksrmce.ac.in","join_year":"2018","phone":"6304285691","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0146","created_at":null,"updated_at":null},
{"id":"46","regdno":"189Y1A0147","full_name":"SHAHBAAZ ALI KHAN KHOKAR MD","email":"189y1a0147@ksrmce.ac.in","join_year":"2018","phone":"9100410047","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0147","created_at":null,"updated_at":null},
{"id":"47","regdno":"189Y1A0148","full_name":"KOPPOLI SUNIL KUMAR","email":"189y1a0148@ksrmce.ac.in","join_year":"2018","phone":null,"is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0148","created_at":null,"updated_at":null},
{"id":"48","regdno":"189Y1A0149","full_name":"KOTTAM YASWANTH","email":"189y1a0149@ksrmce.ac.in","join_year":"2018","phone":"8367009408","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0149","created_at":null,"updated_at":null},
{"id":"49","regdno":"189Y1A0150","full_name":"LOKESWAR REDDY KUDAMALA","email":"189y1a0150@ksrmce.ac.in","join_year":"2018","phone":"6300091141","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0150","created_at":null,"updated_at":null},
{"id":"50","regdno":"189Y1A0151","full_name":"KUDUMULA NANDA KUMAR REDDY","email":"189y1a0151@ksrmce.ac.in","join_year":"2018","phone":"6303477017","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0151","created_at":null,"updated_at":null},
{"id":"51","regdno":"189Y1A0152","full_name":"HARI JASWANTH KUMMARA","email":"189y1a0152@ksrmce.ac.in","join_year":"2018","phone":"9133252482","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0152","created_at":null,"updated_at":null},
{"id":"52","regdno":"189Y1A0153","full_name":"LAMBU VENKATAIAH","email":"189y1a0153@ksrmce.ac.in","join_year":"2018","phone":"9381375852","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0153","created_at":null,"updated_at":null},
{"id":"53","regdno":"189Y1A0154","full_name":"SAI SRAVAN KUMAR REDDY LEVAKU","email":"189y1a0154@ksrmce.ac.in","join_year":"2018","phone":"9154623616","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0154","created_at":null,"updated_at":null},
{"id":"54","regdno":"189Y1A0155","full_name":"LINGAMDINNE VEERA VENKATA VARAPRASAD REDDY","email":"189y1a0155@ksrmce.ac.in","join_year":"2018","phone":"9052098379","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0155","created_at":null,"updated_at":null},
{"id":"55","regdno":"189Y1A0156","full_name":"MAADAM SUDHEER KUMAR","email":"189y1a0156@ksrmce.ac.in","join_year":"2018","phone":"7032001423","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0156","created_at":null,"updated_at":null},
{"id":"56","regdno":"189Y1A0157","full_name":"MAJJARI SHIVA SHANKAR","email":"189y1a0157@ksrmce.ac.in","join_year":"2018","phone":"7799684809","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0157","created_at":null,"updated_at":null},
{"id":"57","regdno":"189Y1A0158","full_name":"MALLIREDDY LOKESHWAR REDDY","email":"189y1a0158@ksrmce.ac.in","join_year":"2018","phone":"7680863130","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0158","created_at":null,"updated_at":null},
{"id":"58","regdno":"189Y1A0159","full_name":"MANDLA GANESH","email":"189y1a0159@ksrmce.ac.in","join_year":"2018","phone":"9912157081","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0159","created_at":null,"updated_at":null},
{"id":"59","regdno":"189Y1A0160","full_name":"MANGALA KARTHIK KUMAR","email":"189y1a0160@ksrmce.ac.in","join_year":"2018","phone":"9494748024","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0160","created_at":null,"updated_at":null},
{"id":"60","regdno":"189Y1A0161","full_name":"MARUBOYANA SAI KARTHIK","email":"189y1a0161@ksrmce.ac.in","join_year":"2018","phone":"9515290796","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0161","created_at":null,"updated_at":null},
{"id":"61","regdno":"189Y1A0162","full_name":"GOVARDHAN REDDY MEEGADA","email":"189y1a0162@ksrmce.ac.in","join_year":"2018","phone":"9182920233","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0162","created_at":null,"updated_at":null},
{"id":"62","regdno":"189Y1A0163","full_name":"MEKA SAMPATH KUMAR","email":"189y1a0163@ksrmce.ac.in","join_year":"2018","phone":"9581061531","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0163","created_at":null,"updated_at":null},
{"id":"63","regdno":"189Y1A0165","full_name":"MITTA PURUSHOTHAM REDDY","email":"189y1a0165@ksrmce.ac.in","join_year":"2018","phone":"7702615827","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0165","created_at":null,"updated_at":null},
{"id":"64","regdno":"189Y1A0166","full_name":"SIVA PRASAD REDDY MITTA","email":"189y1a0166@ksrmce.ac.in","join_year":"2018","phone":"7569423748","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0166","created_at":null,"updated_at":null},
{"id":"65","regdno":"189Y1A0167","full_name":"KRUPA SAGAR MOTHUKURI","email":"189y1a0167@ksrmce.ac.in","join_year":"2018","phone":"9030806034","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0167","created_at":null,"updated_at":null},
{"id":"66","regdno":"189Y1A0168","full_name":"MULLA MAHAMMAD AZEEZ","email":"189y1a0168@ksrmce.ac.in","join_year":"2018","phone":"9515219418","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0168","created_at":null,"updated_at":null},
{"id":"67","regdno":"189Y1A0169","full_name":"RAMAKANTH REDDY MUTHYALA","email":"189y1a0169@ksrmce.ac.in","join_year":"2018","phone":"8309108262","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0169","created_at":null,"updated_at":null},
{"id":"68","regdno":"189Y1A0170","full_name":"NAGALARAPU NIHARIKA","email":"189y1a0170@ksrmce.ac.in","join_year":"2018","phone":"7569397974","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0170","created_at":null,"updated_at":null},
{"id":"69","regdno":"189Y1A0171","full_name":"NAGALLA PATI VENKATA SAI POOJITH","email":"189y1a0171@ksrmce.ac.in","join_year":"2018","phone":"6304246520","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0171","created_at":null,"updated_at":null},
{"id":"70","regdno":"189Y1A0172","full_name":"NAGIRIKANTI VENKATESH","email":"189y1a0172@ksrmce.ac.in","join_year":"2018","phone":"9573836082","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0172","created_at":null,"updated_at":null},
{"id":"71","regdno":"189Y1A0173","full_name":"SIVA REDDY NALAVALA","email":"189y1a0173@ksrmce.ac.in","join_year":"2018","phone":"6302665180","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0173","created_at":null,"updated_at":null},
{"id":"72","regdno":"189Y1A0174","full_name":"MAHESH NALLANUKALA","email":"189y1a0174@ksrmce.ac.in","join_year":"2018","phone":"7095652744","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0174","created_at":null,"updated_at":null},
{"id":"73","regdno":"189Y1A0175","full_name":"NANUBALA ABHISH","email":"189y1a0175@ksrmce.ac.in","join_year":"2018","phone":"8297940744","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0175","created_at":null,"updated_at":null},
{"id":"74","regdno":"189Y1A0176","full_name":"NAGA NAVEEN YADAV NUKANABOINA","email":"189y1a0176@ksrmce.ac.in","join_year":"2018","phone":"9908170199","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0176","created_at":null,"updated_at":null},
{"id":"75","regdno":"189Y1A0177","full_name":"PAGATI RAGASRAVANI","email":"189y1a0177@ksrmce.ac.in","join_year":"2018","phone":null,"is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0177","created_at":null,"updated_at":null},
{"id":"76","regdno":"189Y1A0178","full_name":"PAMALLA NITHISH CHAND","email":"189y1a0178@ksrmce.ac.in","join_year":"2018","phone":"9550988018","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0178","created_at":null,"updated_at":null},
{"id":"77","regdno":"189Y1A0179","full_name":"JAYACHANDRA SAI PANDUGOLU","email":"189y1a0179@ksrmce.ac.in","join_year":"2018","phone":"8247853440","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0179","created_at":null,"updated_at":null},
{"id":"78","regdno":"189Y1A0180","full_name":"GANGAKISHORE YADAV PANGA","email":"189y1a0180@ksrmce.ac.in","join_year":"2018","phone":"7780313438","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0180","created_at":null,"updated_at":null},
{"id":"79","regdno":"189Y1A0181","full_name":"PARIMISETTI MUNI KUMAR","email":"189y1a0181@ksrmce.ac.in","join_year":"2018","phone":"9052163628","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0181","created_at":null,"updated_at":null},
{"id":"80","regdno":"189Y1A0182","full_name":"NARASIMHA REDDY PARLAPALLI","email":"189y1a0182@ksrmce.ac.in","join_year":"2018","phone":"8688169187","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0182","created_at":null,"updated_at":null},
{"id":"81","regdno":"189Y1A0183","full_name":"SIVA SAI PASUPULETI","email":"189y1a0183@ksrmce.ac.in","join_year":"2018","phone":"6300382321","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0183","created_at":null,"updated_at":null},
{"id":"82","regdno":"189Y1A0184","full_name":"YOUSUF ALI KHAN PATHAN SUHAIL","email":"189y1a0184@ksrmce.ac.in","join_year":"2018","phone":"8179104806","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0184","created_at":null,"updated_at":null},
{"id":"83","regdno":"189Y1A0185","full_name":"PATIL PRAVEEN KUMAR","email":"189y1a0185@ksrmce.ac.in","join_year":"2018","phone":"7842753302","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0185","created_at":null,"updated_at":null},
{"id":"84","regdno":"189Y1A0186","full_name":"MOHAMMAD NASEER PEDDADEVARA","email":"189y1a0186@ksrmce.ac.in","join_year":"2018","phone":"6305351828","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0186","created_at":null,"updated_at":null},
{"id":"85","regdno":"189Y1A0187","full_name":"PENUBALA RAKESH PRASANNA","email":"189y1a0187@ksrmce.ac.in","join_year":"2018","phone":"7093696815","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0187","created_at":null,"updated_at":null},
{"id":"86","regdno":"189Y1A0188","full_name":"PETLI PRAVEEN","email":"189y1a0188@ksrmce.ac.in","join_year":"2018","phone":"7075438294","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0188","created_at":null,"updated_at":null},
{"id":"87","regdno":"189Y1A0189","full_name":"PIRRALA NAGA SAI","email":"189y1a0189@ksrmce.ac.in","join_year":"2018","phone":"9676562723","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0189","created_at":null,"updated_at":null},
{"id":"88","regdno":"189Y1A0190","full_name":"POCHIMIREDDY PRUDHVINATH REDDY","email":"189y1a0190@ksrmce.ac.in","join_year":"2018","phone":"7680855103","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0190","created_at":null,"updated_at":null},
{"id":"89","regdno":"189Y1A0191","full_name":"POMAR PAVAN KALYAN","email":"189y1a0191@ksrmce.ac.in","join_year":"2018","phone":"7013279948","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0191","created_at":null,"updated_at":null},
{"id":"90","regdno":"189Y1A0192","full_name":"VENKATA VAMSI POTHURAJU","email":"189y1a0192@ksrmce.ac.in","join_year":"2018","phone":"8341660326","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0192","created_at":null,"updated_at":null},
{"id":"91","regdno":"189Y1A0193","full_name":"RACHAMALLU BINDHU","email":"189y1a0193@ksrmce.ac.in","join_year":"2018","phone":"6304374302","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0193","created_at":null,"updated_at":null},
{"id":"92","regdno":"189Y1A0194","full_name":"SALE NEERAJ","email":"189y1a0194@ksrmce.ac.in","join_year":"2018","phone":"9949455868","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0194","created_at":null,"updated_at":null},
{"id":"93","regdno":"189Y1A0195","full_name":"SEELAM SWARNA LATHA","email":"189y1a0195@ksrmce.ac.in","join_year":"2018","phone":"7680067271","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0195","created_at":null,"updated_at":null},
{"id":"94","regdno":"189Y1A0197","full_name":"HUSSAIN SHAIK ADIL","email":"189y1a0197@ksrmce.ac.in","join_year":"2018","phone":"6281793856","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0197","created_at":null,"updated_at":null},
{"id":"95","regdno":"189Y1A0198","full_name":"SHAIK AFROZ","email":"189y1a0198@ksrmce.ac.in","join_year":"2018","phone":"7780653759","is_lateral_entry":"0","social_category":"OC","admission_category":"CONVENER","residency":"DAYS","gender":"OTHER","specialization_id":"1","regulation_id":"R18UG","password":"189Y1A0198","created_at":null,"updated_at":null},

        ],
        itemsq:[
          { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 3, first_name: 'Barney', last_name: 'Rubble' },
          { id: 4, first_name: 'Betty', last_name: 'Rubble' },
          { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
          { id: 10, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 11, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 12, first_name: 'Barney', last_name: 'Rubble' },
          { id: 13, first_name: 'Betty', last_name: 'Rubble' },
          { id: 14, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 15, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 16, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 17, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 18, first_name: 'Pearl', last_name: 'Slaghoople' },
          { id: 19, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 20, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 21, first_name: 'Barney', last_name: 'Rubble' },
          { id: 22, first_name: 'Betty', last_name: 'Rubble' },
          { id: 23, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 24, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 25, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 26, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 27, first_name: 'Pearl', last_name: 'Slaghoople' },
          { id: 28, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 29, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 30, first_name: 'Barney', last_name: 'Rubble' },
          { id: 31, first_name: 'Betty', last_name: 'Rubble' },
          { id: 32, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 33, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 34, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 35, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 36, first_name: 'Pearl', last_name: 'Slaghoople' },
          { id: 37, first_name: 'Fred', last_name: 'Flintstone' },
          { id: 38, first_name: 'Wilma', last_name: 'Flintstone' },
          { id: 39, first_name: 'Barney', last_name: 'Rubble' },
          { id: 40, first_name: 'Betty', last_name: 'Rubble' },
          { id: 41, first_name: 'Pebbles', last_name: 'Flintstone' },
          { id: 42, first_name: 'Bamm Bamm', last_name: 'Rubble' },
          { id: 43, first_name: 'The Great', last_name: 'Gazzoo' },
          { id: 44, first_name: 'Rockhead', last_name: 'Slate' },
          { id: 45, first_name: 'Pearl', last_name: 'Slaghoople' }
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
}
</script>
<style scoped>
#batchmates{
  padding-top: 2px;
  background-color: white;
}
.pagination{
  right: 20px;
}
.table{
  max-width: 80%;
  min-width: 300px;
  margin-left: 10%;
  margin-right: 10%;
}
#my-table{
  
}
</style>