export const colors = {
  primary: '#614AD3',
  white: '#fff',
  sweetpurple: '#E0DEF7',
  smoke: '#EEECEC'
}

export const screens = {
  welcome: 'welcome',
  login: 'login',
  home: 'home',
  questionList: 'questionList',
  questionDetail: 'questionDetail',
  result: 'result',
  resultDetail: 'resultDetail',
  resultList: 'resultList'
}

export const accounts = [
  {
    username: 'admin',
    password: 'admin'
  },
  {
    username: 'test',
    password: 'test'
  }
]

export const exams = {
  fundamentalInformationTechnologyEnginner: 'fundamentalInformationTechnologyEnginner',
  informationTechnologyPassport: 'informationTechnologyPassport'
}



export const questions = {
  fe : [





  ],

  itpassport : [

    {"_id":"607d3b951f9a2311b976411a",
    "text":"When a chairperson and a secretary are selected from three (3) candidates with a method  that allows dual roles, from the three (3) candidates, there are three (3) combinations for  the selection of a single chairperson and three (3) combinations for the selection of a  secretary, so in total, there are nine (9) combinations for the selection of a chairperson  and a secretary. When a chairperson and a secretary are selected from five (5) candidates  with a method that allows dual roles, how many combinations for the selection are there?",
    "answers":
    ["5",  "10", "20",  "25"],
    "correctAnswer":"3"},

    {"_id":"607d57c63758c7c63b809d42",
    "text":"Which of the following is always true for two (2) sets A and B? Here, (X ∩ Y) represents the part that belongs to both X and Y (intersection set), and (X ∪ Y) represents the part that belongs to at least one of X or Y (union set).",
    "answers":
    [
      "(A ∪ B) is a subset of the complement of (A ∩ B).",
      "(A ∪ B) is a subset of A.",
      "(A ∩ B) is a subset of (A ∪ B).",
      "(A ∩ B) is a subset of the complement of A."],
    "correctAnswer":"2"}
  ,
  
  {"_id":"607d59ab3758c7c63b809d43","text":"In a queue, three elements 33, 27, and 12 are enqueued in this order. After the element  45 is enqueued to this queue, two (2) elements are retrieved (or dequeued). Which of  the following is the second element to be retrieved? ","answers":["12","27","33","45"],"correctAnswer":"1"}

    ,
    
    {"_id":"607d5a7c8d2296e6a042bb41","text":"Which of the following is an appropriate description concerning HTML? ","answers":["It is a markup language that can specify the logical structure and layout of a Web page  by using tags. ","It is a script language that can describe the program or processing steps executed on a  browser. ","It is a communication protocol that is used between a browser and a Web server. ","It is a markup language that enables users to describe the meaning and structure of  data by defining their own unique tags. "],"correctAnswer":"0"}
    ,
    {"_id":"607d5ad88d2296e6a042bb42","text":"Which of the following is an appropriate description concerning the Java language?","answers":["It is a markup language used for describing Web pages. ","It is a language developed for scientific and engineering calculations.","It is an object-oriented language that provides platform-independent portability.","It is a language developed for business-oriented calculations. "],"correctAnswer":"2"}
    ,

    {"_id":"607d5bc58d2296e6a042bb44","text":"Which of the following is the appropriate description concerning a device driver that  enables the use of peripheral equipment with a PC?","answers":["When a hard disk drive is initialized and the operating system is reinstalled, it is  necessary to reinstall device drivers that were installed separately to the operating  system. ","When new application software is installed, it is necessary to reinstall all device  drivers that this software uses. ","Even if a device driver is no longer required, a user cannot delete the device driver  once it is installed.","If only one (1) device driver for a printer is installed, all printers can be used  regardless of manufacturer or model. "],"correctAnswer":"0"}
    ,

    {"_id":"607d5c108d2296e6a042bb45","text":"Which of the following is an appropriate description of the cache memory of a CPU?","answers":["The size of cache memory is greater than or equal to the size of main memory. ","Cache memory is used to reduce the effective access time of main memory. ","On computers with a large main memory, there is no effect of cache memory. ","In order to increase the hit rate, the user specifies the frequently used programs to  be resident in cache memory. "],"correctAnswer":"1"}
    ,

    {"_id":"607d5c668d2296e6a042bb46","text":"Which of the following is appropriate as a description concerning Plug and Play?","answers":["When a peripheral device is connected to a PC, installation and settings of the device  driver are performed automatically. ","Software for enhancing the functions of application software is installed separately.","Power is supplied from a PC to a peripheral device via a cable connected to the  peripheral device. ","A specific program is executed, and the system performance is evaluated on the basis  of the time taken for the processing. "],"correctAnswer":"0"}

,
{"_id":"607d5cf98d2296e6a042bb47","text":"Which of the following is an explanation of the reliability index that is calculated by  the expression:  MTBF / (MTBF + MTTR))","answers":["Average time until a system failure occurs ","Average time taken to recover a system after a failure","Proportion of the operation time of a system to the total time","Proportion of the downtime of a system to the total time "],"correctAnswer":"2"}
,
{"_id":"607d5d8d8d2296e6a042bb48","text":"When the types of programs that are executed when a PC is started are broadly classified  into three categories, namely BIOS (Basic Input Output System), OS, and resident  application program, which of the following is the order of execution of the programs? ","answers":["BIOS, OS, resident application program","OS, BIOS, resident application program","OS, resident application program, BIOS ","Resident application program, BIOS, OS"],"correctAnswer":"0"}
,
{"_id":"607d5ded8d2296e6a042bb49","text":"Which of the following is an advantage of using OSS (Open Source Software)?","answers":["Technical support is provided free of charge from the developer at the time of  installation. ","The software is not prone to infection of viruses, as the source code is not released. ","Compensation can be received for damages caused by defects in the software. ","The source code can be modified to fit the environment of the user in accordance  with the license conditions. "],"correctAnswer":"3"}


,
{"_id":"607d5e898d2296e6a042bb4a","text":"Which of the following is an appropriate combination of software that includes only  OSS (Open Source Software)? ","answers":["Internet Explorer, Linux, PostgreSQL","Internet Explorer, PostgreSQL, Windows ","Firefox, Linux, Thunderbird","Firefox, Thunderbird, Windows "],"correctAnswer":"2"}

,
{"_id":"607d5ed98d2296e6a042bb4b","text":"Which of the following is an appropriate description concerning the OS for PCs?","answers":["Each PC allows only one (1) type of OS to be installed and run on it. ","There is no OS for PCs equipped with a 64-bit CPU. ","When an OS is upgraded to a new version, all of the software operating with the old  version of the OS cannot be used any more. ","There exist some OSs for PCs that can be started up by using an external storage  device, such as a CD-ROM and USB memory, other than the hard disk. "],"correctAnswer":"3"}
,
{"_id":"607d62138d2296e6a042bb4c","text":"Which of the following is the appropriate merit of server virtualization?","answers":["It enables a single computer to be run like it was multiple servers, so it enables the  flexible distribution of physical resources in response to demand. ","A server is built by plugging the required number of blades that have a computer  function into a chassis, so the number of machines can be flexibly increased and  decreased. ","The computers that constitute a server are used without being connected to other  servers, so security can be improved. ","Multiple computers that constitute a server perform the same processing and the  results of the processing are cross-checked against each other, so reliability can be  improved. "],"correctAnswer":"0"}

,
{"_id":"607d62778d2296e6a042bb4d","text":"Which of the following is an input method where a touch panel is operated by  touching it in two or more locations simultaneously?","answers":["Touch type","Double click","Multitask","Multi-touch "],"correctAnswer":"3"}

,

{"_id":"607d62d78d2296e6a042bb4e","text":"On a display screen, various colors are created through additive color mixing with three  colors, namely red, green, and blue. When the red, green, and blue are mixed evenly,  which of the following colors is formed?","answers":["Red-violet ","Yellow","White","Green rust "],"correctAnswer":"2"}
,
{"_id":"607d64f28d2296e6a042bb4f","text":"In a relational database, which of the following is the reason for a primary key being  specified? ","answers":["To clearly indicate that something is not subject to an arithmetic operation","To enable the search of the column that is specified as the primary key ","To prevent reference from another table ","To enable any record in the table to be uniquely identified"],"correctAnswer":"3"}

,
{"_id":"607d656e8d2296e6a042bb50","text":"Sales data is to be managed with tables in a relational database. When the tables for sales  data are designed, which of the following activities analyzes the relationship between  the fields of the tables and decompose the tables so that there are no duplications or  inconsistencies in the data?","answers":["Join","Projection","Normalization","Exclusive control "],"correctAnswer":"2"}

,
{"_id":"607d9ce50c4471817b738f76","text":"Which of the following is an appropriate description about association of records for a  relational database?","answers":["Records in multiple tables are associated at the same row position relative to the first  row in each of the tables.","Records in multiple tables are associated through the values of corresponding fields.","Records are associated with one another by a pointer that represents the parentage. ","Records are associated with one another by a hash function. "],"correctAnswer":"1"}
,
  ]





};