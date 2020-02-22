import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Education and Experience</h1>
            <h2 className="subtopic">Education</h2>
            <Widecard title="Engineering" where="Leicester College" from="September 2016" to="July 2017"/>
            <Widecard title="IT" where="Regent College" from=" September 2014" to=" July 2016"/>
            <Widecard title="Moat Community College" where="Leicester" from="September 2009" to="July 2014"/>
            <h2 className="subtopic">Experience</h2>
            <Widecard title="Amazon FBA" where="" from="June 2019" to=" Present"/>
            <Widecard title="Assistant Operations Manager" where="African Salihiya Dubai" from="July 2018" to=" May 2019"/>
            <Widecard title="Fulfilment Associate" where="Amazon" from="June 2019" to=" September 2019"/>
            
            
            
            </div>
            )
        }
    }
    
export default Education
    