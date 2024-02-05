import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { createUser } from "../../features/user/userSlice";

import styles from '../../styles/User.module.css';

const UserSignupForm = ({toggleCurrentFormType, closeForm }) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };  

  const handleSubmit = (e) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).every((val) => val);

    if (!isNotEmpty) return;

    dispatch(createUser(values));
    closeForm();
  };  

  return (
    <div className={styles.wrapper}>
      <div className={styles.close} onClick={closeForm}>
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#close`} />
        </svg>
      </div>

      <div className={styles.title}>Sign Up</div>

      <form className={styles.form}>

        <div className={styles.group}>
          <input type="email" name="email" value={values.email} onChange={handleChange} autoComplete="off" placeholder="Your email" required />
        </div>      

        <div className={styles.group}>
          <input type="name" name="name" value={values.name} onChange={handleChange} autoComplete="off" placeholder="Your name" required />
        </div>        

        <div className={styles.group}>
          <input type="password" name="password" value={values.password} onChange={handleChange} autoComplete="off" placeholder="Your password" required />
        </div>

        <div className={styles.group}>
          <input type="avatar" name="avatar" value={values.avatar} onChange={handleChange} autoComplete="off" placeholder="Your avatar" required />
        </div>   

        <div className={styles.link} onClick={() => toggleCurrentFormType("login")} >I already have an account</div>             

        <button type="submit" onClick={handleSubmit} className={styles.submit}>Create an account</button>        

      </form>

    </div>
  )
}

export default UserSignupForm