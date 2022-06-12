
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Axios from 'axios'
import {useState, useEffect} from 'react'
import { useSelector } from "react-redux";

const List = () => {


  const [list, setList] = useState([]);
  const id = useSelector((state) => state.login.id)

  useEffect(() => {
    Axios.get(`https://backend-nest-bdd.herokuapp.com/liked/get?idUser=${id}`)
            .then(res => {
                console.log(res.data.songs)
                setList(res.data.songs)
            })
  },[id])

  
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Song</TableCell>
            <TableCell className="tableCell">Artist</TableCell>
            <TableCell className="tableCell">Popularity</TableCell>
            <TableCell className="tableCell">Signature</TableCell>
            <TableCell className="tableCell">Track Spotify</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((song) => (
            <TableRow key={song.id}>
              <TableCell className="tableCell">{song.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src="https://source.unsplash.com/random" alt="Image Music" className="image" />
                  {song.track_name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{song.artist_name}</TableCell>
              <TableCell className="tableCell">{song.popularity}</TableCell>
              <TableCell className="tableCell">{song.time_signature}</TableCell>
              <TableCell className="tableCell">{song.track_id}</TableCell>
              <TableCell className="tableCell">
                <span className={`status Approved`}>Approved</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
