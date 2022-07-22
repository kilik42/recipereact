import React from 'react'
import styled from 'styled-components'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

const Recipe = () => {
  let params =- useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('Ingredients');

  const fetchDetails = async (req, res) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${req.params.id}/information?apiKey=${process.env.REACT_APP_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);

  }

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
  
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt="" />
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick ={()=> setActiveTab("instructions")} >Instructions</Button>

        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick ={()=> setActiveTab("ingredients")}>Ingredients</Button>

      </Info>
      </DetailWrapper>
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
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
`

const Button = styled.button`
  color: #313131;
  padding: 1rem 2rem;
  background: #white;'
  border: 2px solid black;
  margin: 2rem;
  fong-weight: 600;
  `
const Info = styled.div`
  margin-left: 10rem; 
  `
export default Recipe