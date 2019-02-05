import React, { Component } from 'react';
import Icon from '../Icon/Icon';
import Results from '../Results/Results';
import './Search.css';

class Search extends Component {
 state = {
   query: '',
   minimumInputLength: 2,
   placeholder: 'Search',
   showDeleteIcon: false,
   showSearchIcon: false,
 }

 componentDidMount() {
   this.setState({
     minimumInputLength: this.props.minimumInputLength,
     placeholder: this.props.placeholder
   })
 }


 inputChangeHandler = (event) => {
      this.setState({ query: event.target.value }) ;
      if(event.target.value.length >= this.state.minimumInputLength) {
          this.setState({ showSearchIcon: true }) ;
      }
      else {
          this.setState({ showSearchIcon: false, showDeleteIcon: false }) ;
      }
 }

 clearAllHandler = () => {
     this.setState({ query: '', showDeleteIcon: false, showSearchIcon: false  });
 }

 addDeleteIcon = ()=> {
   this.setState({ showDeleteIcon: true }) ;
 }

 removeDeleteIcon = () => {
   this.setState({ showDeleteIcon: false }) ;
 }

 render() {
   return (
     <div className="SearchWrapper">
       <form>
         <input
           placeholder={this.state.placeholder}
           value={this.state.query}
           onChange={this.inputChangeHandler}
         />
         <div className="Icons">
            {this.state.showSearchIcon ? <Icon type='search'/> : null }
            {this.state.showDeleteIcon ? <Icon type='clear' clicked={this.clearAllHandler}/> : null }
         </div>
         {this.state.showSearchIcon ? <Results
           query={this.state.query}
           foundResults={this.addDeleteIcon}
           foundNoResults={this.removeDeleteIcon}/> : null }
       </form>
     </div>
   )
 }
}

export default Search;
