import "./Education.css"

const Education =({education}) =>{
    return (
        <div>
            <div className="education card">
            {education.map((item) => {   
                return(
                    <div key={JSON.stringify(item)}>
                        <p>📕 {item.name}</p>
                        <p>{item.date}</p>
                        <p>{item.where}</p>

                    </div>
                )
            })}
            
            </div>
        </div>
    )
}
export default Education
