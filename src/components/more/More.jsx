import "./More.css"


const More = ({languages, habilities, volunteer})=>{
    return(
        <div className="title">
            <h2>Languages</h2>
                <div className="card">
                    <p>{languages.language}</p>
                    <p> ✏️ Writing {languages.wrlevel}</p>
                    <p> 💬 Speaking {languages.splevel}</p>
                </div>
            <div className="title">
                <h2>Skills</h2>
                    <div className="card">
                    
                            {habilities.map((item)=>{
                                return(
                                    <div key={JSON.stringify(item)}>
                                        <p>🔧{item}</p>
                                    </div>
                                )
                        })}
                    </div>
            </div>
            
            <div className="title">
                <h2>Volunteer</h2>
                    <div className="card">
                    
                    {volunteer.map((item)=>{
                        return(
                            <div key = {JSON.stringify(item)}>
                            <p>🥽{item.name}</p>
                            <p>{item.where}</p>
                            <p>{item.description}</p>
                        </div>
                        )
                    })}      
                    </div> 
            </div>
              
            
                
                    
                    
        </div>
        
    )


}

export default More