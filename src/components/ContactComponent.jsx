import React from "react";


const ContactComponent = ({ alignImage, logo, title, text })=> {
    return (
        <div className="flex items-center gap-4">
            <img className={`${alignImage}`} src={ logo } alt="Logo" title={title} />
                <a className="hover:font-normal" title={title} href="#">{ text }</a>
        </div>
    )
};

export default ContactComponent;