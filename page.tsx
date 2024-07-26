import React from "react";

export default function Login(){
    return(

        <div class="contanier">
        <h2>Login</h2>

        <form action="#" method="post">

            <div className="form-group">
            <label for="username">Username</label>
            <input type="text" id="username" name="username"
            required>
            </div>

            <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password"
            required>
            </div>

            <button type="submit">Login</button>
    

        </form>
    </div>
    
    
    )
}