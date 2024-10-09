import React from 'react';
import "./Footer.css"

function Footer(){
    return(
    <footer style={{backgroundColor:"rgb(240,240,240)"}}><div className='container p-5 border-top'>
        <div className='row p-4  text-muted'>
            <div className='col p-3 '>
            <img className='mb-3' src='media/images/logo.svg' style={{ width: "60%" }}></img>
            <p  className='mb-2'>@2010-2024 Not Zerodha Broking Ltd.<br></br>All rights are reserved</p>
           
            <p><i className="fa-brands fa-twitter"></i> &nbsp;&nbsp;
            <i className="fa-brands fa-facebook"></i>&nbsp;&nbsp;
            <i className="fa-brands fa-instagram"></i>&nbsp;&nbsp;
            <i className="fa-brands fa-linkedin-in"></i>&nbsp;&nbsp;
            <i className="fa-brands fa-telegram"></i></p>
            </div>
            <div className='col p-3 m-2 text-left  text-muted'>
                <p>Company</p>
                <ul>
               <li> <a  href='#'>Product</a></li>
               <li> <a  href='#'>Pricing</a></li>
               <li> <a   href='#'>About</a></li>
               <li> <a  href='#'>Refferal Program</a></li>
               <li> <a  href='#'>Careers</a></li>
               <li><a  href='#'>Zerodha.tech</a></li> 
               <li><a  href='#'>Press & Media</a></li> 
               <li><a  href='#'>Zerodha Cares (CSR)</a></li> 
                </ul>
            </div>
            <div className='col p-3 m-2  text-muted'>
            <p>Support</p>
            <ul>
                <li><a href='#'>Contact</a></li>
                <li><a href='#'>Support portal</a></li>
                <li><a href='#'>Z-Connect blog</a></li>
                <li><a href='#'>List of changes</a></li>
                <li><a href='#'>Downloads & resources</a></li>
                </ul>
            </div>
            <div className='col p-3 m-2 text-muted'>
            <p>Account</p>
            <ul>
                <li><a href='#'>Open an account</a></li>
                <li><a href='#'>Fund transfer</a></li>
                <li><a href='#'>60 day challenge</a></li>
                </ul>
            </div>
        </div>
        <div className='row mt-5 text-muted fs-6'>
        <p>
            Zerodha Broking Ltd.: Member of NSE​ &​ BSE – SEBI Registration no.:
            INZ000031633 CDSL: Depository services through Zerodha Securities
            Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading
            through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration
            no.: INZ000038238 Registered Address: Zerodha Broking Ltd.,
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        <div className='row line'>
        <ul>
          <li>  <a href='#'>NSE</a></li>
          <li>  <a href='#'>BSE</a></li>
          <li>  <a href='#'>MCK</a></li>
          <li>  <a href='#'>Terms and Condition</a></li>
          <li> <a href='#'>Policies & procedures</a></li>
          <li>  <a href='#'>Privacy Policy</a></li>
          <li>  <a href='#'>Disclosure</a></li>
          </ul>
        </div>
    </div></footer>)
}

export default Footer;