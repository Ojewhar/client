'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const DateRangePicker = ({ setfromDate, settoDate }) => {
  const [fromDate, setFromDate] = useState('');
  const [fromError, setFromError] = useState(false);
  const [toDate, setToDate] = useState('');
  const [toError, setToError] = useState(false);

  // Fetch default value from Redux store
  const defaultValue = useSelector(
    (state) => state.formOneCertificate.alldata[3]
  );

  useEffect(() => {
    if (defaultValue) {
      setfromDate(new Date(defaultValue.fromDate));
      settoDate(new Date(defaultValue.toDate));
    }
  }, [defaultValue]);

  // set the dates of today on page render
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    setFromDate(formattedDate);
    setToDate(formattedDate);
  }, []);

  // 'from' date change handle
  const handleFromChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const today = new Date();
    const yesterday = new Date(today);
    const tomorrow = new Date(today);

    yesterday.setDate(today.getDate() - 1);
    tomorrow.setDate(today.getDate() + 1);

    setFromDate(e.target.value);

    if (
      selectedDate.toISOString().slice(0, 10) !==
        today.toISOString().slice(0, 10) &&
      selectedDate.toISOString().slice(0, 10) !==
        yesterday.toISOString().slice(0, 10) &&
      selectedDate.toISOString().slice(0, 10) !==
        tomorrow.toISOString().slice(0, 10)
    ) {
      setFromError(true);
    } else {
      setfromDate(fromDate);
      settoDate(toDate);
      setFromError(false);
    }
  };

  // 'to' date change handle
  const handleToChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const fromDateObj = new Date(fromDate);
    const tomorrow = new Date(fromDateObj);
    tomorrow.setDate(fromDateObj.getDate() + 1);
    const threeDaysLater = new Date(fromDateObj);
    threeDaysLater.setDate(fromDateObj.getDate() + 3);

    setToDate(e.target.value);

    if (
      selectedDate.toISOString().slice(0, 10) !==
        tomorrow.toISOString().slice(0, 10) &&
      (selectedDate < fromDateObj || selectedDate > threeDaysLater)
    ) {
      setToError(true);
    } else {
      setToError(false);
      setfromDate(fromDate);
      settoDate(toDate);
    }
  };

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (fromError || toError) {
      alert('Please fill up the fields by fullfiling the conditions!');
    } else {
      console.log(fromDate, toDate);
      setfromDate(fromDate);
      settodate(toDate);
      alert('Form sent Successfully!');
    }
  };

  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div>
          {/* form */}
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            {/* from */}
            <div className="flex flex-col gap-1">
              <label htmlFor="from" className="font-medium">
                From
              </label>
              <input
                type="date"
                className="w-full p-4 rounded-md text-base border"
                value={fromDate}
                onChange={handleFromChange}
              />
              {fromError && (
                <p className="text-red-500 text-[12px] uppercase px-2 pt-1">
                  PLEASE SELECT A DATE THAT IS YESTERDAY, TODAY, OR TOMORROW.
                </p>
              )}
            </div>

            {/* to */}
            <div className="flex flex-col gap-1 mt-4">
              <label htmlFor="toDate" className="font-medium">
                To
              </label>
              <input
                type="date"
                id="toDate"
                className="w-full p-4 rounded-md text-base border"
                value={toDate}
                onChange={handleToChange}
              />
              {toError && (
                <p className="text-red-500 text-[12px] uppercase px-2 pt-1">
                  IMPORTANT: The amount of days you've selected exceeds the
                  average number of days Partner Doctors will typically provide
                  a consultation for. Your Doctor may, at their discretion,
                  request more information or determine a different outcome to
                  ensure proper care.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DateRangePicker;
