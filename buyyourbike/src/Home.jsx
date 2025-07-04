import React from "react";
import Navbar from "./components/Navbar";
import BikeCard from "./components/BikeCard";
import "./styles/Home.css";

const bikes = [
  {
    name: "Yamaha R15",
    price: "₹1.8 Lakh",
    image: "https://imgs.search.brave.com/SxCh6wOUr-DnKDWqSY_AYyFLogS0CldOAUVXfOFYkR8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tbGZp/Z2xudXhmZ3QuaS5v/cHRpbW9sZS5jb20v/Ukp2YWFYdy01SXFE/b20yRC93OmF1dG8v/aDphdXRvL3E6ZWNv/L2h0dHBzOi8vZHZy/bW90b3N5YW1haGEu/Y29tLmJyL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIzLzA2LzIw/MjVfMzYwX1IxNV9U/SVRBTklVTV9HUkVZ/LTE5MjctNzYweDU3/MC1jLWRlZmF1bHQu/cG5n",
  },
  {
    name: "Royal Enfield Classic",
    price: "₹2.1 Lakh",
    image: "https://imgs.search.brave.com/VIRKxCXSNloleZ84euuaIMCjyQxJEDtzM9gksVXWSog/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJhY3Rvcmp1/bmN0aW9uLmNvbS9o/YWx5Y29uX2JsYWNr/XzEwXzNlYWQ5MmU0/ZGUucG5nP2Zvcm1h/dD13ZWJwJnF1YWxp/dHk9NDA",
  },
  {
    name: "KTM Duke 390",
    price: "₹3.1 Lakh",
    image: "https://imgs.search.brave.com/STK09YoAv9iyRL21tuuSh5jMgPzLxTxCLS3QyNaR3CA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/a3RtaW5kaWEuY29t/Ly0vbWVkaWEvaW1h/Z2VzL2t0bS9ib29r/aW5nL2t0bS1wbmdz/LWFuZC13ZWJwcy9r/dG0tMjAwLWR1a2Uv/c2lsdmVyLW1ldGFs/bGljLWR1a2UtMjAw/LndlYnA",
  },
  {
    name: "Bajaj Pulsar N250",
    price: "₹1.49 Lakh",
    image: "https://imgs.search.brave.com/OqXO5-DwWTgXySN8YluIwCTQeM63ZhKTaKXo8K1XL50/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2FyYW5kYmlrZS5j/b20vX25leHQvaW1h/Z2U_dXJsPWh0dHBz/Oi8vaW1hZ2VzLmNh/cmFuZGJpa2UuY29t/L2Jpa2UtaW1hZ2Vz/L2NvbG9ycy9iYWph/ai9wdWxzYXItbjI1/MC9iYWphai1wdWxz/YXItbjI1MC1icm9v/a2x5bi1ibGFjay5w/bmc_dj0xNjU3NTM1/NTU4Jnc9NzUwJnE9/NzU",
  },
  {
    name: "Hero Xpulse 200",
    price: "₹1.45 Lakh",
    image: "https://imgs.search.brave.com/5ArlqZKzZeeMClA98_lHrQ9tNJrOW5yi8o_jY-eiC3I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2FyYW5kYmlrZS5j/b20vX25leHQvaW1h/Z2U_dXJsPWh0dHBz/Oi8vaW1hZ2VzLmNh/cmFuZGJpa2UuY29t/L2Jpa2UtaW1hZ2Vz/L2NvbG9ycy9oZXJv/L3hwdWxzZS0yMDAv/aGVyby14cHVsc2Ut/MjAwLXBlYXJsLWZh/ZGVsZXNzLXdoaXRl/LnBuZz92PTE1NTY3/Nzc3NDImdz03NTAm/cT03NQ",
  },
  {
    name: "TVS Apache RTR 160 4V",
    price: "₹1.35 Lakh",
    image: "https://imgs.search.brave.com/UJdy6dr8dwWEpQEdKX3rggSNPSB56t01W0ikiDjrS2c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJhY3Rvcmp1/bmN0aW9uLmNvbS8y/X1RWU19BcGFjaGVf/UlRSXzE2MF80X1Zf/MV83NDQyZDZiYzdm/LnBuZz9mb3JtYXQ9/d2VicCZxdWFsaXR5/PTQw",
  },
  {
    name: "Honda CB350",
    price: "₹2.15 Lakh",
    image: "https://imgs.search.brave.com/v4DI9UV2JlUI28v3JXaYjx2r22KLUVjb5vc5uN0sHEc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJhY3Rvcmp1/bmN0aW9uLmNvbS9Q/ZWFybF9JZ25lb3Vz/X0JsYWNrXzVfMDAw/NDMwYzdkMS5wbmc_/Zm9ybWF0PXdlYnAm/cXVhbGl0eT00MA",
  },
  {
    name: "Suzuki Gixxer SF",
    price: "₹1.40 Lakh",
    image: "https://imgs.search.brave.com/xl0jvD5C9U8O9ewTS28FoQQGvl48U6PTBMTYRgZBimQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdXp1/a2lzdi5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjQvMDQv/Z2l4eGVyLXNmLTI1/MC1zdXp1a2ktc3Yu/cG5n",
  },
  {
    name: "BMW G 310 R",
    price: "₹2.90 Lakh",
    image: "https://imgs.search.brave.com/orRt7V94uksFDRgJfpsXfx3JdnaEASncr88NK0HsEe4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2FyYW5kYmlrZS5j/b20vX25leHQvaW1h/Z2U_dXJsPWh0dHBz/Oi8vaW1hZ2VzLmNh/cmFuZGJpa2UuY29t/L2Jpa2UtaW1hZ2Vz/L2NvbG9ycy9ibXcv/Zy0zMTAtci9ibXct/Zy0zMTAtci1saW1l/c3RvbmUtbWV0YWxs/aWMtcmVkLnBuZz92/PTE2MDIxNjU0NDgm/dz03NTAmcT03NQ",
  },
  {
    name: "Kawasaki Ninja 300",
    price: "₹3.40 Lakh",
    image: "https://imgs.search.brave.com/vdT1rpB3IaOKDfCOxYC7oDggoES6HnVqexrkStEY1y4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudHJhY3Rvcmp1/bmN0aW9uLmNvbS9M/SU1FX0dSRUVOXzFf/YzM1YzQ3NTFmMC5w/bmc_Zm9ybWF0PXdl/YnAmcXVhbGl0eT00/MA",
  },
  {
    name: "Ducati Monster",
    price: "₹12.95 Lakh",
    image: "https://imgs.search.brave.com/27JoRSBZttHJ9UHfu2eSnZMSP68WbB4HyXUUpxuXn38/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hdXRv/LmhpbmR1c3RhbnRp/bWVzLmNvbS9fbmV4/dC9pbWFnZT91cmw9/aHR0cHM6Ly9pbWFn/ZXMuaGluZHVzdGFu/dGltZXMuY29tL2F1/dG8vaW1nLzIwMjMv/MTEvMjEvNDAweDIy/NS9Nb25zdGVyX0R1/Y2F0aV8xNzAwNTM3/NzI3MTQzXzE3MDA1/Mzc3MzI4OTgud2Vi/cCZ3PTM4NDAmcT03/NQ",
  },
  {
    name: "Harley Davidson X440",
    price: "₹2.40 Lakh",
    image: "https://imgs.search.brave.com/Te4x2WfdBz4fvaZgMeJ7YVrlKf7mqQjuVQGauLJ-c1U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzM3MHgyMDgvbi9j/dy9lYy8xNDU2NTUv/eDQ0MC1yaWdodC1z/aWRlLXZpZXctOC5w/bmc_aXNpZz0wJnE9/ODA",
  },
];

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="hero-section">
        <h1>Welcome to BuyYourBike Showroom</h1>
        <p>Your dream bike awaits here!</p>
      </header>

      <section className="bike-list">
        {bikes.map((bike, index) => (
          <BikeCard key={index} {...bike} />
        ))}
      </section>
    </>
  );
};

export default Home;
