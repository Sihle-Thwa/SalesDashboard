import { useState, useRef, useCallback, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

import format from 'date-fns/format';
import { addDays } from 'date-fns';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';


const DateRangeComponent = () => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const [modal, setModal] = useState(false);

  const refOne = useRef(null);

  const toggleModal = useCallback(() => {
    setModal((modal) => !modal);
  }, []);

  const handleRangeChange = useCallback((ranges) => {
    setRange([ranges.selection]);
  }, []);

  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') {
      setModal(false);
    }
  }, []);

  const handleClickOutside = useCallback((e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setModal(false);
    }
  }, [refOne]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [handleEscape, handleClickOutside]);

  return (
    <div className="calendarWrap">
      <input
        value={`${format(range[0].startDate, 'dd/MMM')} - ${format(range[0].endDate, 'dd/MMM/yyyy')}`}
        readOnly
        className="inputBox"
        onClick={toggleModal}
      />

      <Modal isOpen={modal} toggle={toggleModal} ref={refOne}>
        <ModalBody>
          <DateRange
            onChange={handleRangeChange}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DateRangeComponent;