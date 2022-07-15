import Map from './Map';

export default function Result({ data, setData }) {

  console.log(data);
  const {continent,country,alpha_2, alpha_3, density,land_area,latitude , longitude, population } = data[0];

  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2 sm:flex-row">
      <div className="bg-white p-6 rounded-2xl shadow-2xl ">
      <Map latitude={latitude} longitude= {longitude} />
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-2xl mx-1">
        {/* <div className="flex flex-col items-center">   */}
      <table className='table-auto'>
          <tbody>
            <tr>
              <td className='border px-4 py-2 font-bold '>Continent</td>
              <td className='border px-4 py-2 '>{continent}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2 font-bold '>Country</td>
              <td className='border px-4 py-2'>{country}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2 font-bold '>Alpha 2</td>
              <td className='border px-4 py-2'>{alpha_2}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2 font-bold '>Alpha 3</td>
              <td className='border px-4 py-2'>{alpha_3}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2 font-bold '>Density</td>
              <td className='border px-4 py-2'>{density}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2 font-bold '>Land Area</td>
              <td className='border px-4 py-2'>{land_area}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2 font-bold '>Latitude</td>
              <td className='border px-4 py-2'>{latitude}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2 font-bold '>Longitude</td>
              <td className='border px-4 py-2'>{longitude}</td>
            </tr>
            <tr>
              <td className='border px-4 py-2 font-bold'>Population</td>
              <td className='border px-4 py-2'>{population}</td>
            </tr>
          </tbody>
        </table>

        <button onClick={
          () => {
            setData(null);
          }
        } className="mt-5
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">Back</button>
      </div>
    </div>
    // </div>
  );
}