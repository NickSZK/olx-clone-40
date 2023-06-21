import styled from "styled-components";

export const Item = styled.div`
   width: 25%;

   a {
      display: block;
      border: 1px solid #C1C7E0;
      margin: 10px;
      text-decoration: none;
      padding: 10px;
      border-radius: 5px;
      color: #000;
      background-color: #C1C7E0;
      transition: all ease .2;

      &:hover {
         background-color: #EEE;
         border: 1px solid #CCC;
      }

      .itemImage img {
         width: 100%;
         border-radius: 5px;
      }

      .itemName {
         font-weight: bold;
      }
   }
`