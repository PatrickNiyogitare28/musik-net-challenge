import Button from '@components/button';
import Input from '@components/input';
import React from 'react';
import Key from '../../../assets/icons/key-icon.png';
import EMail from '../../../assets/icons/email-icon.png';

const LoginForm: React.FC = () => {
    const inputStyle = {
        width: '100%',
        border: '1px solid silver',
        marginTop: '1em',
        padding: '15px 20px',
        borderRadius: '40px'
    }

    const KeyIcon = () => {
        return (
            <img src={Key} />
        )
    }
    const EMailIcon = () => {
        return (
            <img src={EMail} />
        )
    }
    return (
        <div>
            <div style={{ marginTop: '2em' }}>
                <label>E-Mail</label>
                <div style={inputStyle}>
                    <Input
                        placeholder='Your E-Mail'
                        Icon={<EMailIcon />}
                        type="string"
                    />
                </div>
            </div>

            <div style={{ marginTop: '2em' }}>
                <label>Password</label>
                <div style={inputStyle}>
                    <Input
                        placeholder='Your Password'
                        Icon={<KeyIcon />}
                        type="password"
                    />
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3em' }}>
                <Button className="register-btn" styles={{}} label="Register" />
                <Button className="login-btn" styles={{ backgroundColor: 'black', color: 'white' }} label="SIGNIN" />
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3em' }}>
                <div>
                    <input type="checkbox" style={{ padding: '20px' }} />
                    <label style={{ fontSize: '15px', marginLeft: '2em' }}>Remember me</label>
                </div>
                <label style={{ fontSize: '15px' }}>Forgot password?</label>
            </div>
        </div>
    )
}
export default LoginForm;