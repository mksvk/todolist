import React ,{Component}from "react";
import { v4 as uuid } from 'uuid';
class App extends Component{
  state = {
    name : "",
    a :[{todo : "Add to-dos here",id :uuid() ,val:false}],

  }
  

  handleChange = (eve)=>{
    console.log( eve.target.value)
    this.setState({name : eve.target.value})
  }
  handleadd = ()=>{
    console.log(this.state.name)
    if(this.state.name !== ""){
      this.setState({
        a: [...this.state.a, {todo:this.state.name,id:uuid()}]
      },()=> {console.log(this.state.a)})
    }
    
    this.setState({name : ""})

   
  }
  delElement = (eve)=>{
    console.log(eve.target.value)
    this.setState({
      a : this.state.a.filter((e)=>{return e.id!==eve.target.value})
    })
  }

  handelCheck = (ev)=>{
    this.setState({
      a : this.state.a.map((e)=>{
        if(e.id===ev.target.value){
          return {...e,val : !e.val}
        }

        return e})
    })  
    console.log(ev.target.value)
  }
  render(){
    return(
      <>
      <h1>
        To-do list
      </h1>
      <input  onChange={this.handleChange} value={this.state.name}  >
      </input>
      <button onClick={this.handleadd} >add</button>
      <ul>
        {this.state.a.map((e)=><li className={String(e.val)} key={e.id}>{e.todo}<button onClick={this.delElement} value={e.id}>del</button><input onClick={(ev)=>{this.handelCheck(ev)}} value={e.id} type="checkbox" ></input></li>)}
      </ul>
      </>
    )
  }
}
export default App