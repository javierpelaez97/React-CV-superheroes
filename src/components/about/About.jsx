import "./About.css"

const About = ({hero}) =>{
   return(
      <div className="about">
         <h2>About Me</h2>
         <div className="card">
            {hero.map((info)=>{
               return(
                  <p>{info.info}</p>
               )
               
         
         })}   
         </div>
         
            
         
      </div>
   
      
   )
}
console.log('Prueba',About);

export default About