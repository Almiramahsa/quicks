
const RandomDate = () => {
  const generateRandomDate = () => {
    const startTimestamp = new Date('2022-01-01').getTime();
    const endTimestamp = new Date('2022-12-31').getTime();
    const randomTimestamp = Math.floor(Math.random() * (endTimestamp - startTimestamp) + startTimestamp);
    const randomDate = new Date(randomTimestamp);

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const month = months[randomDate.getMonth()];
    const day = randomDate.getDate();
    const year = randomDate.getFullYear();
    const hours = randomDate.getHours();
    const minutes = randomDate.getMinutes();

    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    return `${month} ${formattedDay}, ${year} ${formattedHours}:${formattedMinutes}`;
  };

  const randomDateTime = generateRandomDate();

  return (
    <div>
      <p>{randomDateTime}</p>
    </div>
  );
};

export default RandomDate;
