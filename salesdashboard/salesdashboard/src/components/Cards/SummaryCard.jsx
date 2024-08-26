import PropTypes from "prop-types";
import { BsArrowUpRight, BsThreeDots } from "react-icons/bs";

import "./card.css";
const SummaryCard = ({ title, value, percentage, className, icon }) => {
  return (
    <div className={`card ${className} w-100`}>
      <div className="card-header bg-white">
        <div className="card-title d-flex">
          <h4>{title}</h4>
          <button className="btn ms-auto p-2">
            <BsThreeDots />
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <li className="list-group-item">
              <h1 className="lh-1">{value}</h1>
            </li>
          </div>
          <div className="col">{icon}</div>
          <div className="row ms-auto">
            <li className="list-group-item">
              <span className="badge badge-pill badge-success">
                <BsArrowUpRight /> {percentage}%
              </span>
              <small className="text-muted">
                {" "}
                increase from previous month
              </small>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

SummaryCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  percentage: PropTypes.number.isRequired,
  className: PropTypes.string,
  icon: PropTypes.object,
};

SummaryCard.defaultProps = {
  className: "",
};

export default SummaryCard;
