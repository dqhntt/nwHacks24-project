import React from "react";
import Navigation from "../components/Navigation";
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Leaderboard() {
  const HARDCODED_DATA = [
    { name: "John Doe", rating: 5.0, points: 456600, profile_picture: "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg" },
    { name: "Jane Smith", rating: 4.5, points: 300565, profile_picture: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Wildlife_at_Maasai_Mara_%28Lion%29.jpg/1200px-Wildlife_at_Maasai_Mara_%28Lion%29.jpg" },
    { name: "Michael Johnson", rating: 2.3, points: 150460, profile_picture: "https://sdzsafaripark.org/sites/default/files/styles/landing_page_view_thumbnail/public/teaser_image/thumb-duiker-animal.jpg?h=2abc491a&itok=V3stzopC" },
    { name: "Emily Davis", rating: 1.2, points: 84090, profile_picture: "https://www.cbc.ca/kids/images/wild_and_wonderful_asian_animals_header_1140.jpg" },
    { name: "David Wilson", rating: 4.8, points: 356600, profile_picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBagcssp4TteavgFnWzFBncyobYIf02I17Cg&usqp=CAU" }
  ];

  const [ listOfTopUsers, setListOfTopUsers ] = useState(HARDCODED_DATA);

  // useEffect(() => {
  //   Axios.get("").then(response => {
  //     setListOfTopUsers(response.data);
  //   });
  // }, []);

  return (
    <>
      <Navigation></Navigation>
      <h1>Leaderboard</h1>
      <ListGroup as="ol" numbered>
        {listOfTopUsers.map(user => {
          return (
            <ListGroup.Item action as="li" className="d-flex justify-content-start">
              <ListGroup key='md' horizontal='md' className="my-2">
                <ListGroup.Item className="fw-bold">{user.name}</ListGroup.Item>
                <ListGroup.Item>Rating: {user.rating}</ListGroup.Item>
                <ListGroup.Item>Points: {user.points}</ListGroup.Item>
                <ListGroup.Item>
                  <img className="profile-photo" src={user.profile_picture} width="50px" height="fit-content" />
                </ListGroup.Item>
              </ListGroup>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </>
  );
}
