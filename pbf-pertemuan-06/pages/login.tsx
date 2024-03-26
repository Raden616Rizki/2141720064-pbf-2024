import {
    useDispatch,
    useSelector
} from 'react-redux';

import {
    setLogin
} from '../redux/auth/authSlice';

import "bootstrap/dist/css/bootstrap.min.css"; // import css bootstrap
// import parse from 'html-react-parser'; // import parse utk parsing string html ke html murni

export default function Logincheck() {
    const {
        isLogin
    } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    function handleAuth(type = 'logout') {
        if (type === 'logout' || type === 'login') {
            dispatch(setLogin({
                isLogin:type === 'login' ? true : false
            }));
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card mt-3">
                        <div className="card-header">Status Login</div>
                        <div className="card-body">
                            { isLogin ?
                                <div key="success-alert" className="alert alert-success">Yay, berhasil login! !!</div>
                                :
                                <div key="logout-alert" className="alert alert-dark">Anda telah logout!</div>
                            }
                            { isLogin ?
                                <button key="logout-btn" className="btn btn-md btn-danger" onClick={()=> handleAuth('logout')}>Log out</button>
                                :
                                <button key="login-btn" className="btn btn-md btn-primary" onClick={()=> handleAuth('login')}>Log in</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}