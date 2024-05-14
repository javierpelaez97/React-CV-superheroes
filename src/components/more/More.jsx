
const More = ({languages, habilities, volunteer})=>{
    return(
        <div>
            <h2>Languages</h2>
                <div className="card">
                    <p>{languages.language}</p>
                    <p> Writing {languages.wrlevel}</p>
                    <p> Speaking {languages.splevel}</p>
                </div>
            <h2>Skills</h2>
                <div>
                    <p>{habilities}</p>
                </div>
        </div>
    )


}

export default More