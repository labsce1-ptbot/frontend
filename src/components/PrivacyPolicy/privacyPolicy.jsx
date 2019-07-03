import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components

import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody";

const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
function PrivacyPolicy(props) {
  const { classes } = props;
  return (
    <Card>
      <CardHeader color="primary">
        <h3 className={classes.cardTitleWhite}>
          Terms and Conditions Privacy Policy
        </h3>
      </CardHeader>
      <CardBody>
        <div className={classes.typo}>
          <p>
            Please read these Terms and Conditions ("Terms", "Terms and
            Conditions") carefully before using the https://ptbot.netlify.com
            website and the PTbOt Slack application (together, or individually,
            the "Service") created by PTbOt ("us", "we", or "our").
          </p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>
            <a href="https://github.com/labsce1-ptbot">Open Source</a>
          </div>
          <p>
            PTbOt is completely open source with the source code located at
            (https://github.com/labsce1-ptbot). If you decide to use PTbOt
            please understand that personal data is stored as outlined in our
            Privacy Policy above. On top of the data we collect for OAuth, we
            also store users’ away messages (“Messages”). Information stored in
            each Message is at the discretion of the user. PTbOt does not use
            this information in any way, other than for the intended use of the
            Service: as a Message in Slack. Messages are stored until the users’
            vacation is over (vacation end date). The day after a user’s
            vacation end date, the entire vacation and associated Messages are
            removed from PTbOT’s database.
          </p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Indemnification</div>
          <p>
            You agree to defend, indemnify and hold harmless PTbOt, and its
            licensee and licensors, and the creators (engineers) from and
            against any and all claims, damages, obligations, losses,
            liabilities, costs or debt, and expenses (including but not limited
            to attorney's fees), resulting from or arising out of a. your use
            and access of the Service, by you or any person using your account
            and password, or b. a breach of these Terms.
          </p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Limitation Of Liability</div>
          <p>
            In no event shall PTbOT., nor its creators, be liable for any
            indirect, incidental, special, consequential or punitive damages,
            including without limitation, loss of profits, data, use, goodwill,
            or other intangible losses, resulting from (i) your access to or use
            of or inability to access or use the Service; (ii) any conduct or
            content of any third party on the Service; (iii) any content
            obtained from the Service; (iv) any conduct or content you create
            during the use of the Service and (v) unauthorized access, use or
            alteration of your transmissions or content, whether based on
            warranty, contract, tort (including negligence) or any other legal
            theory, whether or not we have been informed of the possibility of
            such damage, and even if a remedy set forth herein is found to have
            failed of its essential purpose.
          </p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Disclaimer</div>
          <p>
            Your use of the Service is at your sole risk. The Service is
            provided on an "AS IS" and "AS AVAILABLE" basis. The Service is
            provided without warranties of any kind, whether express or implied,
            including, but not limited to, implied warranties of
            merchantability, fitness for a particular purpose, non-infringement
            or course of performance. PTbOt its subsidiaries, affiliates, and
            its licensors do not warrant that <br />
            a. The Service will function uninterrupted, secure or available at
            any particular time or location; <br />
            b. Any errors or defects will be corrected;
            <br /> c. The Service is free of viruses or other harmful
            components; or <br />
            d. The results of using the Service will meet your requirements.
          </p>
        </div>
        <div className={classes.typo}>
          <div className={classes.note}>Changes</div>
          <p>
            We reserve the right, at our sole discretion, to modify or replace
            these Terms at any time. If a revision is material we will provide
            at least 30 days’ notice prior to any new terms taking effect. What
            constitutes a material change will be determined at our sole
            discretion. By continuing to access or use our Service after any
            revisions become effective, you agree to be bound by the revised
            terms. If you do not agree to the new terms, you are no longer
            authorized to use the Service.
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default withStyles(style)(PrivacyPolicy);
