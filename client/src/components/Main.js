import React from 'react';
import { browserHistory } from 'react-router';
// import './css/login.css'

export default class Main extends React.Component {
   constructor(props){
       super(props);
       this.state={
           username:''
       }
   }
    componentDidMount() {
        console.log(this.props.user); 
        const currentUser = this.props.user;
        try{
            if(currentUser.status===200){
                const user=currentUser.user;
                this.setState({username:user.username});
                console.log(user.username)
                localStorage.setItem('user',JSON.stringify(user));
            }else{
                const userString = localStorage.getItem('user');
                console.log(userString)
                if(userString){
                    this.setState({username:JSON.parse(userString).username});
                }else{
                    browserHistory.push('/login');             
                }
            }  
        }catch(err){
            browserHistory.push('/login');                         
        }
    }
    componentWillReceiveProps(nextProps){
    }

    render() {
        return (
            <div className="Home">
                <h3 id="main">Welcome {this.state.username} !!!</h3>
            </div>
        );
    }
}
