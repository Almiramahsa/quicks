// InfoBlock.tsx
import React from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import CheckboxInput from './CheckboxInput';
import DatePicker from 'react-datepicker'; // Import DatePicker

interface InfoBlockProps {
  checkboxChecked: boolean;
  setCheckboxChecked: (checked: boolean) => void;
  datePickerRef: React.RefObject<DatePicker>; // Add datePickerRef prop
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  buttonText: string;
  onClick: () => void;
  daysRemaining?: number;
  description?: string;
}

const InfoBlock: React.FC<InfoBlockProps> = ({
  checkboxChecked,
  setCheckboxChecked,
  datePickerRef,
  selectedDate,
  setSelectedDate,
  buttonText,
  onClick,
  daysRemaining,
  description,
}) => {
  return (
    <div className="flex items-center">
      {/* CheckboxInput component */}
      <CheckboxInput checked={checkboxChecked} onChange={() => setCheckboxChecked(!checkboxChecked)} />

      {/* Other components */}
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
            <button className="border p-2 rounded-md text-base" onClick={onClick}>
              <div className="flex items-center">
                <span className="mr-2">{buttonText}</span>
                <Icon icon="formkit:date" color="#2f80ed" width="14" height="14" />
              </div>
            </button>

            {/* DatePicker component */}
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
          <h1 className={`text-base mt-2 text-quicks-primary-black ${description ? 'w-auto text-start' : ''}`}>
            {description || 'No Description'}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
