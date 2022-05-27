import React, { useEffect, useState} from 'react'
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
function Popular() {


    useEffect(() => {
        getPopular();
    }, []);

    const [popular, setPopular] = React.useState([]);
    const getPopular = async() => {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=10&tags=vegetarian`)
            const data = await api.json();
            console.log(data);
            setPopular(data.recipes)
            // return data;

        }


  return (
    <div>
        
            
                <Wrapper>
                    <h3>Popular Picks</h3>
                    <Splide options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: "5rem",
                    }}>
                        {popular.map((recipe) => {
                            return (
                        <SplideSlide>
                            <Card>
                                <div className="card" key={recipe.id}>
                                    <img src={recipe.image} alt="recipe" />
                                    <div className="card-content">
                                        <h3>{recipe.title}</h3>
                                        <p>{recipe.readyInMinutes} minutes</p>
                                    </div>
                                </div>
                            </Card>
                        </SplideSlide>
                        );
                        })} 
                    </Splide>
                </Wrapper>
            
                        
        
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  
  
  `;

  const Card = styled.div`
        min-height: 25rem;
        border-radius: 2rem;
        overflow: hidden;
        position: relative;


        img{
            border-radius: 2rem;
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
        p{
            position: absolute;
            z-index: 1;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%, 0);
            color: white;
            width: 100%;
            text-align: center;
            font-weight: 600;
            font-size: 1rem;
            height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
  `;


export default Popular