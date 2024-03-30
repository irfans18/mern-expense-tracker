/* eslint-disable no-unused-vars */
import {IconEdit, IconHeart, IconTrash} from "@tabler/icons-react";
import PropTypes from 'prop-types';

const ExpenseItem = ({ amount, category, title, description, date}) => {
    const dttm = new Date(date).toDateString()
    return (
        <>
            <div className="card shadow-sm h-100">
                <div className="card-body text-start column-gap-0">
                    <h5 className="card-title fw-light">{title}</h5>
                    <hr/>
                    <p className="fw-normal">Amount : <br/> <span className="fw-semibold">Rp {amount}</span></p>
                    <p className="fw-normal">Category : <br/> <span className="fw-semibold">{category.toUpperCase()}</span></p>
                    <p className="fw-normal">Description : <br/> {description}</p>
                    <p className="fw-normal">Date : <br/> {dttm}</p>
                </div>
                <div className="d-flex justify-content-between p-2">
                    <div className="d-flex align-items-center justify-content-start column-gap-4">
                        <button className="btn btn-primary"><IconEdit/></button>
                        <button className="btn btn-danger text-white"><IconTrash/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

ExpenseItem.propTypes = {
    amount : PropTypes.number,
    category : PropTypes.string,
    title : PropTypes.string,
    description : PropTypes.string,
    date : PropTypes.string
}

export default ExpenseItem;