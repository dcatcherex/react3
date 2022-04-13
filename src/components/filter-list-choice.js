import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './Filter-list-choice.module.css'

export const FilterListChoice = (props) => {
  return (
    <div className={` ${styles['filter-list']} ${projectStyles['kanit300']} `}>
      <input type="checkbox" checked="true" className={styles['checkbox']} />
      <div className={styles['container']}>
        <span>{props.text}</span>
        <span>{props.text1}</span>
      </div>
    </div>
  )
}

FilterListChoice.defaultProps = {
  text: 'Run',
  text1: '[ 20 ]',
}

FilterListChoice.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

