

const Notification = ({message, error}) => {

    if(error){
        return(
            <div style={{border: 'solid', color: 'red'}} className="m-4">
                <p>{message}</p>
            </div>
        )
    }
    return(
        <div style={{border: 'solid', color: 'green'}} className="m-4">
            <p>{message}</p>
        </div>
    )
}

export default Notification