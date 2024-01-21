import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Leaderboard() {
  const HARDCODED_DATA = [
    { name: "Aaaa", rating: 5.0, points: 456600, profile_picture: "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg" },
    { name: "Bbbb", rating: 4.5, points: 300565, profile_picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg/1200px-Wildlife_at_Maasai_Mara_%28Lion%29.jpg" },
    { name: "Cccc", rating: 2.3, points: 150460, profile_picture: "https://sdzsafaripark.org/sites/default/files/styles/landing_page_view_thumbnail/public/teaser_image/thumb-duiker-animal.jpg?h=2abc491a&itok=V3stzopC" },
    { name: "Dddd", rating: 1.2, points: 84090, profile_picture: "https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg" },
    { name: "Eeee", rating: 4.8, points: 356600, profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBagcssp4TteavgFnWzFBncyobYIf02I17Cg&usqp=CAU" }
  ];

  const [ listOfTopUsers, setListOfTopUsers ] = useState(HARDCODED_DATA);

  // useEffect(() => {
  //   Axios.get("").then(response => {
  //     setListOfTopUsers(response.data);
  //   });
  // }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ListGroup as="ol" numbered>
        {listOfTopUsers.map(user => {
          return (
            <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{user.name}</div>
                Rating: {user.rating} <br/>
                Points: {user.points} <br/>
                <img className="profile-photo" src={user.profile_picture} width="200px" height="fit-content" />
              </div>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
}
