import { Link } from "react-router-dom";
import { images } from "../../utils/imageLoader";

const EnterBills = () => {
    return <>
                <section>
                    <h1>Enter Bills</h1>
                    <p>
                        This page will cover the process of entering Invoices in QuickBooks. This must be done before <Link to="/cheques/PrintCheques">printing cheques.</Link>
                    </p>
                    <ol>
                        <li>
                            <ul>
                                <li>
                                    Retrieve the invoices from the Invoices folder on the desk.
                                </li>
                                <li>
                                    Scan the invoice using the printer in the Foundation copy room or in the Clinical Records office.
                                </li>
                                <li>
                                    Click <b>Email</b>, your email, and then <b>Send</b> to scan the invoice directly to your email. Make sure to do this separately for each invoice.
                                    <img className="infopic" src={images["send_scan"]} alt="Printer email button" />
                                    <img className="infopic" src={images["scan_email"]} alt="Email from scanner" />
                                </li>
                                <li>
                                    Save it under the appropriate supplier in the <b>Gift Shop/Vendors</b> folder. Name it the date that’s on the invoice (YYYY MM DD), which supplier it is, and the invoice number. Example: <b>2020 02 04 Giftcraft INV 0485411</b>.
                                    <img className="infopic" src={images["vendors_location"]} alt="Vendors folder location" />
                                    <img className="infopic" src={images["invoice_example"]} alt="Invoice name example" />
                                </li>
                            </ul>
                        </li>
                    </ol>
                </section>        
            </>
};

export default EnterBills;