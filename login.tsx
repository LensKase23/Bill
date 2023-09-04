import { Component } from 'solid-js';
import './login.css'

const Login : Component = () =>{
    return(
        <div style="display:flex; width:100vw; height:100vh;">
            <div class="kotak"><img src=".././src/assets/img/Yayasan-Pendidikan-Telkom-450x293.jpg" alt="" /></div>
            <div class="login">
                <div class="header-login">
                    <img src=".././src/assets/img/logo-telkom-schools-horisontal-1024x320.png" alt="" />
                    <input type="text" placeholder="Username" id="username"/>
                    <input type="password" placeholder="Password" id="password"/>
                    <div class="you-forgor">
                        <a href="">Lupa nama pengguna dan kata sandi?</a>
                    </div>
                    <button>Masuk</button>
                </div>
                <div class="body-login">
                    <p>Masuk menggunakan akun Anda pada:</p>
                    <button><img src=".././src/assets/img/cropped-microsoft_logo_element.png" alt="" />Office 365</button>
                </div>
            </div>
        </div>
    );
};

export default Login;