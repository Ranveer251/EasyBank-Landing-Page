import React from "react";
import RequestBtn from "./RequestInvite";

function IntroText(){
    return(
        <div > 
            <div className="h1">Next generation digital banking</div> 
            <div className="content"> Take your financial life online. Your Easybank account will be a
                 one-stop-shop for spending, saving, budgeting, investing, and much more.
            </div>
            <div className="request"><RequestBtn /></div>
        </div>
    );
}

export default IntroText;
