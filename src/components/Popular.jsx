import React, { useEffect, useState} from 'react'
import styled from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
function Popular() {

const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    }, []);

    
    const getPopular = async() => {

            //local storage
            const check = localStorage.getItem("popular");
            if(check){
                setPopular(JSON.parse(check));

            } else{
                const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=10`);
                const data = await api.json();
                console.log(data.recipes);
                localStorage.setItem("popular", JSON.stringify(data.recipes));
                setPopular(data.recipes)
                // return data;
            }

        };


  return (
    <div>

                <Wrapper>
                    <h3>Popular Picks</h3>
                    <Splide 
                    options={{
                        perPage: 4,
                        arrows: false,
                        pagination: false,
                        drag: 'free',
                        gap: "5rem",
                    }}
                    >
                        {popular.map((recipe) => {
                            return (
                        <SplideSlide key={recipe.id}>  
                            <Card>
                                <div  >  
                                <img src={recipe.image} alt="recipe" />
                                 <Gradient/>
                                        <h3>{recipe.title}</h3>
                                        
                                        <p>{recipe.readyInMinutes} minutes</p>
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
            left: 3%;
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
        h3{
            position: absolute;
            z-index: 1;
            left: 5%;
            bottom: 2;
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

const Gradient = styled.div `
    position: absolute;
    z-index: 3;
    height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
  
  `
export default Popular