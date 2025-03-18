import { Link } from "react-router-dom";
import payBills from "../../images/pay_bills.png";
import payBillScreen from "../../images/pay_bills_screen.png";
import invoiceCheck from "../../images/invoice_check.png";
import creditUsed from "../../images/credits_used.png";
import setCredit from "../../images/set_credits.png";


const PrintCheques = () => {
    return <>
                <h1>Printing Cheques</h1>
                <p>
                    This page will explain how to print cheques to pay vendors using QuickBooks.
                </p>
                <ol>
                    <li>
                        <ul>
                            <li>
                                Gather all the invoices from the blue <b>Gift Shop Invoices</b> folder. Make sure they are all <Link to="/quickbooks/PayBills">entered into QuickBooks</Link>.
                            </li>
                            <li>
                                Once in Quickbooks, select <b>Pay Bills</b> from the <b>Home</b> window. <img src={payBills} alt="Pay bills icon" />
                            </li>
                            <li>
                                Verify with Quickbooks that you have entered all the invoices. <img src={payBillScreen} alt="Pay bills screen"/>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                Select every invoice to be paid using the check mark box on the left side. <img src={invoiceCheck} alt="Invoice check mark" />
                            </li>
                            <li>
                                If there are any credits available, apply the credits <b>only</b> if they are less than the invoice amount. <img src={setCredit} alt="Credits used" />
                            </li>
                            <li>
                                Click <b>Set Credits</b> to apply. <img src={creditUsed} alt="Amount to pay." />
                            </li>
                        </ul>
                    </li>
                </ol>
            </>
};

export default PrintCheques;