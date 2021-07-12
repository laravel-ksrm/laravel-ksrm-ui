<template>
  <div id="regulations">
      <div id="selection">
    <b-form-select
      v-model="selectedProgram"
      :options="programs"
      class="mb-3 col-5"
      value-field="sname"
      text-field="name"
      @change="selectedPrograms($event)"
      disabled-field="notEnabled"
    ></b-form-select>
  <b-form-select
    v-if="selectedProgram"
      v-model="selectedRegulation"
      class="mb-3 col-5 select"
      disabled-field="notEnabled"
      :options="UG"
      value-field="sname"
      text-field="name"
      @change="selectedRegulations($event)"
    ></b-form-select>
  </div>
  <div v-if="selectedProgram=='CE'">
  <div v-if="selectedRegulation=='ABTD'"> <b>Department of Civil Engineering</b><br>
    <p>Civil Engineering Department of KSRM College of Engineering is one of the five founding departments. The motto of the department is EXCEED (Excellence in Civil Engineering Education). The department provided its valuable consultancy services to Roads and Buildings (R & B) Department of Kadapa to improve Guvvalacheruvu Ghat section to enhance safety, comfort, reduce road accidents and travel time between Kadapa and Rayachoty. The civil engineering department is recognized as research center by JNTUA, Ananthapuramu. AICTE sponsored 13.55 Lakhs under MODROBS scheme to modernize and equip with latest digital equipment in Geotechnical Engineering Lab. The department conceived, planned, designed, developed and implemented the KSRM Library Information Project (KLIP).</p><br>
    <b>Vision</b><br>
    <p>The Department will be the recognized leader for excellence in Civil Engineering education that serve as vital source of leaders who are prepared to meet Nation’s current and future requirements for safe, efficient and sustainable infrastructure.

        To progress as a centre of excellence adapting itself to the rapid developments in the field of computer science by performing a high-impact research and teaching environment.</p><br>
        <b>Mission</b><br>
        <p>The mission of the department is to promote the disciplines of planning, design, construction, operation, maintenance and research in support of sustainable development. By providing a multidisciplinary focus for education, professional communication, and collaboration, the Department will enhance the professional knowledge and skills of its students so that they will improve the quality of life. The Department will bring together teachers, planners, industry representatives, citizen groups, developers, public officials and others dedicated to improving quality of life and fostering appropriate development programs at the local, regional, state and national levels.</p><br>
            <b>Programme Educational Objectives</b><br>
            <p>B.Tech-Civil Engineering Program Objectives.<br>

                To provide training to recognize community and national goals for sustainability, environmental sensitivity, liveability, economy and safety.<br>
                
                To provide training in sound engineering, planning, and designing philosophies so that one can meet the needs of National and Multi-National companies.<br>
                
                To provide training in mathematical, scientific and engineering fundamentals so that one can analyze and solve engineering problems efficiently.<br>
                
                To develop the ability to blend theory with practice, so that one can apply theory confidently and correctly.<br>
                
                To develop skills in lifelong learning and to introduce them to professional ethics and codes of professional practice.<br></p>
                
                <b>Programme Outcomes</b><br>
                <p>Ability to apply knowledge of Mathematics & Sciences to solve complex problems in Engineering.<br>
                Ability to identify, formulate and solve engineering problems
                Ability to design electrical systems that meet the specified needs with appropriate considerations for public health safety and environmental considerations.<br>
                Ability to conduct investigations using design of experiments, analysis and interpretation of data to arrive at valid conclusion.<br>
                Ability to acquire new knowledge to use modern engineering tools, software and equipments to analyze problems necessary for engineering practice.<br>
                Ability to recognize the impact of engineering on society.<br>
                Able to understand the impact of the professional engineering solutions in societal and environmental contexts and demonstrate the need for sustainable development.<br>
                An understanding of professional and ethical responsibility and norms of electrical engineering practices.<br>
                Ability to visualize and work on multi-disciplinary tasks.<br>
                Ability to communicate effectively in both verbal and written form.<br>
                Apply knowledge of management and finance for effective project management.<br>
                Ability to develop confidence for self-education and to understand the value of lifelong learning.</p><br>
                <b>Programme Specific Outcomes</b><br>
                <p>The graduates in Civil Engineering will be able to<br>

                    PSO 1: Analyze, Design, Construct, Maintain and Operate infrastructural projects<br>
                    
                    PSO 2: Assess the environmental impact of various projects and take required measures
                    to curb environmental deterioration<br>
                    
                    PSO 3: Able to use latest softwares pertaining to various streams of Civil Engineering.<br></p></div>
  <div v-if="selectedRegulation=='ABTHOD'"><h1>Department of Civil Engineering</h1>
 <img src="https://www.ksrmce.ac.in/demo1/cedept/IMG-20210407-WA0006.jpg"><br>
 <b>Dr. N. Amaranatha Reddy<br>
    Professor & HOD of the Department<br>
    
    Profile<br></b>  </div>
  <div v-if="selectedRegulation=='BOS'"><table>
                <tr>
                  <th>Sl.No</th>

                   <th> Name of the faculty</th>
                    
                   <th> Designation</th>
                    
                   <th>Member</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Prof. G. Sreenivasa Reddy	</td>
                  <td>Professor & HOD</td>
                  <td>Chairman</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Prof. Vaishali G. Ghorpade</td>
                  <td>Professor. in Civil Engineering Department,

                    JNTUA College of Engineering, Anantapuramu</td>
                  <td>University Nom</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Prof. H. Sudarsana Rao,</td>
                  <td>Director IIIT,  RK Valley, Idupulapaya, Vempalli	</td>
                  <td>Subject Expert</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Prof. S.G.T. Raghukanth</td>
                    <td>Professor in Civil Engineering,

                        ITTM, Chennai</td>
                    <td>Subject Expert</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Sri. M.C. Konda Reddy</td>
                    <td></td>
                    <td>Industry</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Prof. N. Siva Prasad Reddy</td>
                    <td>Professor, GPR College of Engg., Kurnool</td>
                    <td>Alumni</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Prof. T. Kiran Kumar</td>
                    <td>Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Prof. V.Giridhar</td>
                    <td>Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Mr.P.S. Praveen Kumar </td>
                    <td>Assistant Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Dr. V. Ramesh Babu</td>
                    <td>Assistant Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Dr. P. Kishore Kumar Reddy</td>
                    <td>Assistant Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Mr. P. Rajendra Kumar </td>
                    <td>Assistant Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Mr. N. Prathap Kumar</td>
                    <td>Assistant Professor</td>
                    <td>Member</td>
                  </tr>
                
                  
              </table></div>
  <div v-if="selectedRegulation=='MtechStaff'"> <table>
                <tr>
                  <th>Sl.No</th>

                   <th> Name of the faculty</th>
                    
                   <th> Designation</th>
                    
                   <th>Qualification</th>
                    
                    <th>DOJ</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dr.G. Sreenivasa Reddy</td>
                  <td>Professor </td>
                  <td>M.Tech.,Ph.D.</td>
                  <td>30.06.2006</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Dr. V. Giridhar</td>
                  <td>Professor</td>
                  <td>Ph.D.</td>
                  <td>03.12.2005</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Sri. P. Suresh Praveen Kumar</td>
                  <td>Assistant Professor</td>
                  <td>M.Tech., (Ph.D)</td>
                  <td>12.03.2009</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Sri. P. Rajendra Kumar</td>
                  <td>Assistant Professor</td>
                  <td>M.Tech., (Ph.D)</td>
                  <td>01.06.2012</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Smt. K. Niveditha</td>
                  <td>Assistant Professor</td>
                  <td>M.Tech.</td>
                  <td>02.09.2011</td>
                </tr>
              </table>
    </div>
  <div v-if="selectedRegulation=='staff'"> <table>
                <tr>
                  <th>Sl.No</th>

                   <th> Name of the faculty</th>
                    
                   <th> Designation</th>
                    
                   <th>Qualification</th>
                    
                    <th>Employee ID</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Prof. A. Mohan</td>
                  <td>Professor & Director</td>
                  <td>M.Tech.,(Ph.D)</td>
                  <td>1028602</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Dr. N. Amaranatha Reddy</td>
                  <td>Associate Prof. & HOD</td>
                  <td>Ph.D.</td>
                  <td>1022105</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dr. G. Sreenivasa Reddy</td>
                  <td>Professor</td>
                  <td>Ph.D</td>
                  <td>1020602</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Dr. V. Giridhar</td>
                  <td>Professor</td>
                  <td>Ph.D</td>
                  <td>1020506</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Dr. T. Kiran Kumar</td>
                  <td>Professor</td>
                  <td>Ph.D.</td>
                  <td>1020601</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Dr. A. Ranganathan</td>
                    <td>Professor</td>
                    <td>Ph.D.</td>
                    <td>1021504</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Dr. R. SivaSubramanyan</td>
                    <td>Professor</td>
                    <td>Ph.D.</td>
                    <td>1021404</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Dr. P. Adikala Kumar</td>
                    <td>Associate Professor</td>
                    <td>Ph.D.</td>
                    <td>1021305</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Dr. K. Harish</td>
                    <td>Associate Professor</td>
                    <td>Ph.D.</td>
                    <td>1021802</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Dr. Y.J. Chandra Mouly</td>
                    <td>Associate Professor</td>
                    <td>Ph.D.</td>
                    <td>1021803</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Dr. V. Ramesh Babu</td>
                    <td>Associate Professor</td>
                    <td>Ph.D.</td>
                    <td>1020505</td>
                  </tr> 
                  <tr>
                    <td>12</td>
                    <td>Dr. P. Kishore Kumar Reddy</td>
                    <td>Associate Professor</td>
                    <td>Ph.D.</td>
                    <td>1020910</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Sri. V.V. Prasad</td>
                    <td>Associate Professor</td>
                    <td>M.Tech.</td>
                    <td>1020605</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>Sri. G. Venkateswarlu</td>
                    <td>Associate Professor</td>
                    <td>M.Tech.</td>
                    <td>1020801</td>
                  </tr>
                  <tr>
                    <td>15</td>
                    <td>Sri. N. Prathap Kumar</td>
                    <td>Associate Professor</td>
                    <td>M.Tech.</td>
                    <td>1020902</td>
                  </tr>
                  <tr>
                    <td>16</td>
                    <td>Sri. P. Suresh Praveen Kumar</td>
                    <td>Associate Professor</td>
                    <td>M.Tech.</td>
                    <td>1020905</td>
                  </tr>
                  <tr>
                    <td>17</td>
                    <td>Smt. K. Niveditha</td>
                    <td>Associate Professor</td>
                    <td>M.Tech.</td>
                    <td>1021102</td>
                  </tr>
                  <tr>
                    <td>18</td>
                    <td>Sri. P. Rajendra Kumar</td>
                    <td>Associate Professor</td>
                    <td>M.Tech (Ph.D)</td>
                    <td>1021201</td>
                  </tr>
                  <tr>
                    <td>19</td>
                    <td>Sri. K. Archaneswar Kumar</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1021204</td>
                  </tr>
                  <tr>
                    <td>20</td>
                    <td> Sri. S. Nowshad</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1021303</td>
                  </tr>
                  <tr>
                    <td>21</td>
                    <td> Miss. S. Sandhya Rani</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1021401</td>
                  </tr>
                  <tr>
                    <td>22</td>
                    <td> Sri. T. Prasanth</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1021402</td>
                  </tr>
                  <tr>
                    <td>23</td>
                    <td> Miss. K. Ravali</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1021501</td>
                  </tr>
                  <tr>
                    <td>24</td>
                    <td>  Sri. M. Rajasekhar</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1021503</td>
                  </tr>
                  <tr>
                    <td>25</td>
                    <td> Sri. CH. Santosh Kumar</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1021902</td>
                  </tr>
                  <tr>
                    <td>26</td>
                    <td> Sri. P. Pavan Kumar</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1021905</td>
                  </tr>
                  <tr>
                    <td>27</td>
                    <td> Sri. R. Karthikeyan</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1021906</td>
                  </tr>
                  <tr>
                    <td>28</td>
                    <td> Miss. V. Sai Neeraja</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1021907</td>
                  </tr>
                  <tr>
                    <td>29</td>
                    <td> Sri. M.V. Ravi Kishore Reddy</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1022102</td>
                  </tr>
                  <tr>
                    <td>30</td>
                    <td> Sri. B.S. Praveen</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1022103</td>
                  </tr>
                  <tr>
                    <td>31</td>
                    <td> Sri. M.C. Venkata Subbaiah</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1022101</td>
                  </tr>
                  <tr>
                    <td>32</td>
                    <td> Sri. I. Srinivasula Reddy</td>
                    <td>Associate Professor</td>
                    <td>M.Tech</td>
                    <td>1022104</td>
                  </tr>


              </table></div>
  <div v-if="selectedRegulation=='Pr'">    <h1>UG Programme</h1>
    <p>Under Graduate programme in Civil Engineering was Satrted in the year 1980 with 60 students. To produce Civil Engineers with the necessary knowledge, skills and attitudes, who can be entrusted by the society to lead a sustainable world with enhanced quality of life. And the Present intake is 180.</p>
    <h1>PG Programme</h1>
    <p>Geo-Technical Engineering specialization was started under Civil Engineering Department with an intake of 18 students in 2010.</p></div>
  <div v-if="selectedRegulation=='Lb'"> <h1>LABORATORY DETAILS</h1>
    <p>Geo-Technical Engineering Laboratory</p>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab1.JPG"><br>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab2.JPG"><br>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab3.JPG"><br>
    <p>Geo-Technical Laboratory well equiped with number of Loading frames with different load capacities, Triaxial Shear test apparatus with constant and pore pressure gauges, auto compactor, 3 gang consolidometer, SPT apparatus, Field CBR Apparatus, direct shear test apparatus, Sieve shakers and 2 nos hot air Ovens.</p>
    <h1>Material Testing Laboratory (SM & Concrete)</h1>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab4.JPG"><br>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab5.JPG"><br>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab6.JPG"><br>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab7.JPG"><br>
    <p>Material testing laboratory is well equiped with 200T UTM and 1000 kN CTM, Torsion Test machine, simple and cantilever beam frames, Izod apparatus, Hardness testing machines, Charpee test machine, flow tables, Vee-Bee apparatus, Vicat apparatus, Rebound Hammer, slump and compaction factor apparatus, brecat moulds, rapid curing apparatus.</p>
    <h1>Fluid Mechanics Laboratory</h1>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab8.JPG"><br>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab9.JPG"><br>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab10.JPG"><br>
    <p>Fluid Mechanics Laboratory furnished with prototype turbines Like Pelton, Franchis and Centrifugal pump, pipe friction, venturi and orifice meters, pressure jet, wind tunnel.</p>
    <h1>Transporation Engineering Laboratory</h1>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab11.JPG"><br>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab12.JPG"><br>
    <p>Transportation engineering laboratory equiped with Marshal stability test apparatus, dual abration test machine, Los Angels abration testing machine, water bath, ducktility apparatus, flash and fire point apparatus, Benkel Man beam and set of sives.</p>
    <h1>Surveying Laboratory</h1>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab13.JPG"><br>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab14.JPG"><br>
    <p>Surveying lab well furnished with number of dumpy levels, theodolights, auto levels and staves, chaines, ranging rods, compass, plane tables and total Station.</p>
    <h1>Environmental Engineering Laboratory</h1>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab15.JPG"><br>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab16.JPG"><br>
    <p>Environmental Engineering Laboratory equiped with BOD & COD incubators, pH and Turbidity meters, Furnace, water bath, distilled water apparatus, jar test apparatus, photo spectro meter funded by AICTE under MODROBS.</p>
    <h1>CAD Laboratory</h1>
    <p>CAD Laboratory is well equiped with 50 computers with configuration, Intel Core 2 Duo Processor 2.2 GHz, Intel G31 Chip set mother board, 2 GB RAM, 320 GB Hard Disk, 17” LED monitor. Facilitated with Staad Pro v8i with Staad Foundation, Auto CAD, Draft Sight, SAP, R software, EPA net, Open Office.</p>
    <h2>Seminar Hall</h2>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab17.JPG"><br>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab18.JPG"><br>
    <p>Department of Civil Engineering having an exclusive Seminar hall with capacity of 120 seats, mounted EPSON Projector and Monitor, PA System.</p>
    <h1>Engineering Geology Laboratory</h1>
    <img src="https://www.ksrmce.ac.in/demo1/cedept/labs/clab19.JPG"><br>
    <p>Engineering Geology lab Furnished with different types of rocks and minerals, Stuctural Geology models.</p></div>
  </div>  
  <div v-if="selectedProgram=='CSE'">
  <div v-if="selectedRegulation=='ABTD'"> <b>Department of Computer Science & Engineering</b><br>
    <p>With the fast changing arena and advent of technology, the ubiquitous use of computers compels people to become computer literates. Realizing this fact and raising to the occasion, the college went for this branch of Computer Science and Engineering commemorating the decennial year of its inception. The department soon won laurels with the dedication and devotion of the faculty who are well qualified and experienced.The Department now becomes the center of excellence with competent faculty, state-of-art laboratory equipment, adequate infrastructure for conducting graduate, post graduate courses and research programmes, which will be used to mould the students into leaders in their profession.</p><br>
    <b>Vision</b><br>
    <p>To offer advanced subjects in a flexible curriculum which will evolve our graduates to be competent, responding successfully to career opportunities to meet the ongoing needs of the industry

        To progress as a centre of excellence adapting itself to the rapid developments in the field of computer science by performing a high-impact research and teaching environment.</p><br>
        <b>Mission</b><br>
        <p>To impart high quality professional training in postgraduate and undergraduate level with strong emphasis on basic principles of Computer Science and Engineering.<br>
            To provide our students state-of-the-art academic environment and make unceasing attempts to instill the values that will prepare them for continuous learning.<br>
            To empower the youth in surrounding rural area with basics of computer education making them self-sufficient individuals.<br>
            To create teaching-learning environment that emphasizes depth, originality and critical thinking fostering leading-edge research in the ever-changing field of computer science.</p><br>
            <b>Programme Educational Objectives</b><br>
            <p>B.Tech-Computer Science and Engineering Program Objectives.<br>

                A graduate of the K.S.R.M.C.E, C.S.E should have a successful career in CSE or a related field, and within three to five years, should<br>
                
                PEO1: Technical Competence: to disseminate inclusive knowledge of fundamentals of engineering and modern computing practices, through advanced curriculum, enabling the graduates to synthesize novel ideas.<br>
                
                PEO2: Learning Environment: to sensitize the graduates with the efficacy of continuous learning, reinforced through student-centric pedagogy that inculcates creative talents to survive and thrive in the profession.<br>
                
                PEO3: Sustainable Skills: to nurture professional behavior and industry-specific acumen in the students to effectively operate and sustain in heterogeneous work environments.<br>
                
                PEO4: Ethical Behavior: to help the students understand the ramifications of emerging computing technologies and ethical application of technical expertise to resolve contemporary challenges for the welfare of the nation.<br></p>
                
                <b>Programme Outcomes</b><br>
                <p>Ability to apply knowledge of Mathematics & Sciences to solve complex problems in Engineering.<br>
                Ability to identify, formulate and solve engineering problems
                Ability to design electrical systems that meet the specified needs with appropriate considerations for public health safety and environmental considerations.<br>
                Ability to conduct investigations using design of experiments, analysis and interpretation of data to arrive at valid conclusion.<br>
                Ability to acquire new knowledge to use modern engineering tools, software and equipments to analyze problems necessary for engineering practice.<br>
                Ability to recognize the impact of engineering on society.<br>
                Able to understand the impact of the professional engineering solutions in societal and environmental contexts and demonstrate the need for sustainable development.<br>
                An understanding of professional and ethical responsibility and norms of electrical engineering practices.<br>
                Ability to visualize and work on multi-disciplinary tasks.<br>
                Ability to communicate effectively in both verbal and written form.<br>
                Apply knowledge of management and finance for effective project management.<br>
                Ability to develop confidence for self-education and to understand the value of lifelong learning.</p><br>
                <b>Programme Specific Outcomes</b><br>
                <p>PSOs are statements that describe what the graduates of a specific engineering program should be able to do:<br>

                    PSO1: Professional Skills: The ability to understand, analyze and develop computer programs in the areas related to algorithms, system software, multimedia, web design, big data analytics, and networking for efficient design of computer-based systems of varying complexity.<br>
                    
                    PSO2: Problem-Solving Skills: The ability to apply standard practices and strategies in software project development using open-ended programming environments to deliver a quality product for business <br>
                    
                    PSO3: Successful Career and Entrepreneurship: The ability to employ modern computer languages, environments, and platforms in creating innovative career paths to be an entrepreneur, and a zest for higher studies.<br></p>
</div>
  <div v-if="selectedRegulation=='ABTHOD'"> 
 <img src="https://www.ksrmce.ac.in/demo1/csehead1.JPG"><br>
 <b>Dr.M.Srinivasulu<br>
    Professor and HOD of the Department<br>
    
    Profile<br></b></div>
  <div v-if="selectedRegulation=='BOS'"> <h1>Board of studies</h1> <table>
                <tr>
                  <th>Sl.No</th>

                   <th> Name of the faculty</th>
                    
                   <th> Designation</th>
                    
                   <th>Member</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dr.M.Sreenivasulu</td>
                  <td>Professor and HOD</td>
                  <td>Chairman</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Prof. C. Shoba Bindu</td>
                  <td>Professor in CSE Department, JNTUA College of Engineering, Anantapuramu</td>
                  <td>University Nominee</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Dr. D. Janakiram</td>
                    <td>Professor, Department of CSE, IITM, Chennai</td>
                    <td>Subject Expert</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Dr. R.B.V. Subramanyam</td>
                    <td>Professor, Department of CSE, NTTW, Warangal </td>
                    <td>Subject Expert</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Sri Ch. Sreedhar</td>
                    <td>Industrialist, Hyderabad</td>
                    <td>Industry</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Dr. G. Vara Prasad</td>
                    <td>Bangalore</td>
                    <td>Alumni</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Dr. B. Venkata Ramana Reddy</td>
                    <td>Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>Prof. V. Lokeswara Reddy	</td>
                    <td>Professor </td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>Dr. K. Sreenivasa Rao    </td>
                    <td>Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>Dr. M.V. Rathnamma</td>
                    <td>Associate Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>Dr.N. Ramanjaneya Reddy</td>
                    <td>Associate Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>Sri G. Nagendra Babu  </td>
                    <td>Associate Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>13</td>
                    <td>Smt. B. Manorama Devi </td>
                    <td>Associate Professor</td>
                    <td>Member</td>
                  </tr>
                  <tr>
                    <td>14</td>
                    <td>  Sri S. Khaja Khizar</td>
                    <td>Associate Professor</td>
                    <td>Member</td>
                  </tr>

              </table>
   ></div>
  <div v-if="selectedRegulation=='MtechStaff'">   <table>
                <tr>
                  <th>Sl.No</th>

                   <th> Name of the faculty</th>
                    
                   <th> Designation</th>
                    
                   <th>Qualification</th>
                    
                    <th>DOJ</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dr.M.Sreenivasulu</td>
                  <td>Professor & HOD</td>
                  <td>M.E., Ph.D.</td>
                  <td>09-11-1992</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Dr.B.V.RAMANA REDDY</td>
                  <td>Professor</td>
                  <td>MTech., Ph.D.</td>
                  <td>25-06-2004</td>
                </tr>
              </table></div>
  <div v-if="selectedRegulation=='staff'">   <table>
                <tr>
                  <th>Sl.No</th>

                   <th> Name of the faculty</th>
                    
                   <th> Designation</th>
                    
                   <th>Qualification</th>
                    
                    <th>Employee ID</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Dr. M. Sreenivasulu	</td>
                  <td>Professor & HOD</td>
                  <td> Ph.D.</td>
                  <td>1069301</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Dr. B. V. Ramana Reddy</td>
                  <td>Professor</td>
                  <td>Ph.D.</td>
                  <td>1060401</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Dr. V. Lokeswara Reddy</td>
                  <td>Professor</td>
                  <td>Ph.D.</td>
                  <td>1060406</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Dr. G. S. S. Rao</td>
                  <td>Professor</td>
                  <td>Ph.D.</td>
                  <td>1061906</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Dr. K. G. S.Venkatesan	</td>
                  <td>Professor</td>
                  <td>Ph.D.</td>
                  <td>1602102</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Dr. G. Vijay Kumar</td>
                  <td>Professor</td>
                  <td>Ph.D.</td>
                  <td>1062103</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Dr. J. Vinitha Vani</td>
                  <td>Professor</td>
                  <td>Ph.D.</td>
                  <td>1062104</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Dr. K. Srinivasa Rao</td>
                  <td>Professor</td>
                  <td>Ph.D.</td>
                  <td>1060402</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Dr. M. Venkata Ramana</td>
                  <td>Assiocate Professor</td>
                  <td>Ph.D.</td>
                  <td>1061402</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Dr. K. Venkata Ramana</td>
                  <td>Assoicate Professor</td>
                  <td>Ph.D.</td>
                  <td>1061403</td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Dr. N. Ramanjaneya Reddy</td>
                  <td>Assiocate Professor</td>
                  <td>Ph.D.</td>
                  <td>1061802</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Dr. M. V. Rathnamma</td>
                  <td>Assiocate Professor</td>
                  <td>Ph.D.</td>
                  <td>1158401</td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Smt. B. Manorama Devi</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1060508</td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Smt. B. Gouri</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1060603</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>Smt. S. Riyaz Banu</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1060604</td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>Sri. G. Nagendra Babu</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1060607</td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Sri. S. Khaja Khizar</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1060805</td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Sri Y. Prasad Reddy</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1060811</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Smt. V. Sudha</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061001</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Sm.t B. Swetha</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061202</td>
                </tr>
                <tr>
                  <td>21</td>
                  <td>Sri. B. Mahesh Naik</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061203</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>Smt. S. Harini Yadav</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061302</td>
                </tr>
                <tr>
                  <td>23</td>
                  <td>Smt. B. Mamatha</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061301</td>
                </tr>
                <tr>
                  <td>24</td>
                  <td>Sri. N.J. Pramod Dinakar</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061601</td>
                </tr>
                <tr>
                  <td>25</td>
                  <td>Smt. P. Parimala Kumari</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061701</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>Smt. P. Naga Lakshmi</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061806</td>
                </tr>
                <tr>
                  <td>27</td>
                  <td>Miss. Z. Shobha Rani</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061901</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>Sri Y.Bhaskar Reddy</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061903</td>
                </tr>
                <tr>
                  <td>29</td>
                  <td>Smt. R. L. Pravallika</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061904</td>
                </tr>
                <tr>
                  <td>30</td>
                  <td>Smt. R. Siva Jyothi</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061905</td>
                </tr>
                <tr>
                  <td>31</td>
                  <td>Miss. T. Anitha</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061907</td>
                </tr>
                <tr>
                  <td>32</td>
                  <td>Smt. O.V. Sowmya</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1061908</td>
                </tr>
                <tr>
                  <td>33</td>
                  <td>Sri. Md. Rahmathulla</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1062001</td>
                </tr>
                <tr>
                  <td>34</td>
                  <td>Sri. A. Rama Prakash Reddy</td>
                  <td>Assiocate Professor</td>
                  <td>M.Tech</td>
                  <td>1062101</td>
                </tr>

                


              </table></div>
  <div v-if="selectedRegulation=='Pr'">  <h2>Department of Computer Science & Engineering</h2>
    <b>UG Programme</b><br>
    <p>The department of Computer Science  and  Engineering  has  been in existence from the academic year 1991-92. The department is committed to impart technical education in the most technical manner to its students. The B.Tech. (CSE) course have been started with an initial intake of 30 during the academic year 1991-92 and the current intake is 180.  </p><br>
    <b>PG Programme</b><br>
    <p>The department has also started M. Tech (CSE) programme with an intake of 18 students in the academic year 2010-11. </p><br></div>
  <div v-if="selectedRegulation=='Lb'"> <h2>Department of Computer Science & Engineering</h2>
    <b>COMPUTER CENTRE DETAILS</b><br>
    <p>Department of CSE has well equipped computer labs to cater for the needs of students and faculty.<br>

        It has specialized laboratories providing various platforms to under graduate and postgraduate students.</p><br>
        <b>Computer Lab-I</b><br>
        <p>Computer Lab is equipped with 42 Computers with configuration  Intel Core 2 Duo 2.66 GHz processor, Intel G31 Chipset mother board, 18.5” LED monitor, 2 GB RAM, 160 GB Hard Disk.</p><br>
        <img src="https://www.ksrmce.ac.in/demo1/clab1.JPG"><br>
        <b>Computer Lab-2</b><br>
        <p>Computer Lab is equipped with 35 Computers with configuration  Intel Core 2 Duo 2.93 GHz processor, Intel G41 Chipset mother board, 19” LED monitor, 2 GB RAM,
            500 GB Hard Disk.</p><br>
            <img src="https://www.ksrmce.ac.in/demo1/clab2.JPG"><br>
            <b>Computer Lab-3</b><br>
            <p>Computer Lab is equipped with 33 Computers with configuration,  Pentium- IV 2.4 GHz, Intel 845 Chipset mother board, 15” CRT monitor, 2 GB RAM, 160 GB Hard Disk.</p><br>
            <img src="https://www.ksrmce.ac.in/demo1/clab3.JPG"><br>
            <b>Computer Lab-4</b><br>
            <p>Computer Lab is equipped with 37 Computers with configuration: Pentium- IV 2.4 GHz, Intel 845 Chipset mother board, 15” CRT monitor, 512 MB RAM, 40 GB Hard Disk</p><br>
            <img src="https://www.ksrmce.ac.in/demo1/clab4.JPG"><br>
            <b>Computer Lab-5</b>
            <p>Computer Lab is equipped with 38 Computers with configuration, Intel Core 2 Duo 2.93 GHz processor, Intel 41 chipset mother board, 2 GB RAM,  500 GB Hard Disk, 15” CRT monitor.</p><br>
            <img src="https://www.ksrmce.ac.in/demo1/clab5.JPG"><br>
            <b>Computer Lab-6</b><br>
            <p>Computer Lab is equipped with 92 Computers with configuration, Intel Dual Core Processor 2.2 GHz, Intel G31 Chip set mother board, 1 GB RAM, 160 GB Hard Disk, 15” LCD monitor.</p><br>
            <img src="https://www.ksrmce.ac.in/demo1/clab6.JPG"><br>
            <b>Computer Lab-7</b><br>
            <p>Computer Lab is equipped with 80 Computers with configuration, Intel Core 2 Duo Processor 2.2 GHz, Intel G31 Chip set mother board, 1 GB RAM, 160 GB Hard Disk, 15” LCD monitor.</p><br>
            <img src="https://www.ksrmce.ac.in/demo1/clab7.JPG"><br>
            <b>Computer Lab-8</b><br>
            <p>Computer Lab is equipped with 65 Computers with configuration, Intel Core 2 Duo Processor 2.2 GHz, Intel G31 Chip set mother board, 2 GB RAM, 320 GB Hard Disk, 17” LED monitor.</p><br>
            <img src="https://www.ksrmce.ac.in/demo1/clab8.JPG"><br>
            <b>Computer Lab-9</b><br>
            <p>Computer Lab is equipped with 65 Computers with configuration, Intel Core 2 Duo Processor 2.2 GHz, Intel G31 Chip set mother board, 2 GB RAM, 320 GB Hard Disk, 17” LED monitor.</p><br>
            <img src="https://www.ksrmce.ac.in/demo1/clab9.JPG"><br>
            <b>Internet Lab</b><br>
            <p>Computer Lab is equipped with 30 Computers with configuration, Intel Core 2 Duo Processor 2.4 GHz, Intel G31 Chip set mother board, 2 GB RAM, 160 GB Hard Disk, 17” LCD monitor.</p><br>
            <img src="https://www.ksrmce.ac.in/demo1/clab10.JPG"><br></div>
  </div>  
  <div v-if="selectedProgram=='ECE'">
  <div v-if="selectedRegulation=='ABTD'"> <h1>About ECE Department</h1></div>
  <div v-if="selectedRegulation=='ABTHOD'"> <h1>About HOD</h1></div>
  <div v-if="selectedRegulation=='BOS'"> <h1>Board of studies</h1></div>
  <div v-if="selectedRegulation=='MtechStaff'"> <h1>M.Tech Staff details</h1></div>
  <div v-if="selectedRegulation=='staff'"> <h1>staff details</h1></div>
  <div v-if="selectedRegulation=='Pr'"> <h1>programs</h1></div>
  <div v-if="selectedRegulation=='Lb'"> <h1>laboratories</h1></div>
  </div>  
  <div v-if="selectedProgram=='EEE'">
  <div v-if="selectedRegulation=='ABTD'"> <h1>About EEE Department</h1></div>
  <div v-if="selectedRegulation=='ABTHOD'"> <h1>About HOD</h1></div>
  <div v-if="selectedRegulation=='BOS'"> <h1>Board of studies</h1></div>
  <div v-if="selectedRegulation=='MtechStaff'"> <h1>M.Tech Staff details</h1></div>
  <div v-if="selectedRegulation=='staff'"> <h1>staff details</h1></div>
  <div v-if="selectedRegulation=='Pr'"> <h1>programs</h1></div>
  <div v-if="selectedRegulation=='Lb'"> <h1>laboratories</h1></div>
  </div>  
  <div v-if="selectedProgram=='ME'">
  <div v-if="selectedRegulation=='ABTD'"> <h1>About Mechanical Department</h1></div>
  <div v-if="selectedRegulation=='ABTHOD'"> <h1>About HOD</h1></div>
  <div v-if="selectedRegulation=='BOS'"> <h1>Board of studies</h1></div>
  <div v-if="selectedRegulation=='MtechStaff'"> <h1>M.Tech Staff details</h1></div>
  <div v-if="selectedRegulation=='staff'"> <h1>staff details</h1></div>
  <div v-if="selectedRegulation=='Pr'"> <h1>programs</h1></div>
  <div v-if="selectedRegulation=='Lb'"> <h1>laboratories</h1></div>
  </div>  
  <div v-if="selectedProgram=='HS'">
  <div v-if="selectedRegulation=='ABTD'"> <h1>About Humanities And Sciences Department</h1></div>
  <div v-if="selectedRegulation=='ABTHOD'"> <h1>About HOD</h1></div>
  <div v-if="selectedRegulation=='BOS'"> <h1>Board of studies</h1></div>
  <div v-if="selectedRegulation=='MtechStaff'"> <h1>M.Tech Staff details</h1></div>
  <div v-if="selectedRegulation=='staff'"> <h1>staff details</h1></div>
  <div v-if="selectedRegulation=='Pr'"> <h1>programs</h1></div>
  <div v-if="selectedRegulation=='Lb'"> <h1>laboratories</h1></div>
  </div>  
  </div>
</template>

<script>
export default {
    data() {
      return {
         selectedProgram: '',
        selectedRegulationLabel: '',
        selectedRegulation: '',

        UG:[
            {sname: '-', name: ' --Select a Regulation-- ', disabled: true},
            {sname: 'ABTD', name: 'About Department'},
            {sname: 'ABTHOD', name: 'About Hod'},
            {sname: 'BOS', name: 'Board Of Studies'},
            {sname: 'MtechStaff', name: 'M.Tech Staff'},
            {sname: 'staff', name: 'Staff'},
            {sname: 'Pr', name: 'Programs'},
            {sname: 'Lb', name: 'laboratories'}
            ],
        programs: [
          { sname: '-', name: ' --Select a Program-- ', disabled: true},
          { sname: 'CE', name:'Civil engineering'},
          { sname: 'CSE',name: 'Computer science and Engineering'},
          { sname: 'ECE',name: 'Electronics and Communication Engineering'},
          { sname: 'EEE',name: 'Electrical and Electronics Engineering'},
          { sname: 'ME',name: 'Mechanical Engineering'},
          { sname: 'HS',name: 'Humanities and Sciences'}
        ],
        depart:'<b>hello</b>'
    }
  },
 
}
</script>
<style>
#regulations{
  background-color: white;
}
#selection{
  margin-left: 25px;
  margin-right: 25px;
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
  background-color: rgb(6, 138, 116);
  color: white;
}
.hr {
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
.select{
  margin-left: 20px;
}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
p {
  text-align: left;
}
</style>