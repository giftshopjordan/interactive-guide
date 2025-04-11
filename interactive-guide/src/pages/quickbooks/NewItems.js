import { images } from "../../utils/imageLoader";

const NewItems = () => {
    return <>
            <section>
                <h1>New Inventory Items</h1>
                <p>
                    This page will cover the process of adding new items in QuickBooks. There are two main types of items, <b>Inventory Parts</b> and <b>Non-Inventory Part</b>.
                </p>
                <ol>
                    <p>There are 2 main ways to enter a new item</p>
                    <li>
                        <ul>
                            <li>
                                <h3>Option 1:</h3> From the <b>Home</b> window select <b>Inventory Centre</b> from <b>Inventory Activities</b>.
                                <img className="infopic" src={images["inventory_activities"]} alt="Inventory activities" />
                                <img className="infopic" src={images["inventory_centre"]} alt="Inventory centre" />                                
                            </li>
                            <li>
                                From the <b>Inventory Centre</b> window select <b>New Inventory Item</b> from the dropdown of the same name.
                                <img className="infopic" src={images["inventory_item"]} alt="Inventory item" />
                            </li>
                            <li>
                                <h3>Option 2:</h3> When entering an Invoice or Sales Receipt click the down arrow under the <b>Item</b> column.
                                <img className="infopic" src={images["new_item"]} alt="Add new item" />
                            </li>
                            <li>
                                Select <b>Add New</b>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li>
                                From the <b>New Item</b> window select <b>Inventory Part</b> from the <b>Type</b> box.
                                <img className="infopic" src={images["inventory_part"]} alt="Inventory part" />
                            </li>
                            <li>
                                Enter the <b>Item Name</b>, check the <b>Subitem of</b> box, and select it's category.
                                <img className="infopic" src={images["item_name_cat"]} alt="Item name and category" />
                            </li>
                            <li>
                                Enter the <b>Cost</b>, <b>Preferred Vendor</b>, <b>Sales Price</b> and <b>Income Account</b>.
                                <img className="infopic" src={images["cost_and_price"]} alt="Cost and price" />
                            </li>
                            <li>
                                Click <b>OK</b> to save the new item.
                            </li>
                        </ul>
                    </li>
                </ol>
            </section>
            <section>
                <h2>Non-Inventory Part</h2>
                <p>Non-Inventory Parts are usually used for Consignment items.</p>
                <ol>
                    <li>
                        Following the one of the options mentioned above open the <b>New Item</b> window.
                    </li>
                    <li>
                        Select <b>Non-Inventory Part</b> from the <b>Type</b> list.
                        <img className="infopic" src={images["non_inventory"]} alt="Non inventory type" />
                    </li>
                    <li>
                        Fill out the <b>Item Name</b> and <b>Subitem of</b> box as above.
                        <p className="note">Note: The Subitem group should be a consignment group (Marked with (CON) at the end)</p>
                        <img className="infopic" src={images["non_inventory_item"]} alt="Non inventory item" />
                    </li>
                    <li>
                        Fill out the <b>Price</b> and <b>Account</b> boxes the same as above.
                        <img className="infopic" src={images["non_inventory_price"]} alt="Non inventory price" />
                    </li>
                </ol>
            </section>
        </>
};

export default NewItems;