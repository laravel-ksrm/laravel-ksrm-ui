<template>
<div class="regTabWindow">
    
        <div>
            <p class="regTitle">
            KSRM College of Engineering (Autonomuos), Kadapa-516003, AP <br>
                                {{ regulation.name }} ( {{regulation.short_name}} ) <br>
                            (Effective from {{regulation.start_year}}) </p>
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
    <div v-if="selectedItem == 1">
       <b> <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
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
     <b> <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
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
             <b> <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
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
          <b>  <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
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
     <b>   <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
            <p style="text-align:left">
              <ol>
                 <li><b>Duration:</b>  The duration of {{ regulation.program.name}} degree course is {{ getSemCounts() }} semesters spread
over {{academicYears()}}  academic years. 
Semesters are named sequentially from {{regulation.semesters[0].name}} to {{regulation.semesters[regulation.semesters.length-1].name}}.</li>
<li> <b>Working Days:</b>  Calendar for any semester shall be announced at least four
weeks before its commencement. Minimum number of working days are 90
for a semester</li>
<li v-if="programLevel[program_level-1].short_name == 'UG'"> <b>Curriculum:</b>  Each major shall have core, elective and mandatory subjects drawn
from {{ curriculumCount() }} categories of subject areas:
<ul style="list-style-type:circle" v-for="categories in curriculumCategories" :key="categories.name">
  <li>{{categories.name}}({{ categories.sname}})</li></ul>
  The curriculum for each Major shall be approved by its corresponding Board of Studies and then by the Academic Council</li>
  <li v-else><b>Curriculum:</b> Each Specialization shall have core, elective and audit subjects.
The curriculum for each Specialization shall be approved by its
corresponding Board of Studies and then by the Academic Council
</li>
  <li><b>Credits:</b>  All subjects that are assessed for marks have credits assigned to them. The
credits assigned to subjects shall be given in curriculum. The total number of credits
for entire course is {{regulation.total_credits}} for all branches.</li>
<li v-if="regulation.short_name == 'R15UG' || regulation.short_name == 'R14UG' || regulation.short_name == 'R14PG' || regulation.short_name == 'R18PG'">The distribution of total credits semester-wise is given in the below table</li>
              <b-table v-if="regulation.short_name == 'R15UG'"
              striped
              class="creditsTable"
              hover
              bordered
              :items="r15ug"
              :fields="credits_table"
              ></b-table>
              <b-table v-else-if="regulation.short_name == 'R14UG'"
              striped
              class="creditsTable"
              hover
              bordered
              :items="r14ug"
              :fields="credits_table"
              ></b-table>
              <b-table v-else-if="regulation.short_name == 'R14PG'"
              striped
              hover
              class="creditsTable"
              bordered
              :items="r14pg"
              :fields="credits_table"
              ></b-table>
              <b-table v-else-if="regulation.short_name == 'R18PG'"
              striped
              hover
              class="creditsTable"
              bordered
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
      <b>   <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
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
<b>   <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
        <div style="text-align:left" v-if="regulation.short_name == 'R20UG'">
        <ol start='selectedItem'>
            <li>Performance of students in all subjects is assessed continuously through
assignments, internal assessment tests and an End examination</li>
            <li> Allocation of internal assessment and End examination marks
                <ol>
                    <li>For theory subjects, the allocation is 30 marks for internal assessment and
70 marks for End examination totalling 100 marks.</li>
                    <li>For laboratory/drawing/project work subjects, the allocation is 40 marks for
internal assessment and 60 marks for End examination totalling 100 marks.</li>
                    <li>For seminar/industrial training/internship subjects, the allocation is 100
marks for internal assessment. There is no end examination for these
subjects.</li>
                    <li>For mandatory subjects the allocation is 30 marks for internal assessment
and no allocation for End examination. These marks are specified for
purpose of clause 9.3, and do not account for any credits.</li>
                </ol>
            </li>
            <li>Internal Assessment
                <ol>
                    <li>Internal assessment means performance evaluation of students by faculty
members who teach the subjects.</li>
                    <li>Guidelines
                        <ol type="a" start="1">
                            <li><b>Allocation:</b> For theory subjects including mandatory subjects the total
internal assessment marks is 30 of which 25 marks are assessed through
midterm tests and 5 marks by assignments. The faculty members of the
concerned subject will assess the marks in the midterm tests and
assignments.</li>
<li><b>Midterm tests:</b> Each midterm test will be of two hours duration and
evaluated for 25 marks. Internal assessment marks for midterm tests will be
calculated as weighted sum of the two midterm test marks, with 80%
weight for the best and 20% weight for the other marks. Internal
assessment marks for assignments is calculated as the average of all
assignments. Total internal marks are the sum of midterm tests and
assignments assessment marks.
If any student abstains for any midterm test, she or he will be awarded zero
marks for that midterm test. If any student fails to submit any assignment
within the specified deadline, she or he will be awarded zero marks for that
assignment.
<ol type="i" start="1">
    <li><b>Number and duration:</b> There shall be two midterm tests each with a
duration of two hours. Time duration for objective part is 20 minutes and
that for subjective part is 100 minutes.
</li>
    <li><b>Format of test and division of marks:</b> Internal test shall consist of two
parts: objective part for 5 marks and subjective part for 20 marks</li>
    <li><b>Objective part:</b> Objective part shall contain twenty objective questions. The
type of questions can be multiple choice, fill the blank, matching etc</li>
    <li><b>Subjective part:</b> Subjective part shall contain four questions and all
questions shall be answered. However, each question can have internal
choice (either or type question). Generally, each question shall test one
Course Outcome (CO).</li>
    <li><b>Syllabus:</b> Each test shall cover 50% of the syllabus, approximately</li>
    </ol></li>
                        
                    <li><b>Assignments:</b> The assignments shall aid and hone the daily routine of students.
Assignments shall be stimulating and thought provoking to the student. While
some questions may test student’s understanding of the subject, there shall be
questions that imply connect to real world applications. A variety of questions
can posed in assignments.
<ol type="i" start="1">
    <li><b>Number:</b> A minimum of four assignments shall be given in each subject
with one assignment from Unit I to IV of syllabus of that subject.</li>
    <li><b>Quantum of work:</b> An assignment shall take about four to six hours of
study / work per week. Assignments shall not be overloaded nor under
loaded. As a guideline, each assignment may contain five questions, each
question taking an hour to answer.</li>
    <li><b>Marks:</b> Each assignment must be evaluated for fifty marks. Final marks are
obtained by averaging all the assignment marks and reducing it to five
marks.</li>
    <li><b>Deadlines:</b> Students shall be given at least one-week time to complete and
submit assignments. Assignments shall be submitted within deadline. Late
submissions should be awarded zero marks.</li>
    <li>General: It is advised to administer assignments using Google Classroom</li>
</ol>

                    </li>
                    <li>For laboratory/practical/drawing subjects, the internal assessment will be
based on regular laboratory work over full semester. The assessment will be
done by the faculty concerned. The students shall be informed sufficiently
early of the procedure to be followed for internal assessment. </li></ol>
</li>
<li>For subjects like seminar, project-work, industrial training/internship, and
comprehensive viva-voce, the internal assessment will be done by a
Department Committee consisting of two senior faculty members and
faculty guide of concerned student. The assessment procedure will be
informed sufficiently early to the students.
<ol type="i" start="1">
    <li><b>Mandatory internships:</b> University Guidelines shall apply.</li>
    <li><b>Evaluation of internships:</b> Shall be evaluated through the departmental
committee. A student will be required to submit a summer internship
report to the concerned department and appear for an oral presentation
before the department committee. The report and the oral presentation
shall carry 40% and 60% weightages respectively.</li>
<li><b>Final Semester Internship:</b> A student should mandatorily undergo
internship (University Guidelines shall apply) and should work
parallelly on a project. At the end of the semester the candidate shall
submit an internship completion certificate and a project report. The
project report shall be evaluated with an external examiner.
</li></ol></li>
<li>After the course work is over, the student is permitted to improve his/her
internal marks of any 3 theory subjects in the entire course. However
he/she will have to attend the course work.</li>
                </ol>
            </li>
            <li>
End Examinations
<ol type="1" start="1">
    <li>End examinations shall be conducted after completion of coursework in each
semester.</li>
<li>The question papers for theory subjects shall be set by faculty members
outside of the Institute. The external faculty members for question paper
setting shall be appointed by the Principal.</li>
<li>Evaluation of answer scripts shall be done by either Internal or External
examiners appointed by the Principal. A minimum of 50% of subjects will be
evaluated by external examiners.</li>
<li>For laboratory subjects, end examination shall be conducted by a committee
consisting of two internal examiners. One examiner shall be appointed by
Head of Department of concerned Major, and the other examiner shall be
appointed by the Principal.</li>
<li>For project work viva-voce, end examination shall be conducted by a
committee consisting of one internal examiner, one external examiner, and
the concerned guide of the student. Internal examiner shall be appointed by
Head of Department of concerned Major, and the external examiner shall be
appointed by the Principal.</li>
<li> If a student abstains from End examination of any subject, for any reason, she
or he shall be marked as “ABSENT” in that subject.</li>
<li>There is no end examination for mandatory subjects</li>
</ol>
            </li>
        </ol>

        </div>
        <div style="text-align:left" v-if="regulation.short_name == 'R18UG' || regulation.short_name == 'R15UG' || regulation.short_name == 'R14UG' ">
        <ol start='selectedItem'>
            <li>Performance of students in all subjects is assessed continuously through
assignments, internal assessment tests and an End examination</li>
            <li> Allocation of internal assessment and End examination marks
                <ol>
                    <li>For theory subjects, the allocation is 30 marks for internal assessment and
70 marks for End examination totalling 100 marks.</li>
                    <li>For laboratory/drawing/project work subjects, the allocation is 40 marks for
internal assessment and 60 marks for End examination totalling 100 marks.</li>
                    <li>For seminar/industrial training/internship subjects, the allocation is 100
marks for internal assessment. There is no end examination for these
subjects.</li>
                    <li>For mandatory subjects the allocation is 30 marks for internal assessment
and no allocation for End examination. These marks are specified for
purpose of clause 9.3, and do not account for any credits.</li>
                </ol>
            </li>
            <li>Internal Assessment
                <ol>
                    <li>Internal assessment means performance evaluation of students by faculty
members who teach the subjects.</li>
<li>
    For each theory subject, including mandatory subjects, the internal
assessment shall be done by two midterm tests for 25 marks and
assignments for 5 marks. The faculty member of the concerned subject
will assess the marks in midterm tests and assignments. <br>
Each midterm test will be of two hours duration and evaluated for 25
marks. Internal assessment marks for midterm tests will be calculated as
weighted sum of the two midterm test marks, with 80% weight for the
best and 20% weight for the other marks. Internal assessment marks for
assignments is calculated as the average of all assignments. Total internal
marks is the sum of midterm tests and assignments assessment marks. <br>
If any student abstains for any midterm test, she or he will be awarded
zero marks for that midterm test. If any student fails to submit any
assignment within the specified deadline, she or he will awarded zero
marks for that assignment.
The guidelines for internal assessment are given in Annexure 3
</li>
<li> For laboratory/practical/drawing subjects, the internal assessment will
be based on regular laboratory work over full semester. The assessment
will be done by the faculty concerned. The students shall be informed
sufficiently early of the procedure to be followed for internal assessment.</li>
<li>For subjects like seminar, project-work, industrial training/internship,
and comprehensive viva-voce, the internal assessment will be done by a
Department Committee consisting of two senior faculty members and
faculty guide of concerned student. The assessment procedure will be
informed sufficiently early to the students</li>
                    </ol></li>
                    <li>
End Examinations
<ol type="1" start="1">
    <li>End examinations shall be conducted after completion of coursework in each
semester.</li>
<li>The question papers for theory subjects shall be set by faculty members
outside of the Institute. The external faculty members for question paper
setting shall be appointed by the Principal.</li>
<li>Evaluation of answer scripts shall be done by either Internal or External
examiners appointed by the Principal. A minimum of 50% of subjects will be
evaluated by external examiners.</li>
<li>For laboratory subjects, end examination shall be conducted by a committee
consisting of two internal examiners. One examiner shall be appointed by
Head of Department of concerned Major, and the other examiner shall be
appointed by the Principal.</li>
<li>For project work viva-voce, end examination shall be conducted by a
committee consisting of one internal examiner, one external examiner, and
the concerned guide of the student. Internal examiner shall be appointed by
Head of Department of concerned Major, and the external examiner shall be
appointed by the Principal.</li>
<li> If a student abstains from End examination of any subject, for any reason, she
or he shall be marked as “ABSENT” in that subject.</li>
<li>There is no end examination for mandatory subjects</li>
</ol>
            </li></ol>
        </div>
        <div style="text-align:left" v-if="regulation.short_name == 'R14PG'">
            <ol start='selectedItem'>
            <li>Performance of students in all subjects is assessed continuously through
assignments, internal assessment tests and an End examination</li>
            <li> Allocation of internal assessment and End examination marks
                <ol>
                    <li>For theory subjects, the allocation is 40 marks for internal assessment and
60 marks for End examination totalling 100 marks.</li>
                    <li>For laboratory/drawing/project work subjects, the allocation is 40 marks for
internal assessment and 60 marks for End examination totalling 100 marks.</li>
                    <li>For seminar/viva voce/industrial training subjects’ total 100 marks are
allocated for internal assessment. There shall be no end examination
for these subjects.</li>
<li>For all audit subjects the allocation is 40 marks for internal assessment
and no allocation for End examination
</li>
                </ol></li>
                <li>Internal Assessment Examinations
                    <ol>
                        <li>Internal assessment means performance evaluation of students by
faculty members who teach the subjects</li>
<li>For theory subjects, including audit subjects, the internal assessment
shall be done by midterm tests. For each subject, two midterm tests will
be conducted for 40 marks each and the internal assessment mark is the
better of two marks. If any student abstains for any midterm test, she or
he will be awarded zero marks for that midterm test.</li>
<li>For laboratory/practical/drawing subjects, the internal assessment will
be based on regular laboratory work over full term. The assessment will
be done by the faculty concerned. The students shall be informed
sufficiently early of the procedure to be followed for internal assessment</li>
<li>For self-study subjects, the assessment is through assignments, quizzes,
seminars and viva-voce. The students shall be informed sufficiently
early of the procedure to be followed for assessment</li>
<li>For subjects like seminar, project-work, industrial training, and
comprehensive viva-voce, the internal assessment will be done by a
concerned Department Committee consisting of two senior faculty
members and faculty guide of concerned student. The assessment
procedure will be informed sufficiently early to the students</li>
</ol></li>
<li>End examinations
    <ol><li>End examinations shall be conducted after completion of coursework in
each term</li>
<li>The question papers for theory subjects shall be set by faculty members
outside of the Institute. The external faculty members for question paper
setting will be selected by the Principal</li>
<li>Evaluation of answer scripts shall be done by faculty members from
outside of the Institute selected by the Principal</li>
<li>For laboratory subjects, end examination shall be conducted by a
committee consisting of two internal examiners. One examiner shall be
recommended by Head of Department of concerned Major, and the
other examiner shall be appointed by the Principal</li>
<li>For project work viva-voce, End examination shall be conducted by a
committee consisting of one internal examiner, one external examiner,
and the concerned guide of the student. Internal examiner shall be
appointed by Head of Department of concerned Major, and the
external examiner shall be appointed by the Principal</li>
<li>If a student abstains from End examination of any subject, for any
reason, she or he shall be awarded zero marks in that subject</li>
<li>There is no end examination for self-study and audit subjects</li>
</ol></li></ol>
        </div>
        <div style="text-align:left" v-if="regulation.short_name == 'R18PG'">
            <ol start='selectedItem'>
            <li>Performance of students in all subjects is assessed continuously through
assignments, internal assessment tests and an End examination</li>
            <li> Allocation of internal assessment and End examination marks
                <ol>
                    <li>For theory subjects, the allocation is 40 marks for internal assessment and
60 marks for End examination totalling 100 marks.</li>
                    <li>For laboratory/drawing/project work subjects, the allocation is 40 marks for
internal assessment and 60 marks for End examination totalling 100 marks.</li>
                    <li>For mini-project/mini-project with seminar total 100 marks are
allocated for internal assessment. There shall be no end examination
for this mini-project</li>
<li>For all audit subjects the allocation is 40 marks for internal assessment
and no allocation for End examination
</li>
                </ol></li>
                <li>Internal Assessment Examinations
                    <ol>
                        <li>Internal assessment means performance evaluation of students by
faculty members who teach the subjects</li>
<li>For theory subjects, including audit subjects, the internal assessment
shall be done by midterm tests. For each subject, two midterm tests will
be conducted for 40 marks each and the internal assessment mark is the
better of two marks. If any student abstains for any midterm test, she or
he will be awarded zero marks for that midterm test.</li>
<li>For laboratory/practical/drawing subjects, the internal assessment will
be based on regular laboratory work over full term. The assessment will
be done by the faculty concerned. The students shall be informed
sufficiently early of the procedure to be followed for internal assessment</li>
<li>For self-study subjects, the assessment is through assignments, quizzes,
seminars and viva-voce. The students shall be informed sufficiently
early of the procedure to be followed for assessment</li>
<li>For subjects like seminar, project-work, industrial training, and
comprehensive viva-voce, the internal assessment will be done by a
concerned Department Committee consisting of two senior faculty
members and faculty guide of concerned student. The assessment
procedure will be informed sufficiently early to the students</li>
</ol></li>
<li>End examinations
    <ol><li>End examinations shall be conducted after completion of coursework in
each term</li>
<li>The question papers for theory subjects shall be set by faculty members
outside of the Institute. The external faculty members for question paper
setting will be selected by the Principal</li>
<li>Evaluation of answer scripts shall be done by faculty members from
outside of the Institute selected by the Principal</li>
<li>For laboratory subjects, end examination shall be conducted by a
committee consisting of two internal examiners. One examiner shall be
recommended by Head of Department of concerned Major, and the
other examiner shall be appointed by the Principal</li>
<li>For project work viva-voce, End examination shall be conducted by a
committee consisting of one internal examiner, one external examiner,
and the concerned guide of the student. Internal examiner shall be
appointed by Head of Department of concerned Major, and the
external examiner shall be appointed by the Principal</li>
<li>If a student abstains from End examination of any subject, for any
reason, she or he shall be awarded zero marks in that subject</li>
<li>There is no end examination for self-study and audit subjects</li>
</ol></li></ol>
        </div>
    </div>
    <div v-else-if="selectedItem == 8">
<b>   <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
        <div style="text-align:left">
            <ol>
                <li>For all credit-bearing subjects, performance of a student in a subject is indicated by
a letter grade that corresponds to absolute marks earned in that subject. Each letter
grade is assigned a numeric Grade Point that is used to compute Grade Point Average on a scale of 0 to 10</li>
                <li>Performance of a student in both internal assessment and End examination will be
considered for awarding grades for credit bearing subjects. Total marks earned in a
subject is the sum of marks obtained in internal assessment and End examination
in that subject.</li>
                <li>Pass grade S to E is assigned to a subject based on total marks earned in that
subject provided that a student earns at least <br> i) 35% of marks in End examination,
and <br> ii) 40% of marks in internal assessment and End examination put together;
otherwise fail grade F will be assigned to that subject.
</li>
                <li>Grade I will be assigned to a subject if a disciplinary action is pending and is not
resolved before publication of results. Office of Controller of Examinations shall
resolve the pending disciplinary action within six working days from the date of
publication of results and change the grade to any of S to F.</li>
                <li>Grade Ab will be assigned to a subject if a student abstains for End examination of
that subject.</li>
                <li>The absolute marks and corresponding letter grade and grade points are given in the below tablle
                    <b-table
      id="gradesTable"
      hover striped
      :bordered="bordered"
      :items="gradeTableValues"
      :fields="gradeTableKeys"
      :busy.sync= "isBusy"
      responsive
    ></b-table>
                </li>

                <li>SGPA: Semester Grade Point Average indicates the performance of a student in all
credit-bearing subjects of a semester. SGPA is calculated as the weighted average of
Grade Points of all subjects of the semester with corresponding credits of subjects
as weights. Audit and Self-study subjects are not considered for SGPA calculation
<br><b><p style="text-align:center">𝑆𝐺𝑃𝐴 = <img width="80" height="45" src="../assets/images/eq1.png" v:shapes="_x0000_i1025"></p>
    </b> 
where   𝐺𝑃<sub><i>i</i></sub> = Grade Point earned in a subject <br>
and     𝐶𝑅<sub><i>i</i></sub> = Credits allocated for that subject</li>
                <li>CGPA: Cumulative Grade Point Average indicates the performance of a student in
all semesters up to and including the current semester under consideration. CGPA
is calculated as the weighted average of SGPAs with total credits in each semester
as the weights.
<br><b><p style="text-align:center">C𝐺𝑃𝐴 = <img width="76" height="53" src="../assets/images/eq2.png" v:shapes="_x0000_i1025"></p>
    </b>
where S<sub><i>i</i></sub> = SGPA obtained in a semester
and         <br> TC<sub><i>i</i></sub> = Total Credits for that semester</li>
                <li>Grade Card: All students shall be issued Grade Cards after the publication of results
of a semester. Grade Card is a statement of performance of a student in a semester.
It contains information about each registered subject: type of subject, allocated
credits, and letter grade earned. SGPA and CGPA will also be indicated.</li>
            </ol>
        </div>
    </div>
    <div v-else-if="selectedItem == 9">
<b>   <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
        <div style="text-align:left"  v-if="regulation.short_name == 'R20UG' || regulation.short_name == 'R18UG' || regulation.short_name == 'R18PG'">
            <ol>
                <li>A student shall complete all credit-bearing and audit subjects successfully to
be eligible for award of degree.</li>
<li><b>Credit-bearing subjects:</b> A student is considered to have completed a creditbearing subject successfully and earned credits if she or he obtains a pass
grade from A+ to D+ in that subject. If a student receives fail grade F or X in
any subject, she or he must register for supplementary End examination for
that subject as and when opportunity arises and improve grade to pass grade.</li>
            <li><b>Audit subjects:</b> A student is considered to have successfully completed an
audit subject if she or he earns at least 40% of marks in internal assessment
marks. <br>
<b>Supplementary exam for audit subjects:</b> If a student fails in audit subject, she or
he shall register for supplementary examination in that subject as and when
the opportunity arises and pass that subject. The supplementary exam will be
conducted for 40 marks covering the entire syllabus and student is deemed to
have passed in the subject if she or he earns 16 marks (40% marks) in the
supplementary exam, disregard of her or his performance in internal tests.</li>
            </ol>
        </div>
        <div  v-if="regulation.short_name == 'R15UG' || regulation.short_name == 'R14UG' || regulation.short_name == 'R14PG'">
            <ol>
                <li>A student shall complete all credit-bearing and audit subjects successfully to
be eligible for award of degree</li>
<li><b>Credit-bearing subjects:</b> A student is considered to have completed a creditbearing subject successfully and earned credits if she or he obtains a pass
grade from A+ to D- in that subject. If a student receives fail grade F or X in
any subject, she or he must register for supplementary End examination for
that subject as and when opportunity arises and improve grade to pass grade.</li>
<li><b>Audit subjects:</b> A student is considered to have successfully completed an
audit subject if she or he earns at least 40% of marks in internal assessment
marks. A student may request for makeup tests to satisfy this requirement by
paying requisite fee.</li>
<li><b>Self-study subjects:</b> Based on internal assessment, the faculty guide concerned
will certify whether a student has successfully completed the subject or not.
Grade card will list successfully completed self-study subjects.</li>
            </ol>
        </div>
    </div>
    <div v-else-if="selectedItem == 10">
<b>   <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
        <div style="text-align:left" v-if="regulation.short_name == 'R20UG' || regulation.short_name == 'R18UG'">
        <ol>
            <li>A student is eligible to take regular End Examinations of current semester if she or
he fulfils the attendance requirement.</li>
<li>A student shall be promoted from current semester to succeeding semester on
satisfying the attendance and total credits-earned requirements.</li>
<li> <b>Attendance Requirement</b> 
    <ol>
        <li>Attendance of students shall be recorded for credit-bearing and mandatory
subjects as per the work load indicated in curriculum.</li>
        <li>Total class-periods conducted shall be reckoned from beginning to end of a
semester as published in academic calendar.
</li>
        <li>Aggregate Percentage of Attendance is calculated using total number of
class-periods attended as numerator and total number of class-periods
conducted for the concerned semester as the denominator.</li>
        <li>A minimum aggregate attendance of 75% is required for promotion to
succeeding semester and be eligible to take End examinations of current
semester. In addition, student has to acquire a minimum of 40% attendance
in each subject.</li>
        <li>A student can appeal to the Principal for condoning deficiency in aggregate
attendance if she or he gets an aggregate attendance of 65% or more but less
than the required 75%, presenting a valid reason for deficiency. Such a
student will be granted promotion if the Principal pardons the deficiency.
Principal has the right to reject the appeal if he/she is not satisfied with the
performance of the student or the reason cited for deficiency of the
attendance.</li>
        <li> A student earning less than 65% aggregate attendance will be denied
promotion. A student who is not promoted on basis of attendance shall be
removed from the rolls and shall register for the same semester when
opportunity arises. The current semester record of the student is cancelled
automatically.</li>
    </ol>
</li>
<li><b>Credits-Earned Requirement</b></li>
<ol>
    <li> This rule is applicable for promotion of a student from fourth semester to
fifth semester, and from sixth semester to seventh semester</li>
    <li>A student who is denied promotion for want of requisite credits shall take
supplementary examinations, as and when offered, and earn credits to be
eligible for promotion.</li>
    <li>Subjects registered for honours/minor degree shall not be considered
towards credits-earned requirement.</li>
    <li>For promotion from fourth semester to fifth semester, a student must earn at
least 40% credits (rounded to lower integer) from first semester to third
9
semester subjects. A student will get the following opportunities to pass the
subjects:
<br>
<b>First semester subjects :</b> One regular and three supplementary exams <br>
<b>Second semester subjects :</b> One regular and two supplementary exams <br>
<b>Third semester subjects :</b> One regular and one supplementary exam</li>
    <li>For promotion from sixth semester to seventh semester, a student must earn
at least 40% credits (rounded to lower integer) from first semester to fifth
semester subjects. A student will get the following opportunities to pass the
subjects: <br>
<b>First semester subjects :</b> One regular and five supplementary exams <br>
<b>Second semester subjects :</b> One regular and four supplementary exams <br>
<b>Third semester subjects :</b> One regular and three supplementary exams <br>
<b>Fourth semester subjects :</b> One regular and two supplementary exams <br>
<b>Fifth semester subjects :</b> One regular and one supplementary exam</li>
</ol>
        </ol>
        </div>
        <div style="text-align:left" v-if="regulation.short_name == 'R15UG'">
        <ol>
            <li>A student is eligible to take regular End Examinations of current semester if she or
he fulfils the attendance requirement.</li>
<li>A student shall be promoted from current semester to succeeding semester on
satisfying the attendance and total credits-earned requirements.</li>
<li> <b>Attendance Requirement</b> 
    <ol>
        <li>Attendance of students shall be recorded for credit-bearing and mandatory
subjects as per the work load indicated in curriculum.</li>
        <li>Total class-periods conducted shall be reckoned from beginning to end of a
semester as published in academic calendar.
</li>
        <li>Aggregate Percentage of Attendance is calculated using total number of
class-periods attended as numerator and total number of class-periods
conducted for the concerned semester as the denominator.</li>
        <li>A minimum aggregate attendance of 75% is required for promotion to
succeeding semester and be eligible to take End examinations of current
semester. In addition, student has to acquire a minimum of 40% attendance
in each subject.</li>
        <li>A student can appeal to the Principal for condoning deficiency in aggregate
attendance if she or he gets an aggregate attendance of 65% or more but less
than the required 75%, presenting a valid reason for deficiency. Such a
student will be granted promotion if the Principal pardons the deficiency.
Principal has the right to reject the appeal if he/she is not satisfied with the
performance of the student or the reason cited for deficiency of the
attendance.</li>
        <li> A student earning less than 65% aggregate attendance will be denied
promotion. A student who is not promoted on basis of attendance shall be
removed from the rolls and shall register for the same semester when
opportunity arises. The current semester record of the student is cancelled
automatically.</li>
    </ol>
</li><li><b>Credits-Earned Requirement</b></li>
<ol>
    <li> This rule is applicable for promotion of a student from fourth semester to
fifth semester, and from sixth semester to seventh semester</li>
    <li>A student who is denied promotion for want of requisite credits shall take
supplementary examinations, as and when offered, and earn credits to be
eligible for promotion.</li>
<li>For promotion from fourth semester to fifth semester, a student must
earn at least 26 credits from first semester to third semester subjects</li>
<li>For promotion from sixth semester to seventh semester, a student must
earn at least 44 credits from first semester to fifth semester subjects</li></ol>
<li>A student can forego promotion and opt to repeat the current semester on
written request. Recommendation of the concerned Faculty Advisor is
required for cancellation of promotion. This option shall be exercised before
the commencement of the End examinations of the current semester.</li></ol>
        </div>
        <div style="text-align:left" v-if="regulation.short_name=='R14UG' || regulation.short_name=='R18PG' || regulation.short_name=='R14PG'">
            <ol>
                <li>A student is eligible to take regular End Examinations of current semester if
she or he full fills the attendance requirement</li>
<li>A student shall be promoted from current semester to succeeding semester
on satisfying the attendance requirement</li>
<li>A student shall complete all credit-bearing and audit subjects successfully
before taking End examination for project viva-voce</li>
<li>Attendance Requirement
    <ol>
        <li>Attendance of students shall be recorded for credit-bearing and audit
subjects as per the workload indicated in curriculum.</li>
        <li>Total class-periods conducted shall be reckoned from beginning to
end of a semester as published in academic calendar.</li>
        <li>Aggregate Percentage of Attendance is calculated using total number
of class-periods attended as numerator and total number of classperiods conducted for the concerned subject as the denominator.</li>
        <li>A minimum aggregate attendance of 75% is required for promotion to
succeeding semester.</li>
        <li>A student can appeal to the Principal for condoning deficiency in
aggregate attendance if she or he gets 65% or more aggregate
attendance presenting a valid reason for deficiency. Such a student
will be granted promotion if the Principal pardons the deficiency.
Principal has the right to reject the appeal if it is not satisfied with the
performance of the student or the reason cited for deficiency of the
attendance.</li>
        <li>A student earning less than 75% aggregate attendance will be denied
promotion. A student who is not promoted on basis of attendance
shall be removed from the rolls and shall register for the same
semester when opportunity arises. The current semester record of
the student is cancelled automatically.</li>
    </ol>
</li>
<li>A student can forego promotion and opt to repeat the current term on written
request. Recommendation of the concerned Faculty Advisor is required for
cancellation of promotion. This option shall be exercised before the
commencement of the End examinations of the current term.</li></ol>
        </div>
    </div>
    <div v-else-if="selectedItem == 11">
<b>   <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
        <div style="text-align:left">
<ol>
    <li>Revaluation of End Examination scripts is allowed for theory subjects only
by paying requisite fee.</li>
    <li>A Procedure for Revaluation: The script will be revaluated by an examiner
appointed by the Principal. The maximum of revaluation and regular end
examination marks will be awarded for that subject</li>
    <li> A student can apply for revaluation in a subject only once.</li>
</ol>
        </div>
    </div>
    <div v-else-if="selectedItem == 12">
<b>   <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
        <div style="text-align:left">
            <ol>
                <li>Students are eligible to take Supplementary examinations in subjectswith fail
grade either F or X only.</li>
<li>Supplementary examinations for even semester subjects will be conducted along
with regular examinations of odd semester subjects.</li>
<li>Supplementary examinations for odd semester subjects will be conducted along
with regular examinations of even semester subjects.</li>
<li v-if="regulation.short_name=='R14UG' || regulation.short_name=='R18UG' || regulation.short_name=='R20UG' || regulation.short_name=='R15UG'">
For eighth semester, special supplementary examinations will be conducted in
second week following the results publication date of regular examination of
eighth semester
</li>
<li>
    A student will be allowed to improve grade in any theory subject provided she or
he has completed coursework of all semesters but before award of
provisional/final degree

</li>
            </ol>
        </div>
    </div>
    <div v-else-if="selectedItem == 13">
<b>   <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
        <div style="text-align:left" v-if="regulation.short_name=='R15UG' || regulation.short_name=='R14UG' || regulation.short_name=='R14PG' || regulation.short_name=='R18PG'">
            <ol>
                <li>Time Limit for completion of requirements for award of degree is {{getSemCounts()}}
academic years from the date of admission. A student who could not
complete all the requirements in this time limit shall forego admission and
will be removed from the rolls of the Institute.</li>
<li>A student shall be eligible for award of {{regulation.program.short_name}} degree  provided she or he has:
    <ol>
        <li>Registered and successfully completed all required credit-bearing and
audit subjects with a total of {{regulation.total_credits}} credits.</li>
<li>Secured a CGPA of {{regulation.pass_cgpa}} or more.</li>
<li>Cleared all dues to the Institute, library and hostel.</li>
<li>No disciplinary action is pending against her or him.</li>
<li>Satisfied any other stipulation of the affiliating University.</li>
    </ol>
</li>
<li>Award of Class: Each student will be given class in degree based on CGPA as
follows:
    <br>Class of Degree 
    <b-table v-if="regulation.short_name=='R14UG' || regulation.short_name=='R18UG' || regulation.short_name=='R20UG' || regulation.short_name=='R15UG'"
              striped
              class="creditsTable"
              hover
              bordered
              :items="ugClassOfDegree"
              :fields="ClassOfDegree"
              ></b-table>
              <b-table v-if="regulation.short_name=='R18PG'"
              striped
              class="creditsTable"
              hover
              bordered
              :items="pgClassOfDegree"
              :fields="ClassOfDegree"
              ></b-table>
    </li>
    <li>Consolidated Grade Card and Degree will issued under the seal of affiliating
University</li>
            </ol>
        </div>
        <div style="text-align:left" v-if="regulation.short_name=='R20UG' || regulation.short_name=='R18UG'">
            <ol>
                <li>Time Limit for completion of requirements for award of degree is {{getSemCounts()}}
academic years from the date of admission. A student who could not
complete all the requirements in this time limit shall forego admission and
will be removed from the rolls of the Institute.</li>
<li>A student shall be eligible for award of {{regulation.program.short_name}} degree  provided she or he has:
    <ol>
        <li>Registered and successfully completed all required credit-bearing and
audit subjects with a total of {{regulation.total_credits}} credits.</li>
<li>Secured a CGPA of {{regulation.pass_cgpa}} or more.</li>
<li>Cleared all dues to the Institute, library and hostel.</li>
<li>No disciplinary action is pending against her or him.</li>
<li>Satisfied any other stipulation of the affiliating University.</li>
    </ol>
</li>
<li>Award of Class: Each student will be given class in degree based on CGPA as
follows:
    <br>Class of Degree 
    <b-table v-if="regulation.short_name=='R14UG' || regulation.short_name=='R18UG' || regulation.short_name=='R20UG' || regulation.short_name=='R15UG'"
              striped
              class="creditsTable"
              hover
              bordered
              :items="ugClassOfDegree"
              :fields="ClassOfDegree"
              ></b-table>
              <b-table v-if="regulation.short_name=='R18PG'"
              striped
              class="creditsTable"
              hover
              bordered
              :items="pgClassOfDegree"
              :fields="ClassOfDegree"
              ></b-table>
    </li>
    <li><b>Degree with Honours designation:</b> Students with higher learning capabilities
are encouraged to opt for Honours designation. Degree with Honours
imply a higher level of academic achievement. A student can earn B.Tech
degree with honours designation by meeting the following requirements
<ol>
    <li>Honours designation is optional. A student can opt for either Honours
designation or Minor degree (clause 13.5) but not both.</li>
    <li><b>Entry eligibility:</b> Students shall apply for Honours designation at the
beginning of the fourth semester. Eligibility criteria are (i) minimum
CGPA of 8.0 and (ii) no backlogs, reckoned up to second semester. The
Chairperson of the concerned Board of Studies will process the
applications and publish the list of eligible students.</li>
    <li><b>Additional course work:</b> Students shall complete an additional 20-credits
coursework, in addition to 160 regular credits, in her/his own major
during fourth to seventh semesters. The Board of Studies (BoS) of the
concerned major shall specify the list of advanced elective subjects for the
purpose of honours designation. <br>
Out of the 20 additional credits to be acquired, 16 credits shall be earned
by undergoing specified courses listed as pools, with four courses, each
carrying 4 credits. The remaining 4 credits must be acquired through two
MOOCs, which shall be domain specific, each with 2 credits and with a
minimum duration of 8/12 weeks as recommended by the BoS. <br>
If minimum enrolments criteria are not met then the students shall be
permitted to register for the equivalent MOOC courses as approved by the
concerned Head of the department in consultation with BoS. <br>
If a student drops or is terminated from the Honours program, the
additional credits earned so far will remain extra. These additional courses
will find mention in the transcript but not in the degree certificate.</li>
    <li><b>Registration and enrollment:</b> Clause 6.0 shall apply</li>
    <li><b>Evaluation:</b> The evaluation shall be as per clause 7.0</li>
    <li><b>Continuous performance:</b> Students shall earn a minimum SGPA of 8.0 in all
semesters, from fourth to seventh, and without backlogs to be eligible for
award of Honours designation. Regular and additional subjects shall be
considered for SGPA calculation. If a student does not get a minimum
SGPA of 8.0 or fails in any subject during fourth to seventh semesters,
she/he will lose candidature for honours designation</li>
</ol>
</li>

<li><b>Minor Degree designation:</b> Students with higher learning capabilities are
encouraged to opt for Minor degree designation. Minor degree imply a higher
level of academic achievement and improves employability. A student can earn
minor degree designation by meeting the following requirements
<ol>
    <li>Minor degree is optional. A student can opt for either Minor degree or
Honours designation (clause 13.4) but not both.
        </li>
        <li><b>Entry eligibility:</b> Students shall apply for minor degree at the beginning of
fourth semester. Eligibility criteria are (i) minimum CGPA of 8.0 and (ii)
no backlogs, reckoned up to second semester. The Chairperson of the
concerned Board of Studies (minor department) will process the
applications and publish the list of eligible students.</li>
<li><b>Additional coursework:</b> Students shall complete an additional 20-credits
coursework, in addition to 160 regular credits, in selected minor program
during fourth to seventh semesters. The Board of Studies (BoS) of the
concerned minor program shall specify the list of core and elective subjects
for the purpose of minor degree. Out of the 20 credits, 16 credits shall be
earned by undergoing specified courses listed by the concerned BoS and
must pursue atleast 2 courses through MOOCs. (of 8 week duration)</li>
<li><b>Registration and enrollment:</b> Clause 6.0 shall apply.</li>
<li><b>Evaluation:</b> The evaluation shall be as per clause 7.0</li>
<li><b>Continuous performance:</b> Students shall earn a minimum SGPA of 8.0 in all
semesters, from fourth to seventh, and without backlogs to be eligible for
award of minor degree. Regular and additional subjects shall be considered
for SGPA calculation. If a student does not get a minimum SGPA of 8.0 or
fails in any subject during fourth to seventh semesters, she/he will lose
candidature for minor degree.
</li>
        </ol></li>
         <li>Degree will be issued under the seal of affiliating University.</li>   </ol>
        </div>
    </div>
    <div v-else-if="selectedItem == 14">
<b>   <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
        <div style="text-align:left">
        <ol>
            <li>A student who initially joins the Institute in a previous Regulation and has to rejoin in a semester of the present Regulations, due to any reason, shall be bound by
the rules of the current Regulations. Board of Studies of the concerned Major will
specify, extra or otherwise, academic coursework to be undertaken by such
students who join the current Regulations.</li>
        </ol>
        </div>
    </div>
    <div v-else-if="selectedItem == 15">
<b>   <p> {{ selectedItem }}. {{items[selectedItem-1].name}}</p> <hr class="line"></b>
        <div style="text-align:left" v-if="regulation.short_name=='R20UG'">
            <ol type="1" start="1">
                <li><b> Title and application:</b> These rules and regulations may be called R20UG-LE and
come into force from academic year 2021-22 and exist in force until superseded by
other regulations. These regulations are applicable to students admitted under
lateral entry scheme leading to Bachelor’s Degree in Technology (B.Tech).</li>
<li><b>Regulations and curriculum:</b> The regulations and curriculum of R20UG shall be
applicable in general with the following modifications:
<ol type="i" start="1">
    <li><b>Entry and duration:</b> The students will be admitted directly into third semester of
regular 4-year B.Tech degree course governed by R20UG regulations. The
duration of the course is three academic years.</li>
    <li><b>Curriculum:</b> Third semester to eighth semester curriculum of R20UG.</li>
    <li><b>Promotion by credits-earned requirement:</b> This is applicable for the promotion of a
student from sixth semester to seventh semester only. She/he must earn at
least 40% of total credits (rounded to lower integer) from third to fifth
semesters for promotion from sixth semester to seventh semester.</li>
    </ol></li>
    <li>Requirements for the award of B.Tech degree:
<ol start="i">
    <li>Time limit for completion of requirements for award of degree is six academic
years from the date of admission</li>
<li>Registered and successfully completed all required credit-bearing and
mandatory subjects with a total of 121 credits. (third semester to eighth
semester subjects)</li>
<li><i>Honours/minors designation:</i> shall earn extra 20 credits in addition to 121 credits</li>
</ol>
</li>
            </ol>
        </div>
        <div style="text-align:left" v-if="regulation.short_name=='R18UG'">
            <ol type="1" start="1">
                <li><b> Title and application:</b> These rules and regulations may be called R18UG-LE and
come into force from academic year 2019-20 and exist in force until superseded by
other regulations. These regulations are applicable to students admitted under
lateral entry scheme leading to Bachelor’s Degree in Technology (B.Tech).</li>
<li><b>Regulations and curriculum:</b> The regulations and curriculum of R18UG shall be
applicable in general with the following modifications:
<ol type="i" start="1">
    <li><b>Entry and duration:</b> The students will be admitted directly into third semester of
regular 4-year B.Tech degree course governed by R18UG regulations. The
duration of the course is three academic years.</li>
    <li><b>Curriculum:</b> Third semester to eighth semester curriculum of R18UG.</li>
    <li><b>Promotion by credits-earned requirement:</b> This is applicable for the promotion of a
student from sixth semester to seventh semester only. She/he must earn at
least 40% of total credits (rounded to lower integer) from third to fifth
semesters for promotion from sixth semester to seventh semester.</li>
    </ol></li>
    <li>Requirements for the award of B.Tech degree:
<ol type="i">
    <li>Time limit for completion of requirements for award of degree is six academic
years from the date of admission</li>
<li>Registered and successfully completed all required credit-bearing and
mandatory subjects with a total of 122 credits. (third semester to eighth
semester subjects)</li>
<li><i>Honours/minors designation:</i> shall earn extra 20 credits in addition to 122 credits</li>
</ol>
</li>
<li>In case of ambiguity in the interpretation of regulations, the decision of the academic
council shall be final</li>
            </ol>
        </div>
        <div style="text-align:center" v-else>
            <p>Details not Available</p>
        </div>
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
import axios from 'axios'
export default {
    props:['regulation','programLevel','program_level','selectedProgram'
      ,'Program' ,'selectedRegulation','regulations'
       ,'program_id'],
    data() {
      return {
        semLength: this.regulation.total_semesters,
        tabIndex: 0,
        isBusy: false,
        bordered: true,
        program: '',
        academicYearDuration:null,
        getSemCount: null,
        curriculuLength: null,
        curriculumCategories:[],
        selectedItem: '',
        creedits_table:[
            { key: 'Semester'},
          { key: 'Total_credits'}
        ],
        gradeTableKeys:[
            { key: 'absolute_marks'},
            { key: 'letter_grade'},
            { key: 'grade_points_assigned'},
            { key: 'remark'}
        ],
        gradeTableValues:[
            {'absolute_marks':'95-100','letter_grade':'A+','grade_points_assigned':'10.0','remark':'Pass'},
            {'absolute_marks':'90-94','letter_grade':'A','grade_points_assigned':'9.5','remark':'Pass'},
            {'absolute_marks':'85-89','letter_grade':'A-','grade_points_assigned':'9.0','remark':'Pass'},
            {'absolute_marks':'80-84','letter_grade':'B+','grade_points_assigned':'8.5','remark':'Pass'},
            {'absolute_marks':'75-79','letter_grade':'B','grade_points_assigned':'8.0','remark':'Pass'},
            {'absolute_marks':'70-74','letter_grade':'B-','grade_points_assigned':'7.5','remark':'Pass'},
            {'absolute_marks':'65-69','letter_grade':'C+','grade_points_assigned':'7.0','remark':'Pass'},
            {'absolute_marks':'60-64','letter_grade':'C','grade_points_assigned':'6.5','remark':'Pass'},
            {'absolute_marks':'55-59','letter_grade':'C-','grade_points_assigned':'6.0','remark':'Pass'},
            {'absolute_marks':'50-54','letter_grade':'D+','grade_points_assigned':'5.5','remark':'Pass'},
            {'absolute_marks':'0-49','letter_grade':'F','grade_points_assigned':'0.0','remark':'Fail'},
            {'absolute_marks':'-','letter_grade':'I','grade_points_assigned':'0.0','remark':'Result Withheld'},
            {'absolute_marks':'-','letter_grade':'X','grade_points_assigned':'0.0','remark':'Absent for End Exam'}
        ],

        ugClassOfDegree:[
            {'class_of_degree':'Pass Class','range_of_CGPA':'>=4.5 but <5.5'},
            {'class_of_degree':'Second Class','range_of_CGPA':'>=5.5 but <6.5'},
            {'class_of_degree':'First Class','range_of_CGPA':'>=6.5 but <7.5'},
            {'class_of_degree':'First Class with Distinction','range_of_CGPA':'>=7.5'}

        ],
        pgClassOfDegree:[
            {'class_of_degree':'Second Class','range_of_CGPA':'>=5.5 but <6.5'},
            {'class_of_degree':'First Class','range_of_CGPA':'>=6.5 but <7.5'},
            {'class_of_degree':'First Class with Distinction','range_of_CGPA':'>=7.5'}
        ],
        ClassOfDegree:[
            {key: 'class_of_degree'},
            {key: 'range_of_CGPA'}
        ],
        r14ug:[
            {'Semester':'First Year','Total_credits':45},
            {'Semester':'Third Semester','Total_credits':22},
            {'Semester':'Fourth Semester','Total_credits':22},
            {'Semester':'Fifth Semester','Total_credits':22},
            {'Semester':'Sixth Semester','Total_credits':22},
            {'Semester':'Seventh Semester','Total_credits':22},
            {'Semester':'Eighth Semester','Total_credits':25},
            {'Semester':'Total for entire course','Total_credits':180}
        ],
        r15ug:[
            {'Semester':'First Semester','Total_credits':22},
            {'Semester':'Second Semester','Total_credits':22},
            {'Semester':'Third Semester','Total_credits':22},
            {'Semester':'Fourth Semester','Total_credits':22},
            {'Semester':'Fifth Semester','Total_credits':22},
            {'Semester':'Sixth Semester','Total_credits':22},
            {'Semester':'Seventh Semester','Total_credits':22},
            {'Semester':'Eighth Semester','Total_credits':26},
            {'Semester':'Total for entire course','Total_credits':180}
        ],
        r14pg:[
            {'Semester':'First Semester','Total_credits':26},
            {'Semester':'Second Semester','Total_credits':26},
            {'Semester':'Third Semester','Total_credits':2},
            {'Semester':'Fourth Semester','Total_credits':16},
            {'Semester':'Total for entire course','Total_credits':70}
        ],
        r18pg:[{'Semester':'First Semester','Total_credits':18},
            {'Semester':'Second Semester','Total_credits':18},
            {'Semester':'Third Semester','Total_credits':16},
            {'Semester':'Fourth Semester','Total_credits':16},
            {'Semester':'Total for entire course','Total_credits':68}
        ],

        items:[
               {sname: 1,name:'Nomenclature'},
               {sname: 2,name:'Short Title And Application'},
               {sname: 3,name:'Suspension And Amendment Of Rules'},
               {sname: 4,name:'Requirements For Admission'},
               {sname: 5,name:'Structure Of The B. Tech Course'},
               {sname: 6,name:'Registration And Enrolment'},
               {sname: 7,name:'Assessment Procedure – Internal Tests And End Examinations'},
               {sname: 8,name:'Method of Assigning Letter Grades and Grade Points'},
               {sname: 9,name:'Requirements For Completing Subjects'},
               {sname: 10,name:'Requirements For Taking End Examinations And Promotion'},
               {sname: 11,name:'Revaluation Of End Examination Scripts'},
               {sname: 12,name:'Supplementary End Examinations'},
               {sname: 13,name:'Requirements For Award Of B. Tech Degree'},
               {sname: 14,name:'Transitory Regulations'},
               {sname: 15,name:'Regulations for Lateral Entry Students'}
                
            ],
    }
  },
  methods:{
    curriculumCount(){
      if(this.regulation.short_name == 'R15UG' || this.regulation.short_name == 'R14UG'){
        this.curriculumCategories = [
          { sname:'BS',name:'Basic Science'},
          { sname:'HS',name:'Humanities and Social Sciences'},
          { sname:'ED',name:'Basic Engineering and Design'},
          { sname:'PJ',name:'Professional Major'},
          { sname:'PN',name:'Professional Minor'}
        ]
        return (this.curriculuLength = 'five')
      }
      else{
        this.curriculumCategories = [
          { sname:'BSc',name:'Basic Science'},
          { sname:'HSMC',name:'Humanities and Social Sciences including Management Courses'},
          { sname:'ESC',name:' Engineering Science Courses'},
          { sname:'PCC',name:'Professional Core Course'},
          { sname:'PEC',name:'Professional Elective Course'},
          { sname:'OEC',name:'Open Elective Course'}
        ]
        return (this.curriculuLength = 'six')
      }
    },
    getSemesterCredits(){
      axios.get(`http://127.0.0.1:8000/api/credits/sp/${this.specialization_id}/${this.semester_id}`)
      .then(response => this.credits = response.data)
      .catch(error => console.log(error));
    },
    getSemCounts($semLength){
      if($semLength == 8 || $semLength == 7){
        return this.getSemCount = 'Eight'
      }
      else{
        return this.getSemCount = 'Four'
      }
    },
    academicYears(program_level){
      if(program_level == 1){
        return this.academicYearDuration = 'four'
      }
      else{
        return this.academicYearDuration ='two'
      }

    },
    
  },
  components:{
  }
}
</script>
<style>
.regTabWindow{
    font-family: "Times New Roman", Times, serif;
}
.regTitle{
    font-family: "Times New Roman", Times, serif;
    color: yellow;
    font-size: 120%;
}
#gradesTable{
    min-width: 300px;
    max-width: 500px;
    align-items: center;
    text-align: center;
}
#gradesTable tr :hover{
    color: white;
    background-color: rosybrown;
}

.creditsTable{
  width: 60%;
  margin-left: 80px;
  margin-top: 15px;

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

.line {
  margin-left: 5px;
  margin-top: -10px;
  margin-right: 5px;
  margin-bottom: 10px;
  border-style: inset;
  height: 1.5px;
  background-color: white;
}
.line:hover{
  background-color: yellow;
}
.b-form-select{
  margin-right: 20px;
  margin-left: 20px;
}
.select{
  min-width:300px;
  max-width: 500px;
}

.minus{
    width: 20px;
    background-color: black;
    margin-top: -35px;
}
</style>