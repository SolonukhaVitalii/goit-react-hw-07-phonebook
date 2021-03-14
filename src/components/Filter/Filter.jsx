import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';


class Filter extends Component {
    componentWillUnmount() {
        this.props.resetFilter();
    }
    render() {
        const { filter, onChange } = this.props;
        return (
            <div className={s.filter}>
                <label className={s.label} htmlFor="">Find contacts by name
                <input className={s.input}
                        type="text"
                        name="filter"
                        value={filter}
                        onChange={onChange}
                    />
                </label>
            </div>
        );
    }
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    resetFiletr: PropTypes.func.isRequired,
};

export default Filter;