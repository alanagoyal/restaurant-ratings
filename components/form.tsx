import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";

export default function Form() {
  const [restaurant, setRestaurant] = useState<any>(null);
  const [date, setDate] = useState<any>(null);
  const [food, setFood] = useState<any>(null);
  const [beverage, setBeverage] = useState<any>(null);
  const [service, setService] = useState<any>(null);
  const [comfort, setComfort] = useState<any>(null);
  const [vibe, setVibe] = useState<any>(null);

  async function submitRating({
    restaurant,
    date,
    food,
    beverage,
    service,
    comfort,
    vibe,
  }: {
    restaurant: any;
    date: any;
    food: any;
    beverage: any;
    service: any;
    comfort: any;
    vibe: any;
  }) {
    try {
      const ratingInfo = {
        restaurant,
        date,
        food,
        beverage,
        service,
        comfort,
        vibe,
      };

      let { error } = await supabase.from("ratings").insert(ratingInfo);
      if (error) throw error;
    } catch (error) {
      alert("Error adding rating!");
      console.log(error);
    }
  }

  return (
    <div>
      <h1 className="text-5xl my-2 font-bold ">Submit a New Rating</h1>
      <div>
        <label htmlFor="restaurant">Restaurant: </label>
        <input
          id="restaurant"
          type="text"
          onChange={(e) => setRestaurant(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date: </label>
        <input
          className="py-2"
          id="date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="food">Food: </label>
        <input
          className="py-2"
          id="food"
          type="text"
          onChange={(e) => setFood(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="beverage">Beverage: </label>
        <input
          id="beverage"
          type="text"
          onChange={(e) => setBeverage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="service">Service: </label>
        <input
          id="service"
          type="text"
          onChange={(e) => setService(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="comfort">Comfort: </label>
        <input
          id="comfort"
          type="text"
          onChange={(e) => setComfort(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="vibe">Vibe: </label>
        <input
          id="vibe"
          type="text"
          onChange={(e) => setVibe(e.target.value)}
        />
      </div>
      <div>
        <button
          className="primary button block"
          onClick={() =>
            submitRating({
              restaurant,
              date,
              food,
              beverage,
              service,
              comfort,
              vibe,
            })
          }
        >
          Submit Rating
        </button>
      </div>
    </div>
  );
}
