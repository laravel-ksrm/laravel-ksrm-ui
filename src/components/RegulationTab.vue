<template>
<div id="regulations">
    
        <div id="title"><b>
            KSRM College of Engineering (Autonomuos), Kadapa-516003, AP <br>
                                {{ regulation.name }} ( {{regulation.short_name}} ) <br>
                            (Effective from {{regulation.start_year}}) </b>
                            <br>
            <b-form-select
      v-model="selectedItem"
      class="mb-3 col-5 select"
      disabled-field="notEnabled"
      :options="items"
      value-field="sname"
      text-field="name"
    ><template v-slot:first>
        <b-form-select-option :value= null disabled selected>Please select an Option</b-form-select-option>
      </template></b-form-select>
      <div class="" v-if="selectedItem == 1">
        <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p>
        <p style="text-align:left">
            <ol>
                <li> <b>Academic Year: </b> Period of academic instruction of, approximately, one year
duration that usually starts in June/July and ends in April/May next. </li>
                <li> <b>Semester:</b>  Either of two divisions of an academic year. </li>
                <li> <b>Major: </b> A specific field of study. Example: Civil Engineering. </li>
                <li> <b>Minor:</b> An area outside of, or complementary to, a Major. Example: For Civil
Engineering major, Computer Science is a minor and vice versa. </li>
                <li> <b>Subject:</b> An area of knowledge that is studied as part of a Course. </li>
                <li> <b>Core:</b> A subject that is mandatory for a Major course of study. </li>
                <li> <b>Elective:</b> A subject that is selected for study to suit one’s individual needs</li>
                <li> <b> Audit Subject:</b> A subject that is studied to meet certain requirements but has no
credits assigned to it. </li>
                <li> <b>Self-Study Subject: </b>A subject that is learnt by a student on own under the
guidance of a Faculty member. </li>
                <li> <b>Humanities:</b> Subjects that describe and interpret human achievements,
problems and historical changes at individual and societal levels covering the
disciplines of literature, history, and philosophy. </li>
                <li> <b>Social Sciences:</b> Subjects that describe the mental and behavioural activities of
individuals, groups, organizations, institutions, and nations covering the
disciplines of anthropology, economics, linguistics, political science, and
psychology. </li>
                <li> <b>Exam:</b> A test to measure one’s progress, knowledge, or ability in a subject. </li>
                <li> <b>Credit:</b> A numerical weight given to a subject. </li>
                <li> <b>Grade:</b> A numerical or alphabetic designation measuring the level of
achievement in an exam.</li>
                <li> <b>Attendance:</b> Physical presence of oneself in a classroom/laboratory for
purpose of a scheduled academic instruction. </li>
                <li> <b>Course:</b> A series of subjects that constitute a Major field of study. </li>
                <li> <b>Branch:</b>  Same as Course. </li>
                <li> <b>Program:</b> Same as Course. </li>
                <li> <b>Degree:</b> An academic title conferred to honour distinguished achievement. </li>
            </ol>
        </p>
    </div>
    <div v-else-if="selectedItem == 2" >
      <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p>
      <p style="text-align:left">
        <ol>
          <li>These rules and regulations may be called as {{ regulation.short_name  }} and come into force
from Academic Year {{ regulation.start_year }} and exist until superseded by new regulations.
These rules are applicable for students who join the institute from academic
year {{ regulation.start_year }} onwards. Students who have joined in earlier regulations will
continue in their respective regulations.</li>
          <li>These rules and regulations are applicable to all {{ programLevel[program_level-1].name }} courses in
engineering and technology leading to {{ regulation.program.name}} ({{ regulation.program.short_name}}).
</li>
          <li>The Major courses offered, at present, are: <b>
            <ul style="list-style-type: circle" v-for="courses in regulation.program.specializations" :key="courses.name">
              <li>{{ courses.name }} - {{courses.short_name}}</li>
            </ul> </b>
          </li>
          <li>The Institute may offer new Majors  in future to which these rules and
regulations will be applicable.</li>
        </ol>
      </p>
    </div>
    <div v-else-if="selectedItem == 3">
              <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p>
        <p style="text-align:left">
          <ol>
            <li>Academic Council has the authority to suspend a rule temporarily.</li>
            <li>Academic Council has the authority to amend a rule.</li>
            <li>For affirmative action on any suspension or amendment of a rule, an affirmative
vote of three-fifths of the members present and voting shall be required in
Academic Council.</li>
          </ol>
        </p>
    </div>
    <div v-else-if="selectedItem == 4">
            <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p>
            <p style="text-align:left">
              <ol>
                <li>At present, admissions into first semester of various Specializations are
governed by Government and the Affiliating University. The eligibility
criteria and procedure for admission are prescribed by Government and
Affiliating University.</li>
                <li>A student is not allowed change of Specialization after admission.</li>
                <li>A student must fulfil medical standards required for admission.</li>
                <li>The selected students are admitted into first semester after payment of the prescribed fees.</li>
              </ol>

            </p>
    </div>
    <div v-else-if="selectedItem == 5">
        <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p>
            <p style="text-align:left">
              <ol>
                 <li> <b>Duration:</b>  The duration of {{ regulation.program.name}} degree course is {{ getSemCounts() }} semesters spread
over {{academicYears()}}  academic years. Semesters are named sequentially from {{regulation.semesters[0].name}} to {{regulation.semesters[regulation.semesters.length-1].name}}.</li>
<li> <b>Working Days:</b>  Calendar for any semester shall be announced at least four
weeks before its commencement. Minimum number of working days are 90
for a semester</li>
<li v-if="programLevel[program_level-1].short_name == 'UG'"> <b>Curriculum:</b>  Each major shall have core, elective and mandatory subjects drawn
from {{ curriculumCount() }} categories of subject areas:
<ul style="list-style-type:circle" v-for="categories in curriculumCategories" :key="categories.name">
  <li>{{categories.name}}({{ categories.sname}})</li></ul>
  The curriculum for each Major shall be approved by its corresponding Board of Studies and then by the Academic Council</li>
  <li><b>Credits:</b>  All subjects that are assessed for marks have credits assigned to them. The
credits assigned to subjects shall be given in curriculum. The total number of credits
for entire course is {{regulation.total_credits}} for all branches.</li>
<li>The distribution of total credits semester-wise is given in the below table</li>
              <b-table v-if="regulation.short_name == 'R15UG'"
              striped
              hover
              :items="r15ug"
              :fields="credits_table"
              ></b-table>
              <b-table v-else-if="regulation.short_name == 'R14UG'"
              striped
              hover
              :items="r14ug"
              :fields="credits_table"
              ></b-table>
              <b-table v-else-if="regulation.short_name == 'R14PG'"
              striped
              hover
              :items="r14pg"
              :fields="credits_table"
              ></b-table>
              <b-table v-else-if="regulation.short_name == 'R18PG'"
              striped
              hover
              :items="r18pg"
              :fields="credits_table"
              ></b-table>
<li><b>Medium of Instruction:</b>  The medium of instruction, examinations and all other
related activities is English.
</li>
<li>
    <b>Responsibility and Advising:</b>
    It is the responsibility of the student to understand and
know the regulations and requirements to earn the degree. Each student admitted
into the degree programs is assigned to a Faculty Advisor who assists the student in
designing an effective program of study. Students should consult their Faculty
Advisors for selection of electives and for general advice on academic program.

</li>
<li>
    <b>Gap-Year:</b>
    Outstanding students who wish to pursue entrepreneurship are allowed
to take a break of one year at any time after II Year / III Year to pursue
entrepreneurship full time. This period shall be counted for the maximum time for
graduation. College Academic Council shall evaluate the proposal submitted by
the student and decide on permitting the student for availing the gap-year. Gapyear can be availed once in the entire course.</li>
               </ol>
            </p>
    </div>
    <div v-else-if="selectedItem == 6">
      <p style="text-align:left">
        <ol>
          <li>Prior to opening of each semester, every student shall register for all the
credit-bearing and audit subjects listed in curriculum of the semester.
Excepting first semester, the registration for a semester shall be done during
a specified week after end examinations of previous semester. In first
semester, the registration shall be done within six working days from date of
opening. Recommendation of Faculty Advisor is needed for registration</li>
          <li v-if="regulation.short_name != 'R18PG'">A student can also register optionally for one self-study subject per term that
does not carry any credits. A student can take any subject of any Major as
self-study subject, satisfying any prerequisites if any, on the recommendation
of concerned Faculty Advisor</li>
          <li>Late registration will be permitted with a fine, decided from time to time, up
to six working days from the last date specified for registration</li>
          <li>A student will be eligible for registration for a term if
            <ol>
              <li>He/She promoted to that term</li>
              <li>He/She has cleared all fees to the Institute, library and hostel of previous term, and </li>
              <li>He/She is not disqualified for registration by a disciplinary action of the Institute</li>
              </ol></li>
          <li>A student will be enrolled and allowed to attend the classes on successful
registration and payment of necessary fees to Institution, library, and hostel</li>
          <li>Registration and enrolment will be controlled by the Office of the Controller
of Examinations</li>
        </ol>
      </p>
    </div>
    <div v-else-if="selectedItem == 7">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-else-if="selectedItem == 8">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-else-if="selectedItem == 9">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-else-if="selectedItem == 10">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-else-if="selectedItem == 11">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-else-if="selectedItem == 12">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-else-if="selectedItem == 13">
        <p>this is {{ items[selectedItem].name }}</p>
    </div>
    <div v-else-if="selectedItem == false">
        <p>Please select any one</p>
    </div>
    <div v-else>
        <p>Details not found</p>
    </div>
        </div>

</div>
</template>
<script>
</script>
<style>
#regulations{
    max-width: 700px;
}
#my-table{
  width: 50%;

}
.explore{
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}

#selection{
  margin-left: 25px;
  margin-right: 25px;
  padding-top: 10px;
}
.button{
  font-size:small;
  padding-left: 2px;
  margin-right:10px;
  margin-left: 10px;
  margin-top: 10px;
  width:140px ;
}
.button :hover{
  background-color: red;
  color: white;
}
.hr {
  margin-left: 10px;
  margin-top: 0em;
  margin-bottom: 0em;
  border-style: inset;
  height: 1.5px;
  background-color: yellow;
}
.b-form-select{
  margin-right: 20px;
  margin-left: 20px;
}
.selectreg{
  margin-left: 20px;
}

</style>