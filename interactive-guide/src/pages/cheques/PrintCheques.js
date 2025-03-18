import { Link } from "react-router-dom";
import { images } from "../../utils/imageLoader";

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
                                Once in Quickbooks, select <b>Pay Bills</b> from the <b>Home</b> window. <img class="infopic" src={images['pay_bills']} alt="Pay bills icon" />
                            </li>
                            <li>
                                Verify with Quickbooks that you have entered all the invoices. <img class="infopic" src={images['pay_bills_screen']} alt="Pay bills screen"/>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                Select every invoice to be paid using the check mark box on the left side. <img class="infopic" src={images['invoice_check']} alt="Invoice check mark" />
                            </li>
                            <li>
                                If there are any credits available, apply the credits <b>only</b> if they are less than the invoice amount. <img class="infopic" src={images['set_credits']} alt="Credits used" />
                            </li>
                            <li>
                                Click <b>Set Credits</b> to apply. <img class="infopic" src={images['credits_used']} alt="Amount to pay." />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                Make sure to change the date (in the bottom left of the screen) to <b>today’s date</b>. <img class="infopic" src={images['bills_pay_date']} alt="Today's date" />
                            </li>
                            <li>
                                Select <b>Pay Selected Bills</b>. <img class="infopic" src={images['pay_selected_bills']} alt="Selected bills button" />
                            </li>
                        </ul>
                    </li>
                </ol>
            </>
};

export default PrintCheques;