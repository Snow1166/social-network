import styles from './FormControls.module.css'


export const ControlInputText = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : ' ')}>
            <div>
                <props.tag  {...props} {...input}/>
            </div>
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
