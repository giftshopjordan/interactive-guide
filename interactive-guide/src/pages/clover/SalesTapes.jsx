import { images } from "../../utils/imageLoader";

const SalesTapes = () => {
    return <>
            <section>
                <h1>Sales Tapes</h1>
                <h2>Saving</h2>
                <p>The sales from ech day must be saved and recorded in QuickBooks. The first step is to export the sales reports from <b>Clover</b>.</p>
                <ol>
                    <li>
                        <ul>
                            <li>
                                Log in to <b>Clover</b>
                                <img className="infopic" src={images["clover_login"]} alt="Clover Log in page." />
                            </li>
                            <li>
                                Navigate to the <b>Reporting</b> page from the left sidebar.
                                <img className="infopic" src={images["clover_reporting"]} alt="Reporting button." />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                Select <b>Item Sales</b> from under <b>Reporting</b>.
                                <img className="infopic" src={images["clover_item_sales"]} alt="Item sales" />
                            </li>
                            <li>
                                Click the <b>Name</b> header twice to sort the list alphabetically.
                                <p className="note">Note: Clothing should be at the top, followed by Confection.</p>
                                <img className="infopic" src={images["clover_name_column"]} alt="Name column" />
                            </li>
                            <li>
                                Click <b>Export</b> at the top of the page. It will automatically be saved to the <b>Downloads</b> folder.
                                <img className="infopic" src={images["clover_export"]} alt="Export button" />
                            </li>
                        </ul>
                    </li>
                </ol>
            </section>
        </>
};

export default SalesTapes;