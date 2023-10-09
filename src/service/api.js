import dayjs from 'dayjs';

const url =  "API_URL";

export  const searchFlights = async({ from , to, departDate , returnDate }) => {

    try {
        const response = await fetch(
          `${url}/search?from=${from}&to=${to}&departDate=${dayjs(
            departDate
          ).format('YYMMDD')}&returnDate=${dayjs(returnDate).format('YYMMDD')}`
        );
        if (response.status !== 200) {
          return { error: 'Failed to search', data: [] };
        }
        return { data: await response.json() };
      } catch (e) {
        console.log(e);
        return { error: 'Network error', data: [] };
      }
}

export const getAirportsData = async() =>  {
  try {
    const response = await fetch(`${url}/data/airports`);
    if(response.status !== 200) {
      return { error : 'Failed to get airport Data', data: [] };
    }
    return { data: await response.json() };
  }
  catch(err) {
    return { error: 'Network error', data: []};
  }


}