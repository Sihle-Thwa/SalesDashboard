import PropTypes from "prop-types";
const SummaryCard = ({ title, value, percentage, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <li className="list-group-item">
              <h5>{value}</h5>
            </li>
          </div>
          <div className="col">
            <li className="list-group-item">
              <span className="badge badge-pill badge-success">
                {percentage}%
              </span>
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
};

SummaryCard.defaultProps = {
  className: "",
};

export default SummaryCard;
