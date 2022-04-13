import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../../style.module.css'
import styles from './LoginCard.module.css'

const LoginCard = (props) => {
  return (
    <div className={` ${styles['Login-card']} ${styles[props.rootClassName]} `}>
      <div className={styles['Login-pic']}>
      </div>
      <div className={styles['Login-form']}>
        <h3 className={styles['title']}>
          <span className={styles['text1']}>Welcome to</span>
          <span className={styles['text2']}> iTRACK</span>
        </h3>
        <span className={styles['subtitle']}>{props.text}</span>
        <input
          type="email"
          placeholder={props.textinput_placeholder}
          className={styles['input-fullwidth']}
        />
        <input
          type="text"
          placeholder={props.textinput_placeholder1}
          className={styles['input-fullwidth']}
        />
        <button className={styles['button-fullwidth']}>
          {props.button}
        </button>
        <button className={styles['button-fullwidth-solid']}>
          {props.button1}
          <i class="fa-brands fa-facebook fa-xs"></i>
        </button>
        <button
          className={styles['button-fullwidth-solid-orange']}>
          {props.button2}
          <i class="fa-brands fa-google fa-xs"></i>
        </button>
        <div className={styles['container']}>
          <a href={props.link_text} target="_blank" rel="noreferrer noopener">
            {props.text1}
          </a>
          <a href={props.link_text1} target="_blank" rel="noreferrer noopener">
            {props.text2}
          </a>
        </div>
      </div>
    </div>
  )
}

LoginCard.defaultProps = {
  text1: 'Create Account',
  button1: 'Sign in with Facebook',
  link_text: 'https://example.com',
  text: "Let's log in to be better you (your health)",
  button2: 'Sign in with Google',
  link_text1: 'https://example.com',
  text2: 'Forget Password?',
  textinput_placeholder: 'Email Address',
  button: 'Sign in',
  textinput_placeholder1: 'Password',
  rootClassName: '',
}

LoginCard.propTypes = {
  text1: PropTypes.string,
  button1: PropTypes.string,
  link_text: PropTypes.string,
  text: PropTypes.string,
  button2: PropTypes.string,
  link_text1: PropTypes.string,
  text2: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  button: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default LoginCard
