import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import toast, { Toast, Toaster } from "react-hot-toast";

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
      toast.success("Your rating has been submitted!");
      if (error) throw error;
    } catch (error) {
      alert("Error adding rating!");
      console.log(error);
    }
  }

  return (
    <div className="flex-row sm:flex justify-between items-center mx-auto max-w-6xl pt-20 pb-5">
      <Toaster />
      <h1 className="text-4xl font-bold text-center my-6">
        Submit a New Rating
      </h1>
      <div className="my-4">
        <label htmlFor="restaurant" className="font-semibold">
          Restaurant:
        </label>
        <input
          id="restaurant"
          type="text"
          className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => setRestaurant(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="date" className="font-semibold">
          Date:
        </label>
        <input
          id="date"
          type="date"
          className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="food" className="font-semibold">
          Food:
        </label>
        <input
          id="food"
          type="text"
          className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => setFood(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="beverage" className="font-semibold">
          Beverage:
        </label>
        <input
          id="beverage"
          type="text"
          className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => setBeverage(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="service" className="font-semibold">
          Service:
        </label>
        <input
          id="service"
          type="text"
          className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => setService(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="comfort" className="font-semibold">
          Comfort:
        </label>
        <input
          id="comfort"
          type="text"
          className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          onChange={(e) => setComfort(e.target.value)}
        />
      </div>
      <div className="my-4">
        <label htmlFor="vibe" className="font-semibold">
          Vibe:
        </label>
        <input
          id="vibe"
          type="text"
          className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 mt-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
