import React from "react";
import {ReactComponent as SVG} from "../../assets/pnf.svg"
import {useHistory} from "react-router-dom";
import "./pnf.styles.scss"

export default function PNF() {
  const history = useHistory();
  return (
    <div className="pnf__container">
      <main>
        <div class="container">
          <div class="row">
            <div class="col-md-6 align-self-center">
                <SVG />
            </div>
            <div className="col-md-6 align-self-center pnf__content">
              <h1>404</h1>
              <h2>UH OH! You're lost.</h2>
              <p
                style = {{
                  fontSize : "18px"
                }}
              >
                The page you are looking for does not exist. How you got here is
                a mystery. But you can click the button below to go back to the
                homepage.
              </p>
              <button className="btn green pnf__button" style = {{
                  fontSize : "14px"
                }}
                onClick = {() => history.push("/")}s
                >HOME</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


