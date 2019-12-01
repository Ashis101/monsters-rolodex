import React,{Component} from 'react';
import './App.css';
import Cardlist from './component/card-list/card-list.component'
import Searchbox from './component/style-box/style-box.component'
class App extends Component{
  constructor(){
    super()
    this.state={
     monster:[],
     searchContent:''
    }
  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data=>data.json())
    .then(user=>this.setState({monster:user}))
  }
 
  check=(e)=>{
    this.setState({searchContent:e.target.value})
  }

  render(){
    const {monster,searchContent}=this.state
    const filtermonster=monster.filter(data=>{
     return  data.name.toLowerCase().includes(searchContent.toLowerCase())
    })
    return(
      <div className="App"> 
      <h1>Monster Rolodex</h1>
      <Searchbox placeholder={'Search Box'} handelchange={this.check} />
      <Cardlist monsters={filtermonster}/>
    </div>
    )
  }
}

export default App;
