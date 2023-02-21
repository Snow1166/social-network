import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} type={'password'} component={'input'}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={'input'}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const Logout = (props) => {

    return (
        <div>
            <button onClick={() => props.logout()}>Logout</button>
        </div>
    )
}

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login({email: 'semukov.spb@gmail.com', password: '911956alex', rememberMe: true, })
    }
    return <div>

        {!props.isAuth
             ?<h1>Login</h1>
            :<h1>Logout</h1>}
        {!props.isAuth
            ?<LoginReduxForm onSubmit={onSubmit}/>
            : <Logout logout={props.logout}/>}


        {/*<h1>Login</h1>*/}
        {/*<LoginReduxForm onSubmit={onSubmit}/>*/}
    </div>
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

export default Login;
