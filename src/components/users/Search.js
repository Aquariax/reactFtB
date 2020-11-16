import React, { Component } from 'react'

export class Search extends Component {
    state={
        text:""
    };
    onChange =(typedIn)=>{
        this.setState({[typedIn.target.name]: typedIn.target.value})
    }
    onSubmit=(submit)=>{
        submit.preventDefault();
        if(this.state.text ==''){
            this.props.setAlert('Please type something', 'light')
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({text:''})
        }
    }
    render() {
        const {showClear, clearUsers} =this.props
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..."
                    value={this.state.text}
                    onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {showClear &&
                <button className="btn-light btn-block" onClick={clearUsers}>clear</button>}
                
            </div>
        )
    }
}

export default Search
