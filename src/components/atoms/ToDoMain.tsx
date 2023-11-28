import { Icon } from '@iconify/react/dist/iconify.js';
import format from 'date-fns/format';
import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import differenceInDays from 'date-fns/differenceInDays';
import CheckboxInput from './CheckboxInput';

interface ToDoMainProps {
  onClick: () => void;
  type: string;
}

const ToDoMain: React.FC<ToDoMainProps> = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const datePickerRef = useRef<DatePicker>(null);
  const [buttonText, setButtonText] = useState<string>('28/11/2023');
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null);
  const [checkboxChecked, setCheckboxChecked] = useState(true);

  const handleButtonClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }

    if (selectedDate) {
      setButtonText(format(selectedDate, 'dd/MM/yyyy'));

      const today = new Date();
      const daysRemaining = differenceInDays(selectedDate, today);
      setDaysRemaining(daysRemaining);
    }
  };

  return (
    <div className=" scroll-smooth">
      <div className="relative">
      <div className="flex items-start">
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <CheckboxInput checked={checkboxChecked} onChange={() => setCheckboxChecked(!checkboxChecked)} />
          </div>

          <div className="ml-4">
            <div className="flex items-center">
              <h1 className="mr-4 text-base text-quicks-primary-black font-lato_bold">
                Close of Case #012920-RODRIGUES, Amiguel
              </h1>
              {daysRemaining !== null && (
                <h1 className="mr-4 text-base text-quicks-indicator-red">{daysRemaining} Days Left</h1>
              )}
              <span className="mr-2 text-base">{buttonText}</span>
            </div>

            <div className="flex items-center">
              <h1 className="mr-4 pt-2">
                <Icon icon="mingcute:time-line" color="#2f80ed" width="14" height="14" />
              </h1>
              <div className="flex items-center">
                <button className="border p-2 rounded-md text-base" onClick={handleButtonClick}>
                  <div className="flex items-center">
                    <span className="mr-2">{buttonText}</span>
                    <Icon icon="formkit:date" color="#2f80ed" width="14" height="14" />
                  </div>
                </button>

                <DatePicker
                  className="text-white"
                  ref={datePickerRef}
                  selected={selectedDate}
                  onChange={(date: Date | null) => {
                    setSelectedDate(date || new Date());
                  }}
                  dateFormat="dd/MM/yyyy"
                  popperClassName="date-picker-popper"
                />
              </div>
            </div>

            <div className="flex items-center">
              <Icon className='mr-4 mt-2' icon="mdi:edit-outline" color="#2f80ed" width="12" height="12" />
              <h1 className='text-base mt-2 text-quicks-primary-black'>No Description</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex items-start mt-10">
          <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <CheckboxInput checked={checkboxChecked} onChange={() => setCheckboxChecked(!checkboxChecked)} />
          </div>

          <div className="ml-4">
            <div className="flex items-center">
              <h1 className="mr-4 text-start text-base text-quicks-primary-black font-lato_bold">
                Set up Documentation report for several Cases: Case 145443, Case 012920
              </h1>
              {daysRemaining !== null && (
                <h1 className="mr-4 text-base text-quicks-indicator-red">{daysRemaining} Days Left</h1>
              )}
              <span className="mr-2 text-base">{buttonText}</span>
            </div>

            <div className="flex items-center">
              <h1 className="mr-4 pt-2">
                <Icon icon="mingcute:time-line" color="#2f80ed" width="14" height="14" />
              </h1>
              <div className="flex items-center">
                <button className="border p-2 rounded-md text-base" onClick={handleButtonClick}>
                  <div className="flex items-center">
                    <span className="mr-2">{buttonText}</span>
                    <Icon icon="formkit:date" color="#2f80ed" width="14" height="14" />
                  </div>
                </button>

                <DatePicker
                  className="text-white"
                  ref={datePickerRef}
                  selected={selectedDate}
                  onChange={(date: Date | null) => {
                    setSelectedDate(date || new Date());
                  }}
                  dateFormat="dd/MM/yyyy"
                  popperClassName="date-picker-popper"
                />
              </div>
            </div>

            <div className="flex items-center">
              <Icon className='mr-4 mt-2' icon="mdi:edit-outline" color="#2f80ed" width="12" height="12" />
              <h1 className='text-base mt-2 text-quicks-primary-black'>No Description</h1>
            </div>
          </div>
        </div>
      </div>
      </div>

  );
};

export default ToDoMain;
