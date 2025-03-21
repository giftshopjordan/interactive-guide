import { Link } from "react-router-dom";
import { images } from "../../utils/imageLoader";

const PrintCheques = () => {
    return <>
                <section>
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
                                    Once in Quickbooks, select <b>Pay Bills</b> from the <b>Home</b> window. <img className="infopic" src={images['pay_bills']} alt="Pay bills icon" />
                                </li>
                                <li>
                                    Verify with Quickbooks that you have entered all the invoices. <img className="infopic" src={images['pay_bills_screen']} alt="Pay bills screen"/>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    Select every invoice to be paid using the check mark box on the left side. <img className="infopic" src={images['invoice_check']} alt="Invoice check mark" />
                                </li>
                                <li>
                                    If there are any credits available, apply the credits <b>only</b> if they are less than the invoice amount. <img className="infopic" src={images['set_credits']} alt="Credits used" />
                                </li>
                                <li>
                                    Click <b>Set Credits</b> to apply. <img className="infopic" src={images['credits_used']} alt="Amount to pay." />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    Make sure to change the date (in the bottom left of the screen) to <b>today’s date</b>. <img className="infopic" src={images['bills_pay_date']} alt="Today's date" />
                                </li>
                                <li>
                                    Select <b>Pay Selected Bills</b>. <img className="infopic" src={images['pay_selected_bills']} alt="Selected bills button" />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    A window will pop-up to verify the amounts paid to each vendor.
                                    <p className="note">Note: If a vendor has multiple invoices, there will only be one cheque printed with all of the amounts combined.</p>
                                    <br/>
                                </li>
                                <li>
                                    Click <b>Print Cheques</b>. <img className="infopic" src={images['print_cheques_button']} alt="Print Cheques button" />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    Get the box of blank cheques from the closet in the Gift Shop.
                                </li>
                                <li>
                                    Verify that the cheque number on the top matches with the first number in QuickBooks. <img className="infopic" src={images['cheque_number']} alt="Cheque number box" />
                                </li>
                            </ul>
                        </li>
                        <li>
                            Once triple-checked, you can insert the stack of blank cheques into the <b>FONUD01</b> printer. Place the cheques face-up, top down, in the manual-feed tray. Click <b>OK</b>.
                            <p className="note">Note: It’s important to tell the others in the office to hold off on printing for a couple minutes so they don’t print over the cheques</p>
                            <img className="infopic" src={images['confirm_cheques']} alt="Print Cheques Confirm screen" style={{width: '55%', height: 'auto'}}/>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    Staple the corresponding invoices behind each cheque at the bottom left of each page.
                                </li>
                                <li>
                                    Place the cheques/invoices into the blue <b>Gift Shop Cheques</b> folder and bring to Jamie and Kim to sign.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <ul>
                                <li>
                                    Once the cheques have been signed they can be ripped off and placed into window envelopes to be mailed.
                                    Rip off the top two thirds of the cheque. Fold in half and place in an envelope.
                                    <p className="note">Note: Some vendors come in and don’t need the cheque mailed. Check with the Gift Shop Convenor which vendors those are.</p>
                                </li>
                                <li>
                                    Place the cheques in the OUTGOING MAIL box in the Foundation office.
                                </li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            Once the cheques are ready to be mailed, whole-punch the invoices and cheque stubs and put in the Gift Shop Invoices binder in the third drawer under the secondary drawer.
                            <p className="note">Note: The invoices are to be sorted in the binder so that the newest is at the front.</p>
                        </li>
                    </ol>
                </section>

                <section>
                    <h2>IF FOR SOME REASON THE CHEQUES DIDN’T PRINT BUT QUICKBOOKS THINKS THEY DID:</h2>
                    <ol>
                        <li>
                            In QuickBooks, open the <b>Vendor Centre</b> and go to each vendor that needs to be paid.
                            <img className="infopic" src={images['vendor_center']} alt="Vendor center" />
                        </li>
                        <li>
                            Find the proper <b>Bill Prnt-Cheque</b> and double-click to open.
                            <img className="infopic" src={images['bill_prnt-cheque']} alt="Bill Prnt-Cheque" />
                        </li>
                        <li>
                            <ul>
                                <li>
                                    In the top ribbon, click the drop-down arroe inder <b>Print</b> and click <b>Cheque</b>.
                                    <img className="infopic" src={images['print_drop-down']} alt="Print drop-down" />
                                </li>
                                <li>
                                    Enter the CORRECT cheque number (that corresponds with the cheque you are about to print)
                                    <img className="infopic" src={images['cheque_number2']} alt="Printed Cheque Number" />
                                </li>
                            </ul>
                        </li>
                        <li>
                            When you click <b>OK</b>, a window will pop-up to print the cheque. Make sure the blank cheque is the one in the printer and click <b>Print</b>.
                        </li>
                    </ol>
                </section>

                <section>
                    <h2>Entering Pre-Authorized Payments</h2>
                    <p>For some vendors, like our Clover POS system, they take the payment directly out of our bank account. We still need to record those charges in Quickbooks.</p>

                    <ol>
                        <li>
                            Select <b>Pay Bills</b> and select the corresponding bills that need to have payment recorded but not have any cheques printed.
                            <img className="infopic" src={images['pre_auth_bills']} alt="Pre Auth Bills" />
                        </li>
                        <li>
                            Assign the payment date, you will see this in your email or, for Clover, from the <b>Account</b> page. Make sure <b>Assign Cheque No.</b> is selected and the right bank account.
                            <img className="infopic" src={images['date_and_account']} alt="Payment Date and Account" />
                        </li>
                        <li>
                            <ul>
                                <li>
                                    Click <b>Print Cheques</b>
                                </li>
                                <li>
                                    In the <b>Cheque Number</b> box enter <b>Online</b>
                                </li>
                                <li>
                                    It will record that the payment has been completed but no cheque will be printed.
                                    <img className="infopic" src={images['online_payment']} alt="Completed Payment" />
                                </li>
                            </ul>
                        </li>
                    </ol>
                </section>
            </>
};

export default PrintCheques;