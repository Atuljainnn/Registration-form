alert('Dear user,please fill all the details carefully');


document.querySelector('.js-container').innerHTML=
`<h2>REGISTRATION FORM</h2>
<form id="myForm" action="submitted.html"  method="post">
    <label for="fname">First Name*</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." required>
    <br><br>

    <label for="lname">Last Name </label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." >
    <br><br>

    <label for="email">EMAIL*</label>
    <input type="email" id="email" name="email" required>
    <br><br>

    <label for="roll no.">ROLL NO.*</label>
    <input type="roll no." id="roll no." name="roll no." required>
    <br><br>

    <label for="branch">BRANCH*</label>
    <select id="branch" name="branch"  required>
        <option>CSE</option>
        <option>ECE</option>
        <option>EE</option>
        <option>Mech.</option>
        <option>Civil</option>
        <option>Chemical</option>
    </select>
    <br><br>

    <label for="mobile no.">MOBILE NO.*</label>
    <input type="mobile no." id="mobile no." name="mobile no." required>
    <br><br>

    <button type="submit"><a href="submitted.html">submit</a></button>
</form>`;
