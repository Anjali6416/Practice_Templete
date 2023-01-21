function Todo() {
  // Get todo
  const getTodo = async () => {
    try {
      let res = await fetch("");
      let data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  //  Post Todo
  const postTodo = async (payload) => {
    try {
      let res = await fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      let data = await res.json();
      console.log(data);
      //   call gettodo after successfully
      getTodo();
    } catch (error) {
      console.log(error);
    }
  };
  //   patch todo
  const patchTodo = async (id, newStatus) => {
    let res = await fetch(`.../${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        status: newStatus,
      }),
    });
  };
//   Delete Todo
const deleteTodo =async(id)=>{
    let res=await fetch(`.../${id}`,{
       method:"DELETE",
       
    })
}
  return <div></div>;
}
export default Todo;
