import React, { Component } from 'react';
import axios from 'axios';
import Result from './Result/Result';
import './Results.css';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          query: '',
          showNoResults: false
        }
      }



    componentDidMount() {
        this.getResultsFromApi();
       }

    componentDidUpdate () {
      if(this.props.query != this.state.query){
        this.getResultsFromApi();
      }
    }


    getResultsFromApi() {
      axios.get('/search')
       .then(response => {
         let updatedList = response.data.suggestions;
         updatedList = updatedList.filter(item => {
           return item.searchterm.includes(this.props.query);
         });

         const showNoResults = updatedList.length > 0 ?  false : true;
         this.setState({items: updatedList, query: this.props.query, showNoResults: showNoResults});
         updatedList.length > 0 ? this.props.foundResults() : this.props.foundNoResults();
       });
    }


    render() {
        let results = this.state.showNoResults ? <Result key="1" text="No results found"/> : null;
        if(this.state.items.length){
           results = this.state.items.map(item => {
            return <Result
              key={item.searchterm}
              text={item.searchterm}
              subtext={this.state.query}
              nrofresults={item.nrResults}/>
          })
        }


        const componentClasses = ['Results'];
        if (this.state.visible) { componentClasses.push('show'); }

      return <div className={componentClasses.join(' ')}>{results}</div>
      }

}

export default Results;
