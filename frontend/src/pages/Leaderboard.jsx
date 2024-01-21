import React from "react";
import Navigation from "../components/Navigation";
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Leaderboard() {
  const HARDCODED_DATA = [
    { name: "Aaaa", rating: 5.0, points: 456600, profile_picture: "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg" },
    { name: "Bbbb", rating: 4.5, points: 300565, profile_picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg/1200px-Wildlife_at_Maasai_Mara_%28Lion%29.jpg" },
    { name: "Cccc", rating: 2.3, points: 150460, profile_picture: "https://sdzsafaripark.org/sites/default/files/styles/landing_page_view_thumbnail/public/teaser_image/thumb-duiker-animal.jpg?h=2abc491a&itok=V3stzopC" },
    { name: "Dddd", rating: 1.2, points: 84090, profile_picture: "https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg" },
    { name: "Eeee", rating: 4.8, points: 356600, profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBagcssp4TteavgFnWzFBncyobYIf02I17Cg&usqp=CAU" }
  ];

  const [listOfTopUsers, setListOfTopUsers] = useState(HARDCODED_DATA);

  // useEffect(() => {
  //   Axios.get("").then(response => {
  //     setListOfTopUsers(response.data);
  //   });
  // }, []);

  return (
    <>
      <Navigation></Navigation>
      <h1>Leaderboard</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Points</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {listOfTopUsers.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td className="fw-bold">{user.name}</td>
                <td>
                  <ProgressBar now={(user.rating * 100) / 5} />
                </td>
                <td>{user.points}</td>
                <td>
                  <img
                    className="profile-photo"
                    src={user.profile_picture}
                    width="fit-content"
                    height="50px"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
