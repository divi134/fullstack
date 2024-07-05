import { forwardRef } from "react";
import PropTypes from "prop-types";
import NiceSelect from "@ui/nice-select";
import InputRange from "@ui/input-range";

const ProductFilter = forwardRef(
    ({ slectHandler, sortHandler, priceHandler, inputs }, ref) => (
        <div className="default-exp-wrapper default-exp-expand" ref={ref}>
            <div className="inner">
                <div className="filter-select-option">
                    <h6 className="filter-leble">Difficulty</h6>
                    <NiceSelect
                        options={[
                            { value: "Easy", text: "Easy" },
                            { value: "Medium", text: "Medium" },
                            { value: "Hard", text: "Hard" }
                        ]}
                        placeholder="Level"
                        onChange={sortHandler}
                        name="like"
                    />
                </div>
                <div className="filter-select-option">
                    <h6 className="filter-leble">Category</h6>
                    <NiceSelect
                        options={[
                            { value: "all", text: "All Category" },
                            { value: "Array", text: "Array" },
                            { value: "String", text: "String" },
                            { value: "Bit Manipulation", text: "Bit Manipulation" },
                            { value: "Bit Mask", text: "Bit Mask" },
                            { value: "Hash", text: "Hash Table" },
                            { value: "Sorting", text: "Sorting" },
                            { value: "Greedy", text: "Greedy" },
                            { value: "Graphs", text: "Graphs" },
                            { value: "Tree", text: "Tree"},
                            { value: "Linkedlist", text: "Linkedlist" },
                            
                        ]}
                        placeholder="Category"
                        onChange={slectHandler}
                        name="category"
                    />
                </div>
                <div className="filter-select-option">
                    <h6 className="filter-leble">Submissions</h6>
                    <NiceSelect
                        options={[
                            {
                                value: "Todo",
                                text: "Todo",
                            },
                            {
                                value: "Solved",
                                text: "Solved",
                            },
                            {
                                value: "Unsolved",
                                text: "Unsolved",
                            },
                        ]}
                        placeholder="Status"
                        onChange={slectHandler}
                        name="Status"
                    />
                </div>

                {/* <div className="filter-select-option">
                    <h6 className="filter-leble">Sale type</h6>
                    <NiceSelect
                        options={[
                            { value: "all", text: "All Type" },
                            { value: "fixed-price", text: "Fixed price" },
                            { value: "timed-auction", text: "Timed auction" },
                            { value: "not-for-sale", text: "Not for sale" },
                            {
                                value: "open-for-offers",
                                text: "Open for offers",
                            },
                        ]}
                        placeholder="Sale type"
                        onChange={slectHandler}
                        name="sale_type"
                    />
                </div> */}
                {/* <div className="filter-select-option">
                    <h6 className="filter-leble">Price Range</h6>
                    <div className="price_filter s-filter clear">
                        <form action="#" method="GET">
                            <InputRange
                                values={inputs.price}
                                onChange={priceHandler}
                            />
                        </form>
                    </div>
                </div> */}
            </div>
        </div>
    )
);

ProductFilter.displayName = "ProductFilter";

ProductFilter.propTypes = {
    slectHandler: PropTypes.func,
    sortHandler: PropTypes.func,
    priceHandler: PropTypes.func,
    inputs: PropTypes.shape({
        price: PropTypes.arrayOf(PropTypes.number),
    }),
};

export default ProductFilter;
