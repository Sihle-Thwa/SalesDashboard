import { useState, useRef, useCallback, useEffect } from 'react';
import { DateRange } from 'react-date-range';

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

  const [open, setOpen] = useState(false);

  const refOne = useRef(null);

  const handleToggle = useCallback(() => {
    setOpen((open) => !open);
  }, []);

  const handleRangeChange = useCallback((ranges) => {
    setRange([ranges.selection]);
  }, []);

  const handleEscape = useCallback((e) => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  }, []);

  const handleClickOutside = useCallback((e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
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
        value={`${format(range[0].startDate, 'dd/MM/yyyy')} to ${format(range[0].endDate, 'dd/MM/yyyy')}`}
        readOnly
        className="inputBox"
        onClick={handleToggle}
      />

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={handleRangeChange}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
          />
        )}
      </div>
    </div>
  );
};

export default DateRangeComponent;