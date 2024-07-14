import { useState } from "react";
import { Button, Table } from "react-daisyui";

type Data = string[];

export default function DataC({ data }: { data: Data[] }) {
    data = data.slice(1)
    // .. const [album, artist, cover, DurationMS, DurationStamp, playDate, relaseDate, songUri, trackName] = arr
const [content,setContent] = useState<any>(null)
    return <div>
        <div>
            <Button onClick={() => setContent(<TableOfIt data={data} />)}> Show Table</Button>
        </div>
        <div>
            {content}
        </div>
    </div>
}
function TableOfIt({ data: d }: { data: Data[] }) {
    const [data,setData] = useState(d);
    console.log(data)
return <>
<div>
{/* <Button>Filter By Artist</Button> */}
<Button onClick={() => setData(d)}>Reset Filter</Button>
</div>
<div className="overflow-x-auto">
<table className="table">
  {/* head */}
  <thead>
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <th>Album</th>
      <th>Artist</th>
      <th>Track Name</th>
      <th>Duration</th>
      <th>Uri</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
{data.map(d => {
    const [album, artist, cover, DurationMS, DurationStamp, playDate, relaseDate, songUri, trackName] = d
    return <>
        {/* row  */}
        <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      {/* @ts-ignore */}
      <td onClick={() => {
        // console.log(d, data.filter( i => i[2] == cover))
      setData(data.filter(i => i[2] == cover))
      }}>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={cover}
                alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
{album}
          </div>
        </div>
      </td>
      <td onClick={() => {
        // console.log(d, data.filter( i => i[2] == cover))
      setData(data.filter(i => i[1] == artist))
      }}>
        {artist}
      </td>
      <td onClick={() => {
        // console.log(d, data.filter( i => i[2] == cover))
      setData(data.filter(i => i[8] == trackName))
      }}>{trackName}</td>
      <th onClick={() => {
        // console.log(d, data.filter( i => i[2] == cover))
      setData(data.filter(i => i[4] == DurationStamp))
      }}>
{DurationStamp}
      </th>
      <th>
        <Button className="btn-secondary" onClick={e => window.open(songUri)}>Spotify Link</Button>
      </th>
    </tr>
    </>
})}
  </tbody>
  {/* foot */}
  {/* <tfoot>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Job</th>
      <th>Favorite Color</th>
      <th></th>
    </tr>
  </tfoot> */}
</table>
</div>
</>
}