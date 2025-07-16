import React from 'react'
import style from './css/Skills.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode,faCog,faDatabase } from '@fortawesome/free-solid-svg-icons'

let skills=[{title:"FRONT END TECHNOLOGY PROFICIENCY",
content:"I have knowledge of Web development Skills Like HTML, CSS, JAVASCRIPT, BOOTSTRAP, REACT.JS",
class:style.skill_card_even,icon:faReact,iclass:style.icon},
{title:"BACK END TECHNOLOGY PROFICIENCY",content:"I am well-versed in back-end technologies, particularly skilled in Node.js and Express.js", 
class:style.skill_card_odd,icon:faCog,iclass:style.icon1},
{title:"DATABASE TECHNOLOGIES",content:"I am familiar with Database Technology Like MongoDB and SQL", 
class:style.skill_card_odd,icon:faDatabase,iclass:style.icon1},
{title:"PROGRAMLING LANGUAGE",content:"I am proficient in Programing with JAVA, JAVASCRIPT and PYTHON",
class:style.skill_card_even,icon:faCode,iclass:style.icon}]

function Skills() {
  
  return (
  <div  id='skill' className={style.skill}>
  <label className={style.lable}>HERE ARE SOME OF MY EXPERTISE</label>
  <div className={style.skill_container}>
  {skills.map((ele,i)=>{
  return <div key={i} className={ele.class}>
    <FontAwesomeIcon icon={ele.icon} className={ele.iclass}/>
     <h3 style={{textAlign:'center'}}>{ele.title}</h3>
     <p style={{textAlign:'center',lineHeight:'30px',fontSize:'1rem'}}>{ele.content}</p>
   </div>
 })}
 </div>
</div>
  )
}
export default Skills