import React from 'react'
import styled from 'styled-components'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const Recipe = () => {
  let params =- useParams();
  const [details, setDetails] = useState({});
  const fetchDetails = async (req, res) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${process.env.REACT_APP_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);

  }

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
  
    <div>{details.title}</div>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 10rem;
  display:flex;
  h2{
    margin-bottom: 2rem;
  }
  li{
    font-size: 1.5rem;
    line-height: 2rem;
  }
`

export default Recipe