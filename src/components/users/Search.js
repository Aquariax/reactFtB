import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search =({setAlert})=> {
    const githubContext = useContext(GithubContext);
    const [text,setText] = useState('');
    const onChange =(typedIn)=>{
        setText(typedIn.target.value)
    }
    const onSubmit=(submit)=>{
        submit.preventDefault();
        if(text ===''){
            setAlert('Please type something', 'light')
        }else{
            githubContext.searchUsers(text);
            setText('')
        }
    }
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..."
                    value={text}
                    onChange={onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {githubContext.users.length > 0 &&
                <button className="btn-light btn-block" onClick={githubContext.clearUsers}>clear</button>}
                
            </div>
        )
    }


export default Search
