
function Form(){
    var formstyle={
        width:"300px",
        padding:"20px",
        margin:"50px auto",
        boxShadow:"0 0 10px black",
    }
    return(
        <div style={formstyle}>
            <form action="">
                <div>
                    <input type="text" placeholder="enter name" />
                </div><br />
                <div>
                    <input type="password" placeholder="enter password" />
                </div><br />
                <div>
                    <input type="text" placeholder="enter email" />
                </div><br />
                <div>
                    <input type="button" value="Register" />
                </div>
            </form>
        </div>
    )
}
export default Form;