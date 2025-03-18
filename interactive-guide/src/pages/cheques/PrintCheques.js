import { Link } from "react-router-dom";

const PrintCheques = () => {
    return <>
                <h1>Printing Cheques</h1>
                <p>
                    This page will explain how to print cheques to pay vendors using QuickBooks.
                </p>
                <ul>
                    <li>
                        Gather all the invoices from the blue <b>Gift Shop Invoices</b> folder. Make sure they are all <Link to="/quickbooks/PayBills">entered into QuickBooks</Link>.
                    </li>
                </ul>
            </>
};

export default PrintCheques;