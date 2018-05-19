import React, {Component, Fragment} from 'react';

class SearchForm extends Component {
    input = null;

    render () {
        return (
            <Fragment>
                <div>
                    <input className="input is-medium" placeholder="Search movie by title" 
                    ref={el => {this.input = el}}
                    onChange={() => this.props.onSearchClick(this.input.value)} />
                </div>
                <div>  
                    <a className="button is-medium" 
                    onClick={() => {
                                this.input.value = "", 
                                this.props.onSearchClick(this.input.value)
                            }} >
                    Clear</a>
                </div> 
            </Fragment>
        );
    }
}

export default SearchForm;