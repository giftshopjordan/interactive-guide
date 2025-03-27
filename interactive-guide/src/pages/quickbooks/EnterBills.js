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
                                    Select <b>Email</b>, your email, and then <b>Send</b> to scan the invoice directly to your email. Make sure to do this separately for each invoice.
                                    <img className="infopic" src={images["send_scan"]} alt="Printer email button" />
                                    <img className="infopic" src={images["scan_email"]} alt="Email from scanner" />
                                </li>
                                <li>
                                    Save it under the appropriate vendor in the <b>Gift Shop/Vendors</b> folder. Name it the date that’s on the invoice (YYYY MM DD), which supplier it is, and the invoice number. Example: <b>2020 02 04 Giftcraft INV 0485411</b>.
                                    <img className="infopic" src={images["vendors_location"]} alt="Vendors folder location" />
                                    <img className="infopic" src={images["invoice_example"]} alt="Invoice name example" />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    Open <b>QuickBooks</b> and click <b>Enter Bills</b>.
                                    <img className="infopic" src={images["enter_bills"]} alt="Enter Bills button" />
                                </li>
                                <li>
                                    Select the <b>Vendor</b>, change the <b>Date</b> to match the invoice, and enter the invoice number in the <b>Ref No.</b> box.
                                    <img className="infopic" src={images["vendor_box"]} alt="Vendor box" /> 
                                    <img className="infopic" src={images["date_and_ref"]} alt="Date and Ref No. box" />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    Begin entering each item into the first column (under the <b>ITEMS</b> tab). QuickBooks will start auto-filling the item, but make sure you are selecting the correct item.
                                    <p className="note">Note: Some invoices have new items that you will need to add. See <Link to="/quickbooks/NewItems">adding new items</Link>.</p>
                                    <img className="infopic" src={images["items_tab"]} alt="Items tab" />
                                </li>
                                <li>
                                    Enter the quantity of each item ordered, then ensure the cost in QB matches with the cost on the invoice. Select <b>Gift Shop</b> under the <b>Class</b> column.
                                    <img className="infopic" src={images["qty_and_cost"]} alt="Quantity and Cost" />
                                    <img className="infopic" src={images["gs_class"]} alt="Gift Shop class" />
                                </li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    Enter the shipping costs under <b>Expenses</b> tab. It may be called something different on every invoice (delivery, handling, etc.).
                                </li>
                                <li>
                                    Select the <b>Freight and Shipping Costs</b> account and set class to <b>Gift Shop</b>.
                                    <img className="infopic" src={images["freight_and_shipping"]} alt="Freight and shipping" />
                                </li>
                            </ul>
                        </li>
                        <li>
                            The <b>Amount Due</b> in QuickBooks should match the total on the invoice.
                            <img className="infopic" src={images["amount_due"]} alt="Amount due" />
                        </li>
                        <li>
                            Attach the scanned invoice to the QuickBooks bill.
                            <img className="infopic" src={images["attach_file"]} alt="Attach file" />
                        </li>
                        <li>
                            Place the invoice in the blue <b>Gift Shop Cheques</b> folder.
                        </li>
                    </ol>
                </section>        
            </>
};

export default EnterBills;