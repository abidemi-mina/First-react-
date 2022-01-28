import React,{Component} from "react";
import FormElement from "./resuables/FormElement";

class Form extends Component{
    constructor(){
        super()
        this.state = {
            name:'',
            url:''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit (e){
        e.preventDefault();
        this.props.addLuxuryCars(this.state);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                <FormElement type='text' name='name' id='name' className='form-control' value={this.state.name} placeholder='Enter your name' onChange={(e) =>{this.setState({name:e.target.value})}}/>
                </div>
                <div>
                <FormElement type='url' name='url' id='url' className='form-control' value={this.state.url} placeholder='Your Url' onChange={(e) =>{this.setState({url:e.target.value})}} />
                </div>
                <div>
               <button type="submit"  className='form-control'> Submit</button>
                </div>
            </form>
        )
    }

}
export default Form;