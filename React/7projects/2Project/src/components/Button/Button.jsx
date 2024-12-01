
import styles from './button.module.css'
const Button = ({text,icons}) => {
    console.log(styles)
  return (
   <button className={styles.primary_btn}>
        {icons}
        {text}
   </button>
  )
}

export default Button