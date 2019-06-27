import React from "react";
import "./assets/css/main.css";

class LandingPage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        {/* //<!-- Header --> */}
        <div className="header">
          <h1>Eventually</h1>
          <p>
            A simple template for telling the world when you'll launch
            <br />
            your next big thing. Brought to you by{" "}
            <a href="http://html5up.net">HTML5 UP</a>.
          </p>
        </div>

        {/* //<!-- Signup Form --> */}
        {/* // <form id="signup-form" method="post" action="#"> */}
        {/* // 	<input type="email" name="email" id="email" placeholder="Email Address" /> */}
        {/* // 	<input type="submit" value="Sign Up" /> */}
        {/* // </form> */}

        {/* //<!-- Footer --> */}
        <div className="footer">
          <ul class="icons">
            {/* <React.Fragment className="icons"> */}
            <li>
              <a href="#" className="icon brands fa-twitter">
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-instagram">
                <span class="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon brands fa-github">
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-envelope">
                <span class="label">Email</span>
              </a>
            </li>
            {/* </React.Fragment> */}
          </ul>
          {/* <ul className="copyright">
                        <li>&copy; Untitled.</li><li>Credits: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul> */}
        </div>
      </div>
    );
  }
}

export default LandingPage;
