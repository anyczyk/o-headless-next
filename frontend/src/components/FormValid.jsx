import React, {useState, useRef, useEffect} from "react";

export const FormValid = () => {
    const [eMail, setEMail] = useState('');
    const [eMailFocused, setEMailFocused] = useState(false);
    const [eMailCorrect, setEMailCorrect] = useState(false);
    const emailRef = useRef(null);

    const [password, setPassword] = useState('');
    const [passwordCorrect, setPasswordCorrect] = useState(false);

    const [confirmPassword, setConfirmPassword] = useState('');
    const [confirmPasswordCorrect, setConfirmPasswordCorrect] = useState(false);

    const [dataCorrect, setDataCorrect] = useState(false);
    const [registerCompleted, setRegisterCompleted] = useState(false);
    const isEmailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    useEffect(() => {
        if(eMail.length > 5 && isEmailValid(eMail)) {
            setEMailCorrect(true);
        } else {
            setEMailCorrect(false);
        }

        if(password.length > 5) {
            setPasswordCorrect(true);
        } else {
            setPasswordCorrect(false);
        }

        if((password.length > 5) && (confirmPassword === password)) {
            setConfirmPasswordCorrect(true);
        } else {
            setConfirmPasswordCorrect(false);
        }

        if(isEmailValid(eMail) && (password.length > 4) && (password === confirmPassword) ) {
            setDataCorrect(true);
        } else {
            setDataCorrect(false);
        }
    }, [eMail,eMailCorrect,password,passwordCorrect,confirmPassword,confirmPasswordCorrect]);

    const createAccount = () => {
        if(dataCorrect) {
            setRegisterCompleted(true);
        }
    };

    const handleEmail = (e) => {
        setEMail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleComfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <>
            <h2 className="text-xl">Register</h2>
            {!registerCompleted ? <form>
                <div className="mb-2">
                    {(eMail.length > 0) && !eMailCorrect && !eMailFocused ? <p className="text-red-500">Email has wrong pattern</p> : ''}
                    <input ref={emailRef} className={`p-2 border-1 border-black ${eMailCorrect ? 'border-5 border-green-500' : ''}`}
                           onChange={e => handleEmail(e)}
                           onBlur={()=> setEMailFocused(false)}
                           onFocus={() => setEMailFocused(true)}
                           placeholder="E-mail" id="e-mail" type="text" value={eMail}/>
                </div>
                <div className="mb-2">
                    {(password.length > 0) && !passwordCorrect  ? <p>Password to short</p> : ''}
                    <input className={`p-2 border-1 border-black ${passwordCorrect ? 'border-5 border-green-500' : ''}`} onChange={e => handlePassword(e)} placeholder="Password" type="password" value={password}/>
                </div>
                <div className="mb-2">
                    {(confirmPassword.length > 0) && !confirmPasswordCorrect  ? <p>Confirm password is different than password</p> : ''}
                    <input className={`p-2 border-1 border-black ${confirmPasswordCorrect ? 'border-5 border-green-500' : ''}`}
                           onChange={e => handleComfirmPassword(e)}
                           placeholder="Confirm Password"
                           type="password"
                           value={confirmPassword}/>
                </div>
                <button className={`p-2 text-white ${dataCorrect ? 'bg-blue-700' : 'bg-gray-300'}`} disabled={!dataCorrect} onClick={createAccount}>Create account</button>
            </form> : <p>Register Completed!</p>}
        </>
    );
};
