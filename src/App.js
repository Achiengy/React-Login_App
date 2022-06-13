 import {signup} from "./firebase";

 export default function App() {
  return(
    <div id="main">
<div id="fields">
<input placeholder="Email" />
<input type='password' placeholder="Password" />
</div>
<button onClick = {handleSignup}>Sign Up</button>
    </div>
  );
 }